import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Components/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Apps from "../Components/Apps/Apps";
import Installation from "../Components/Installation/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: MainLayouts,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/trendingApp.json"),
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
        loader: () => fetch("/ourAllApps.json"),
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);

export default router;
