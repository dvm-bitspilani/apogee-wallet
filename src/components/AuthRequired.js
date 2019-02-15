import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const authRequired = ({ isLoggedIn, children }) => {
    return (isLoggedIn ? children : <Redirect to="/as" />)
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps, null)(authRequired)