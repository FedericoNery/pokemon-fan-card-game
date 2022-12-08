import { Button, Container, Grid } from "@mui/material";
import { CODIGO_TIPO_CARTA } from "../utils/functions";
import ContadoresDeEnergias from "./contadores-energias/ContadoresDeEnergias";
import BoxCartas from "./juego/BoxCartas";
import CartasSeleccionarJugador from "./juego/CartasSeleccionarJugador";
import ContadorRondasGanadas from "./juego/ContadorRondasGanadas";
import InformacionJugador from "./juego/InformacionJugador";

const TestMultiplayerGame = () => {
    const energiasDelEnemigo = {
        incoloro: 10,
        fuego: 10,
        tierra: 10,
        rayo: 10,
        dragon: 10,
        hierba: 10,
        agua: 10,
        fairy: 10,
        oscuro: 10,
        lucha: 10,
        psiquico: 10,
        metal: 10
    }
    const rondasGanadasDelEnemigo = 1

    const miZonaJuego = [
        {
            numero: "P1",
            pokemon: "Bulbasur",
            ps: "10",
            ataque: "10",
            defensa: "10",
            ataque_esp: "10",
            defensa_esp: "10",
            velocidad: "10",
            suma: "60",
            tipo_energia: CODIGO_TIPO_CARTA.HIERBA,
            cantidad_energia: 1,
            disponible_en_tienda: false,
            oferta_en_tienda: false,
            precio: 100
        },
        {
            numero: "P2",
            pokemon: "Ivysaur",
            ps: "10",
            ataque: "10",
            defensa: "10",
            ataque_esp: "10",
            defensa_esp: "10",
            velocidad: "10",
            suma: "60",
            tipo_energia: CODIGO_TIPO_CARTA.HIERBA,
            cantidad_energia: 2,
            disponible_en_tienda: false,
            oferta_en_tienda: false,
            precio: 100
        },
        {
            numero: "P3",
            pokemon: "Venusaur",
            ps: "10",
            ataque: "10",
            defensa: "10",
            ataque_esp: "10",
            defensa_esp: "10",
            velocidad: "10",
            suma: "60",
            tipo_energia: CODIGO_TIPO_CARTA.HIERBA,
            cantidad_energia: 3,
            disponible_en_tienda: false,
            oferta_en_tienda: false,
            precio: 100

        },
        {
            numero: "P4",
            pokemon: "Charmander",
            ps: "10",
            ataque: "10",
            defensa: "10",
            ataque_esp: "10",
            defensa_esp: "10",
            velocidad: "10",
            suma: "60",
            tipo_energia: CODIGO_TIPO_CARTA.FUEGO,
            cantidad_energia: 1,
            disponible_en_tienda: false,
            oferta_en_tienda: false,
            precio: 100
        },
        {
            numero: "P5",
            pokemon: "Charmaleon",
            ps: "10",
            ataque: "10",
            defensa: "10",
            ataque_esp: "10",
            defensa_esp: "10",
            velocidad: "10",
            suma: "60",
            tipo_energia: CODIGO_TIPO_CARTA.FUEGO,
            cantidad_energia: 2,
            disponible_en_tienda: false,
            oferta_en_tienda: false,
            precio: 100
        },
        {
            numero: "P6",
            pokemon: "Charizard",
            ps: "10",
            ataque: "10",
            defensa: "10",
            ataque_esp: "10",
            defensa_esp: "10",
            velocidad: "10",
            suma: "60",
            tipo_energia: CODIGO_TIPO_CARTA.FUEGO,
            cantidad_energia: 3,
            disponible_en_tienda: false,
            oferta_en_tienda: false,
            precio: 100
        },
    ]

    const misRondasGanadas = 1
    const misEnergias = {
        incoloro: 10,
        fuego: 10,
        tierra: 10,
        rayo: 10,
        dragon: 10,
        hierba: 10,
        agua: 10,
        fairy: 10,
        oscuro: 10,
        lucha: 10,
        psiquico: 10,
        metal: 10
    }

    return <Container fixed>
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <ContadorRondasGanadas cantidad={rondasGanadasDelEnemigo} />
            </Grid>
            <Grid item xs={10}>
                <ContadoresDeEnergias cantidadesEnergias={energiasDelEnemigo} />
            </Grid>
        </Grid>
        <InformacionJugador nombre="PRUEBA PRUEBA" />
        <BoxCartas>
            <CartasSeleccionarJugador cartas={miZonaJuego} />
        </BoxCartas>

        <Button>Invocar</Button>
        <BoxCartas>
            <CartasSeleccionarJugador cartas={miZonaJuego} />
        </BoxCartas>
        <InformacionJugador nombre="PRUEBA PRUEBA" />
        <ContadorRondasGanadas cantidad={misRondasGanadas} />
        <ContadoresDeEnergias cantidadesEnergias={misEnergias} />
    </Container>
}

export default TestMultiplayerGame;
