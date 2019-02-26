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
  componentWillMount() {
    console.log('All profshows being fetched')
    this.props.getAllProfshows();
  }
  render() {
    let shows = this.props.profshows.allProfshowsData.shows;
    let combos = this.props.profshows.allProfshowsData.combos;
    console.log(combos)
    return (
      <>
        <Typography variant="h4">PROFSHOWS</Typography>
        <List id={classes.profshowList}>
          <ListSubheader style={{
            fontSize: "20px"
          }}>Individual</ListSubheader>
          {
            shows
            &&
            shows.map(show => 
              <ListItem key={show.id}>
                <ListItemText primary={show.name} secondary={`INR ${show.price}`} />
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <AddIcon style={{ marginRight: "5px" }} />
                  <span>{0}</span>
                  <RemoveIcon style={{ marginLeft: "5px" }} />
                </div>
              </ListItem>
            )
          }
          <ListSubheader style={{
            fontSize: "20px"
          }}>Combos</ListSubheader>
          {
            combos
            &&
            combos.map(combo =>
              <ListItem key={combo.id}>
                <ListItemText primary={combo.name} secondary={`${combo.shows.map(show => Object.values(show))} INR${combo.price}`} />
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <AddIcon style={{ marginRight: "5px" }} />
                  <span>{0}</span>
                  <RemoveIcon style={{ marginLeft: "5px" }} />
                </div>
              </ListItem>
            )
          }
        </List>
        <div className={classes.bottom}>
          <Typography variant="h6">Total Price: INR <span>{}</span></Typography>

          <Button
            variant="contained"
            color="primary"
            >
            Place Order
          </Button>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  profshows: state.profshows
})
const mapDispatchToProps = dispatch => bindActionCreators(
  Object.assign({}, profshows), 
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Profshows)