import {
  getProductDataUrl,
  deleteProductUrl,
  getProductByIdUrl,
} from "../../@api/Endpoint";
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

export const getProductById = (id) => {
  return (dispatch) => {
    dispatch({
      type: ProductsActionTypes.GET_PRODUCT_BY_ID_START,
    });
    const url = getProductByIdUrl(id);
    axios
      .get(url)
      .then((res) => {
        let { data } = res;
        if (data) {
          getProductByIdSuccess(dispatch, data);
        } else {
          getProductByIdFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        console.log(error.message);
        getProductByIdFail(dispatch, "There was an error connection2");
      });
  };
};
const getProductByIdFail = (dispatch, errorMessage) => {
  console.log(errorMessage);
  dispatch({
    type: ProductsActionTypes.GET_PRODUCT_BY_ID_FAIL,
    payload: {
      errorMessage,
    },
  });
};
const getProductByIdSuccess = (dispatch, data) => {
  dispatch({
    type: ProductsActionTypes.GET_PRODUCT_BY_ID_SUCCESS,
    payload: data,
  });
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    dispatch({
      type: ProductsActionTypes.DELETE_PRODUCT_START,
    });
    const url = deleteProductUrl(id);
    axios
      .delete(url)
      .then((res) => {
        let { data } = res;
        if (data) {
          deleteProductSuccess(dispatch, data);
        } else {
          deleteProductFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        console.log(error.message);
        deleteProductFail(dispatch, "There was an error connection2");
      });
  };
};
const deleteProductFail = (dispatch, errorMessage) => {
  console.log(errorMessage);
  dispatch({
    type: ProductsActionTypes.DELETE_PRODUCT_FAIL,
    payload: {
      errorMessage,
    },
  });
};
const deleteProductSuccess = (dispatch, data) => {
  dispatch({
    type: ProductsActionTypes.DELETE_PRODUCT_SUCCESS,
    payload: data,
  });
  dispatch(getProductData());
};
