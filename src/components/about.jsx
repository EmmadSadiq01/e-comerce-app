import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "./actions/productsAction";

const About = () => {

    const product_list = useSelector(state => state.product_list)
    const {loading, products, error} = product_list

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts())
    }, [])
    return (
        loading ? <div>loading...</div> :
            error ? <div>{error}</div> :
               <div>
                   {
                       products.map(d=>console.log(d))
                   }
               </div>
    )
}
export default About;