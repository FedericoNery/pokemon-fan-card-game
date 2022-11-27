import { Badge, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import { getColorEnergiaBadge } from '../../utils/functions';

const BadgeEnergias = ({ nombre, numero }) => {
    const cantidadDeComponentes = [...Array(numero)]
    const useStyles = makeStyles({
        badge: {
            backgroundColor: getColorEnergiaBadge(nombre),
            //TODO ORDENAR LAS ENERGIAS SEGUN CANTIDAD Y ARMAR ALGUN FONDO CON DEGRADÉ
            // DE FORMA TAL DE VISUALIZAR CON MAYOR FRANJA EL QUE MAS ENERGIAS APORTA
        },
    });

    const classes = useStyles();
    return cantidadDeComponentes.map((x, index) =>
        <Tooltip title={nombre} key={`keyBadge${index}`}>
            <Badge classes={classes} overlap="circular" badgeContent={nombre[0]} />
        </Tooltip>)
}

export default BadgeEnergias;
