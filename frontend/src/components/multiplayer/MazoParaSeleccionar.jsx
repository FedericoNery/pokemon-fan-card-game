import React from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';
import { ROUTES } from '../../utils/routes';
import { guardarMazoSeleccionado } from '../../redux/actionCreators/juego';
import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const useStyles = makeStyles({
  root: {
    //maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const MazoParaSeleccionar = ({ mazo, history, guardarMazoSeleccionado }) => {
  const classes = useStyles();

  const { nombre, numero, cartas } = mazo
  const cantidad = cartas.length

  const onClick = () => {
    guardarMazoSeleccionado(numero)
    history.push(ROUTES.CREATE_OR_JOIN_ROOM)
  }

  return (
    <Card className={classes.root} onClick={onClick}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
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
    </Card >
  );
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { guardarMazoSeleccionado }, dispatch
  )
}

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(MazoParaSeleccionar)
