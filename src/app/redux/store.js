import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const compose = composeWithDevTools({});
export const store = createStore(
  reducers,
  compose(applyMiddleware(thunk))
);

// subscribe
store.subscribe(() => console.log(store.getState()));
