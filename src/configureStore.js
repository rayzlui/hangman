import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';

export function configureStore() {
  const middlewares = [];
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
}
