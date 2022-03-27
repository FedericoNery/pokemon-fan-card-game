const usuariosRepository = require('../repositories/usuariosRepository')
const router = require('express').Router();

    router.post('/authentication', async (req, res) => {
        const email = req.body.email
        const password = req.body.password
        console.log("Llego")
        if (email === null || password === null) {
            res.status(400).json('Error: parámetros incompletos')
        }
    
        try{
            const usuario = await usuariosRepository.getUsuarioByEmail(email)
            usuariosRepository.esValidaLaContrasenia(usuario, password)
            const token = jwt.sign(payload, app.get('llave'), {
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