import React, { Component } from "react";
import AuthRequired from "../AuthRequired";
import classes from "./styles.module.scss";
import { Typography } from "@material-ui/core";
import QRCode from "qrcode.react";

export default class Profile extends Component {
  render () {
    return (
      <AuthRequired>
        <div className = {classes.container}>
          <Typography variant = "h5" className = {classes.name}>Laksh Singla</Typography>
          <Typography variant = "h5" className = {classes.id}>ID: 5492</Typography>
          <QRCode value = "asdf" />
        </div>
      </AuthRequired>
    )
  }
}