let CartaPokemon = require('../models/cartapokemon.model');
const router = require('express').Router();

router.route('/').get((req, res) => {
    const nombre = req.body.nombre
    const precioMin = req.body.precioMin
    const precioMax = req.body.precioMax
    const tipoEnergia = req.body.tipoEnergia
    const precioAscDesc = req.body.precioAscDesc
    const tipoEnergiaAscDesc = req.body.tipoEnergiaAscDesc

    query = CartaPokemon.find()

    if (nombre && nombre.length > 0) {
        const userRegex = new RegExp(nombre, 'i')
        query.where({ pokemon: userRegex })
    }

    if (precioMin)
        query.gte(precioMin)

    if (precioMax)
        query.lte(precioMax)

    if (tipoEnergia)
        query.where({ tipo_energia: tipoEnergia })

    if (precioAscDesc)
        query = query.sort({
            precio: precioAscDesc ? 1 : -1
        })
    if (tipoEnergiaAscDesc)
        query = query.sort({
            tipo_energia: tipoEnergiaAscDesc ? 1 : -1
        })

    query.then(usuarios => res.json(usuarios))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/ofertas').get((req, res) => {
    CartaPokemon.find({
        oferta_en_tienda: true
    })
        .then(usuarios => res.json(usuarios))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/disponibles').get((req, res) => {
    CartaPokemon.find({
        disponible_en_tienda: true
    })
        .then(usuarios => res.json(usuarios))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').put(async (req, res) => {
    const cartas = req.body.cartas
    await Promise.all(cartas.map(async (element, index) => {
        await CartaPokemon.updateOne({ _id: element.id },
            {
                disponible_en_tienda: element.disponible_en_tienda,
                oferta_en_tienda: element.oferta_en_tienda,
                precio: element.precio
            })
    }))
        .then(() => res.sendStatus(200))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;