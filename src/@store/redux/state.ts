import { User } from "../../@models/User";
import { Product } from "../../@models/Product";

export {};
declare global {
  interface AuthState {
    user: User;
    loading?: boolean;
  }
  interface DashboardState {
    allUsersCount: String;
    allProductsCount: String;
    loading?: boolean;
  }
  interface UserState {
    users: any[];
    loading?: boolean;
  }
  interface ProductState {
    products: any[];
    loading?: boolean;
  }
}
