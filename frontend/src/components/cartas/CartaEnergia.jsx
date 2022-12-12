import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { getBackgroundPredominanteColorEnergia } from '../../utils/functions';

const CartaEnergia = (props) => {
  const { nombre, numero, energias, indice,
    onClick, isSeleccionada } = props

  const sxRoot = {
    maxWidth: 150,
      backgroundColor: getBackgroundPredominanteColorEnergia(energias),
      border: isSeleccionada && "primary",
      "border-width": isSeleccionada && "medium",
      "border-style": isSeleccionada && "solid"
  }

  const useStyles = makeStyles({
    root: {
      maxWidth: 150,
      backgroundColor: getBackgroundPredominanteColorEnergia(energias),
      border: isSeleccionada && "primary",
      "border-width": isSeleccionada && "medium",
      "border-style": isSeleccionada && "solid"
      //TODO ORDENAR LAS ENERGIAS SEGUN CANTIDAD Y ARMAR ALGUN FONDO CON DEGRADÉ
      // DE FORMA TAL DE VISUALIZAR CON MAYOR FRANJA EL QUE MAS ENERGIAS APORTA
    },
    media: {
      objectFit: "contain",
      padding: 10,
      //maxHeight: 140
    },
    img: {
      maxHeight: 180
    }
  });

  const classes = useStyles();

  return (
    <Card sx={sxRoot} onClick={() => onClick(numero, indice)}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title={`${energias[0].nombre}`}
          component="img"
          src={`../../images/energias/${energias[0].nombre}.png`}
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {nombre}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CartaEnergia
