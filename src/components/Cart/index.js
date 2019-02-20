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
    console.log(this.props.cart);
    return (
      <AuthRequired>
        <Typography variant="h4">CART</Typography>

        <List className={classes.cartList} subheader={<li />}>
          {[0, 1, 2, 3, 4].map(sectionId => (
            <li key={`section-${sectionId}`}>
              <ul>
                <ListSubheader className = {classes.stallName}>{`Pizza Hut`}</ListSubheader>
                {[0, 1, 2].map(item => (
                  <ListItem key={`item-${sectionId}-${item}`} className = {classes.cartItem}>
                    <ListItemText primary={`Item ${item}`} secondary = {`INR 123`}/>
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <AddIcon style={{ marginRight: "5px" }} />
                          <span>0</span>
                        <RemoveIcon style={{ marginLeft: "5px" }} />
                      </div>
                  </ListItem>
                ))}
                <Divider />
              </ul>
            </li>
          ))}
        </List>
      </AuthRequired>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps, null)(Cart);