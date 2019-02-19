import React, { Component } from "react";
import AuthRequired from "../AuthRequired";

import classes from './styles.module.scss';
import { Typography, List, ListSubheader, ListItem, ListItemText, Divider } from "@material-ui/core";

export default class Cart extends Component {
  render() {
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