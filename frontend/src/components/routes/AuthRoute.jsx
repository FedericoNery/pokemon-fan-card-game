import PropTypes from 'prop-types'
import React from 'react'
import { Redirect } from 'react-router-dom'
import { useIsLogged } from '../../hooks/useIsLogged'

const AuthRoute = (props) => {
  const isLogged = useIsLogged()
  return isLogged ? props.children : <Redirect to="/login"/>
}

AuthRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string
}

export default AuthRoute
