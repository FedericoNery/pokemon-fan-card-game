import { Inbox, Mail } from '@mui/icons-material';
import { Divider, List, ListItem, ListItemIcon, ListItemText, Icon } from '@mui/material';
import React from 'react'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { To } from '../../utils/routes';


const ListAdministrador = (props) => {
  const { history } = props
    const listadoOpciones = [
        { titulo: 'Usuarios', onClick: () => history.push(To.listadoUsuarios()) },
        { titulo: 'Tienda', onClick: () => history.push(To.tienda()) },
    ]
    
    const listadoOpcionesSecundarias = [
        { titulo: '---Proximamente', onClick: () => {} },
        { titulo: '---Proximamente', onClick: () => {} },
        { titulo: '---Proximamente', onClick: () => {} },
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
)(ListAdministrador)
