import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Typography,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
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
    super(props);

    this.state = {
      totalPrice: 0
    }

    this.computeTotalPrice.bind(this);
  }
  componentWillMount() {
    console.log('All profshows being fetched')
    this.props.getAllProfshows();
    this.computeTotalPrice()
  }

  componentDidUpdate() {
    this.computeTotalPrice()
  }

  computeTotalPrice() {
    let showsCart = this.props.profshows.showsCart;
    let allProfshowsData = this.props.profshows.allProfshowsData;
    let totalPrice = 0;

    if (showsCart && allProfshowsData && allProfshowsData.shows && allProfshowsData.combos) {
      Object.keys(showsCart.individual).map(showId => {
        let show = allProfshowsData.shows.filter(show => show.id == showId)[0];
        totalPrice += (show.price * showsCart.individual[showId]);
      });

      Object.keys(showsCart.combos).map(comboId => {
        let combo = allProfshowsData.combos.filter(combo => combo.id == comboId)[0];
        totalPrice += (combo.price * showsCart.combos[comboId]);
      });
    }

    if (totalPrice !== this.state.totalPrice) {
      this.setState({ totalPrice });
    }
  }

  render() {
    let shows = this.props.profshows.allProfshowsData.shows;
    let combos = this.props.profshows.allProfshowsData.combos;
    console.log(shows);
    console.log(combos);
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
              // ((show.allow_bitsians && this.props.isBitsian) || (show.allow_participants && !this.props.isBitsian))
              // &&
              <ListItem key={show.id}>
                <ListItemText primary={show.name} secondary={`INR ${show.price}`} />
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <AddIcon onClick = {this.props.increaseShowQty.bind(null, show.id)} style={{ marginRight: "5px" }} />
                  <span className = "qty-display">{this.props.profshows.showsCart.individual[show.id] ? this.props.profshows.showsCart.individual[show.id] : 0}</span>
                  <RemoveIcon onClick = {this.props.decreaseShowQty.bind(null, show.id)} style={{ marginLeft: "5px" }} />
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
              // ((combo.allow_bitsians && this.props.isBitsian) || (combo.allow_participants && !this.props.isBitsian))
              // &&
              <ListItem key={combo.id}>
                <ListItemText primary={combo.name} secondary={`${combo.shows.map(show => Object.values(show))} INR${combo.price}`} />
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <AddIcon onClick = {this.props.increaseComboQty.bind(null, combo.id)} style={{ marginRight: "5px" }} />
                  <span className = "qty-display">{this.props.profshows.showsCart.combos[combo.id] ? this.props.profshows.showsCart.combos[combo.id] : 0}</span>
                  <RemoveIcon onClick = {this.props.decreaseComboQty.bind(null, combo.id)} style={{ marginLeft: "5px" }} />
                </div>
              </ListItem>
            )
          }
        </List>
        <div className={classes.bottom}>
          <Typography variant="h6">Total Price: INR <span>{this.state.totalPrice}</span></Typography>

          <Button
            variant="contained"
            color="primary"
            onClick = {this.props.buyTickets}
            >
            Buy Tickets
          </Button>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  profshows: state.profshows,
  isBitsian: state.userProfile.isBitsian
})
const mapDispatchToProps = dispatch => bindActionCreators(
  Object.assign({}, profshows), 
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Profshows)