import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";

export const createReducer = (injectedReducers) =>
  combineReducers({ ...injectedReducers });

const configureStore = (preloadedState = {}) => {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          shouldHotReload: false,
        })
      : compose;
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(middlewareEnhancer)
  );

  return store;
};

export default configureStore;
