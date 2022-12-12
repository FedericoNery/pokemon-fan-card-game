import SaveIcon from '@mui/icons-material/Save';
import { Fab } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useParams } from 'react-router-dom';
import { getAllCartasEnergia } from '../../core/services/cartasEnergias';
import { getAllCartasPokemon } from '../../core/services/cartasPokemon';
import { getCartasDelMazoById, putCartasDelMazoById } from '../../core/services/mazos';
import CartasDelMazo from '../cartas/CartasDelMazo';
import { ContextToastContainer } from '../ui/toasts/ToastContainer';
import ListadoDeCartasDisponibles from './ListadoDeCartasDisponibles';

const ContainerEdicionDelMazo = () => {
  const { id } = useParams();
  const [cartas, setCartas] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const toast = useContext(ContextToastContainer)

  useEffect(async () => {
    setIsLoading(true)
    const res = await getCartasDelMazoById(id)
    const resCartasPokemon = await getAllCartasPokemon()
    const resCartasEnergia = await getAllCartasEnergia()
    let indices = 0

    setCartas({
      "cartas-mazo": {
        id: "cartas-mazo", list: res.data.map((x, index) => {
          const cartaConIndiceDraggeable = { ...x, idDraggeable: indices }
          indices += 1
          return cartaConIndiceDraggeable
        })
      },
      "cartas-disponibles": {
        id: "cartas-disponibles", list: [...resCartasPokemon.data, ...resCartasEnergia.data].map((x, index) => {
          const cartaConIndiceDraggeable = { ...x, idDraggeable: indices }
          indices += 1
          return cartaConIndiceDraggeable
        })
      }
    })
    setIsLoading(false)

    return () => { }
  }, [])



  const onDragEnd = ({ source, destination }) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;

    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    // Set start and end variables
    const start = cartas[source.droppableId];
    const end = cartas[destination.droppableId];

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      const newList = start.list.filter((_, idx) => idx !== source.index);

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.list[source.index]);

      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        list: newList
      };

      // Update the state
      setCartas((state) => ({ ...state, [newCol.id]: newCol }));
      return null;
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const listaStart = [...start.list]
      const newStartList = listaStart.filter((_, idx) => idx !== source.index);

      // Create a new start column
      const newStartCol = {
        id: start.id,
        list: newStartList
      };

      // Make a new end list array
      const listaEnd = [...end.list]
      const newEndList = listaEnd;

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, listaStart[source.index]);

      // Create a new end column
      const newEndCol = {
        id: end.id,
        list: newEndList
      };

      // Update the state
      setCartas({
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol
      });

      //return
    }
  };

  const actualizarMazo = async (idMazo, idsCartas) => {
    try {
      await putCartasDelMazoById(idMazo, idsCartas)
      toast.success("Editó el mazo correctamente")
    }
    catch (error) {
      toast.error(`Ocurrió un error al editar el mazo ${error.toString()}`)
    }
  }

  return !isLoading && <>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add" onClick={() => actualizarMazo(id, cartas["cartas-mazo"].list.map(x => x.numero))}
      sx={{position: "fixed", zIndex: 100, bottom: 40, right: 40}}>
        <SaveIcon />
      </Fab>
    </Box>
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid container>
        <Grid item xs={11} sm={10} md={10} xl={10}>
          <Droppable droppableId={"cartas-mazo"}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <CartasDelMazo cartas={cartas["cartas-mazo"].list} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Grid>
        <Grid item xs={1} sm={2} md={2} xl={2}>
          <Droppable droppableId={"cartas-disponibles"}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  "borderStyle": "dashed",
                  "height" : "100%"
               }}
              >
                <ListadoDeCartasDisponibles cartas={cartas["cartas-disponibles"].list} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Grid>
      </Grid>
    </DragDropContext>
  </>
}

export default ContainerEdicionDelMazo;
