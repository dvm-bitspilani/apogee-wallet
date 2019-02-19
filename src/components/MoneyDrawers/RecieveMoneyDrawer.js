import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'
import QRCode from "qrcode.react";

import MoneyDrawerBase from './MoneyDrawerBase'
import classes from './styles.module.scss'

class RecieveMoneyDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      walletId: "",
      amount: ""
    }
  }
  render() {
    return (
      <MoneyDrawerBase open={this.props.open} close={this.props.close}>
        <div
          className={classes.moneyDrawersCommon}
          style={{
            justifyContent: "center"
          }}>
          <h3
          style={{
            marginBottom: "20px"
          }}>ASK THE SENDER TO SCAN THE QR CODE</h3>
          <QRCode value="asdf" />
        </div>

      </MoneyDrawerBase>
    )
  }
}

export default RecieveMoneyDrawer