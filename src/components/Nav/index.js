import React, { Component, Fragment } from 'react';
import { SwipeableDrawer, List, ListItem, ListItemText, ListItemIcon, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import classes from './styles.module.scss';

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDrawerOpen: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer(boolVal) {
    this.setState({ isDrawerOpen: boolVal });
  }

  render() {
    // const pages = ['Profile', 'Stalls', 'Cart', 'Transfer Money', 'Add Money', 'Past Transactions', 'Current Orders', 'Profshow tickets'];

    const pages = [
      {
        name: 'Profile',
        link: '/asdf',
        icon: () => <MailIcon />
      }
    ]
    return (
      <Fragment>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer.bind(this, true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Apogee Wallet - 2019
          </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          open={this.state.isDrawerOpen}
          onClose={this.toggleDrawer.bind(this, false)}
          onOpen={this.toggleDrawer.bind(this, true)}>
          <List>
            {pages.map((page) => (
              <ListItem button key={page.name}>
                <ListItemIcon><page.icon /></ListItemIcon>
                <ListItemText primary={page.name} />
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>

        {/* <div className = {classes.pageContainer}>
          <Switch>

          </Switch>
        </div> */}
      </Fragment>
    )
  }
}