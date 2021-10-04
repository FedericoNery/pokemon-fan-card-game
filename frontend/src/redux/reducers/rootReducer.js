import { combineReducers } from 'redux';
import { authenticateReducer } from './authenticateReducer'
import { mazosReducer } from './mazosReducer'
import { juegoReducer } from './juegoReducer'

const combinedReducers = combineReducers({
    authenticateReducer,
    mazosReducer,
    juegoReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'authenticate/desloguearse') { // si el action es desloguearse, resetea todos los slices
        state = undefined;
        return combinedReducers(undefined, action)
    }

    return combinedReducers(state, action)
} 

export default rootReducer;