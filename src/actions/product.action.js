import axiosIntance from "../helpers/axios";
import { productConstants } from "./constants";

export const addProduct = (form) => {
  return async (dispatch) => {
    const res = await axiosIntance.post("/product/create", form);
    console.log(res);
  };
};
