import React, { Component } from 'react'
import { bindActionCreators } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

import * as auth from '@/actionCreators/auth'
import classes from './styles.module.scss'

class Login extends Component {
  render() {
    return (
      <div id={classes.loginRoot}>
        <Grid container>
          <Grid item xs={8}>
            <TextField
              id="name"
              label="Name"
              margin="normal"
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="password-input"
              label="Password"
              type="password"
            />
          </Grid>
          <Button
            variant="contained"
            color="primary">
            Login
          </Button>
        </Grid>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  // return bindActionCreators(auth, dispatch)
  return {
    setJwt: (jwt) => dispatch(auth.setJwt("hello"))
  }
}

export default Login
// export default connect(null, mapDispatchToProps)(Login)