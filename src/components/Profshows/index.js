import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Typography,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Divider,
  Button
} from "@material-ui/core";
import {
  AddCircleOutline as AddIcon,
  RemoveCircleOutline as RemoveIcon,
} from "@material-ui/icons";

import classes from './styles.module.scss'

class Profshows extends Component {
  render() {
    return (
      <>
        <Typography variant="h4">CART</Typography>
        <List id={classes.profshowList}>
          <ListItem key={1}>
            <ListItemText primary={"Hello"} secondary={'Kitty'} />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <AddIcon style={{ marginRight: "5px" }} />
              <span>{69}</span>
              <RemoveIcon style={{ marginLeft: "5px" }} />
            </div>
          </ListItem>
        </List>
      </>
    )
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Profshows)