import PropTypes from 'prop-types'
import React from 'react'
import {Redirect} from 'react-router-dom'

const PrivateRoute = (props) => {
  const isLogged = true
  return isLogged ? props.children : <Redirect to="" />
}   

PrivateRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string
}

export default PrivateRoute