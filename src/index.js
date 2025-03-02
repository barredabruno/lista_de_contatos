import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import contactReducer from "./redux/reducers"; // Importando o reducer
import App from "./App";

const store = createStore(contactReducer); // Criando a store

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
