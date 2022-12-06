import Grid from '@mui/material/Grid';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import BadgeEnergias from '../BadgeEnergias';
import { getBackgroundPredominanteColorEnergia } from '../../../utils/functions';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

const CartaEnergiaDraggeable = (props) => {
    const { nombre, numero, energias, index, itemObject } = props

    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
            backgroundColor: getBackgroundPredominanteColorEnergia(energias),
            margin: 5,
            padding: 8,
            borderRadius: 10,
            "&:hover": {
                opacity: 0.85
            }
            //TODO ORDENAR LAS ENERGIAS SEGUN CANTIDAD Y ARMAR ALGUN FONDO CON DEGRADÉ
            // DE FORMA TAL DE VISUALIZAR CON MAYOR FRANJA EL QUE MAS ENERGIAS APORTA
        },
        media: {
            objectFit: "contain",
            margin: "auto",
            display: "block",
            maxHeight: 180,
            maxWidth: 180,
            //maxHeight: 140
        },
        img: {
            maxHeight: 180,
            maxWidth: 180,
            objectFit: "contain"
        },
    });

    const classes = useStyles();

    return (
        <Draggable draggableId={itemObject.id} key={itemObject.id} index={index}>
            {(provided) => (
                <div
                    className={classes.root}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Grid container spacing={1}>
                        <Grid item xs={6} spacing={1}>
                            {energias.map((x, index) =>
                                <BadgeEnergias {...x} key={`kbadgeenergias${index}`}/>)
                            }
                        </Grid>
                    </Grid>
                    <img
                        alt=""
                        className={classes.media}
                        title={`Imagen carta energía ${energias[0].nombre}`}
                        src={`../../images/energias/${energias[0].nombre}.png`}
                        classes={classes}
                    />
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                        {nombre}
                    </Typography>
                </div>
            )}
        </Draggable>
    );
}

export default CartaEnergiaDraggeable
