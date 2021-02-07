import { DashboardActionTypes } from "./../redux/actionTypes";
const INITIAL_STATE: DashboardState = {
  allProductsCount: "",
  allUsersCount: "",
  loading: false,
};
interface Action {
  payload: any;
  type: string;
}
const AuthReducer = (
  state: DashboardState = INITIAL_STATE,
  action: Action
): DashboardState => {
  switch (action.type) {
    case DashboardActionTypes.GET_DASHBOARD_DATA_START: {
      return { ...state, loading: true };
    }
    case DashboardActionTypes.GET_DASHBOARD_DATA_SUCCESS: {
      return {
        ...state,
        allProductsCount: action.payload.allProductsCount,
        allUsersCount: action.payload.allUsersCount,
        loading: false,
      };
    }
    case DashboardActionTypes.GET_DASHBOARD_DATA_FAIL: {
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
export default AuthReducer;
