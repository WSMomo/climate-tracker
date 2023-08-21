import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./assets/redux/store";
import Languages from "./assets/components/appComponents/languagesSelect/Languages";
import DarkMode from "./assets/components/darkMode/DarkMode";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <DarkMode>
      <Languages />
      <App />
    </DarkMode>
  </Provider>
  // {/* </React.StrictMode> */}
);
