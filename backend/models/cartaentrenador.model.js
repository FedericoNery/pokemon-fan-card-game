const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartaEntrenadorSchema = new Schema({
  numero: {type: Number,required: true}	,
  nombre: {type: String, required: true, trim: true, minlength: 1},
  agarrar:{
    mazo:{
        seleccionar:{

        },
        aleatorio:{

        }
    },
    mano_propia:{
        seleccionar:{

        },
        aleatorio:{

        }
    },
    mano_rival:{
        seleccionar:{

        },
        aleatorio:{

        }
    },
  },
  descartar:{
    mazo:{
        seleccionar:{

        },
        aleatorio:{

        }
    },
    mano_propia:{
        seleccionar:{

        },
        aleatorio:{

        }
    },
    mano_rival:{
        seleccionar:{

        },
        aleatorio:{

        }
    },
  },
  eliminar:{
    mazo:{
        seleccionar:{

        },
        aleatorio:{

        }
    },
    mano_propia:{
        seleccionar:{

        },
        aleatorio:{

        }
    },
    mano_rival:{
        seleccionar:{

        },
        aleatorio:{

        }
    },
  }
}, 
{ 
	timestamps: true,
});

const CartaEntrenador = mongoose.model('CartaEntrenador', cartaEntrenadorSchema);

module.exports = CartaEntrenador;