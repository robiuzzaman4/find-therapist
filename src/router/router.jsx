import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RootLayout from "../layout/root-layout";
import DashboardLayout from "../layout/dashboard-layout";
import Home from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [{ path: "/dashboard", element: <Home /> }],
      },
    ],
  },
]);
