import { Box, Typography } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { tiendaActions } from '../../../redux/reducers/tiendaReducer';
import FiltroDeBusqueda from './FiltroDeBusqueda';
import TablaCartas from './TablaCartas';

const TiendaJugador = ({ cartas }) => {

  return <Box sx={{ margin: 5 }}>
    <>
      <Typography variant="h3" gutterBottom align='center' sx={{ marginTop: 5 }}>
        Tienda
      </Typography>
      <FiltroDeBusqueda />
      <TablaCartas cartas={cartas} />
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
