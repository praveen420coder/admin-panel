import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import userReducer from "./user.reducers";
import productsReducer from "./product.reducers";
import orderReducer from "./order.reducers";
import categoryReducer from "./category.reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  category: categoryReducer,
  products: productsReducer,
  order: orderReducer,
});

export default rootReducer;
