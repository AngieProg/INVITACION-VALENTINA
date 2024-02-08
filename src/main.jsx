import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { HashRouter } from "react-router-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";
// import { ListaInvitados } from "./components/ListaInvitados.jsx";
import Agradecimiento from "./sections/Agradecimiento.jsx";
import Programa from "./sections/Programa.jsx";
import Familia from "./sections/Familia.jsx";

const router = createHashRouter([
  /*} {
    path: "/INVITACION-VALENTINA/invitado/:id",
    element: <Invitado />,
  },*/
  {
    path: "/familia",
    element: <Familia />,
  },
  {
    path: "/",
    element: <Familia />,
  },
]);

// https://blog.devgenius.io/how-to-deploy-your-vite-react-app-to-github-pages-with-and-without-react-router-b060d912b10e

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
