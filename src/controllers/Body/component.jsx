// https://fakestoreapi.com/products

import React, { useEffect } from "react";
import Card from "../cards/component";
import { getProducts } from "../FetchedItems";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux_store/action/productsAction";
import { updateProductWithItsCount } from "./helperMethods";
export default function Body() {
  let dispatch = useDispatch();
  let { products, productCart } = useSelector((state) => state);
  // sessionStorage.setItem("productCart", JSON.stringify(productCart));
  useEffect(() => {
    async function fetchData() {
      let products = await getProducts();
      dispatch(setProducts(products.data));
    }
    fetchData();
  }, [dispatch]);
  const updatedProductWithCount = updateProductWithItsCount(
    products,
    productCart
  );
  return (
    <div className="product__container flex-function">
      <div className="product__subcontainer flex-function">
        {updatedProductWithCount.map((item, index) => (
          <Card
            item={item}
            id={index + 1}
            key={Math.random() * products.length + index}
          />
        ))}
      </div>
    </div>
  );
}
