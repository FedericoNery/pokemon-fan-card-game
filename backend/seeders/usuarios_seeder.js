const bcrypt = require('bcryptjs');
const saltRounds = 10;

const usuarios = [
    {
        numero: 1,
        nombre_usuario: "jugador1",
        password: bcrypt.hashSync("12345678", saltRounds),
        nombre: "Federico",
        apellido: "Nery",
        monedas: 10,
        rol_usuario: "jugador",
        email: "email@email.com",
        mazos: [1,2,3],
        partidas_ganadas: 0,
        partidas_perdidas: 0,
        activo: true
    },
    {
        numero: 2,
        nombre_usuario: "jugador2",
        password: bcrypt.hashSync("12345678", saltRounds),
        nombre: "Federico",
        apellido: "Nery",
        monedas: 10,
        rol_usuario: "jugador",
        email: "email1@email.com",
        mazos: [1,2,3],
        partidas_ganadas: 0,
        partidas_perdidas: 0,
        activo: true
    }
]

module.exports = usuarios