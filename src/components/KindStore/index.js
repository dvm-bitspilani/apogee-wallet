import React, { Component } from "react";
import {
  Typography
} from "@material-ui/core";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AuthRequired from "../AuthRequired";
import * as kindstore from "@/actionCreators/kindstore"
import * as api from "@/constants/api"

import classes from "./styles.module.scss"

class KindStore extends Component {
  componentWillMount() {
    this.props.getKindStores()
  }
  render() {
    let responseStores = this.props.kindstore.stores;
    let stores;
    if (!this.props.kindstore || !this.props.kindstore.stores) stores = []
    else {
      stores = Object.keys(responseStores).map((itemName) => ({
          name: itemName,
          is_available: responseStores[itemName].is_available,
          image: `${api.API_BASE}/backend-media/${responseStores[itemName].image}`,
          price: responseStores[itemName].price
      }));
    }

    return (
      <AuthRequired>
        <Typography variant="h4">KIND STORE</Typography>

        {
            stores.map(({name, is_available, image, price}) => <div className = {classes.item} key = {name}>
                <img src = {image} className = {classes.itemImg} alt = {name}/>
                <div className = {classes.itemContent}>
                    <Typography variant="h5">{name}</Typography>
                    <Typography variant="p">{price} Tokens</Typography>
                    <Typography variant="p" className = {(is_available) ? classes.available : classes.unavailable}>{(is_available) ? `Available` : `Not available`}</Typography>
                </div>
            </div>)
        }

      </AuthRequired>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators(Object.assign({}, kindstore), dispatch)
)

const mapStateToProps = state => ({
  kindstore: state.kindstore
})

export default connect(mapStateToProps, mapDispatchToProps)(KindStore)