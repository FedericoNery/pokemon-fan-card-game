import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

const ItemCartaPokemonDraggeable = ({ itemObject, index, ataque, ataque_esp, cantidad_energia, defensa, defensa_esp, numero, pokemon, ps, suma, tipo_energia, velocidad }) => {
    return <Draggable draggableId={itemObject.id} key={`${itemObject.id}CartaPokemonDraggeable`} index={index}>
        {(provided) => (
            <ListItem
            key={`${itemObject.id}ListItemCartaPokemonDraggeable`}
            role={undefined}
            dense
            button
            ref={provided.innerRef}
            /* ContainerComponent="li"
            ContainerProps={{ ref: provided.innerRef }} */
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <ListItemText
              sytles={{ fontFamily: "Quicksand" }}
              primary={`${numero} - ${pokemon}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="comments"
                question-uid={itemObject.id}
              >
                {/* <DeleteIcon /> */}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
    )}
    </Draggable>
}

export default ItemCartaPokemonDraggeable;
