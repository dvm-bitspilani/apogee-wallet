import React, { Component } from "react";
import { Typography, List, ListSubheader, ListItem, ListItemText, Divider } from "@material-ui/core";
import { Mail as MailIcon, ArrowForwardIos as Arrow } from "@material-ui/icons";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AuthRequired from "../AuthRequired";
import classes from './styles.module.scss';
import AppList from "../AppList";
import * as vendors from "@/actionCreators/vendors"

class Stalls extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    console.log(this.props)
    this.props.getVendors()
  }
  render () {
    const sampleStruct = [
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

export default connect(null, mapDispatchToProps)(Stalls)