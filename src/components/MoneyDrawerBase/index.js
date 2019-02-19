import React, { Component } from 'react'
import { Drawer } from '@material-ui/core'

const MoneyDrawerBase = ({ children, open, close }) => {
  console.log(open)
  return (
    <Drawer
      open={open} 
      onClose={close}
      variant="temporary" 
      anchor="bottom">
      {children}
    </Drawer>
  )
}

export default MoneyDrawerBase