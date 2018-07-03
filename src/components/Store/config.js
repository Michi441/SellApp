import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import Reducers from './reducers';

let reduxCompose = compose;

if(__DEV__){
  reduxCompose = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE || compose;
}

const ConfigureStore = () => {
  return createStore(Reducers, reduxCompose(applyMiddleware(promiseMiddleware)))
}

export default ConfigureStore;
