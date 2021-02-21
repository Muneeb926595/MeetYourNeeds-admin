import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'
import { Provider } from 'react-redux'

import MobileMainScreen from './@modules/MainScreen/MainScreen'
import Signup from './@modules/SignUp/Signup'
import Login from './@modules/Login/Login'
import Layout from './@layouts/Layout'
import store from './@store'
import './App.css'
import DashBoard from './@modules/DashBoard/DashBoard'
import Users from './@modules/Users/Users'
import Products from './@modules/Products/Products'
import ProductDetailspage from './@modules/Products/ProductDetailspage/ProductDetailspage'
import Orders from './@modules/Orders/Orders'
import OrderDetailspage from './@modules/Orders/OrderDetailsPage/OrderDetilspage'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <ToastContainer />
        <div className='background'></div>
        <Router>
          <Switch>
            <Route exact path='/' component={MobileMainScreen} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Layout>
              <Route exact path='/dashboard' component={DashBoard} />
              <Route exact path='/users' component={Users} />
              <Route exact path='/products' component={Products} />
              <Route exact path='/orders' component={Orders} />
              <Route
                exact
                path='/product-details'
                component={ProductDetailspage}
              />
              <Route exact path='/order-details' component={OrderDetailspage} />
            </Layout>
          </Switch>
        </Router>
      </div>
    </Provider>
  )
}

export default App
