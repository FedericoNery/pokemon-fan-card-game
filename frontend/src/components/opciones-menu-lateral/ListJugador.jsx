import { List } from '@mui/material';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { To } from '../../utils/routes';
import DeckBuilderIcon from './atoms/DeckBuilderIcon';
import ListItemCustom from './atoms/ListItemCustom';
import MultiplayerIcon from './atoms/MultiplayerIcon';
import TiendaIcon from './atoms/TiendaIcon';


const ListJugador = (props) => {
  const { history } = props
  const listadoOpciones = [
    { titulo: 'Jugador vs Jugador', onClick: () => history.push(To.seleccionarMazoDeJuegoMultiplayer()), icon: <MultiplayerIcon /> },
    { titulo: 'Mazos', onClick: () => history.push(To.mazos()), icon: <DeckBuilderIcon /> },
    { titulo: 'Tienda', onClick: () => history.push(To.tienda()), icon: <TiendaIcon /> }
  ]

  const listItems = listadoOpciones.map((configListItem, index) => <ListItemCustom key={`kListItemCustom${index}`} {...configListItem} />)

  return <List>
    {listItems}
  </List>
}

export default compose(
  withRouter,
)(ListJugador)
