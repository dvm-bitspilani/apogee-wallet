import React, { Component } from 'react'
import { Drawer } from '@material-ui/core'

import classes from './baseStyles.module.scss'

const MoneyDrawerBase = ({ children, open, close }) => {
  console.log(open)
  return (
    <Drawer
      open={open} 
      onClose={close}
      variant="temporary" 
      anchor="bottom"
      classes={{
        paper: classes.moneyDrawerBase
      }}>
      {children}
    </Drawer>
  )
}

export default MoneyDrawerBase