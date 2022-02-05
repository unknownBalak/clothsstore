import React, { useEffect, useState } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../redux_store/action/productsAction";
import { getProductsWithId } from "../FetchedItems";





function ItemDetails({ productId, count }) {
  let dispatch = useDispatch();
  const [product, setProduct] = useState({});
  // console.log("This is nin ", productInfo);

  useEffect(() => {
    async function fetchProduct(productId) {
      let fetchedProduct = await getProductsWithId(productId);
      setProduct(fetchedProduct.data);
    }
    fetchProduct(productId);
  }, [productId]);

  // let { image, price, title, id } = productInfo;
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
          <img src={product?.image} alt={product?.title} />
        </div>
        <div className="item__button">
          <button onClick={() => decreaseProductQuantity(productId)}>-</button>
          {count}
          <button onClick={() => increaseProductQuantity(productId)}>+</button>
        </div>
      </div>
      <div className="item__right">
        <p>{product?.title}</p>
        <p>₹{product?.price}</p>
      </div>
    </div>
  );
}

export default ItemDetails;
