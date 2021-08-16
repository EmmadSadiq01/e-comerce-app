import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "./actions/cartAction"

const Cart = (props) => {
    const qty = props.location.search ? props.location.search.split('=')[1] : 1
    const item_id = props.match.params.id
    // const getCartItems = useSelector(state => state.getCartItems)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(addToCart(item_id, qty))
    }, [])
    return (
        <>
            <h1>Product = {props.match.params.id}</h1>
            <h1>Qty = {qty}</h1>
        </>
    )
}
export default Cart;