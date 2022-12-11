import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { getBackgroundColorPokemon, getNumeroPokemon } from '../../../utils/functions';
import Ataque from '../carta-pokemon/atoms/Ataque';
import Defensa from '../carta-pokemon/atoms/Defensa';


const CartaPokemonDraggeable = (props) => {
    const { ataque, cantidad_energia, defensa, numero, pokemon, tipo_energia, itemObject, index } = props

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
            minWidth: 180,
            objectFit: "contain"
        },
    });

    const classes = useStyles();
    return (
        <Draggable draggableId={itemObject.id} index={index}>
            {(provided) => (
                <div
                    id="cartaPokemonDraggeable"
                    ref={provided.innerRef}
                    /* ContainerComponent="div"
                    ContainerProps={{ ref: provided.innerRef }} */
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={classes.root}
                >
                    <Grid container spacing={1}>
                        <Grid item xs={6} spacing={1}>
                            <Typography variant="body2" color={"black"} component="p" align="left">
                                Tipo: {tipo_energia}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} spacing={1}>
                            <Typography variant="body2" color={"black"} component="p" align="right">
                                Energía: {cantidad_energia}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box
                        component="img"
                        alt={`Pokemon Image of ${pokemon}`}
                        sx={{
                            objectFit: "contain",
                            margin: "auto",
                            display: "block",
                            minWidth: 180
                            //maxHeight: 140
                        }}
                        title={`Pokemon Image of ${pokemon}`}
                        src={`../images/pokemons/${getNumeroPokemon(numero)}.png`}
                    />
                    <Typography gutterBottom variant="h5" component="h2" align="center" color={"black"}>
                        {pokemon}
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={6} spacing={1}>
                            <Ataque ataque={ataque}/>
                        </Grid>
                        <Grid item xs={6} spacing={1}>
                          <Defensa defensa={defensa}/>
                        </Grid>
                    </Grid>
                </div>
            )}
        </Draggable>
    );
}

export default CartaPokemonDraggeable
