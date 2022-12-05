import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

const ListItemCustom = ({ titulo, onClick, icon }) => {
  return <ListItem button onClick={onClick} sx={{ height: 80 }}>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={titulo} sx={{ marginLeft: 2 }} />
  </ListItem>
}

export default ListItemCustom;
