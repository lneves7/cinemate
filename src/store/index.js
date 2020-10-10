import {compose, applyMiddleware, createStore} from 'redux'
import rootReducer from './reducers';

//? Para utilizar a extensao Redux Devtools
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true, traceLimit: 20})) || compose;

const middleware = [];

const Store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middleware)));

export {Store};
