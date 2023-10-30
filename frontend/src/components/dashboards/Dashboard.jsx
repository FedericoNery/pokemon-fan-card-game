import React from 'react'
import { useRolUsuario } from '../../hooks/useRolUsuario'
import { ROLES } from '../../utils/enumRoles'
import DashboardAdministrador from './DashboardAdministrador'
import DashboardJugador from './DashboardJugador'

const Dashboard = () => {
    const rol = useRolUsuario()
    const menus = {
        [ROLES.JUGADOR] : <DashboardJugador />,
        [ROLES.ADMINISTRADOR] : <DashboardAdministrador />,
        "" : <></>
    }

    return menus[rol]
}

export default Dashboard;
