import { Box } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { tiendaActions } from '../../../redux/reducers/tiendaReducer';
import FiltroDeBusqueda from './FiltroDeBusqueda';
import TablaCartas from './TablaCartas';

const TiendaJugador = ({ cartas }) => {

  return <Box sx={{ margin: 5 }}>
    <>
      <FiltroDeBusqueda />
      <TablaCartas />
    </>
  </Box>
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { guardarCartas: tiendaActions.guardarCartas }, dispatch)
}

export default compose(
  connect(null, mapDispatchToProps)
)(TiendaJugador)
