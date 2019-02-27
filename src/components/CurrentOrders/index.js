import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  List,
  Divider,
  ListItem,
  Typography,
  ListItemText,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from '@material-ui/core'

import {
  ExpandMore as ExpandMoreIcon
} from "@material-ui/icons"

import * as orders from "@/actionCreators/orders"
import classes from './styles.module.scss'

class CurrentOrders extends Component {
  CircularDiv = (props) => (
    <div style={{
      ...props,
      width: "10px",
      height: "10px",
      borderRadius: "20px",
    }}></div>
  )

  componentWillMount() {
    console.log(this.props)
    this.props.getCurrentOrders();
  }

  render() {
    const { CircularDiv } = this
    return (
      <>
        <Typography variant="h4">CURRENT ORDERS</Typography>
        {/* <List
          style={{
            width: "100%"
          }}
          subheader={<li />}>
          <ListItem>
            <ListItemText primary="this sis " secondary="INR 20" />
            <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}>
              <Typography>Accepted</Typography>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CircularDiv backgroundColor="red" marginRight="4px" />
                <CircularDiv backgroundColor="yellow" marginRight="4px" />
                <CircularDiv backgroundColor="green" />
              </div>
            </div>
          </ListItem>
        </List> */}
        <ExpansionPanel style={{ width: "100%" }}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
            <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
              <Typography >Vendor 1</Typography>
              <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}>
                <Typography>Accepted</Typography>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <CircularDiv backgroundColor="red" marginRight="4px" />
                  <CircularDiv backgroundColor="yellow" marginRight="4px" />
                  <CircularDiv backgroundColor="green" />
                </div>
              </div>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails
            classes={{
              root: classes.expansionTable
            }}>
            {/* <List>
              <ListItemText primary="this sis" />
              <Typography>INR 20</Typography>
            </List> */}
            <Table>
              <TableHead />
              <TableBody>
                <TableRow>
                  <TableCell>Cheetos</TableCell>
                  <TableCell align="right">2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fresca</TableCell>
                  <TableCell align="right">1</TableCell>
                </TableRow>
              </TableBody>

            </Table>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  Object.assign({}, orders), dispatch
)

const mapStateToProps = state => ({
  orders: state.orders
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentOrders)