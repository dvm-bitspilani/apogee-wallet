import React, { Component } from 'react'
import { Close as CloseIcon } from '@material-ui/icons'

import MoneyDrawerBase from './index'

class AddMoneyDrawer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <MoneyDrawerBase open={this.props.open} close={this.props.close}>
        <div>
          <CloseIcon />
          I WANT TO ADD <br/>
          500 INR
          Using SWD
        </div>
      </MoneyDrawerBase>
    )
  }
}

export default AddMoneyDrawer