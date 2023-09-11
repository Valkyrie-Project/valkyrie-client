import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../common/constant";
import Home from "../component/Home";
import Login from "../component/Login";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />
  }
]);

export default router;
