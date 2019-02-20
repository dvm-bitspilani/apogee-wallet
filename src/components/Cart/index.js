import React, { Component } from "react";
import AuthRequired from "../AuthRequired";

import classes from './styles.module.scss';
import { Typography, List, ListSubheader, ListItem, ListItemText, Divider } from "@material-ui/core";
import {
  AddCircleOutline as AddIcon,
  RemoveCircleOutline as RemoveIcon,
} from "@material-ui/icons";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    return (
      <AuthRequired>
        <Typography variant="h4">CART</Typography>

        <List className={classes.cartList} subheader={<li />}>
          {
            Object.keys(this.props.cart).map(stallId => (
            <li key={this.props.cart[stallId].stallName}>
              <ul>
                <ListSubheader className = {classes.stallName}>{this.props.cart[stallId].stallName}</ListSubheader>
                {Object.keys(this.props.cart[stallId].items).map(itemId => (
                  <ListItem key={itemId} className = {classes.cartItem}>
                    <ListItemText primary={this.props.cart[stallId].items[itemId].itemName} secondary = {`INR ${this.props.cart[stallId].items[itemId].price}`}/>
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <AddIcon style={{ marginRight: "5px" }} />
                          <span>{this.props.cart[stallId].items[itemId].quantity}</span>
                        <RemoveIcon style={{ marginLeft: "5px" }} />
                      </div>
                  </ListItem>
                ))}
                <Divider />
              </ul>
            </li>
          ))
          }
        </List>
      </AuthRequired>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps, null)(Cart);