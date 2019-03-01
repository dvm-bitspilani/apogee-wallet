import React, { Component } from "react";
import {
  Typography,
  Button
} from "@material-ui/core";
import {
  ArrowForwardIos as Arrow
} from "@material-ui/icons";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import AuthRequired from "../AuthRequired";
import AppList from "../AppList";
import * as vendors from "@/actionCreators/vendors"

class Stalls extends Component {
  componentWillMount() {
    this.props.getVendors()
  }
  render() {
    let sampleStruct = [
      {
        primary: "Pizza Hut",
        secondary: "",
        icon: Arrow
      },
      {
        primary: "Goosebumps",
        secondary: "",
        icon: Arrow
      },
    ];

    // let sampleStruct;
    if (!this.props.vendors || !this.props.vendors.vendors) sampleStruct = []

    else {
      sampleStruct = this.props.vendors.vendors.map(({ id, name }) => ({
        primary: name,
        secondary: "",
        link: `/stall/${id}/items`,
        Icon: () => <Arrow />
      }))
    }
    return (
      <AuthRequired>
        <Typography variant="h4">STALLS</Typography>

        <AppList items={sampleStruct}/>

      </AuthRequired>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators(Object.assign({}, vendors), dispatch)
)

const mapStateToProps = state => ({
  vendors: state.vendors
})

export default connect(mapStateToProps, mapDispatchToProps)(Stalls)