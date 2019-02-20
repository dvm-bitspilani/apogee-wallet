import React, { Component, Fragment } from 'react'
import {
  AddShoppingCart as AddCartIcon
} from '@material-ui/icons'
import {
  List,
  ListItem,
  Typography,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { connect } from 'react-redux'
import request from 'request'
import { bindActionCreators } from 'redux'
import * as vendors from "@/actionCreators/vendors"
import * as cart from "@/actionCreators/cart"

import AppList from '../AppList'

class StallItems extends Component {
  componentWillMount() {
    this.props.getItems(this.props.match.params.id);
  }

  render() {
    let struct;

    if (!this.props.items || !this.props.stallName || !this.props.stallId) struct = [];
    else {
      struct = this.props.items.map(item => ({
        ...item,
        primary: item.name,
        secondary: item.price,
        Icon: () => (
          <AddCartIcon onClick = {
            () => this.props.addToCart(
              this.props.stallName,
              this.props.stallId,
              item.name,
              item.id,
              item.price
            )
          }/>
        )
      }));
    }

    return (
      <Fragment>
        <Typography variant="h4"> {this.props.stallName} </Typography>
        <List style={{
          width: "100%"
        }}>
          {
            struct.map(({ primary, secondary, Icon }) => (
              <ListItem key={primary}>
                <ListItemText primary={primary} secondary={secondary} />
                <ListItemSecondaryAction>
                  <Icon />
                </ListItemSecondaryAction>
              </ListItem>
            ))
          }
        </List >
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  items: state.vendors.items,
  stallName: state.vendors.name,
  stallId: state.vendors.id,
  cart: state.cart
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(Object.assign({}, vendors, cart), dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(StallItems)