import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../redux_store/action/productsAction";
function ItemDetails({ productInfo, count }) {
  let dispatch = useDispatch();

  // console.log("This is nin ", productInfo);
  let { image, price, title, id } = productInfo;
  function increaseProductQuantity(id) {
    dispatch(increment(id));
  }
  function decreaseProductQuantity(id) {
    dispatch(decrement(id));
  }
  return (
    <div className="item__details">
      <div className="item__left">
        <div className="item_left__img">
          <img src={image} alt={title} />
        </div>
        <div className="item__button">
          <button onClick={() => decreaseProductQuantity(id)}>-</button>
          {count}
          <button onClick={() => increaseProductQuantity(id)}>+</button>
        </div>
      </div>
      <div className="item__right">
        <p>{title}</p>
        <p>₹{price}</p>
      </div>
    </div>
  );
}

export default ItemDetails;
