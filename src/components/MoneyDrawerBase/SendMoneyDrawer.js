import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'

import MoneyDrawerBase from './index'
import classes from './addMoneyStyles.module.scss'

class AddMoneyDrawer extends Component {
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
        <div className={classes.addMoneyDrawer}>
          <h3>I WANT TO SEND</h3>
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <TextField
              label="WalletId"
              value={this.state.walletId}
              onChange={e => this.setState({ walletId: e.target.value })}
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Amount"
              value={this.state.amount}
              onChange={e => this.setState({ amount: e.target.value })}
              type="number"
              margin="normal"
              variant="outlined"
              helperText="INR"
            />
          </div>
          <Button
            variant="contained"
            color="secondary">
            SEND
          </Button>
        </div>
      </MoneyDrawerBase>
    )
  }
}

export default AddMoneyDrawer