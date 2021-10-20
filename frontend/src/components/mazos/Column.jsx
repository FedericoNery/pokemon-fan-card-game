import React from "react";
import { Droppable } from "react-beautiful-dnd";
import ListItemCustom from "./ListItemCustom";

const Column = ({ column }) => {
  return (
    <div
      style={{
        backgroundColor: "gray",
        margin: 10,
        padding: 20,
        color: "white"
      }}
    >
      <Typography variant={"h4"}>{column.id}</Typography>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <RootRef rootRef={provided.innerRef}>
            <List>
              {column.list.map((itemObject, index) => {
                return <ListItemCustom index={index} itemObject={itemObject} />;
              })}
              {provided.placeholder}
            </List>
          </RootRef>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
