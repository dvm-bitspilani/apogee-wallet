import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { SwipeableDrawer, List, ListItem, ListItemText, ListItemIcon, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';

import AuthRequired from '../AuthRequired'
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
        link: '/',
        icon: () => <MailIcon />
      },
      {
        name: 'Stalls',
        link: '/stalls',
        icon: () => <MailIcon />
      },
      {
        name: 'Cart',
        link: '/cart',
        icon: () => <MailIcon />
      },
      {
        name: 'Send Money',
        link: '/send_money',
        icon: () => <MailIcon />
      },
      {
        name: 'Add Money',
        link: '/add_money',
        icon: () => <MailIcon />
      },
      {
        name: 'Current Orders',
        link: '/current_orders',
        icon: () => <MailIcon />
      },
      {
        name: 'Past Transactions',
        link: '/past_transactions',
        icon: () => <MailIcon />
      },
      {
        name: 'Profshow Tickets',
        link: '/profshow',
        icon: () => <MailIcon />
      },
    ]
    return (
      <AuthRequired>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer.bind(this, true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Wallet
          </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          open={this.state.isDrawerOpen}
          onClose={this.toggleDrawer.bind(this, false)}
          onOpen={this.toggleDrawer.bind(this, true)}>
          <List className = {classes.list}>
            {pages.map((page) => (
              <Link to = {page.link}>
                <ListItem button key={page.name}>
                  <ListItemIcon><page.icon /></ListItemIcon>
                  <ListItemText primary={page.name} />
                </ListItem>
              </Link>
            ))}
          </List>
        </SwipeableDrawer>

        {/* <div className = {classes.pageContainer}>
          <Switch>

          </Switch>
        </div> */}
      </AuthRequired>
    )
  }
}