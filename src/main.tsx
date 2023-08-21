import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./assets/redux/store";
import Languages from "./assets/components/languagesSelect/Languages";
import DarkMode from "./assets/components/darkMode/DarkMode";
import React from "react";
import DarkModeButton from "./assets/components/appComponents/darkModeButton/DarkModeButton";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkMode>
        <Languages />
        <DarkModeButton />
        <App />
      </DarkMode>
    </Provider>
  </React.StrictMode>
);
