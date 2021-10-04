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
/* <Grid container spacing={1}>
  </Grid> */

/* <DragDropContext onDragEnd={onDragEnd}>
          <Grid container direction={"row"} justify={"center"}>
            {Object.values(columns).map((column) => {
              return (
                <Grid item>
                  <Column column={column} key={column.id} />
                </Grid>
              );
            })}
          </Grid>
        </DragDropContext> */

/*
<Grid item xs={12}>
<CartaPokemon {...x} />
</Grid>
*/

/*
                      <Grid item xs={12}>

                       <CartaEnergia {...x} />
                  </Grid>
                  */