import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Products.module.css";
import Loader from "../../@components/Loader/Loader";
import { getProductData } from "../../@store/product/ProductActions";
import ProductsTable from "./Tabel/Tabel";

const Products = () => {
  const dispatch = useDispatch();

  const dataLoading = useSelector(
    ({ MeedYourNeeds }) => MeedYourNeeds.products.loading
  );
  const allProductsData = useSelector(
    ({ MeedYourNeeds }) => MeedYourNeeds.products.products
  );

  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);

  return (
    <>
      {dataLoading ? (
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
        <div className={classes.productsContainer}>
          <p className={classes.sectionTitle}>Products</p>
          <ProductsTable data={allProductsData} />
        </div>
      )}
    </>
  );
};

export default Products;
