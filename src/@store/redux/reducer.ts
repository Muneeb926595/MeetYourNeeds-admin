import { combineReducers } from 'redux'

import auth from '../auth/AuthReducers'
import dashboard from '../dashboard/DashboardReducers'
import users from '../users/UsersReducers'
import products from '../product/ProductReducers'
import orders from '../order/OrderReducers'

const MeedYourNeeds = combineReducers({
  auth,
  dashboard,
  users,
  products,
  orders,
})

export default MeedYourNeeds
