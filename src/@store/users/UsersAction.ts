import { getUsersDataUrl } from "../../@api/Endpoint";
import { axiosInstance as axios } from "../../@api/axios";
import { UsersActionTypes } from "../redux/actionTypes";

export const getUsersData = () => {
  return (dispatch) => {
    dispatch({
      type: UsersActionTypes.GET_USERS_DATA_START,
    });
    const url = getUsersDataUrl();
    axios
      .get(url)
      .then((res) => {
        let { data } = res;
        if (data) {
          getUsersDataSuccess(dispatch, data);
        } else {
          getUsersDataFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        console.log(error.message);
        getUsersDataFail(dispatch, "There was an error connection2");
      });
  };
};
const getUsersDataFail = (dispatch, errorMessage) => {
  console.log(errorMessage);
  dispatch({
    type: UsersActionTypes.GET_USERS_DATA_FAIL,
    payload: {
      errorMessage,
    },
  });
};
const getUsersDataSuccess = (dispatch, data) => {
  dispatch({
    type: UsersActionTypes.GET_USERS_DATA_SUCCESS,
    payload: data,
  });
};
