var jwt = require('jsonwebtoken');

module.exports = function (app, router) {

  router.use((req, res, next) => {
    const token = req.headers['access-token'];
    console.log("Middleware de auth")
    if (token) {
      jwt.verify(token, app.get('llave'), (err, decoded) => {
        if (err) {
          return res.sendStatus(400).json({ mensaje: 'Token inválida' });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.sendStatus(400).send({
        mensaje: 'Token no proveída.'
      });
    }
  });

  return router;
}