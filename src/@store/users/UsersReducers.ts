import { UsersActionTypes } from "./../redux/actionTypes";
const INITIAL_STATE: UserState = {
  users: [],
  loading: false,
};
interface Action {
  payload: any;
  type: string;
}
const UsersReducer = (
  state: UserState = INITIAL_STATE,
  action: Action
): UserState => {
  switch (action.type) {
    case UsersActionTypes.GET_USERS_DATA_START: {
      return { ...state, loading: true };
    }
    case UsersActionTypes.GET_USERS_DATA_SUCCESS: {
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    }
    case UsersActionTypes.GET_USERS_DATA_FAIL: {
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
export default UsersReducer;
