const CartaPokemon = require('../../domain/cartapokemon');
const CartaEnergia = require('../../domain/cartaenergia');

const mazoService = require('../../services/mazoService');
const juegoService = require('../../services/juegoService');
const CODIGO_TIPO_CARTA_FUEGO = require('../../utils/enums').CODIGO_TIPO_CARTA.FUEGO
const CODIGO_TIPO_CARTA_HIERBA = require('../../utils/enums').CODIGO_TIPO_CARTA.HIERBA


var mazo1 =  [
  new CartaPokemon("M0", "Mi pokemon 0",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaPokemon("M1", "Mi pokemon 1",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaPokemon("M2", "Mi pokemon 2",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaPokemon("M3", "Mi pokemon 3",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaPokemon("M4", "Mi pokemon 4",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaPokemon("M5", "Mi pokemon 5",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaPokemon("M6", "Mi pokemon 6",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaPokemon("M7", "Mi pokemon 7",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaPokemon("M8", "Mi pokemon 8",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaPokemon("M9", "Mi pokemon 9",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaEnergia("M10", "Mi pokemon 10", [{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1},{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1}]),
  new CartaEnergia("M11", "Mi pokemon 11", [{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1},{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1}]),
  new CartaEnergia("M12", "Mi pokemon 12", [{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1},{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1}]),
  new CartaEnergia("M13", "Mi pokemon 13", [{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1},{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1}]),
  new CartaEnergia("M14", "Mi pokemon 14", [{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1},{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1}]),
  new CartaEnergia("M15", "Mi pokemon 15", [{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1},{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1}]),
  new CartaEnergia("M16", "Mi pokemon 16", [{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1},{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1}]),
]

var mazo1reducido =  [
  new CartaPokemon("M0", "Mi pokemon 0",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaPokemon("M1", "Mi pokemon 1",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaPokemon("M2", "Mi pokemon 2",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaPokemon("M3", "Mi pokemon 3",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaPokemon("M4", "Mi pokemon 4",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaPokemon("M5", "Mi pokemon 5",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
]

var mazo2 =  [
  new CartaPokemon("M0", "Mi pokemon 0",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaPokemon("M1", "Mi pokemon 1",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaPokemon("M2", "Mi pokemon 2",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaPokemon("M3", "Mi pokemon 3",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaPokemon("M4", "Mi pokemon 4",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaPokemon("M5", "Mi pokemon 5",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaPokemon("M6", "Mi pokemon 6",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaPokemon("M7", "Mi pokemon 7",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaPokemon("M8", "Mi pokemon 8",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaPokemon("M9", "Mi pokemon 9",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
  new CartaEnergia("M10", "Mi pokemon 10", [{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1},{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1}]),
  new CartaEnergia("M11", "Mi pokemon 11", [{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1},{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1}]),
  new CartaEnergia("M12", "Mi pokemon 12", [{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1},{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1}]),
  new CartaEnergia("M13", "Mi pokemon 13", [{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1},{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1}]),
  new CartaEnergia("M14", "Mi pokemon 14", [{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1},{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1}]),
  new CartaEnergia("M15", "Mi pokemon 15", [{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1},{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1}]),
  new CartaEnergia("M16", "Mi pokemon 16", [{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1},{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1}]),
]

var mazo2reducido =  [
  new CartaEnergia("M10", "Mi pokemon 10", [{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1},{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1}]),
  new CartaEnergia("M11", "Mi pokemon 11", [{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1},{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1}]),
  new CartaEnergia("M12", "Mi pokemon 12", [{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1},{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1}]),
  new CartaEnergia("M13", "Mi pokemon 13", [{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1},{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1}]),
  new CartaEnergia("M14", "Mi pokemon 14", [{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1},{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1}]),
  new CartaEnergia("M15", "Mi pokemon 15", [{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1},{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1}]),
]

var turnoLocal ={
  idJugador1: 1,
  turnoDeJugador1: true,
  idJugador2: 2,
  turnoDeJugador2: false,
}


var turnoPC ={
  idJugador1: 1,
  turnoDeJugador1: false,
  idJugador2: 2,
  turnoDeJugador2: true,
}


var juegoIniciarRonda = {
    jugador1 : {
        nombre: "Jugador 1"
    },
    jugador2 :{
        nombre: "Jugador 2"
    },
    campoJugador1:{
        mazo: mazo1reducido,
        mano:{
        }
    },
    campoJugador2:{
        mazo: mazo2reducido,
        mano:{
        }
    }
}

test('Iniciar juego', () => {
  expect(juegoService.iniciarJuego({jugador: "jugador"},{jugador: "jugador"},{campo: "campo"},{campo: "campo"}))
  .toEqual({jugador: "jugador"},{jugador: "jugador"},{campo: "campo"},{campo: "campo"});
});

test('Iniciar ronda jugador local', () => {
  expect(juegoService.iniciarRonda(juegoIniciarRonda, turnoLocal)).toMatchObject(
    {
      juego: {
        jugador1 : {
          nombre: "Jugador 1"
      },
      jugador2 :{
          nombre: "Jugador 2"
      },
      campoJugador1:{
          mazo: [],
          mano:{
            mazo1reducido
          }
      },
      campoJugador2:{
          mazo: [],
          mano:{
            mazo2reducido
          }
      }
      },
      turno:{
        idJugador1: 1,
        turnoDeJugador1: true,
        idJugador2: 2,
        turnoDeJugador2: false,
      }
    }
  );
});

test('Iniciar ronda jugador pc', () => {
  expect(juegoService.iniciarRonda(juegoIniciarRonda, turnoPC)).toMatchObject(
    {
      juego: {
        jugador1 : {
          nombre: "Jugador 1"
      },
      jugador2 :{
          nombre: "Jugador 2"
      },
      campoJugador1:{
          mazo: [],
          mano:{
            mazo1reducido
          }
      },
      campoJugador2:{
          mazo: [],
          mano:{
            mazo2reducido
          }
      }
      },
      turno:{
        idJugador1: 1,
        turnoDeJugador1: false,
        idJugador2: 2,
        turnoDeJugador2: true,
      }
    }
  );
});

/*
test('Simulación de Juego realizando una ronda', done => {
    function callback(data) {
      try {
        expect(data).toBe('peanut butter');
        done();
      } catch (error) {
        done(error);
      }
    }
  
    //fetchData(callback);
  });
*/
