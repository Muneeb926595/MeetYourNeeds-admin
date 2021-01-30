import { Redirect } from "react-router-dom";
import React from "react";

import classes from "./layout.module.css";
import SidePannel from "../@modules/SidePannel/SidePannel";

const Layout = (props) => {
  if (
    !(localStorage.getItem("access_token") && localStorage.getItem("userId"))
  ) {
    return <Redirect to="/login" />;
  }
  return (
    <div className={classes.layoutContainer}>
      <SidePannel />
      {props.children}
    </div>
  );
};

export default Layout;
