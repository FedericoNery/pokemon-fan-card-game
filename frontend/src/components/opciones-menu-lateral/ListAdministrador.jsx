import GroupIcon from '@mui/icons-material/Group';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { To } from '../../utils/routes';

const ListAdministrador = (props) => {
    const { history } = props
    const listadoOpciones = [
        { titulo: 'Usuarios', onClick: () => history.push(To.listadoUsuarios()), icon: <GroupIcon /> },
        { titulo: 'Tienda', onClick: () => history.push(To.tienda()) , icon: <LocalOfferIcon />},
    ]

    return <><List>
        {listadoOpciones.map((x, index) => {
            const { titulo, onClick, icon } = x

            return <ListItem button key={`${titulo}${index}`} onClick={onClick}>
                <ListItemIcon>{icon}</ListItemIcon>
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
