import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'

class CurrentOrders extends Component {
  CircularDiv = (props) => (
    <div style={{
      ...props,
      width: "10px",
      height: "10px",
      borderRadius: "20px",
    }}></div>
  )
  render() {
    const CircularDiv = this.CircularDiv
    return (
      <>
        <Typography variant="h4">CURRENT ORDERS</Typography>
        <List
          style={{ width: "100%" }}
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
        </List>
      </>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, null)(CurrentOrders)