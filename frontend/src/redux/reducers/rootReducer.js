import { combineReducers } from 'redux';
import {authenticateReducer} from './authenticateReducer'
import {mazosReducer} from './mazosReducer'

const rootReducer = combineReducers({
    authenticateReducer,
    mazosReducer
});

export default rootReducer;