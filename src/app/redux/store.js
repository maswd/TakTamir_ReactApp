import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
};
const compose = composeWithDevTools({});
const persistedReducer = persistReducer(persistConfig, reducers);

export let store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk, logger))
);
export const persistor = persistStore(store);

// subscribe
store.subscribe(() => console.log(store.getState()));
