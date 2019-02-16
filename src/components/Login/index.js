import React, { Component } from 'react'
import { bindActionCreators } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

import auth from '@/actionCreators/auth'
import classes from './styles.module.scss'

class Login extends Component {
  render() {
    return (
      <div id={classes.loginRoot}>
        <Grid container spacing={24} className={classes.loginGrid} alignContent="center" justify="center">
          <Grid item xs={8} container justify="center" alignItems="center">
            <TextField
              id="name"
              label="Name"
              margin="normal"
            />
          </Grid>
          <Grid item xs={8} container justify="center" alignItems="center">
            <TextField
              id="password-input"
              label="Password"
              type="password"
            />
          </Grid>
          <Grid item xs={8} container justify="center" alignItems="center">
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.setJwt}>
              Login
            </Button>
          </Grid>
          <Grid item xs={8} container justify="center" alignItems="center">
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.setJwt}>
              Bitsian Login
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  // return bindActionCreators({
  // ...auth
  // }, dispatch)
  // console.log(auth)
  console.log(bindActionCreators(Object.assign({}, auth), dispatch));
  return {
    setJwt: (jwt) => dispatch(auth.setJwt("hello")),
  // actions: bindActionCreators(auth, dispatch)
  }
  // console.log(Object.assign({})); 
  // return bindActionCreators(Object.assign({}, auth), dispatch);
}

// export default Login
export default connect(null, mapDispatchToProps)(Login)