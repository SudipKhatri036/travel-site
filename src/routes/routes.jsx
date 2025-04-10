import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import SearchResults from "../pages/SearchResults";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search-result",
        element: <SearchResults />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
