import { getDashboardDataUrl } from '../../@api/Endpoint'
import { axiosInstance as axios } from '../../@api/axios'
import { DashboardActionTypes } from '../redux/actionTypes'

export const getDashboardData = () => {
  return (dispatch) => {
    dispatch({
      type: DashboardActionTypes.GET_DASHBOARD_DATA_START,
    })
    const url = getDashboardDataUrl()
    axios
      .get(url)
      .then((res) => {
        let { data } = res
        if (data) {
          getDashboardDataSuccess(dispatch, data)
        } else {
          getDashboardDataFail(dispatch, 'There was an error connection')
        }
      })
      .catch((error) => {
        console.log(error.message)
        getDashboardDataFail(dispatch, 'There was an error connection2')
      })
  }
}
const getDashboardDataFail = (dispatch, errorMessage) => {
  console.log(errorMessage)
  dispatch({
    type: DashboardActionTypes.GET_DASHBOARD_DATA_FAIL,
    payload: {
      errorMessage,
    },
  })
}
const getDashboardDataSuccess = (dispatch, data) => {
  dispatch({
    type: DashboardActionTypes.GET_DASHBOARD_DATA_SUCCESS,
    payload: data,
  })
}
