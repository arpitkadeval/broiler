import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
// import { routerMiddleware } from "react-router-redux";

const masterConfig = (rootReducer, rootSaga) => {
  const middlewares = [];
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware();
  // const createRouterMiddleware = routerMiddleware(history);
  // All Redux Middlewares
  middlewares.push(sagaMiddleware); // Saga Middleware
  middlewares.push(createLogger()); // Redux Logger Middleware
  // middlewares.push(createRouterMiddleware); //
  // Assemble middlewares
  enhancers.push(applyMiddleware(...middlewares));

  // Create Redux Store
  const store = createStore(rootReducer, composeWithDevTools(...enhancers));

  // kick off root saga
  const sagasManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagasManager,
    sagaMiddleware,
  };
};

export default masterConfig;
