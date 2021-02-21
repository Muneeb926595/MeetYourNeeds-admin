import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getDashboardData } from '../../@store/dashboard/DashboardActions'
import DashboardCard from '../../@components/DasboardCard/DashboardCard'
import classes from './DashBoard.module.css'
import Loader from '../../@components/Loader/Loader'

function DashBoard() {
  const dispatch = useDispatch()

  const dataLoading = useSelector(
    ({ MeedYourNeeds }) => MeedYourNeeds.dashboard.loading
  )
  const allUsersCount = useSelector(
    ({ MeedYourNeeds }) => MeedYourNeeds.dashboard.allUsersCount
  )
  const allProductsCount = useSelector(
    ({ MeedYourNeeds }) => MeedYourNeeds.dashboard.allProductsCount
  )
  const allOrdersCount = useSelector(
    ({ MeedYourNeeds }) => MeedYourNeeds.dashboard.allOrdersCount
  )

  useEffect(() => {
    dispatch(getDashboardData())
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
        <div className={classes.dashBoardContainer}>
          <p className={classes.sectionTitle}>Dashboard</p>
          <div className={classes.cardsContainer}>
            <DashboardCard
              to='/users'
              headerTitle='No of Users'
              count={allUsersCount ? allUsersCount : 0}
            />
            <DashboardCard
              to='/products'
              headerTitle='No of Products'
              count={allProductsCount ? allProductsCount : 0}
            />
            <DashboardCard
              to='/orders'
              headerTitle='No of Orders'
              count={allOrdersCount ? allOrdersCount : 0}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default DashBoard
