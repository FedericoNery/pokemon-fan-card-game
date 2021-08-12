const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());


const usuariosRouter = require('./routes/usuarios');
app.use('/usuarios', usuariosRouter);

const cartasPokemonRouter = require('./routes/cartaspokemon');
app.use('/cartaspokemon', cartasPokemonRouter);

const juegoRouter = require('./routes/juego');
app.use('/juego', juegoRouter);

const cartasEnergiaRouter = require('./routes/cartasenergia');
app.use('/cartasenergia', cartasEnergiaRouter);

const mazoRouter = require('./routes/mazos');
app.use('/mazos', mazoRouter);


/*app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
  });
*/
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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