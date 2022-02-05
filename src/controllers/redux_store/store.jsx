import { createStore } from "redux";
import counterReducer from "./reducer/productReducer";
let store = createStore(counterReducer);
export default store;
