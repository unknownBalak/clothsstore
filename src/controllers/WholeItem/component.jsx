import React from "react";
import { useSelector } from "react-redux";
import ItemDetails from "./ItemDetails";
import "./styles.css";
import { checkout } from "../redux_store/action/productsAction";
function findTotal(productCart, products) {
  let sum = 0;
  productCart.forEach(
    (item) => (sum += item.count * products[item.id - 1]?.price)
  );
  sum = sum.toFixed(2);
  return sum;
}

function TotalProducts() {
  const { productCart, products } = useSelector((state) => state);
  console.log(productCart);
  window.productCart = productCart;
  window.products = products;
  const totalAmount = findTotal(productCart, products);
  return (
    <div className="user__cart">
      <div className="left__Cart" style={{ width: "50%" }}>
        {productCart.length > 0 ? (
          productCart.map((item, index) => {
            return (
              <ItemDetails
                key={index}
                count={item.count}
                productInfo={products[item.id - 1]}
              />
            );
          })
        ) : (
          <h3 style={{ textAlign: "center" }}>No Item in Carts</h3>
        )}
      </div>
      <div className="right__Cart">
        <div>
          <div>Total </div> <div className="cart__price"> ₹ {totalAmount} </div>
        </div>
        <div>
          <div>Discount </div> <div> {0} </div>
        </div>
        <div>
          <div>Total </div> <div className="cart__price"> ₹ {totalAmount} </div>
        </div>
        <button onClick={checkout}>checkout Product</button>
      </div>
    </div>
  );
}

export default TotalProducts;
