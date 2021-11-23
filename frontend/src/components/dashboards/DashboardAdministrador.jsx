import { makeStyles } from '@mui/styles';
import React from 'react'
import { createTheme } from '@mui/material';
import ListadoUsuarios from '../administrador/ListadoUsuarios';


const theme = createTheme()
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: theme.spacing(16)
  },
}));

const DashboardAdministrador = (props) => {
  const classes = useStyles();

  return <ListadoUsuarios />
}

export default DashboardAdministrador;