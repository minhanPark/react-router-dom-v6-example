import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./components/Error";
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
    ],
  },
]);

export default router;
