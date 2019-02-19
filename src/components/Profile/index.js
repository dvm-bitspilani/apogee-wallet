import React, { Component } from "react";
import { Typography, Button } from "@material-ui/core";
import QRCode from "qrcode.react";
import { connect } from "react-redux";

import classes from "./styles.module.scss";
import AuthRequired from "../AuthRequired";
import MoneyDrawerBase from "../MoneyDrawerBase"
import AddMoneyDrawer from "../MoneyDrawerBase/AddMoneyDrawer"

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
        <div className={classes.container}>
          <Typography variant="h5" className={classes.name}>{this.props.userProfile.name}</Typography>
          <Typography variant="h5" className={classes.id}>{this.props.userProfile.userId}</Typography>
          <QRCode value="asdf" />
          <Button
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
          <MoneyDrawerBase
            open={this.state.recieveMoneyDrawerOpened} 
            close={this.closeDrawer('recieveMoney')} />
          <MoneyDrawerBase
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