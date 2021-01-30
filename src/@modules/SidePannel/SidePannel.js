import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Sidepannel.module.css";
import { ReactComponent as DashboardIcon } from "../../assets/Images/sidebar/dashboardIcon.svg";
import { ReactComponent as ProductsIcon } from "../../assets/Images/sidebar/productsIcon.svg";
import { ReactComponent as UsersIcon } from "../../assets/Images/sidebar/usersIcon.svg";

function SidePannel() {
  return (
    <div className={classes.sidePannelContainer}>
      <NavLink className={classes.logoContainer} to="/dashboard">
        <p style={{ textAlign: "center", width: "100%" }}>M</p>
      </NavLink>
      <NavLink
        activeClassName={classes.activeSideBarItemContainer}
        className={classes.sideBarItemContainer}
        to="/dashboard"
      >
        <DashboardIcon className={classes.sideBarItemIcon} />
        <p className={classes.sideBarItemTitle}>Dashboard</p>
      </NavLink>
      <NavLink
        activeClassName={classes.activeSideBarItemContainer}
        className={classes.sideBarItemContainer}
        to="/users"
      >
        <UsersIcon className={classes.sideBarItemIcon} />
        <p className={classes.sideBarItemTitle}>Users</p>
      </NavLink>
      <NavLink
        activeClassName={classes.activeSideBarItemContainer}
        className={classes.sideBarItemContainer}
        to="/products"
      >
        <ProductsIcon className={classes.sideBarItemIcon} />
        <p className={classes.sideBarItemTitle}>Products</p>
      </NavLink>
    </div>
  );
}

export default SidePannel;
