import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Supplies from "./Pages/Home/Supplies/Supplies.jsx";
import Dashboard from "./Pages/Dashboard/Home/Dashboard.jsx";
import Login from "./components/Login.jsx";
import Error from "./components/error.jsx";
import HomeLayout from "./Pages/Home/HomeLayout/HomeLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomeLayout />,
      },
      {
        path: "supplies",
        element: <Supplies />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
