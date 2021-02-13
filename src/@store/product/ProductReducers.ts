import { ProductsActionTypes } from "../redux/actionTypes";
const INITIAL_STATE: ProductState = {
  products: [],
  loading: false,
};
interface Action {
  payload: any;
  type: string;
}
const ProductReducer = (
  state: ProductState = INITIAL_STATE,
  action: Action
): ProductState => {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS_DATA_START: {
      return { ...state, loading: true };
    }
    case ProductsActionTypes.GET_PRODUCTS_DATA_SUCCESS: {
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    }
    case ProductsActionTypes.GET_PRODUCTS_DATA_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case ProductsActionTypes.GET_PRODUCT_BY_ID_START: {
      return { ...state, loading: true };
    }
    case ProductsActionTypes.GET_PRODUCT_BY_ID_SUCCESS: {
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    }
    case ProductsActionTypes.GET_PRODUCT_BY_ID_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case ProductsActionTypes.DELETE_PRODUCT_START: {
      return { ...state, loading: true };
    }
    case ProductsActionTypes.DELETE_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case ProductsActionTypes.DELETE_PRODUCT_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
export default ProductReducer;
