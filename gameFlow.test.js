const Client = require("socket.io-client");
const { io_from_app, server_from_app } = require("./communication/app");
const CartaPokemon = require("./communication/models/CartaPokemon");
const Mazo = require("./communication/models/Mazo");
const Usuario = require("./communication/models/Usuario");
const { EMIT_EVENTS, SUBSCRIPTIONS_EVENTS } = require("./communication/utils/events")

describe("my awesome project", () => {
    let io, serverSocket, jugador1Socket, jugador2Socket;

    beforeAll((done) => {
        io = io_from_app
        const httpServer = server_from_app
        const port = httpServer.address().port;
        console.log(port)
        jugador1Socket = new Client(`http://localhost:30000`, {multiplex: false});
        jugador2Socket = new Client(`http://localhost:30001`, {multiplex: false})
        jugador1Socket.on("connect", done);
        jugador2Socket.on("connect", done);
    });

    beforeEach(() => {
        jest.setTimeout(200000);
    })
    afterAll(() => {
        io.close();
        jugador1Socket.close();
        jugador2Socket.close()
    });

    test("Simulación de partida completa", (done) => {
        var gameIdGameCreated = null
        var socketIdGameCreated = null
        var jugador1 = Usuario.get_usuario_de_prueba_1()
        var jugador2 = Usuario.get_usuario_de_prueba_2()
        var mazoJugador1 = Mazo.get_mazo_prueba_1()
        var mazoJugador2 = Mazo.get_mazo_prueba_2()
        console.log("Empezando simulacion")
        jugador1Socket.on(EMIT_EVENTS.NEW_GAME_CREATED, ({ gameId, mySocketId }) => {
            gameIdGameCreated = gameId
            socketIdGameCreated = mySocketId
            expect(Number.isInteger(gameId)).toBeTruthy();
            expect(mySocketId).toBeDefined();
            //jugador1Socket.emit(SUBSCRIPTIONS_EVENTS.PLAYER_JOIN_GAME, { gameIdToJoin: gameIdGameCreated, usuario: Usuario.get_usuario_de_prueba_1(), mazo: Mazo.get_mazo_prueba_1() })
            jugador2Socket.emit(SUBSCRIPTIONS_EVENTS.PLAYER_JOIN_GAME, { gameIdToJoin: gameIdGameCreated, usuario: jugador2, mazo: mazoJugador2 })
            //done();
        });

        jugador1Socket.on(EMIT_EVENTS.START_GAME, ({ gameId, mySocketId }) => {
            const drink = jest.fn();
            drink()
            expect(drink).toHaveBeenCalled();
        });

        jugador2Socket.on(EMIT_EVENTS.START_GAME, ({ gameId, mySocketId }) => {
            const drink = jest.fn();
            drink()
            expect(drink).toHaveBeenCalled();
        });

        jugador2Socket.on(EMIT_EVENTS.PLAYER_JOINED_ROOM, ({ gameId, socketId }) => {
            expect(gameId).toBe(gameIdGameCreated);
            expect(socketId).toBe(socketIdGameCreated);
        })

        jugador1Socket.on(EMIT_EVENTS.START_DRAW_PHASE, () => {
            console.log("START DRAW PHASE JUGADOR 1")
        })
        jugador2Socket.on(EMIT_EVENTS.START_DRAW_PHASE, () => {
            console.log("START DRAW PHASE JUGADOR 2")
        })

        jugador1Socket.on(EMIT_EVENTS.START_LOAD_PHASE, () => {
            console.log("START LOAD PHASE JUGADOR 1")
        })
        jugador2Socket.on(EMIT_EVENTS.START_LOAD_PHASE, () => {
            console.log("START LOAD PHASE JUGADOR 2")
        })

        jugador1Socket.on(EMIT_EVENTS.START_SUMMON_PHASE, () => {
            console.log("START SUMMON PHASE JUGADOR 1")
        })
        jugador2Socket.on(EMIT_EVENTS.START_SUMMON_PHASE, () => {
            console.log("START SUMMON PHASE JUGADOR 2")
        })

        jugador1Socket.on(EMIT_EVENTS.START_COMPILE_PHASE, () => {
            console.log("START COMPILE PHASE JUGADOR 1")
        })
        jugador2Socket.on(EMIT_EVENTS.START_COMPILE_PHASE, () => {
            console.log("START COMPILE PHASE JUGADOR 2")
        })

        jugador1Socket.on(EMIT_EVENTS.FINISH_BATTLE_PHASE, () => {
            console.log("FINISH BATTLE PHASE JUGADOR 1")
        })
        jugador2Socket.on(EMIT_EVENTS.FINISH_BATTLE_PHASE, () => {
            console.log("FINISH BATTLE PHASE JUGADOR 2")
        })

        //RONDA 1
        jugador1Socket.emit(SUBSCRIPTIONS_EVENTS.CREATE_NEW_GAME, { usuario: jugador1, mazo: mazoJugador1 })

        jugador1Socket.emit(SUBSCRIPTIONS_EVENTS.CALUMON_SELECTED, { usuario: jugador1, arrancaPrimero: CartaPokemon.getPikachuToken() })
        
        jugador1Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_DRAW_PHASE) // TAL VEZ NO ES NECESARIO ESTE EVENTO - Se emitiria start y finish
        jugador2Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_DRAW_PHASE) // TAL VEZ NO ES NECESARIO ESTE EVENTO - Se emitiria start y finish

        jugador1Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_LOAD_PHASE, { usuario: jugador1 }) // GENERAR PASO INTERMEDIO PARA IR USANDO CARTAS
        jugador2Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_LOAD_PHASE, { usuario: jugador2 }) // GENERAR PASO INTERMEDIO PARA IR USANDO CARTAS
        
        jugador1Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_SUMMON_PHASE, { usuario: jugador1 })
        jugador2Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_SUMMON_PHASE, { usuario: jugador2 })
        
        jugador1Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_COMPILE_PHASE, { usuario: jugador1 })
        jugador2Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_COMPILE_PHASE, { usuario: jugador2 })

        //RONDA 2
        jugador1Socket.emit(SUBSCRIPTIONS_EVENTS.CALUMON_SELECTED, { usuario: Usuario.get_usuario_de_prueba_1(), mazo: Mazo.get_mazo_prueba_1() })
        
        jugador1Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_DRAW_PHASE)
        jugador2Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_DRAW_PHASE)

        jugador1Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_LOAD_PHASE)
        jugador2Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_LOAD_PHASE)
        
        jugador1Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_SUMMON_PHASE)
        jugador2Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_SUMMON_PHASE)
        
        jugador1Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_COMPILE_PHASE)
        jugador2Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_COMPILE_PHASE)

        //RONDA 3
        jugador1Socket.emit(SUBSCRIPTIONS_EVENTS.CALUMON_SELECTED, { usuario: Usuario.get_usuario_de_prueba_1(), mazo: Mazo.get_mazo_prueba_1() })
        
        jugador1Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_DRAW_PHASE)
        jugador2Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_DRAW_PHASE)

        jugador1Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_LOAD_PHASE)
        jugador2Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_LOAD_PHASE)
        
        jugador1Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_SUMMON_PHASE)
        jugador2Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_SUMMON_PHASE)
        
        jugador1Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_COMPILE_PHASE)
        jugador2Socket.emit(SUBSCRIPTIONS_EVENTS.FINISH_COMPILE_PHASE)

        //serverSocket.emit("hello", "world");
    });
});