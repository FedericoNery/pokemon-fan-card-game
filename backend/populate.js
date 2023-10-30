const mongoose = require('mongoose');
require('dotenv').config();

const uri = 'mongodb://localhost:27017/pokemon_react';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

var seeder = require('mongoose-seed');

const usuariosSeeder = require('./seeders/usuarios_seeder')
const cartasPokemonSeeder = require('./seeders/cartaspokemon_seeder')
const mazosSeeder = require('./seeders/mazos_seeder')
const cartasEnergiaSeeder = require('./seeders/cartasenergia_seeder')

// Data array containing seed data - documents organized by Model
var data = [
    {
      'model': 'Usuario',
      'documents': usuariosSeeder
    },
    {
      'model': 'cartapokemon',
      'documents': cartasPokemonSeeder
    },
    {
      'model': 'Mazo',
      'documents': mazosSeeder
    },
    {
      'model': 'cartaenergia',
      'documents': cartasEnergiaSeeder
    },
];

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost:27017/pokemon_react', function() {
 
  // Load Mongoose models
  seeder.loadModels([
    './models/usuario.model',
    './models/cartapokemon.model.js',
    './models/mazo.model.js',
    './models/cartaenergia.model.js',
  ]);
 
  // Clear specified collections
  seeder.clearModels(['Usuario', 'cartapokemon','Mazo','cartaenergia'], function() {
 
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
 
  });
});
 
