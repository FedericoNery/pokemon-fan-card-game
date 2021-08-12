import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { To } from '../utils/routes';

const useStyles = makeStyles({
    root: {
        //maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const MazoDatoGeneral = ({mazo, history}) => {
    const classes = useStyles();

    const { nombre, numero, cartas } = mazo
    const cantidad = cartas.length

    return (
            <Card className={classes.root} onClick={() => history.push(To.mazoDetallado(numero))}>
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
                            <p>{`Número: ${numero}`}</p>
                            <p>{`Cantidad de cartas: ${cantidad}`}</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    );
}

export default compose(
    withRouter,
)(MazoDatoGeneral)