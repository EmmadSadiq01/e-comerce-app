import axios from "axios"
import { CART_ADD_ITEM } from "../constants/cartConstants"

const addToCart = (productId, orderQty) => async (dispatch, getState) => {
    const { data } = await axios.get("http://localhost/API/api-fetch-product-detail.php?id=" + productId)
    dispatch({
        type: CART_ADD_ITEM,
        payLoad: {
            id: data.map(x=>x.id),
            name: data.map(x=>x.name),
            img: data.map(x=>x.img),
            stock: data.map(x=>x.stock),
            orderQty
        }
    })
    console.log("data is "+data.map(x=>x.id))
}

export {addToCart}