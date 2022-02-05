import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux_store/action/productsAction";
import "./styles.css";
import { useState } from "react";

export default function Cart() {
  const { products, productCart } = useSelector((state) => state);
  const product = products;
  let { productId } = useParams();

  const getProduct = product[productId - 1];
  const { image, title, description, price, rating, id } = getProduct;

  const [isPresent, setPresent] = useState(false);
  console.log("This is id", productCart);

  const dispatch = useDispatch();

  useState(() => {
    let obj = productCart.find((item) => item.id === id);
    if (obj) setPresent(true);
    else setPresent(false);
  }, [id]);

  function addToCartItem(id) {
    dispatch(increment(id));
    setPresent(true);
  }

  function addItemToCart(id) {
    !isPresent && dispatch(increment(id));
  }

  // console.log(getProduct);
  return (
    <div className="product_details">
      <div className="left_product_details">
        <img src={image} alt={title} />
        <div className="card__button">
          {!isPresent ? (
            <button
              className="addToCart_button"
              onClick={() => addToCartItem(id)}
            >
              Add To Cart
            </button>
          ) : (
            <Link to="/cart">
              <button className="addToCart_button">Go to Cart</button>
            </Link>
          )}
          <Link to="/cart">
            <button onClick={() => addItemToCart(id)} className="buyNow_button">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
      <div className="right_product_details">
        <div className="title">{title}:</div>
        <div className="price">
          <span className="rupee">₹</span>
          {price}
        </div>
        <div className="rating">
          {rating.rate} <span className="start_icon">★</span>
        </div>
        <div className="description">
          <h4>Product Details:</h4>
          <div className="description"> {description}</div>
        </div>
      </div>
    </div>
  );
}
