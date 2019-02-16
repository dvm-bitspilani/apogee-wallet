import React, { Component, Fragment } from 'react';
import { SwipeableDrawer, List, ListItem, ListItemText, Switch, ListItemIcon } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
// import classes from './index.module.scss';

export default class Nav extends Component {
  render() {
    // const pages = ['Profile', 'Stalls', 'Cart', 'Transfer Money', 'Add Money', 'Past Transactions', 'Current Orders', 'Profshow tickets'];

    const pages = [
      {
        name: 'Profile',
        link: '',
        icon: () => <MailIcon />
      }
    ]
    return (
      <Fragment>
        <SwipeableDrawer open={true}>
          <List>
            {pages.map((page) => (
              <ListItem button key={page.name}>
                <ListItemIcon>{() => page.icon}</ListItemIcon>
                <ListItemText primary={page.name} />
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
        <div>
          <Switch>

          </Switch>
        </div>
      </Fragment>
    )
  }
}