import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'

import MoneyDrawerBase from './index'
import classes from './addMoneyStyles.module.scss'

class AddMoneyDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }
  render() {
    return (
      <MoneyDrawerBase open={this.props.open} close={this.props.close}>
        <div className={classes.addMoneyDrawer}>
          <h3>I WANT TO ADD</h3>
          <TextField
            label="Amount"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
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