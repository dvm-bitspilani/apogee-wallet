import React, { Component } from 'react'
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core'
import { connect } from 'react-redux'

import MoneyDrawerBase from './MoneyDrawerBase'
import classes from './styles.module.scss'

class RecieveMoneyDrawer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <MoneyDrawerBase open={this.props.open} close={this.props.close}>
        <div className={classes.moneyDrawersCommon}
          style={{
            justifyContent: "flex-start"
          }}
        >
          <h3
            style={{
              marginBottom: "20px"
            }}>PROFSHOWS SIGNED</h3>
          <Table>
            <TableRow>
              <TableCell>Profshow</TableCell>
              <TableCell align="right">Quantity</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>SEL</TableCell>
              <TableCell align="right">2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Guthrie Govan</TableCell>
              <TableCell align="right">1</TableCell>
            </TableRow>

          </Table>
          {/* <QRCode value={this.props.userProfile.qrCode} /> */}
        </div>

      </MoneyDrawerBase>
    )
  }
}

const mapStateToProps = state => ({
  userProfile: state.userProfile
})
export default connect(mapStateToProps, null)(RecieveMoneyDrawer)