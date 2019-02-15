import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeAuthStatus } from '../../actionsCreators/auth'
import AuthRequired from '../AuthRequired'
import styles from './Test.module.css'

class Test extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <AuthRequired>
            <div 
                className={styles.testClass} 
                dataTest={this.props.testProp}
                onClick={ _ => { 
                    this.props.changeAuthStatus('hello');
                }}/>
        </AuthRequired>
        )

    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        changeAuthStatus
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Test);