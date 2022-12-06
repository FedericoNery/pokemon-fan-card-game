import { Grid } from "@mui/material"
import CartaEnergiaDraggeable from "./CartaEnergiaDraggeable"
import CartaPokemonDraggeable from "./CartaPokemonDraggeable"

const StrategyCartasPokemonDraggeables = ({ datos_carta }) => {
  const { numero } = datos_carta
  if (numero.includes("P")) {
    return <Grid item xs={6} sm={6} md={4}>
      <CartaPokemonDraggeable {...datos_carta} itemObject={{ id: `${numero}cm` }} />
    </Grid>
  }
  if (numero.includes("E")) {
    return <Grid item xs={6} sm={6} md={4}>
      <CartaEnergiaDraggeable {...datos_carta} itemObject={{ id: `${numero}cm` }} />
    </Grid>
  }
  return <></>
}

export default StrategyCartasPokemonDraggeables;
