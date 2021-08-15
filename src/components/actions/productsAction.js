import axios from "axios";
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_FAIL } from "../constants/productConstants";

const listProducts = () => async (dispatch) => {
    try {

        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data } = await axios.get("http://localhost/API/api-fetch.php");
        dispatch({ type: PRODUCT_LIST_SUCCESS, payLoad: data })
    }
    catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payLoad: error.message })
    }
}
const getProductDetail = (productID) => async (dispatch) => {
    try {

        dispatch({ type: PRODUCT_DETAIL_REQUEST, payLoad: productID })

        const { data } = await axios.get("http://localhost/API/api-fetch-product-detail.php?id=" + productID)
        dispatch({ type: PRODUCT_DETAIL_SUCCESS, payLoad: data })
    }
    catch (error) {
        dispatch({ type: PRODUCT_DETAIL_FAIL, payLoad: error.message })
    }
}

export { listProducts, getProductDetail }