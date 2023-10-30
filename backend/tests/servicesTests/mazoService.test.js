const CartaPokemon = require('../../domain/cartapokemon');
const CartaEnergia = require('../../domain/cartaenergia');

const mazoService = require('../../services/mazoService');
const CODIGO_TIPO_CARTA_FUEGO = require('../../utils/enums').CODIGO_TIPO_CARTA.FUEGO
const CODIGO_TIPO_CARTA_HIERBA = require('../../utils/enums').CODIGO_TIPO_CARTA.HIERBA

const mazo = [
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

const mazoReducido = [
    new CartaPokemon("M0", "Mi pokemon 0",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
    new CartaPokemon("M1", "Mi pokemon 1",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
    new CartaPokemon("M2", "Mi pokemon 2",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO),
]


test('Buscar carta por numero', () => {
    expect(mazoService.buscarCarta(mazo, "M1")).toEqual(
        {
            numero: "M1",
            nombre: "Mi pokemon 1",
            pokemon: "Mi pokemon 1",
            ps: 0,
            ataque: 0,
            defensa: 0,
            ataque_esp: 0,
            defensa_esp: 0,
            velocidad: 0,
            suma: 0,
            tipo_energia: CODIGO_TIPO_CARTA_FUEGO, 
        }
    );
  });
  
test('Quitar carta del mazo', () => {
    expect(mazoService.quitarCarta(mazoReducido, "M1")).toEqual(
        [
            {
                numero: "M0",
                nombre: "Mi pokemon 0",
                pokemon: "Mi pokemon 0",
                ps: 0,
                ataque: 0,
                defensa: 0,
                ataque_esp: 0,
                defensa_esp: 0,
                velocidad: 0,
                suma: 0,
                tipo_energia: CODIGO_TIPO_CARTA_FUEGO, 
            },
            {
                numero: "M2",
                nombre: "Mi pokemon 2",
                pokemon: "Mi pokemon 2",
                ps: 0,
                ataque: 0,
                defensa: 0,
                ataque_esp: 0,
                defensa_esp: 0,
                velocidad: 0,
                suma: 0,
                tipo_energia: CODIGO_TIPO_CARTA_FUEGO, 
            }
        ]
    );
  });

  
test('Agarrar carta del mazo y devolver la cantidad requerida. Cantidad 2', () => {
    expect(mazoService.agarrarCarta(mazoReducido, undefined , 2)).toEqual([
        {
            numero: "M0",
            nombre: "Mi pokemon 0",
            pokemon: "Mi pokemon 0",
            ps: 0,
            ataque: 0,
            defensa: 0,
            ataque_esp: 0,
            defensa_esp: 0,
            velocidad: 0,
            suma: 0,
            tipo_energia: CODIGO_TIPO_CARTA_FUEGO, 
        },
        {
            numero: "M1",
            nombre: "Mi pokemon 1",
            pokemon: "Mi pokemon 1",
            ps: 0,
            ataque: 0,
            defensa: 0,
            ataque_esp: 0,
            defensa_esp: 0,
            velocidad: 0,
            suma: 0,
            tipo_energia: CODIGO_TIPO_CARTA_FUEGO, 
        },
    ]);
  });

test('Agarrar carta del mazo y devolver la cantidad requerida M1', () => {
    expect(mazoService.agarrarCarta(mazoReducido, "M1" , undefined)).toEqual([
        {
            numero: "M1",
            nombre: "Mi pokemon 1",
            pokemon: "Mi pokemon 1",
            ps: 0,
            ataque: 0,
            defensa: 0,
            ataque_esp: 0,
            defensa_esp: 0,
            velocidad: 0,
            suma: 0,
            tipo_energia: CODIGO_TIPO_CARTA_FUEGO, 
        }
    ]);
  });

test('Agarrar carta del mazo y devolver la cantidad requerida M1 y M2', () => {
    expect(mazoService.agarrarCarta(mazoReducido, ["M1","M2"] , undefined)).toEqual([
        {
            numero: "M1",
            nombre: "Mi pokemon 1",
            pokemon: "Mi pokemon 1",
            ps: 0,
            ataque: 0,
            defensa: 0,
            ataque_esp: 0,
            defensa_esp: 0,
            velocidad: 0,
            suma: 0,
            tipo_energia: CODIGO_TIPO_CARTA_FUEGO, 
        },
        {
            numero: "M2",
            nombre: "Mi pokemon 2",
            pokemon: "Mi pokemon 2",
            ps: 0,
            ataque: 0,
            defensa: 0,
            ataque_esp: 0,
            defensa_esp: 0,
            velocidad: 0,
            suma: 0,
            tipo_energia: CODIGO_TIPO_CARTA_FUEGO, 
        },
    ]);
  });

test('Mezclar mazo prueba 1', () => {
    expect(mazoService.mezclar(mazoReducido)).not.toEqual(
        [
            {
                numero: "M0",
            nombre: "Mi pokemon 0",
            pokemon: "Mi pokemon 0",
            ps: 0,
            ataque: 0,
            defensa: 0,
            ataque_esp: 0,
            defensa_esp: 0,
            velocidad: 0,
            suma: 0,
            tipo_energia: CODIGO_TIPO_CARTA_FUEGO, 
            },
            {
                numero: "M1",
            nombre: "Mi pokemon 1",
            pokemon: "Mi pokemon 1",
            ps: 0,
            ataque: 0,
            defensa: 0,
            ataque_esp: 0,
            defensa_esp: 0,
            velocidad: 0,
            suma: 0,
            tipo_energia: CODIGO_TIPO_CARTA_FUEGO, 
            },
            {
                numero: "M2",
            nombre: "Mi pokemon 2",
            pokemon: "Mi pokemon 2",
            ps: 0,
            ataque: 0,
            defensa: 0,
            ataque_esp: 0,
            defensa_esp: 0,
            velocidad: 0,
            suma: 0,
            tipo_energia: CODIGO_TIPO_CARTA_FUEGO, 
            }
        ]

    );
  });

    
test('Mezclar mazo prueba 2', () => {
    expect(mazoService.mezclar(mazoReducido)).not.toEqual([
        
        {
            numero: "M0",
        nombre: "Mi pokemon 0",
        pokemon: "Mi pokemon 0",
        ps: 0,
        ataque: 0,
        defensa: 0,
        ataque_esp: 0,
        defensa_esp: 0,
        velocidad: 0,
        suma: 0,
        tipo_energia: CODIGO_TIPO_CARTA_FUEGO, 
        },
        {
            numero: "M1",
        nombre: "Mi pokemon 1",
        pokemon: "Mi pokemon 1",
        ps: 0,
        ataque: 0,
        defensa: 0,
        ataque_esp: 0,
        defensa_esp: 0,
        velocidad: 0,
        suma: 0,
        tipo_energia: CODIGO_TIPO_CARTA_FUEGO, 
        },
        {
            numero: "M2",
        nombre: "Mi pokemon 2",
        pokemon: "Mi pokemon 2",
        ps: 0,
        ataque: 0,
        defensa: 0,
        ataque_esp: 0,
        defensa_esp: 0,
        velocidad: 0,
        suma: 0,
        tipo_energia: CODIGO_TIPO_CARTA_FUEGO, 
        }
    ]);
  });

  test('Repartir mano', () => {
    expect(mazoService.repartirMano(mazo, 6)).toEqual(
        [
            {
            numero: "M0",
            nombre: "Mi pokemon 0",
            pokemon: "Mi pokemon 0",
            ps: 0,
            ataque: 0,
            defensa: 0,
            ataque_esp: 0,
            defensa_esp: 0,
            velocidad: 0,
            suma: 0,
            tipo_energia: CODIGO_TIPO_CARTA_FUEGO, 
        },
        {
            numero: "M1",
            nombre: "Mi pokemon 1",
            pokemon: "Mi pokemon 1",
            ps: 0,
            ataque: 0,
            defensa: 0,
            ataque_esp: 0,
            defensa_esp: 0,
            velocidad: 0,
            suma: 0,
            tipo_energia: CODIGO_TIPO_CARTA_FUEGO, 
        },
        {
            numero: "M2",
            nombre: "Mi pokemon 2",
            pokemon: "Mi pokemon 2",
            ps: 0,
            ataque: 0,
            defensa: 0,
            ataque_esp: 0,
            defensa_esp: 0,
            velocidad: 0,
            suma: 0,
            tipo_energia: CODIGO_TIPO_CARTA_FUEGO, 
        },
        {
            numero: "M3",
            nombre: "Mi pokemon 3",
            pokemon: "Mi pokemon 3",
            ps: 0,
            ataque: 0,
            defensa: 0,
            ataque_esp: 0,
            defensa_esp: 0,
            velocidad: 0,
            suma: 0,
            tipo_energia: CODIGO_TIPO_CARTA_FUEGO, 
        },
        {
            numero: "M4",
            nombre: "Mi pokemon 4",
            pokemon: "Mi pokemon 4",
            ps: 0,
            ataque: 0,
            defensa: 0,
            ataque_esp: 0,
            defensa_esp: 0,
            velocidad: 0,
            suma: 0,
            tipo_energia: CODIGO_TIPO_CARTA_FUEGO, 
        },
        {
            numero: "M5",
            nombre: "Mi pokemon 5",
            pokemon: "Mi pokemon 5",
            ps: 0,
            ataque: 0,
            defensa: 0,
            ataque_esp: 0,
            defensa_esp: 0,
            velocidad: 0,
            suma: 0,
            tipo_energia: CODIGO_TIPO_CARTA_FUEGO, 
        }]
    );
  });
