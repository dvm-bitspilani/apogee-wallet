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
import { bindActionCreators } from 'redux'
import * as vendors from "@/actionCreators/vendors"

import AppList from '../AppList'

class StallItems extends Component {
  componentWillMount() {
    this.props.getItems(this.props.match.params.id);
  }

  render() {
    let struct;

    if (!this.props.items) struct = [];
    else {
      struct = this.props.items.map(item => ({
        ...item,
        primary: item.name,
        secondary: item.price,
        Icon: () => (<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <AddIcon style={{ marginRight: "5px" }} /> <span>2</span> <RemoveIcon style={{ marginLeft: "5px" }} />
        </div>)
      }));
    }

    return (
      <Fragment>
        <Typography variant="h4"> {this.props.stallName} </Typography>
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
  items: state.vendors.items,
  stallName: state.vendors.name,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(Object.assign({}, vendors), dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(StallItems)