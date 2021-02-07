export const BASE = "api end point";

export const loginUserUrl = () => {
  return encodeURI("dashboard/auth/login");
};
export const registerUserUrl = () => {
  return encodeURI("dashboard/auth/user");
};
export const getUsersUrl = () => {
  return encodeURI("dashboard/auth/user");
};
export const getDashboardDataUrl = () => {
  return encodeURI("dashboard/data");
};
export const getUsersDataUrl = () => {
  return encodeURI("dashboard/users-data");
};
export const getProductDataUrl = () => {
  return encodeURI("dashboard/products-data");
};
