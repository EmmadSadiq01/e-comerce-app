import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "./actions/cartAction"

const Cart = (props) => {
    const qty = props.location.search ? props.location.search.split('=')[1] : 1
    const item_id = props.match.params.id

    const getCartItems = useSelector(state => state.getCartItems)
    const { cartItems } = getCartItems
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(addToCart(item_id, qty))
    }, [dispatch, item_id, qty])
    return (
        <>
            <div className="cart_wrapper">
                {
                    cartItems.length === 0 ? ("Not elemet present") :
                        (
                            <div className="row">
                                <div className="col-8">
                                    <ul>
                                        {
                                            cartItems.map((item, k) => {
                                                return (
                                                    <li key={k}>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="productImg">
                                                                    <img src={item.img} alt="*" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="productPrice">
                                                                    <p>{item.price}</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="productQty">
                                                                    <input type="number" maxLength={item.stock} value={item.orderQty} onChange={(e) => dispatch(addToCart(item.id, e.target.value))} />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="totalPrice">
                                                                    <p>{item.price * item.orderQty}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <div className="subTotal">
                                        <p>Total Item : {cartItems.reduce((a,c) => a + c.qty,0)}</p>
                                        <p>Total price : {cartItems.reduce((a,c) => a + c.qty*c.price,0)}</p>
                                    </div>
                                </div>
                            </div>

                        )
                }
            </div>
        </>
    )
}
export default Cart;