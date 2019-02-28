import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  CssBaseline,
  Snackbar,
} from '@material-ui/core'

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
              onClose={_ => {}} />
          </Fragment>
        </Router>
    );
  }
}

const mapStateToProps = state => ({
  ui: state.ui
})

export default connect(mapStateToProps, null)(App);