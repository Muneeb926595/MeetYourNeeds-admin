import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import { useDispatch } from 'react-redux'
import TableBody from '@material-ui/core/TableBody'
import { Link } from 'react-router-dom'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import { getLastPostDuration } from '../../../@helpers/timeDateUtils'
import {
  removeOrderLocally,
  removeOrder,
} from '../../../@store/order/OrderActions'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  tabelHeader: {
    backgroundColor: 'red',
  },
  productImage: {
    width: '52px',
    height: '52px',
    objectFit: 'cover',
    borderRadius: '6px',
  },
  deleteButton: {
    color: '#ffffff',
    borderRadius: '6px',
    padding: '4px 8px',
    backgroundColor: '#E21717',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
  },
  viewButton: {
    color: '#ffffff',
    borderRadius: '6px',
    padding: '4px 8px',
    backgroundColor: '#007aff',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    textDecoration: 'none',
  },
})

const OrdersTable = ({ data }) => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const filterData = []
  data?.length > 0 &&
    data.map((singleRow) => {
      const newObject = {
        orderId: singleRow?._id,
        createdBy: singleRow?.userId?.userName,
        paymentMethod: singleRow?.paymentMethod,
        products: singleRow?.products,
        createdAt: singleRow?.createdAt,
      }
      filterData.push(newObject)
    })
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>CreatedBy</StyledTableCell>
            <StyledTableCell align='center'>PaymentMethod</StyledTableCell>
            <StyledTableCell align='center'>No of Products</StyledTableCell>
            <StyledTableCell align='center'>CreatedAt</StyledTableCell>
            <StyledTableCell align='right'>View</StyledTableCell>
            <StyledTableCell align='left'>Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterData.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component='th' scope='row'>
                {row.createdBy}
              </StyledTableCell>
              <StyledTableCell align='center'>
                {row.paymentMethod}
              </StyledTableCell>
              <StyledTableCell align='center'>
                {row.products.length}
              </StyledTableCell>
              <StyledTableCell align='center'>
                {getLastPostDuration(row.createdAt)}
              </StyledTableCell>
              <StyledTableCell align='right'>
                <Link
                  to={{
                    pathname: '/order-details',
                    state: {
                      products: row.products,
                      paymentMethod: row.paymentMethod,
                      createdAt: row.createdAt,
                      createdBy: row.createdBy,
                    },
                  }}
                  className={classes.viewButton}
                >
                  View
                </Link>
              </StyledTableCell>
              <StyledTableCell align='left'>
                <button
                  className={classes.deleteButton}
                  onClick={() => {
                    dispatch(removeOrder(row.orderId))
                    dispatch(removeOrderLocally(row.orderId))
                  }}
                >
                  Delete
                </button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default OrdersTable
