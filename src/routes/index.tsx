import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./baseRoutes";
import Layout from "./Layout";
import Weather from "../components/Weather";

const router = createBrowserRouter([
  {
    path: Routes.index,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Weather />,
      },
      // {
      //   path: Routes.contact,
      //   element: <Weather/>
      // }
    ],
  },
]);

export default router;
