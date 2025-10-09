import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Components/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Apps from "../Components/Apps/Apps";
import Installation from "../Components/Installation/Installation";
import AppDetails from "../Components/AppDetails/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    Component: MainLayouts,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () =>
          // fake delay + local fetch
          new Promise((resolve) =>
            setTimeout(() => resolve(fetch("/trendingApp.json")), 800)
          ),
      },
      {
        path: "/apps",
        element: <Apps />,
        loader: () =>
          new Promise((resolve) =>
            setTimeout(() => resolve(fetch("/ourAllApps.json")), 800)
          ),
      },
      {
        path: "/appDetails/:id",
        element: <AppDetails />,
        loader: () => fetch("/ourAllApps.json"),
      },
      {
        path: "/installation",
        element: <Installation />,
        loader: () =>
          // fake delay so loading spinner shows
          new Promise((resolve) => setTimeout(() => resolve([]), 800)),
      },
    ],
  },
]);

export default router;
