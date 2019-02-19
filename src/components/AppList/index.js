import React, { Component } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

import classes from './styles.module.scss';
import { Mail as MailIcon} from "@material-ui/icons";

export default class AppList extends Component {
  render () {
    return (
      <List className={classes.appList} subheader={<li />}>
        {
          this.props.items.map(item => (
            <ListItem key={item.primary}>
              <ListItemText primary={item.primary} secondary = {item.secondary}/>
              <item.icon/>
            </ListItem>
          ))
        }
      </List>
    )
  }
}