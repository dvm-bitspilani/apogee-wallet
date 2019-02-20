import React, { Component, Fragment} from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

import classes from './styles.module.scss';
import { Mail as MailIcon} from "@material-ui/icons";

export default class AppList extends Component {
  render () {
    return (
      <List className={classes.appList} subheader={<li />}>
        {
          this.props.items.map(({primary = "", secondary = "", Icon = Fragment}) => (
            <ListItem key={primary}>
              <ListItemText primary={primary} secondary = {secondary}/>
              <Icon />
            </ListItem>
          ))
        }
      </List>
    )
  }
}