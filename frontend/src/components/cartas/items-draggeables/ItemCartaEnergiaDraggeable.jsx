import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Draggable } from "react-beautiful-dnd";

const ItemCartaEnergiaDraggeable = ({ itemObject, index, nombre, numero, energias }) => {
    return <Draggable draggableId={itemObject.id} key={`${itemObject.id}CartaEnergiaDraggeable`} index={index}>
        {(provided) => (
            <ListItem
            key={`${itemObject.id}ListItemCartaEnergiaDraggeable`}
            role={undefined}
            dense
            button
            ContainerComponent="li"
            ContainerProps={{ ref: provided.innerRef }}
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