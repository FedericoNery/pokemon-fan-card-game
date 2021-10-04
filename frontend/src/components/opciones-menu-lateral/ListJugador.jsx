import { Inbox, Mail } from '@mui/icons-material';
import { Divider, Icon, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { To } from '../../utils/routes';



const ListJugador = (props) => {
    const { history } = props
    const listadoOpciones = [
        { titulo: 'Jugador vs COM', onClick: () => history.push(To.seleccionarMazoDeJuego()) },
        { titulo: 'Jugador vs Jugador', onClick: () => {} },
        { titulo: 'Mazos', onClick: () => history.push(To.mazos()) },
        { titulo: 'Tienda', onClick: () => history.push(To.tienda()) }
    ]
    
    const listadoOpcionesSecundarias = [
        { titulo: 'Datos Jugador', onClick: () => {} },
        { titulo: 'Configuracion', onClick: () => {} },
        { titulo: 'Acerca de', onClick: () => {} },
    ]

    return <><List>
        {listadoOpciones.map((x, index) => {
            const { titulo, onClick } = x

            return <ListItem button key={`${titulo}${index}`} onClick={onClick}>
                <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
                <ListItemText primary={titulo} />
            </ListItem>
        }
        )}
    </List>
        <Divider />
        <List>
            {listadoOpcionesSecundarias.map((x, index) => {
                const { titulo, onClick } = x

                return <ListItem button key={`${titulo}${index}`} onClick={onClick}>
                    <ListItemIcon>{index % 2 === 0 ? <Icon /> : <Mail />}</ListItemIcon>
                    <ListItemText primary={titulo} />
                </ListItem>
            }
            )}
        </List>
    </>
}

export default compose(
    withRouter,
)(ListJugador)