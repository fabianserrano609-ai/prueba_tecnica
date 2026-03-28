import { createBrowserRouter } from "react-router-dom";
import { Main } from "../pages/Main";

export const navRoutes = createBrowserRouter([
  {
    path: `/`,
    element: <Main />,
  },
  //   {
  //     path: `${import.meta.env.VITE_ROUTE_HOME}/process`,
  //     PageComponent: ProcessPage,
  //     text: "Subir",
  //   },
]);
