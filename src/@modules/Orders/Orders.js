import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import classes from './Orders.module.css'
import Loader from '../../@components/Loader/Loader'
import { getOrdersData } from '../../@store/order/OrderActions'
import OrdersTable from './Tabel/Tabel'

const Orders = () => {
  const dispatch = useDispatch()

  const dataLoading = useSelector(
    ({ MeedYourNeeds }) => MeedYourNeeds.orders.loading
  )
  const allOrderssData = useSelector(
    ({ MeedYourNeeds }) => MeedYourNeeds.orders.orders
  )

  useEffect(() => {
    dispatch(getOrdersData())
  }, [dispatch])

  return (
    <>
      {dataLoading ? (
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
          }}
        >
          <Loader />
        </div>
      ) : (
        <div className={classes.ordersContainer}>
          <p className={classes.sectionTitle}>Orders</p>
          <OrdersTable data={allOrderssData} />
        </div>
      )}
    </>
  )
}

export default Orders
