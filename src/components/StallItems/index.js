import React, { Component } from 'react'
import {
  AddCircleOutline as AddIcon,
  RemoveCircleOutline as RemoveIcon
} from '@material-ui/icons'
import { List, ListItem, ListItemText, ListItemSecondaryAction } from "@material-ui/core";

import AppList from '../AppList'

class StallItems extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    console.log(AppList)
    let sampleStruct = [
      {
        primary: "Pizza Hut",
        secondary: "",
        

      },
      {
        primary: "Goosebumps",
        secondary: "",
        
      },
    ].map(item => ({
      ...item,
      Icon: () => (<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <AddIcon style={{marginRight: "5px"}}/> <span>2</span> <RemoveIcon style={{marginLeft: "5px"}}/>
      </div>)

    }));
    return (
      <List style={{
        width: "100%"
      }}>
        {
          sampleStruct.map(({ primary, secondary, Icon }) => (
            <ListItem key={primary}>
              <ListItemText primary={primary} secondary={secondary} />
              <ListItemSecondaryAction>
                <Icon />
              </ListItemSecondaryAction>
            </ListItem>
          ))
        }
      </List >
    )
  }
}

export default StallItems