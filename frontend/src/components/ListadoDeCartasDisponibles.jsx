import { List } from "@mui/material";
import React from "react";
import ItemCartaEnergiaDraggeable from './cartas/items-draggeables/ItemCartaEnergiaDraggeable'
import ItemCartaPokemonDraggeable from './cartas/items-draggeables/ItemCartaPokemonDraggeable'

const ListadoDeCartasDisponibles = ({ cartas }) => {
  return (
    <List>
      {
        cartas.map((x, index) => {
          const { numero } = x
          if (numero.includes("P")) {
            return <ItemCartaPokemonDraggeable {...x} index={index} itemObject={{ id: `${numero}cd` }} />
          }
          if (numero.includes("E")) {
            return <ItemCartaEnergiaDraggeable {...x} index={index} itemObject={{ id: `${numero}cd` }} />
          }
          return <></>
        })
      }
    </List>
  );
}

export default ListadoDeCartasDisponibles;