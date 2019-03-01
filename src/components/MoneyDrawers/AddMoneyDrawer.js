import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import QRCode from "qrcode.react";
import request from 'request'

import MoneyDrawerBase from './MoneyDrawerBase'
import classes from './styles.module.scss'
import * as api from '@/constants/api'

class AddMoneyDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: ""
    }

    this.addMoney = this.addMoney.bind(this);
  }

  addMoney() {
    const amount = Number(this.state.amount);
    if (amount > 0 && amount < 10000) {
      request({
        method: 'POST',
        url: api.ADD_MONEY,
        headers: {
          'Content-Type': 'application/json',
          'X-Wallet-Token': api.WALLET_TOKEN,
          'Authorization': `JWT ${this.props.auth.JWT}`
        },
        body: JSON.stringify({ amount }) 
      }, (error, response, body) => {
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Response:', body);
      });
    }
  }

  render() {

    const isBitsian = this.props.userProfile.isBitsian;

    const text = isBitsian ? "I WANT TO ADD" : "SHOW THE QR CODE TO THE TELLER"

    const Content = isBitsian ?
      (<>
        <TextField
          label="Amount"
          value={this.state.amount}
          onChange={e => this.setState({ amount: e.target.value })}
          type="number"
          margin="normal"
          variant="outlined"
          helperText="INR"
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={this.addMoney}
          >
          Using SWD
        </Button>
      </>) :
      (<><QRCode value={this.props.userProfile.qrCode} /></>)

    return (
      <MoneyDrawerBase open={this.props.open} close={this.props.close}>
        <div
          className={classes.moneyDrawersCommon}
          style={{
            justifyContent: isBitsian ? "space-around" : "center"
          }}>
          <h3
            style={{ marginBottom: isBitsian ? "" : "20px" }}
            className = {classes.topText}>
            {text}
          </h3>
          {/* <TextField
            label="Amount"
            value={this.state.amount}
            onChange={e => this.setState({ amount: e.target.value })}
            type="number"
            margin="normal"
            variant="outlined"
            helperText="INR"
          />
          <Button
            variant="contained"
            color="secondary">
            Using SWD
          </Button> */}
          {Content}
        </div>
      </MoneyDrawerBase>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  userProfile: state.userProfile
})

export default connect(mapStateToProps, null)(AddMoneyDrawer)