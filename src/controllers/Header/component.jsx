import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
function countProduct(product) {
  let count = 0;
  product.forEach((element) => {
    count += element.count;
  });
  return count;
}

function Header() {
  let store = useSelector((state) => state).productCart;
  return (
    <div className="header">
      <div className="header__subcontainer">
        <div></div>
        <div className="header__cart">
          🛒<span className="product__count"> ({countProduct(store)})</span>{" "}
        </div>
      </div>
    </div>
  );
}

export default Header;
