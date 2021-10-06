import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React from 'react';
import { getBackgroundColorPokemon, getNumeroPokemon } from '../../utils/functions';

const CartaPokemon = (props) => {
  const { ataque, ataque_esp, cantidad_energia, defensa, defensa_esp, numero, pokemon, ps, suma, tipo_energia, velocidad,
    onClick, isSeleccionada, indice
  } = props

  const sxRoot = {
    maxWidth: 380,
    backgroundColor: getBackgroundColorPokemon(tipo_energia),
    border: isSeleccionada && "chocolate",
    "border-width": isSeleccionada && "medium",
    "border-style": isSeleccionada && "solid"
  }

  const sxMedia = {
    objectFit: "contain",
    maxHeight: 180,
    //maxHeight: 140
  }

  return (
    <Card sx={sxRoot} onClick={() => onClick(numero, indice)}>
      <CardActionArea>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography variant="body2" color="textSecondary" component="p" align="left">
                Tipo: {tipo_energia}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="textSecondary" component="p" align="right">
                Energía: {cantidad_energia}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <Box
          component="img"
          alt=""
          sx={{
            objectFit: "contain",
            margin: "auto",
            display: "block"
            //maxHeight: 140
          }}
          title="Contemplative Reptile"
          src={`../images/pokemons/${getNumeroPokemon(numero)}.png`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {pokemon}
          </Typography>
          <Grid container >
            <Grid item xs={6} >
              <Typography variant="body2" color="textSecondary" component="p" align="left">
                Ataque: {ataque}
              </Typography>
            </Grid>
            <Grid item xs={6} >
              <Typography variant="body2" color="textSecondary" component="p" align="right">
                Defensa: {defensa}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default React.memo(CartaPokemon)