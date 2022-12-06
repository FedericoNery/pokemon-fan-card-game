import { makeStyles } from '@mui/styles';
import React from 'react';
import { getBackgroundPredominanteColorEnergia } from '../../utils/functions';
import BadgeEnergias from './BadgeEnergias';
import Grid from '@mui/material/Grid';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const CartaEnergia = (props) => {
  const { nombre, numero, energias, indice,
    onClick, isSeleccionada } = props

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      backgroundColor: getBackgroundPredominanteColorEnergia(energias),
      border: isSeleccionada && "primary",
      "border-width": isSeleccionada && "medium",
      "border-style": isSeleccionada && "solid"
      //TODO ORDENAR LAS ENERGIAS SEGUN CANTIDAD Y ARMAR ALGUN FONDO CON DEGRADÉ
      // DE FORMA TAL DE VISUALIZAR CON MAYOR FRANJA EL QUE MAS ENERGIAS APORTA
    },
    media: {
      objectFit: "contain"
      //maxHeight: 140
    },
    img: {
      maxHeight: 180
    }
  });

  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={() => onClick(numero, indice)}>
      <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={6} spacing={1}>
              {energias.map((x, index) =>
                <BadgeEnergias {...x} key={`kbadgeenergias${index}`}/>)
              }
            </Grid>
            <Grid item xs={6} spacing={1}>
              {/* <Typography variant="body2" color="textSecondary" component="p" align="right">
                Energía: {cantidad_energia}
              </Typography> */}
            </Grid>
          </Grid>
        </CardContent>

      <CardActionArea>
        <CardMedia
          className={classes.media}
          title="Contemplative Reptile"
          component="img"
          src={`../../images/energias/${energias[0].nombre}.png`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {nombre}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CartaEnergia
