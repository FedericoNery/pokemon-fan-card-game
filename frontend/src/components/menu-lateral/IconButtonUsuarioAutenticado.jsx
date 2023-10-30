import { AccountCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react'

const IconButtonUsuarioAutenticado = ({ onClick }) => {
    return <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={onClick}
        color="inherit"
    >
        <AccountCircle />
    </IconButton>
}

export default IconButtonUsuarioAutenticado;