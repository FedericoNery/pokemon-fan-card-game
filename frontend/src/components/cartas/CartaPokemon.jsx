import { Card, CardActionArea, CardContent, Typography, useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React from 'react';
import { getBackgroundColorPokemon, getNumeroPokemon } from '../../utils/functions';
import CartaPokemonResponsive from './CartaPokemonResponsive';

const CartaPokemon = (props) => {
  const { ataque, cantidad_energia, defensa, numero, pokemon, tipo_energia,
    onClick, isSeleccionada, indice
  } = props

  const sxRoot = {
    maxWidth: 380,
    //minWidth: 150,
    backgroundColor: getBackgroundColorPokemon(tipo_energia),
    border: isSeleccionada && "chocolate",
    "border-width": isSeleccionada && "medium",
    "border-style": isSeleccionada && "solid"
  }

  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const isLowerMd = useMediaQuery(theme.breakpoints.down('md'));

  return <Grid item>
    {isLowerMd ?
      <CartaPokemonResponsive {...props}/> :
      <Card sx={sxRoot} onClick={() => onClick(numero, indice)}>
        <CardActionArea>
          <CardContent>
            <Grid container spacing={1} justifyContent="space-between">
              <Grid item>
                <Typography variant="body2" color={isDark ? "black" : "textSecondary"} align="left">
                  Tipo: {tipo_energia}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" color={isDark ? "black" : "textSecondary"} align="right">
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
              display: "block",
              width: "11vw",
              height: "15vh",
            }}
            title={pokemon}
            src={`../images/pokemons/${getNumeroPokemon(numero)}.png`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" align="center" color={isDark ? "black" : "textSecondary"}>
              {pokemon}
            </Typography>
            <Grid container spacing={1} justifyContent="space-between">
              <Grid item>
                <Typography variant="body2" color={isDark ? "black" : "textSecondary"} align="left">
                  Ataque: {ataque}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" color={isDark ? "black" : "textSecondary"} align="right">
                  Defensa: {defensa}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    }
  </Grid>
}

export default React.memo(CartaPokemon)
