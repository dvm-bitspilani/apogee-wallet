import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Typography,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Divider,
  Button
} from "@material-ui/core";
import {
  AddCircleOutline as AddIcon,
  RemoveCircleOutline as RemoveIcon,
} from "@material-ui/icons";

import * as profshows from '@/actionCreators/profshows'
import classes from './styles.module.scss'

class Profshows extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    console.log('All profshows being fetched')
    this.props.getAllProfshows();
  }
  render() {
    return (
      <>
        <Typography variant="h4">PROFSHOWS</Typography>
        <List id={classes.profshowList}>
          <ListSubheader style={{
            fontSize: "20px"
          }}>Individual</ListSubheader>
          <ListItem key={1}>
            <ListItemText primary={"Hello"} secondary={'Kitty'} />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <AddIcon style={{ marginRight: "5px" }} />
              <span>{69}</span>
              <RemoveIcon style={{ marginLeft: "5px" }} />
            </div>
          </ListItem>
          <ListSubheader style={{
            fontSize: "20px"
          }}>Combos</ListSubheader>
          <ListItem key={1}>
            <ListItemText primary={"Hello"} secondary={'Kitty'} />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <AddIcon style={{ marginRight: "5px" }} />
              <span>{69}</span>
              <RemoveIcon style={{ marginLeft: "5px" }} />
            </div>
          </ListItem>
        </List>
      </>
    )
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators(
  Object.assign({}, profshows), 
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Profshows)