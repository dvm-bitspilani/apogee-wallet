import React, { Component } from "react";
import AuthRequired from "../AuthRequired";
import { Typography, List, ListSubheader, ListItem, ListItemText, Divider } from "@material-ui/core";
import { Mail as MailIcon, ArrowForwardIos as Arrow } from "@material-ui/icons";

import classes from './styles.module.scss';
import AppList from "../AppList";

export default class Stalls extends Component {
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