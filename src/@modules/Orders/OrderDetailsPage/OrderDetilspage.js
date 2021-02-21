import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getLastPostDuration } from '../../../@helpers/timeDateUtils'
import ProductRow from './components/ProductRow'

import classes from './OrderDetailsPage.module.css'

const OrderDetailspage = (props) => {
  const [subtotal, setSubtotal] = useState(0)
  const { products, paymentMethod, createdAt, createdBy } =
    (props.location && props.location.state) || {}

  useEffect(() => {
    let tempSubtotal = 0
    products?.length > 0 &&
      products.map((product) => {
        tempSubtotal += parseInt(product.price)
      })
    setSubtotal(tempSubtotal)
  }, [products])

  return (
    <div className={classes.orderDetailspage}>
      <div className={classes.leftSide}>
        <p className={classes.title}>
          Products<span className={classes.data}></span>
        </p>
        {products?.length > 0 &&
          products.map((singleProduct) => (
            <ProductRow
              productImage={singleProduct.image}
              productName={singleProduct.title}
              price={singleProduct.price}
            />
          ))}
      </div>
      <div className={classes.rightSide}>
        <p className={classes.title}>
          Order Details<span className={classes.data}></span>
        </p>
        <p className={classes.dataRow}>
          Payment Method:
          <span className={classes.data}>{paymentMethod}</span>
        </p>
        <p className={classes.dataRow}>
          Nof Of Products:
          <span className={classes.data}>{products?.length}</span>
        </p>
        <p className={classes.dataRow}>
          Subtotal:
          <span className={classes.data}>Rs. {subtotal}</span>
        </p>
        <p className={classes.dataRow}>
          Order Created By:
          <span className={classes.data}>{createdBy}</span>
        </p>
        <p className={classes.dataRow}>
          Order Created At:
          <span className={classes.data}>{getLastPostDuration(createdAt)}</span>
        </p>
      </div>
    </div>
  )
}

export default OrderDetailspage
