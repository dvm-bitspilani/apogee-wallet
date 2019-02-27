import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Snackbar from '@material-ui/core/Snackbar';

import * as auth from '@/actionCreators/auth'
import classes from './styles.module.scss'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }

    let that = this;
    window.onSignIn = function (googleUser) {
      console.log(window.gapi);
      // Useful data for your client-side scripts:
      let id_token = googleUser.getAuthResponse().id_token;
      that.props.googleLogin(id_token);
    }
  }

  render() {
    if (this.props.auth.isLoggedIn) {
      return (<Redirect to="/" />)
    }
    return (
      <div id={classes.loginRoot}>
        <Grid container spacing={24} className={classes.loginGrid} alignContent="center" justify="center">
          <Grid item xs={8} container justify="center" alignItems="center">
            <TextField
              id="name"
              label="Name"
              margin="normal"
              value={this.state.username}
              onChange={e => this.setState({ username: e.target.value })}
            />
          </Grid>
          <Grid item xs={8} container justify="center" alignItems="center">
            <TextField
              id="password-input"
              label="Password"
              type="password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </Grid>
          <Grid item xs={8} container justify="center" alignItems="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                this.props.login(this.state.username, this.state.password);
                console.log('clicked');
                }}>
              Login
            </Button>
          </Grid>
          <Grid item xs={8} container justify="center" alignItems="center">
            {/* <Button
              variant="contained"
              color="primary"
              onClick = {_ => this.props.getIdToken()}
              >
              Bitsian Login
            </Button> */}
            <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark" data-ux_mode = "redirect"></div>

          </Grid>
        </Grid>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={this.props.auth.isMessageSet}
          autoHideDuration={6000} 
          message={this.props.auth.message}
          onClose={(e) => this.props.setErrorMessage(false, "")}/>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Object.assign({}, auth), dispatch);
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

// export default Login
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))