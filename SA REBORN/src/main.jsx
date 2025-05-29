// src/index.js (ou src/main.jsx)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./context/UserContext.jsx";
import { UserDataProvider } from "./context/UserDataContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RouterProvider } from "react-router-dom";
// MUDE ESTA LINHA:
import router from "./router.jsx"; // <<< Novo caminho mais simples!

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <UserDataProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
        <ToastContainer />
      </UserDataProvider>
    </UserProvider>
  </React.StrictMode>
);