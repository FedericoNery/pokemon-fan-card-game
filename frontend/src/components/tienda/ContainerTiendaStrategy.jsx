import React from "react";
import { useRolUsuario } from "../../hooks/useRolUsuario";
import { ROLES } from "../../utils/enumRoles";
import ContainerLoaderTienda from "./ContainerLoaderTienda";
import ContainerLoaderTiendaJugador from "./ContainerLoaderTiendaJugador";

const ContainerTiendaStrategy = () => {
    const rol = useRolUsuario()
    return rol === ROLES.ADMINISTRADOR ? <ContainerLoaderTienda /> : <ContainerLoaderTiendaJugador />
}
 
export default ContainerTiendaStrategy;