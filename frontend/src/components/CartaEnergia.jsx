import { Badge, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { getBackgroundPredominanteColorEnergia } from '../utils/functions';
import BadgeEnergias from './BadgeEnergias';

const CartaEnergia = (props) => {
  const { nombre, numero, energias } = props

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      backgroundColor: getBackgroundPredominanteColorEnergia(energias),
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
    <Card className={classes.root}>
      <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={6} spacing={1}>
              {energias.map(x => 
                <BadgeEnergias {...x}/>)
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
          classes={classes}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {nombre}
          </Typography>
         {/*  <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}

export default CartaEnergia