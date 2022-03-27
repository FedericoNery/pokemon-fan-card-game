import { combineReducers } from 'redux';
import { authenticateReducer } from './authenticateReducer'
import { mazosReducer } from './mazosReducer'
import { juegoReducer } from './juegoReducer'
import { tiendaReducer } from './tiendaReducer'

const combinedReducers = combineReducers({
    authenticateReducer,
    mazosReducer,
    juegoReducer,
    tiendaReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'authenticate/desloguearse') { // si el action es desloguearse, resetea todos los slices
        state = undefined;
        return combinedReducers(undefined, action)
    }

    return combinedReducers(state, action)
} 

export default rootReducer;