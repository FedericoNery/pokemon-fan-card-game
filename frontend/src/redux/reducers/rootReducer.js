import { authenticateReducer } from './authenticateReducer'
import { mazosReducer } from './mazosReducer'
import { juegoReducer } from './juegoReducer'
import { tiendaReducer } from './tiendaReducer'
import storage from "redux-persist/lib/storage"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import thunk from "redux-thunk"

const reducers = combineReducers({
    authenticateReducer,
    mazosReducer,
    juegoReducer,
    tiendaReducer
});

const persistConfig = {
    key: "root",
    storage,
}

const rootReducer = (state, action) => {
    if (action.type === 'authenticate/desloguearse') {
        state = {}
    }

    return reducers(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
})

export const persistor = persistStore(store)

/* 
TODO ::: obtener jwt del store
export const getJwtFromStore = () => {
    const jwt = store.getState().authReducer?.jwt
    return jwt
} */

export default rootReducer;