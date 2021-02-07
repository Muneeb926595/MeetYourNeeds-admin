import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Users.module.css";
import Loader from "../../@components/Loader/Loader";
import { getUsersData } from "../../@store/users/UsersAction";
import UsersTable from "./Tabel/Tabel";

function Users() {
  const dispatch = useDispatch();

  const dataLoading = useSelector(
    ({ MeedYourNeeds }) => MeedYourNeeds.users.loading
  );
  const allUsersData = useSelector(
    ({ MeedYourNeeds }) => MeedYourNeeds.users.users
  );

  useEffect(() => {
    dispatch(getUsersData());
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
        <div className={classes.usersContainer}>
          <p className={classes.sectionTitle}>Users</p>
          <UsersTable data={allUsersData} />
        </div>
      )}
    </>
  );
}

export default Users;
