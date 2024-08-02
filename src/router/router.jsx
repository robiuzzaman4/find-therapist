import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root-layout";
import DashboardLayout from "../layout/dashboard-layout";
import Home from "../pages/home";
import SignUp from "../pages/sign-up";
import SignIn from "../pages/sign-in";
import ProtectedRoute from "./protected-route";
import NewListing from "../pages/new-listing";
import Search from "../pages/search";
import About from "../pages/about";
import Favourites from "../pages/fabourites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Home />,
      },
      {
        path: "/dashboard/new-listing",
        element: <NewListing />,
      },
      {
        path: "/dashboard/search",
        element: <Search />,
      },
      {
        path: "/dashboard/about",
        element: <About />,
      },
      {
        path: "/dashboard/favourites",
        element: <Favourites />,
      },
    ],
  },
]);
