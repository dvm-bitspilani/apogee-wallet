import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import classes from './styles.module.scss'

class Login extends Component {
  render() {
    return (
      <div>
        <TextField
          id="name"
          label="Name"
          margin="normal"
        />
        <TextField
          id="password-input"
          label="Password"
          type="password"
        />
        <Button variant="contained" color="primary">Primary</Button>
      </div>
    )
  }
}

export default Login