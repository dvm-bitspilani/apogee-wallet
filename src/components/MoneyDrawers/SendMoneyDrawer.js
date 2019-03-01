import React, { Component } from 'react'
import { TextField, Button, Snackbar, InputAdornment } from '@material-ui/core'
import { connect } from 'react-redux'
import request from 'request'

import MoneyDrawerBase from './MoneyDrawerBase'
import classes from './styles.module.scss'
import * as api from '@/constants/api'

class SendMoneyDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      walletId: "",
      amount: "",
      snackbarOpen: false,
      snackbarMessage: "",
    }
    this.sendMoney = this.sendMoney.bind(this)
    this.showSnackbar = this.showSnackbar.bind(this)
  }

  sendMoney() {
    const amount = Number(this.state.amount)
    if (Number.isNaN(amount)) return this.showSnackbar('Please enter a valid amount');
    // const { qrCode: qr_code } = this.props.userProfile
    console.log(this.state.walletId);

    request({
      method: 'POST',
      url: api.TRANSFER_MONEY,
      headers: {
        'Content-Type': 'application/json',
        'X-Wallet-Token': api.WALLET_TOKEN,
        'Authorization': `JWT ${this.props.auth.JWT}`
      },
      body: JSON.stringify({ id: this.state.walletId, amount }),
    }, (error, response, body) => {
      if (!response) {
        this.showSnackbar("Unknown error, please contact administrator")
      }
      else if (response.statusCode === 200) {
        try {
          this.showSnackbar("Money transferred succesfully")
          this.setState({
            walletId: "",
            amount: "",
          })
        } catch (e) {
          this.showSnackbar("Unknown error, please contact administrator")
        }
      }
      else {
        try {
          body = JSON.parse(body)
          this.showSnackbar(body.display_message);
        } catch (e) {
          this.showSnackbar("Unknown error, please contact adminstrators");
        }
      }
    });
  }

  showSnackbar(msg) {
    this.setState({
      snackbarMessage: msg,
      snackbarOpen: true
    })
  }

  render() {
    return (
      <MoneyDrawerBase open={this.props.open} close={this.props.close}>
        <div className={classes.moneyDrawersCommon}>
          <h3 className = {classes.topText}>SEND MONEY</h3>
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <h4>I WANT TO SEND</h4>
            <TextField
              label="Amount"
              value={this.state.amount}
              onChange={e => this.setState({ amount: e.target.value })}
              margin="normal"
              variant="outlined"
              InputProps={{
                startAdornment: <InputAdornment position="start">INR</InputAdornment>,
              }}
              className = {classes.inputBox}
            />
            <h4>TO</h4>
            <TextField
              label="WalletId"
              value={this.state.walletId}
              onChange={e => this.setState({ walletId: e.target.value })}
              margin="normal"
              variant="outlined"
              InputProps={{
                startAdornment: <InputAdornment position="start">#</InputAdornment>,
              }}
              className = {classes.inputBox}
            />
          </div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              console.log('clicked')
              this.sendMoney()
            }}>
            SEND
          </Button>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={this.state.snackbarOpen}
          autoHideDuration={6000}
          message={this.state.snackbarMessage}
          onClose={(e) => this.setState({ snackbarOpen: false })} />

      </MoneyDrawerBase>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  userProfile: state.userProfile,

})

export default connect(mapStateToProps, null)(SendMoneyDrawer)