import { Container, Grid, Grow } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { getBackgroundColorPokemon, getNumeroPokemon } from '../../../utils/functions';


const CartaPokemonDraggeable = (props) => {
    const { ataque, ataque_esp, cantidad_energia, defensa, defensa_esp, numero, pokemon, ps, suma, tipo_energia, velocidad, itemObject, index } = props

    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
            backgroundColor: getBackgroundColorPokemon(tipo_energia),
            margin: 5,
            padding: 8,
            borderRadius: 10,
            "&:hover": {
                opacity: 0.85
            }
        },
        media: {
            objectFit: "contain",
            margin: "auto",
            display: "block"
            //maxHeight: 140
        },
        img: {
            maxHeight: 180,
            objectFit: "contain"
        },
    });

    const classes = useStyles();

    return (
        <Draggable draggableId={itemObject.id} key={itemObject.id} index={index}>
            {(provided) => (
                <div
                    id="cartaPokemonDraggeable"
                    ref={provided.innerRef}
                    ContainerComponent="div"
                    ContainerProps={{ ref: provided.innerRef }}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={classes.root}
                >
                    <Grid container spacing={1}>
                        <Grid item xs={6} spacing={1}>
                            <Typography variant="body2" color="textSecondary" component="p" align="left">
                                Tipo: {tipo_energia}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} spacing={1}>
                            <Typography variant="body2" color="textSecondary" component="p" align="right">
                                Energía: {cantidad_energia}
                            </Typography>
                        </Grid>
                    </Grid>
                    <img
                        alt=""
                        className={classes.media}
                        title="Contemplative Reptile"
                        src={`../images/pokemons/${getNumeroPokemon(numero)}.png`}
                        classes={classes}
                    />
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                        {pokemon}
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={6} spacing={1}>
                            <Typography variant="body2" color="textSecondary" component="p" align="left">
                                Ataque: {ataque}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} spacing={1}>
                            <Typography variant="body2" color="textSecondary" component="p" align="right">
                                Defensa: {defensa}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            )}
        </Draggable>
    );
}

export default CartaPokemonDraggeable

/*
<Draggable draggableId={itemObject.id} key={itemObject.id} index={index}>
            {(provided) => (
                <div
                ref={provided.innerRef}
                ContainerComponent="div"
                ContainerProps={{ ref: provided.innerRef }}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                <Card className={classes.root}>
                     <CardActionArea
                     onClick={(e) => e.stopPropagation()}
                    /* ref={provided.innerRef}
                    ContainerComponent="div"
                    ContainerProps={{ ref: provided.innerRef }}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                >
                        <CardContent>
                            <Grid container spacing={1}>
                                <Grid item xs={6} spacing={1}>
                                    <Typography variant="body2" color="textSecondary" component="p" align="left">
                                        Tipo: {tipo_energia}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} spacing={1}>
                                    <Typography variant="body2" color="textSecondary" component="p" align="right">
                                        Energía: {cantidad_energia}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardMedia
                            className={classes.media}
                            title="Contemplative Reptile"
                            component="img"
                            src={`../images/pokemons/${getNumeroPokemon(numero)}.png`}
                            classes={classes}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" align="center">
                                {pokemon}
                            </Typography>
                            <Grid container spacing={1}>
                                <Grid item xs={6} spacing={1}>
                                    <Typography variant="body2" color="textSecondary" component="p" align="left">
                                        Ataque: {ataque}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} spacing={1}>
                                    <Typography variant="body2" color="textSecondary" component="p" align="right">
                                        Defensa: {defensa}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                     </CardActionArea>
                    {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> }
                </Card>
                </div>
            )}
        </Draggable>

        */