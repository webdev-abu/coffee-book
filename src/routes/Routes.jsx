import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Coffee from "../pages/coffee";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [],
      },
      {
        path: "/coffees",
        element: <Coffee></Coffee>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default routes;
