import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

const ItemCartaEnergiaDraggeable = ({ itemObject, index, nombre, numero, energias }) => {
    return <Draggable draggableId={itemObject.id} key={`${itemObject.id}CartaEnergiaDraggeable`} index={index}>
        {(provided) => (
            <ListItem
            key={`${itemObject.id}ListItemCartaEnergiaDraggeable`}
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
              primary={`${numero} - ${nombre}`}
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

export default ItemCartaEnergiaDraggeable;
