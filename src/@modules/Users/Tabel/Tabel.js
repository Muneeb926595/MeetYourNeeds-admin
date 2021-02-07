import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { getLastPostDuration } from "../../../@helpers/timeDateUtils";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  tabelHeader: {
    backgroundColor: "red",
  },
});

const UsersTable = ({ data }) => {
  const classes = useStyles();

  const filterData = [];
  data?.length > 0 &&
    data.map((singleRow) => {
      const newObject = {
        email: singleRow.email,
        fullName: singleRow.fullName,
        userName: singleRow.userName,
        createdAt: singleRow.createdAt,
      };
      filterData.push(newObject);
    });
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell align="right">FullName</StyledTableCell>
            <StyledTableCell align="right">UserName</StyledTableCell>
            <StyledTableCell align="right">Joined</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterData.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.email}
              </StyledTableCell>
              <StyledTableCell align="right">{row.fullName}</StyledTableCell>
              <StyledTableCell align="right">{row.userName}</StyledTableCell>
              <StyledTableCell align="right">
                {getLastPostDuration(row.createdAt)}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UsersTable;
