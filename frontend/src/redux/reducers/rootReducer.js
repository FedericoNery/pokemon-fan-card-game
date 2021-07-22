import { combineReducers } from 'redux';
import {authenticateReducer} from './authenticateReducer'

const rootReducer = combineReducers({
    authenticateReducer
});

export default rootReducer;