import React, { Component } from "react";
import { Typography, Button } from "@material-ui/core";
import QRCode from "qrcode.react";
import { connect } from "react-redux";

import classes from "./styles.module.scss";
import AuthRequired from "../AuthRequired";

class Profile extends Component {
  render() {
    return (
      <AuthRequired>
        <Typography variant="h4">{this.props.userProfile.name}</Typography>
        <Typography variant="h5">WALLET ID: {this.props.userProfile.userId}</Typography>

        <QRCode className={classes.qr} value="asdf" />

        <div className={classes.balance}>
          <Typography variant="h4">2500</Typography>
          <Typography variant="h6">BALANCE</Typography>
        </div>

        <div className={classes.btnWrap}>
          <Button
            className={classes.btns}
            variant="contained"
            color="primary">
            Add Money
            </Button>
          <Button
            className={classes.btns}
            variant="contained"
            color="primary">
            Receive Money
            </Button>
          <Button
            className={classes.btns}
            variant="contained"
            color="primary">
            Send Money
            </Button>
        </div>
      </AuthRequired>
    )
  }
}

const mapStateToProps = (state) => ({
  userProfile: state.userProfile
})

export default connect(mapStateToProps, null)(Profile)