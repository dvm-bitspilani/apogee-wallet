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
        <div className={classes.container}>
          <Typography variant="h5" className={classes.name}>{this.props.userProfile.name}</Typography>
          <Typography variant="h5" className={classes.id}>{this.props.userProfile.userId}</Typography>
          <QRCode value="asdf" />
          <Button
            variant="contained"
            color="primary">
            Add Money
          </Button>
          <Button
            variant="contained"
            color="primary">
            Receive Money
          </Button>
          <Button
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