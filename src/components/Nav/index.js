import React, { Component, Fragment } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { SwipeableDrawer, List, ListItem, ListItemText, ListItemIcon, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { 
  ShoppingCartOutlined as ShoppingCartIcon, 
  Menu as MenuIcon, 
  Mail as MailIcon } from '@material-ui/icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthRequired from '../AuthRequired'
import classes from './styles.module.scss';
import * as auth from '@/actionCreators/auth'
import Profile from '../Profile';
import Cart from '../Cart';

class Nav extends Component {
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
      // {
      //   name: 'Logout',
      //   link: '/cart',
      //   icon: () => <MailIcon />
      // },
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
            <Link to = "/cart">
              <Button color="inherit"><ShoppingCartIcon /></Button>
            </Link>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          open={this.state.isDrawerOpen}
          onClose={this.toggleDrawer.bind(this, false)}
          onOpen={this.toggleDrawer.bind(this, true)}>
          <List className={classes.list}>
            {pages.map((page) => (
              <Link to={page.link} key={page.name}>
                <ListItem button>
                  <ListItemIcon><page.icon /></ListItemIcon>
                  <ListItemText primary={page.name} />
                </ListItem>
              </Link>
            ))}
              <ListItem button onClick = {() => this.props.changeLoginStatus(false, null)}>
                <ListItemIcon><MailIcon /></ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
          </List>
        </SwipeableDrawer>

        <div className={classes.pageContainer}>
          <Switch>
            <Route exact path='/' component={Profile} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </div>
      </AuthRequired>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Object.assign({}, auth), dispatch);
}

export default connect(null, mapDispatchToProps)(Nav);