import React, { useEffect, useState } from 'react'

import classes from './Productrow.module.css'

function ProductRow({ productImage, productName, price }) {
  const [ImageHasHttp, setImageHasHttp] = useState(false)
  console.log(productName)
  useEffect(() => {
    if (productImage && productImage !== 'undefined') {
      const prefix = productImage.toString().split('/')[0]
      if (prefix === 'images') {
        setImageHasHttp(false)
      } else {
        setImageHasHttp(true)
      }
    }
  }, [productImage])

  const formateImageUrl = (url) => {
    return 'http://localhost:3000/api/' + url
    // return 'https://meet-your-needs-api.herokuapp.com/api/' + url
  }

  return (
    <div className={classes.productInfo}>
      <div className={classes.productImageContainer}>
        <img
          className={classes.productImage}
          src={ImageHasHttp ? productImage : formateImageUrl(productImage)}
        />
      </div>
      <div className={classes.productDetails}>
        <p className={classes.productName}>{productName}</p>
        <p className={classes.productPrice}>Rs. {price}</p>
      </div>
    </div>
  )
}

export default ProductRow
