import { MenuItem, Typography } from "@mui/material"
import { useHistory } from "react-router-dom"
import { To } from "../../utils/routes"

const ListJugadorResponsive = () => {
    const history = useHistory()
    const listadoOpciones = [
        { titulo: 'Jugador vs Jugador', onClick: () => history.push(To.seleccionarMazoDeJuegoMultiplayer()) },
        { titulo: 'Mazos', onClick: () => history.push(To.mazos()) },
        { titulo: 'Tienda', onClick: () => history.push(To.tienda()) }
    ]

    return listadoOpciones.map((opcion, index) => {
        const { titulo, onClick } = opcion
        return <MenuItem key={`keyMenuItem${index}`} onClick={onClick}>
            <Typography textAlign="center">{titulo}</Typography>
        </MenuItem>
    }
    )
}

export default ListJugadorResponsive;
