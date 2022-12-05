import { MenuItem } from "@mui/material";
import { To } from "../../../utils/routes";
import IconButtonUsuarioAutenticado from "../IconButtonUsuarioAutenticado";
import MenuUsuarioAutenticado from "../MenuUsuarioAutenticado";

const MenuDesplegableUsuario = ({ handleMenu, openMenuAppBar, handleClose, anchorEl, onLogout, history }) => {
  return <>
    <IconButtonUsuarioAutenticado onClick={handleMenu} />
    <MenuUsuarioAutenticado
      isOpen={openMenuAppBar}
      onClose={handleClose}
      anchorEl={anchorEl}>
      <MenuItem onClick={() => history.push(To.perfilUsuario())}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={onLogout}>Logout</MenuItem>
    </MenuUsuarioAutenticado>
  </>
}

export default MenuDesplegableUsuario;
