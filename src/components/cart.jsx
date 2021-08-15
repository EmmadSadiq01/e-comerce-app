const Cart = (props)=>{
    const qty = props.location.search ? props.location.search.split('=')[1] : 1
    return (
        <>
        <h1>Product = {props.match.params.id}</h1>
        <h1>Qty = {qty}</h1>
        </>
    )
}
export default Cart;