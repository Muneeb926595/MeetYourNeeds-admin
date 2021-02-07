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
  productImage: {
    width: "52px",
    height: "52px",
    objectFit: "cover",
    borderRadius: "6px",
  },
});

const ProductsTable = ({ data }) => {
  const classes = useStyles();

  const filterData = [];
  data?.length > 0 &&
    data.map((singleRow) => {
      console.log(singleRow);
      const newObject = {
        title: singleRow.title,
        category: singleRow.category,
        description: singleRow.description,
        image: singleRow.image,
        price: singleRow.price,
        createdBy: singleRow.userId.userName,
        createdAt: singleRow.createdAt,
      };
      filterData.push(newObject);
    });
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">createdBy</StyledTableCell>
            <StyledTableCell align="right">CreatedAt</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterData.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="left">
                <img
                  className={classes.productImage}
                  alt="productImage"
                  src={`https://meet-your-needs-api.herokuapp.com/api/${row.image}`}
                />
              </StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.createdBy}</StyledTableCell>
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
export default ProductsTable;
