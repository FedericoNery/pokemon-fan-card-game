import { Menu } from '@mui/material'
import React from 'react'

const MenuUsuarioAutenticado = ({anchorEl, onClose, isOpen, ...props}) => {
    return <Menu
    id="menu-appbar"
    anchorEl={anchorEl}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={isOpen}
    onClose={onClose}
  >
      {props.children}
      </Menu>
}
 
export default MenuUsuarioAutenticado;