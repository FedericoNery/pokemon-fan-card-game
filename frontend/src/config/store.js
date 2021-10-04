import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
//import monitorReducersEnhancer from "./enhancers/monitorReducers";
//import loggerMiddleware from "./middleware/logger";
import rootReducer from "../redux/reducers/rootReducer";

function configureStore(preloadedState) {
  //const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
//  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const enhancers = [middlewareEnhancer];

  /* const isDevelopment = process.env.NODE_ENV === "DEV"

  if(isDevelopment && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__){
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
  } */

  const composedEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("../redux/reducers/rootReducer", () => store.replaceReducer(rootReducer));
  }
  return store;
}

const preloadedState = {

}

const store = configureStore(preloadedState)

export default store;
