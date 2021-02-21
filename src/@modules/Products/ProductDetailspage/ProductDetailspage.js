import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductById } from "../../../@store/product/ProductActions";
import { getLastPostDuration } from "../../../@helpers/timeDateUtils";
import Loader from "../../../@components/Loader/Loader";
import classes from "./ProductDetailsPage.module.css";

const ProductDetailspage = (props) => {
  const dispatch = useDispatch();
  const { productId } = (props.location && props.location.state) || {};

  const productDetails = useSelector(
    ({ MeedYourNeeds }) => MeedYourNeeds.products.products
  );
  const productDetailsLoading = useSelector(
    ({ MeedYourNeeds }) => MeedYourNeeds.products.loading
  );

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [productId]);

  return (
    <>
      {productDetailsLoading ? (
        <div
          style={{
            position: "absolute",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <Loader />
        </div>
      ) : (
        <div className={classes.productDetailspage}>
          <div className={classes.leftSide}>
            <div className={classes.productImageContainer}>
              <img
                src={`https://meet-your-needs-api.herokuapp.com/api/${productDetails.image}`}
                className={classes.productImage}
              />
            </div>
          </div>
          <div className={classes.rightSide}>
            <p className={classes.title}>
              Product Details<span className={classes.data}></span>
            </p>
            <p className={classes.dataRow}>
              Product Name:
              <span className={classes.data}>{productDetails.title}</span>
            </p>
            <p className={classes.dataRow}>
              Product Price:
              <span className={classes.data}>{productDetails.price}</span>
            </p>
            <p className={classes.dataRow}>
              Product Category:
              <span className={classes.data}>{productDetails.category}</span>
            </p>
            <p className={classes.dataRow}>
              Product Created By:
              <span className={classes.data}>
                {productDetails?.userId?.userName}
              </span>
            </p>
            <p className={classes.dataRow}>
              Product Created At:
              <span className={classes.data}>
                {getLastPostDuration(productDetails.createdAt)}
              </span>
            </p>
            <p className={classes.dataRow}>
              Product Description:
              <span className={classes.data}>
                {getLastPostDuration(productDetails.description)}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailspage;
