import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./assets/redux/store";
import DarkMode from "./assets/components/darkMode/DarkMode";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkMode>
        <App />
      </DarkMode>
    </Provider>
  </React.StrictMode>
);
