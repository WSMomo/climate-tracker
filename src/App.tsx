import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./assets/pages/home/Home";
import Temperature from "./assets/pages/temperature/Temperature";
import Methane from "./assets/pages/methane/Methane";
import No2 from "./assets/pages/no2/No2";
import Arctic from "./assets/pages/arctic/Arctic";
import Co2 from "./assets/pages/co2/Co2";
import Quiz from "./assets/pages/quiz/Quiz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/temperature",
    element: <Temperature />,
  },
  {
    path: "/methane",
    element: <Methane />,
  },
  {
    path: "/no2",
    element: <No2 />,
  },
  {
    path: "/arctic",
    element: <Arctic />,
  },
  {
    path: "/co2",
    element: <Co2 />,
  },
]);

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
