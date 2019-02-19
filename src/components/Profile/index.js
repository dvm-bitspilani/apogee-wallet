import React, { Component } from "react";
import { Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";

import classes from "./styles.module.scss";
import AuthRequired from "../AuthRequired";
import AddMoneyDrawer from "../MoneyDrawers/AddMoneyDrawer"
import RecieveMoneyDrawer from "../MoneyDrawers/RecieveMoneyDrawer"
import SendMoneyDrawer from "../MoneyDrawers/SendMoneyDrawer"

class Profile extends Component {
  closeDrawer = drawerName => () => this.setState({
    [`${drawerName}DrawerOpened`]: false
  });
  constructor(props) {
    super(props)
    this.state = {
      addMoneyDrawerOpened: false,
      recieveMoneyDrawerOpened: false,
      sendMoneyDrawerOpened: false,
    }
    this.closeDrawer = this.closeDrawer.bind(this);
  }
  render() {
    return (
      <AuthRequired>
        <Typography variant="h4">{this.props.userProfile.name}</Typography>
        <Typography variant="h5">WALLET ID: {this.props.userProfile.userId}</Typography>

        <div className={classes.balance}>
          <Typography variant="h4">2500</Typography>
          <Typography variant="h6">BALANCE</Typography>
        </div>

        <div className={classes.btnWrap}>
          <Button
            className={classes.btns}
            variant="contained"
            color="primary"
            onClick={() => this.setState({
              addMoneyDrawerOpened: true,
              recieveMoneyDrawerOpened: false,
              sendMoneyDrawerOpened: false,
            })}>
            Add Money
            </Button>
          <Button
            className={classes.btns}
            variant="contained"
            color="primary"
            onClick={() => this.setState({
              addMoneyDrawerOpened: false,
              recieveMoneyDrawerOpened: true,
              sendMoneyDrawerOpened: false,
            })}>
            Receive Money
            </Button>
          <Button
            className={classes.btns}
            variant="contained"
            color="primary"
            onClick={() => this.setState({
              addMoneyDrawerOpened: false,
              recieveMoneyDrawerOpened: false,
              sendMoneyDrawerOpened: true
            })}>
            Send Money
          </Button>

          <AddMoneyDrawer
            open={this.state.addMoneyDrawerOpened}
            close={this.closeDrawer('addMoney')} />
          <RecieveMoneyDrawer
            open={this.state.recieveMoneyDrawerOpened} 
            close={this.closeDrawer('recieveMoney')} />
          <SendMoneyDrawer
            open={this.state.sendMoneyDrawerOpened} 
            close={this.closeDrawer('sendMoney')} />

        </div>
      </AuthRequired>
    )
  }
}

const mapStateToProps = (state) => ({
  userProfile: state.userProfile
})

export default connect(mapStateToProps, null)(Profile)