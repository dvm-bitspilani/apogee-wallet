import React, { Component, Fragment } from 'react'
import {
  AddCircleOutline as AddIcon,
  RemoveCircleOutline as RemoveIcon
} from '@material-ui/icons'
import {
  List,
  ListItem,
  Typography,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { connect } from 'react-redux'
import request from 'request'

import AppList from '../AppList'

class StallItems extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      stallName: "",
      items: []
    }
  }

  componentWillMount() {
    request({
      method: 'GET',
      url: `http://139.59.64.214/wallet/vendor/${this.props.match.params.id}`,
      headers: {
        'Content-Type': 'application/json',
        'X-Wallet-Token': 'samp1e_Token',
        'Authorization': `JWT ${this.props.auth.JWT}`
      }
    }, (error, response, body) => {
      try {
        body = JSON.parse(body)
        this.setState({
          stallName: body.name
        })
      } catch (e) { }
    });
    request({
      method: 'GET',
      url: `http://139.59.64.214/wallet/vendor/${this.props.match.params.id}/items`,
      headers: {
        'Content-Type': 'application/json',
        'X-Wallet-Token': 'samp1e_Token',
        'Authorization': `JWT ${this.props.auth.JWT}`
      }
    }, (error, response, body) => {
      try {
        body = JSON.parse(body)
        this.setState({
          items: body
        })
      } catch (e) { }
    });
  }

  render() {
    console.log(this.state.items)
    let struct = this.state.items.map(item => ({
      ...item,
      primary: item.name,
      secondary: item.price,
      Icon: () => (<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <AddIcon style={{ marginRight: "5px" }} /> <span>2</span> <RemoveIcon style={{ marginLeft: "5px" }} />
      </div>)

    }));
    return (
      <Fragment>
        <Typography variant="h4"> {this.state.stallName} </Typography>
        <List style={{
          width: "100%"
        }}>
          {
            struct.map(({ primary, secondary, Icon }) => (
              <ListItem key={primary}>
                <ListItemText primary={primary} secondary={secondary} />
                <ListItemSecondaryAction>
                  <Icon />
                </ListItemSecondaryAction>
              </ListItem>
            ))
          }
        </List >
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps, null)(StallItems)