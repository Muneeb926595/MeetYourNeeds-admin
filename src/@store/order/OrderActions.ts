import { getOrdersUrl, getRemoveOrdersUrl } from '../../@api/Endpoint'
import { axiosInstance as axios } from '../../@api/axios'
import { OrderActionTypes } from '../redux/actionTypes'

export const getOrdersData = () => {
  return (dispatch) => {
    dispatch({
      type: OrderActionTypes.GET_ORDERS_DATA_START,
    })
    const url = getOrdersUrl()
    axios
      .get(url)
      .then((res) => {
        let { data } = res
        if (data) {
          getOrdersDataSuccess(dispatch, data)
        } else {
          getOrdersDataFail(dispatch, 'There was an error connection')
        }
      })
      .catch((error) => {
        console.log(error.message)
        getOrdersDataFail(dispatch, 'There was an error connection2')
      })
  }
}
const getOrdersDataFail = (dispatch, errorMessage) => {
  console.log(errorMessage)
  dispatch({
    type: OrderActionTypes.GET_ORDERS_DATA_FAIL,
    payload: {
      errorMessage,
    },
  })
}
const getOrdersDataSuccess = (dispatch, data) => {
  dispatch({
    type: OrderActionTypes.GET_ORDERS_DATA_SUCCESS,
    payload: data,
  })
}

export const removeOrder = (id) => {
  return (dispatch) => {
    dispatch({
      type: OrderActionTypes.DELETE_ORDER_START,
    })
    const url = getRemoveOrdersUrl(id)
    axios
      .delete(url)
      .then((res) => {
        let { data } = res
        if (data) {
          removeOrderSuccess(dispatch, data)
        } else {
          removeOrderFail(dispatch, 'There was an error connection')
        }
      })
      .catch((error) => {
        console.log(error.message)
        removeOrderFail(dispatch, 'There was an error connection2')
      })
  }
}
const removeOrderFail = (dispatch, errorMessage) => {
  console.log(errorMessage)
  dispatch({
    type: OrderActionTypes.DELETE_ORDER_FAIL,
    payload: {
      errorMessage,
    },
  })
}
const removeOrderSuccess = (dispatch, data) => {
  dispatch({
    type: OrderActionTypes.DELETE_ORDER_SUCCESS,
    payload: data,
  })
}
export const removeOrderLocally = (orderId) => {
  return (dispatch) => {
    dispatch({
      type: OrderActionTypes.DELETE_ORDER_LOCALLY,
      payload: orderId,
    })
  }
}
