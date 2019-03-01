import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Typography,
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
    this.props.getCurrentOrders();
  }

  render() {
    const { CircularDiv } = this
    const { currentOrders } = this.props.orders
    // console.log(this.props.orders.currentOrders)
    return (
      <>
        <Typography variant="h4">CURRENT ORDERS</Typography>

        {currentOrders.map(
          shell => shell.orders.map(order => (
            <ExpansionPanel key={`${shell.id}-${order.id}`} style={{ width: "100%" }}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
                <div style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between"
                }}>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                  }}>
                    <Typography >{order.vendor.name}</Typography>
                    <Typography
                      fontWeight={300}
                      variant="subtitle2"
                      classes={{
                        root: classes.timestampDisplay
                      }}
                    >
                      {shell.timestamp}
                    </Typography>
                  </div>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                  }}>
                    <Typography>{
                      ["Pending", "Accepted", "Finished"][order.status]
                    }</Typography>
                    <div style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}>
                      {
                        [<CircularDiv key="pending" backgroundColor="red" marginRight="4px" />,
                          <CircularDiv key="accepted" backgroundColor="yellow" marginRight="4px" />,
                          <CircularDiv key="finished" backgroundColor="green" />].splice(0, 1+order.status)
                      }
                    </div>
                  </div>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails
                classes={{
                  root: classes.expansionTable
                }}>
                <Table>
                  <TableHead />
                  <TableBody>
                    {order.items.map(item => (
                      <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell align="right">{item.quantity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))
        ).flat()}
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