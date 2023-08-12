import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./app/redux/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import LoadingBar from "react-redux-loading-bar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <LoadingBar
          style={{
            backgroundColor: "#F9A826",
            height: "5px",
            zIndex: "1000",
            position:"fixed",
            top:0
          }}
          updateTime={50}
          maxProgress={100}
          progressIncrease={30}
        />
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
        <ToastContainer />
      </Provider>
    </BrowserRouter>
  </>
);
