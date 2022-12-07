import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

const ListItemCustom = ({ itemObject, index }) => {
  return (
    <Draggable draggableId={itemObject.id} key={itemObject.id} index={index}>
      {(provided) => (
        <ListItem
          key={itemObject.id}
          role={undefined}
          dense
          button
          /* ContainerComponent="li"
          ContainerProps={{ ref: provided.innerRef }} */
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <ListItemText
            sytles={{ fontFamily: "Quicksand" }}
            primary={`${itemObject.text}`}
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
  );
};

export default ListItemCustom;
