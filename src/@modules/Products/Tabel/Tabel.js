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
import { deleteProduct } from '../../../@store/product/ProductActions'

// const baseUrl='https://meet-your-needs-api.herokuapp.com/api/'
const baseUrl='http://localhost:3000/api/'

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

const ProductsTable = ({ data }) => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const filterData = []
  data?.length > 0 &&
    data.map((singleRow) => {
      const newObject = {
        productId: singleRow._id,
        title: singleRow.title,
        category: singleRow.category,
        description: singleRow.description,
        image: singleRow.image,
        price: singleRow.price,
        createdBy: singleRow.userId.userName,
        createdAt: singleRow.createdAt,
      }
      filterData.push(newObject)
    })
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell align='right'>Category</StyledTableCell>
            <StyledTableCell align='right'>Description</StyledTableCell>
            <StyledTableCell align='right'>Price</StyledTableCell>
            <StyledTableCell align='right'>createdBy</StyledTableCell>
            <StyledTableCell align='right'>CreatedAt</StyledTableCell>
            <StyledTableCell align='right'>View</StyledTableCell>
            <StyledTableCell align='left'>Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterData.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component='th' scope='row'>
                {row.title}
              </StyledTableCell>
              <StyledTableCell align='left'>
                <img
                  className={classes.productImage}
                  alt='productImage'
                  src={baseUrl+row.imag}
                />
              </StyledTableCell>
              <StyledTableCell align='right'>{row.category}</StyledTableCell>
              <StyledTableCell align='right'>{row.description}</StyledTableCell>
              <StyledTableCell align='right'>{row.price}</StyledTableCell>
              <StyledTableCell align='right'>{row.createdBy}</StyledTableCell>
              <StyledTableCell align='right'>
                {getLastPostDuration(row.createdAt)}
              </StyledTableCell>
              <StyledTableCell align='right'>
                <Link
                  to={{
                    pathname: '/product-details',
                    state: { productId: row.productId },
                  }}
                  className={classes.viewButton}
                >
                  View
                </Link>
              </StyledTableCell>
              <StyledTableCell align='left'>
                <button
                  className={classes.deleteButton}
                  onClick={() => dispatch(deleteProduct(row.productId))}
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
export default ProductsTable
