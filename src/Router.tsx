import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./components/Error";
import Followers from "./components/users/followers";
import User from "./components/users/user";
import About from "./screens/About";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users/:userId",
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Followers />,
          },
        ],
      },
    ],
  },
]);

export default router;
