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
import request from 'request'

import MoneyDrawerBase from './MoneyDrawerBase'
import classes from './styles.module.scss'
import * as api from '@/constants/api'

class RecieveMoneyDrawer extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    request({
      method: 'GET',
      url: api.GET_PROFSHOWS,
      headers: {
        'X-Wallet-Token': api.WALLET_TOKEN,
        'Authorization': `JWT ${this.props.auth.JWT}`
      }
    }, function (error, response, body) {
      console.log('Status:', response.statusCode);
      console.log('Headers:', JSON.stringify(response.headers));
      console.log('Response:', body);
    });
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
            <TableHead>
              <TableRow>
                <TableCell>Profshow</TableCell>
                <TableCell align="right">Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>SEL</TableCell>
                <TableCell align="right">2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Guthrie Govan</TableCell>
                <TableCell align="right">1</TableCell>
              </TableRow>
            </TableBody>

          </Table>
          {/* <QRCode value={this.props.userProfile.qrCode} /> */}
        </div>

      </MoneyDrawerBase>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  userProfile: state.userProfile,
})
export default connect(mapStateToProps, null)(RecieveMoneyDrawer)