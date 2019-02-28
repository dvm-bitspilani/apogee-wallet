import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { connect } from 'react-redux'
import {
  CssBaseline,
  Snackbar,
} from '@material-ui/core'
import { bindActionCreators } from 'redux'

import Login from './Login'
import store from '@/store'
import Nav from './Nav';
import Progress from './Progress'
import * as ui from '@/actionCreators/ui'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <CssBaseline />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/" component={Nav} />
          </Switch>
          {this.props.ui.isLoaderShown && <Progress />}
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            open={this.props.ui.isSnackbarShown}
            autoHideDuration={6000}
            message={this.props.ui.snackbarMessage}
            onClose={this.props.hideSnackbar} />
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  ui: state.ui
})

const mapDispatchToProps = dispatch => bindActionCreators(
  Object.assign({}, ui), 
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(App);