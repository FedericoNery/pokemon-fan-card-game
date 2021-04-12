import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Inbox, Mail } from '@material-ui/icons';
import React from 'react'

const ListJugador = (props) => {
    return <><List>
        {['Jugador vs COM', 'Jugador vs Jugador', 'Mazos', 'Tienda'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        ))}
    </List>
        <Divider />
        <List>
            {['Datos Jugador', 'Configuracion', 'Acerca de'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    </>
}

export default ListJugador;