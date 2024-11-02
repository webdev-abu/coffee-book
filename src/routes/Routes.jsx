import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Coffee from "../pages/coffee";
import CoffeeCards from "../components/CoffeeCards";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <CoffeeCards></CoffeeCards>,
            loader: () => fetch("../coffees.json"),
          },
          {
            path: "/category/:category",
            element: <CoffeeCards></CoffeeCards>,
            loader: () => fetch("../coffees.json"),
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffee></Coffee>,
        loader: () => fetch("../coffees.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default routes;
