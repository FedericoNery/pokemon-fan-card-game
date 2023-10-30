const usuariosRepository = require('../repositories/usuariosRepository')
const jwt = require('jsonwebtoken')
const router = require('express').Router();
const jwtKey = 'cb2ac1cb-bb52-4448-8852-6499adc98cbe'

const app = require("../server")

    router.post('/', async (req, res) => {
        const email = req.body.email
        const password = req.body.password

        if (email === null || password === null) {
            res.status(400).json('Error: parámetros incompletos')
        }
    
        try{
            const usuario = await usuariosRepository.getUsuarioByEmail(email)
            usuariosRepository.esValidaLaContrasenia(usuario, password)
            const payload = usuario.toJSON()
            const token = jwt.sign(payload, jwtKey, {
                expiresIn: 1440
            });
            res.status(200).json({
                mensaje: 'Autenticación correcta',
                token: token
            });
        }
        catch(err){
            res.status(400).json('Error: ' + err)
            //res.json({ mensaje: "Usuario o contraseña incorrectos" })
        }
    })
    
module.exports = router;