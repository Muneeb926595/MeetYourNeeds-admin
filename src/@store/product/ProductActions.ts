import { getProductDataUrl } from "../../@api/Endpoint";
import { axiosInstance as axios } from "../../@api/axios";
import { ProductsActionTypes } from "../redux/actionTypes";

export const getProductData = () => {
  return (dispatch) => {
    dispatch({
      type: ProductsActionTypes.GET_PRODUCTS_DATA_START,
    });
    const url = getProductDataUrl();
    axios
      .get(url)
      .then((res) => {
        let { data } = res;
        if (data) {
          getProductDataSuccess(dispatch, data);
        } else {
          getProductDataFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        console.log(error.message);
        getProductDataFail(dispatch, "There was an error connection2");
      });
  };
};
const getProductDataFail = (dispatch, errorMessage) => {
  console.log(errorMessage);
  dispatch({
    type: ProductsActionTypes.GET_PRODUCTS_DATA_FAIL,
    payload: {
      errorMessage,
    },
  });
};
const getProductDataSuccess = (dispatch, data) => {
  dispatch({
    type: ProductsActionTypes.GET_PRODUCTS_DATA_SUCCESS,
    payload: data,
  });
};
