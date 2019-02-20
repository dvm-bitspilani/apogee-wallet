import React, { Component } from 'react'

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
    ];    
    return (
      <AppList items={sampleStruct}></AppList>
    )
  }
  
}

export default StallItems