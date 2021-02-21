import { OrderActionTypes } from '../redux/actionTypes'
const INITIAL_STATE: OrderState = {
  orders: [],
  loading: false,
}
interface Action {
  payload: any
  type: string
}
const OrderReducer = (
  state: OrderState = INITIAL_STATE,
  action: Action
): OrderState => {
  switch (action.type) {
    case OrderActionTypes.GET_ORDERS_DATA_START: {
      return { ...state, loading: true }
    }
    case OrderActionTypes.GET_ORDERS_DATA_SUCCESS: {
      return {
        ...state,
        orders: action.payload,
        loading: false,
      }
    }
    case OrderActionTypes.GET_ORDERS_DATA_FAIL: {
      return {
        ...state,
        loading: false,
      }
    }
    case OrderActionTypes.DELETE_ORDER_START: {
      return { ...state, loading: true }
    }
    case OrderActionTypes.DELETE_ORDER_SUCCESS: {
      return {
        ...state,
        loading: false,
      }
    }
    case OrderActionTypes.DELETE_ORDER_FAIL: {
      return {
        ...state,
        loading: false,
      }
    }
    case OrderActionTypes.DELETE_ORDER_LOCALLY: {
      const tempCartProducts = state.orders.filter(
        (singleOrder) =>
          singleOrder._id.toString() !== action.payload.toString()
      )
      return {
        ...state,
        orders: tempCartProducts,
        loading: false,
      }
    }
    default: {
      return state
    }
  }
}
export default OrderReducer
