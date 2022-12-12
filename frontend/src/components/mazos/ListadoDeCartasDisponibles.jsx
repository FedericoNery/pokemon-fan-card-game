import { List } from "@mui/material";
import React from "react";
import ItemCartaEnergiaDraggeable from '../cartas/items-draggeables/ItemCartaEnergiaDraggeable'
import ItemCartaPokemonDraggeable from '../cartas/items-draggeables/ItemCartaPokemonDraggeable'

const ListadoDeCartasDisponibles = ({ cartas }) => {
  return (
    <List>
      {
        cartas.map((x, index) => {
          const { numero, idDraggeable } = x
          if (numero.includes("P")) {
            return <ItemCartaPokemonDraggeable {...x} index={index} itemObject={{ id: `${numero}cd` }} key={`kItemCartaPokemonDraggeable${idDraggeable}`} />
          }
          if (numero.includes("E")) {
            return <ItemCartaEnergiaDraggeable {...x} index={index} itemObject={{ id: `${numero}cd` }} key={`kItemCartaEnergiaDraggeable${idDraggeable}`} />
          }
          return <></>
        })
      }
    </List>
  );
}

export default ListadoDeCartasDisponibles;
