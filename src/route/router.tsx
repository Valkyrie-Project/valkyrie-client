import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../common/constant";
import Home from "../component/Home";
import Login from "../component/Login";
import Signup from "../component/Signup";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />
  },
  {
    path: ROUTES.SIGNUP,
    element: <Signup />
  }
]);

export default router;
