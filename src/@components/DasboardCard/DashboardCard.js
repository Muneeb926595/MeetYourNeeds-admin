import React from "react";
import { Link } from "react-router-dom";

import classes from "./DashboardCard.module.css";

const DashboardCard = ({ to, headerTitle, count }) => {
  return (
    <div className={classes.dashboardCardContainer}>
      <div className={classes.cardHeader}>
        <p>{headerTitle}</p>
      </div>
      <div className={classes.cardContent}>
        <p className={classes.content}>{count}</p>
        <Link to={to} className={classes.viewButton}>
          View All
        </Link>
      </div>
    </div>
  );
};

export default DashboardCard;
