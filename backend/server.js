const express = require('express');
const cors = require('cors');
const http = require('http')
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const swaggerFile = require('./swagger_output.json')


const errorHandler = require('./middleware/errorHandler')
const jwtKey = 'cb2ac1cb-bb52-4448-8852-6499adc98cbe'

const usuariosRouter = require('./routes/usuarios');
const juegoRouter = require('./routes/juego');
const cartasPokemonRouter = require('./routes/cartaspokemon');
const cartasEnergiaRouter = require('./routes/cartasenergia');
const mazoRouter = require('./routes/mazos');
const tiendaRouter = require('./routes/tienda');
const authRouter = require('./routes/authentication');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
//const authenticationMiddleware = require('./middleware/authenticationMiddleware')(app, router)


app.use(cors());

app.set('llave', jwtKey);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/authentication', authRouter)
//app.use(authenticationMiddleware);
app.use('/usuarios', usuariosRouter);
app.use('/cartaspokemon', cartasPokemonRouter);
app.use('/juego', juegoRouter);
app.use('/cartasenergia', cartasEnergiaRouter);
app.use('/mazos', mazoRouter);
app.use('/tienda', tiendaRouter);  
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

const uri = 'mongodb://localhost:27017/pokemon_react';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})