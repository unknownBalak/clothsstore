import axios from "axios";
export async function getProducts() {
  //   let dispatch = useDispatch();
  let url = `https://fakestoreapi.com/products`;
  const products = await axios.get(url).catch((err) => console.log(err));
  return products;
}
export async function getProductsWithId(id) {
  //   let dispatch = useDispatch();
  let url = `https://fakestoreapi.com/products/${id}`;
  const products = await axios.get(url).catch((err) => console.log(err));
  return products;
}
