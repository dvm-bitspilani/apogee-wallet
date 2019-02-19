import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'

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
    return (
      <MoneyDrawerBase open={this.props.open} close={this.props.close}>
        <div className={classes.moneyDrawersCommon}>
          <h3>I WANT TO ADD</h3>
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
        </div>
      </MoneyDrawerBase>
    )
  }
}

export default AddMoneyDrawer