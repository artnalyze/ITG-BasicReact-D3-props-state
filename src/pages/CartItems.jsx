const CartItems = (props) => {
  return (
    <div className="card">
      <img src={props.imgurl} className="card-img-top" alt=""  />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.price} THB</p>
        <p className="card-text">{props.qty} items</p>
      </div>
    </div>
  );
};

export default CartItems;
