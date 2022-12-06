import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { To } from '../../../../utils/routes';

const useStyles = makeStyles({
  root: {
    //maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const MazoDatoGeneral = ({ mazo, history }) => {
  const classes = useStyles();

  const { nombre, numero, cartas } = mazo
  const cantidad = cartas.length

  return (
    <Card className={classes.root} onClick={() => history.push(To.mazoDetallado(numero))}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/pokemon_card_back.jpg"
          title="Pokemon card back"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {nombre}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Número: ${numero}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Cantidad de cartas: ${cantidad}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default compose(
  withRouter,
)(MazoDatoGeneral)
