import { Grid } from "@mui/material"
import CartaEnergiaDraggeable from "./CartaEnergiaDraggeable"
import CartaPokemonDraggeable from "./CartaPokemonDraggeable"

const StrategyCartasPokemonDraggeables = ({ datos_carta }) => {
  const { numero, idDraggeable } = datos_carta
  if (numero.includes("P")) {
    return <Grid item xs={5} sm={6} md={4} xl={3}>
      <CartaPokemonDraggeable {...datos_carta} itemObject={{ id: `${numero}cm` }} index={idDraggeable} />
    </Grid>
  }
  if (numero.includes("E")) {
    return <Grid item xs={5} sm={6} md={4} xl={3}>
      <CartaEnergiaDraggeable {...datos_carta} itemObject={{ id: `${numero}cm` }} index={idDraggeable} />
    </Grid>
  }
  return <></>
}

export default StrategyCartasPokemonDraggeables;
