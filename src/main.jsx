import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/ui/error.jsx";
import AllSupplies from "./Pages/SuppliesPage/AllSupplies.jsx";
import Authentication from "./Pages/AuthenticationPage/Login.jsx";
import HomeLayout from "./Layout/HomeLayout/HomeLayout.jsx";
import DashboardLayout from "./Layout/DashboardLayout/DashboardLayout.jsx";
import Dashboard from "./Pages/DashboardPage/Dashboard.jsx";
import Home from "./Pages/HomePage/Home.jsx";
import DashboardAllSupplies from "./components/DashboardComponents/DashboardAllSupplies/DashboardAllSupplies.jsx";
import PieChart from "./components/DashboardComponents/PieChart/PieChart.jsx";
import CreateSupply from "./components/DashboardComponents/CreateSupply/CreateSupply.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "supplies",
        element: <AllSupplies />,
      },
      {
        path: "login",
        element: <Authentication />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "supplies",
        element: <DashboardAllSupplies />,
      },
      {
        path: "create-supply",
        element: <CreateSupply />,
      },
      {
        path: "chart",
        element: <PieChart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Provider store={store}>
        <HomeLayout />
      </Provider>
    </RouterProvider>
  </React.StrictMode>
);
