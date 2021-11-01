import {
  initialDataConstants,
  categoryConstansts,
  productConstants,
  orderConstants,
} from "./constants";
import axiosIntance from "../helpers/axios";

export const getInitialData = () => {
  return async (dispatch) => {
    const res = await axiosIntance.post(`/initialData`);
    if (res.status === 200) {
      const { categories, products, orders } = res.data;
      dispatch({
        type: categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
        payload: { categories },
      });
      dispatch({
        type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
        payload: { products },
      });
    }
    console.log(res);
  };
};
