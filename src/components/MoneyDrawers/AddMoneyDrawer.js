import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import QRCode from "qrcode.react";

import MoneyDrawerBase from './MoneyDrawerBase'
import classes from './styles.module.scss'

class AddMoneyDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: ""
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
          color="secondary">
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
            style={{ marginBottom: isBitsian ? "" : "20px" }}>
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
  userProfile: state.userProfile
})

export default connect(mapStateToProps, null)(AddMoneyDrawer)