import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useParams } from 'react-router-dom';
import { getAllCartasEnergia } from '../../core/services/cartasEnergias';
import { getAllCartasPokemon } from '../../core/services/cartasPokemon';
import { getCartasDelMazoById } from '../../core/services/mazos';
import CartasDelMazo from '../cartas/CartasDelMazo';
import ListadoDeCartasDisponibles from './ListadoDeCartasDisponibles';
import Grid from '@mui/material/Grid';

const ContainerEdicionDelMazo = () => {
    const { id } = useParams();
    const [cartasDelMazo, setCartasDelMazo] = useState([])
    const [cartasDisponibles, setCartasDisponibles] = useState([])
    const [cartas, setCartas] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(async () => {
        setIsLoading(true)
        const res = await getCartasDelMazoById(id)
        //setCartasDelMazo({"cartas-mazo": res.data})
        const resCartasPokemon = await getAllCartasPokemon()
        const resCartasEnergia = await getAllCartasEnergia()
        //setCartasDisponibles({"cartas-disponibles": [...resCartasPokemon.data, ...resCartasEnergia.data]})
        setCartas({
            "cartas-mazo": { id: "cartas-mazo", list: res.data },
            "cartas-disponibles": { id: "cartas-disponibles", list: [...resCartasPokemon.data, ...resCartasEnergia.data] }
        })
        setIsLoading(false)
    }, [])

    const initialColumns = {
        todo: {
            id: "todo",
            list: [
                { id: "1", text: "text1" },
                { id: "2", text: "text2" },
                { id: "3", text: "text3" }
            ]
        },
        doing: {
            id: "doing",
            list: [
                { id: "4", text: "text4" },
                { id: "5", text: "text5" },
                { id: "6", text: "text6" }
            ]
        }
    };

    const [columns, setColumns] = useState(initialColumns);

    const onDragEnd = ({ source, destination }) => {
        debugger
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
            setColumns((state) => ({ ...state, [newCol.id]: newCol }));
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

    console.log(cartas["cartas-mazo"]?.list)

    return <DragDropContext onDragEnd={onDragEnd}>
        <Grid container spacing={2}>
            <Grid item xs={10} sm={9} md={8}>
                <Droppable droppableId={"cartas-mazo"}>
                    {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {!isLoading && <CartasDelMazo cartas={cartas["cartas-mazo"].list} />}
                            </div>
                    )}
                </Droppable>
            </Grid>
            <Grid item xs={2} sm={3} md={4}>
                <Droppable droppableId={"cartas-disponibles"}>
                    {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {!isLoading && <ListadoDeCartasDisponibles cartas={cartas["cartas-disponibles"].list} />}
                            </div>
                    )}
                </Droppable>
            </Grid>
        </Grid>
    </DragDropContext>
}

export default ContainerEdicionDelMazo;