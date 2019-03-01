import React, { Component } from "react";
import { Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";

import classes from "./styles.module.scss";
import AuthRequired from "../AuthRequired";
import AddMoneyDrawer from "../MoneyDrawers/AddMoneyDrawer"
import RecieveMoneyDrawer from "../MoneyDrawers/RecieveMoneyDrawer"
import SendMoneyDrawer from "../MoneyDrawers/SendMoneyDrawer"
import ProfshowDrawer from "../MoneyDrawers/ProfshowDrawer"
import QRCode from "qrcode.react";

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
      profshowDrawerOpened: false,
    }
    this.closeDrawer = this.closeDrawer.bind(this);
  }
  render() {
    return (
      <AuthRequired>
        <Typography variant="h4">{this.props.userProfile.name}</Typography>
        <Typography variant="h5">WALLET ID: {this.props.userProfile.userId}</Typography>

        <div className={classes.balance}>
          <Typography variant="h4">{this.props.userProfile.balance}</Typography>
          <Typography variant="h6">BALANCE</Typography>
        </div>

        <QRCode className = {classes.qr} value={this.props.userProfile.qrCode} />

        <div className={classes.btnWrap}>
          <Button
            className={classes.btns}
            variant="contained"
            color="primary"
            onClick={() => this.setState({
              addMoneyDrawerOpened: true,
              recieveMoneyDrawerOpened: false,
              sendMoneyDrawerOpened: false,
              profshowDrawerOpened: false,
            })}>
            Add Money
            </Button>
          {/* <Button
            className={classes.btns}
            variant="contained"
            color="primary"
            onClick={() => this.setState({
              addMoneyDrawerOpened: false,
              recieveMoneyDrawerOpened: true,
              sendMoneyDrawerOpened: false,
              profshowDrawerOpened: false,
            })}>
            Receive Money
            </Button> */}
          <Button
            className={classes.btns}
            variant="contained"
            color="primary"
            onClick={() => this.setState({
              addMoneyDrawerOpened: false,
              recieveMoneyDrawerOpened: false,
              sendMoneyDrawerOpened: true,
              profshowDrawerOpened: false,
            })}>
            Send Money
          </Button>
          <Button
            className={classes.btns}
            variant="contained"
            color="primary"
            onClick={() => this.setState({
              addMoneyDrawerOpened: false,
              recieveMoneyDrawerOpened: false,
              sendMoneyDrawerOpened: false,
              profshowDrawerOpened: true,
            })}>
            Profshows signed
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
          <ProfshowDrawer
            open={this.state.profshowDrawerOpened} 
            close={this.closeDrawer('profshow')} />

        </div>
      </AuthRequired>
    )
  }
}

const mapStateToProps = (state) => ({
  userProfile: state.userProfile
})

export default connect(mapStateToProps, null)(Profile)