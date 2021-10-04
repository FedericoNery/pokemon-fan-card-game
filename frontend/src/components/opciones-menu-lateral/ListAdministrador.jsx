import { Inbox, Mail } from '@mui/icons-material';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react'


const ListAdministrador = (props) => {
    return <><List>
    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
      <ListItem button key={text}>
        <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ))}
  </List>
  <Divider />
  <List>
    {['All mail', 'Trash', 'Spam'].map((text, index) => (
      <ListItem button key={text}>
        <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ))}
  </List>
  </>
}
 
export default ListAdministrador;