import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants"

const addToCart = (productId, orderQty) => async (dispatch, getState) => {
    const { data } = await axios.get("http://localhost/API/api-fetch-product-detail.php?id=" + productId)
    const { getCartItems: { cartItems } } = getState();
    dispatch({
        type: CART_ADD_ITEM,
        payLoad: {
            id: data[0].id,
            name: data[0].name,
            img: data[0].img,
            price: data[0].price,
            stock: data[0].stock,
            orderQty
        }
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().getCartItems.cartItems));
}
const removeFromCart = (productId) => async (dispatch) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payLoad : productId
    })
}

export { addToCart,removeFromCart }