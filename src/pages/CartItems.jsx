
const CartItems = (props) => {
    return (
        <div className="card">
            <p>Name : {props.name}</p>
            <p>Price : {props.price}</p>
            <p>QTty : {props.qty}</p>
        </div>
    )
}

export default CartItems
