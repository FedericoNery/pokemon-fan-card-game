import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import LoginForm from "./LoginForm";
import { withRouter } from 'react-router';
import { loguearse } from '../../../redux/actionCreators/authenticate';

const ContainerLoginForm = (props) => {
    return <LoginForm {...props} />
}
 
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        { loguearse }, dispatch
    )
}

export default compose(
    withRouter,
    connect(null, mapDispatchToProps)
)(ContainerLoginForm)
