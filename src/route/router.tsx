import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../common/constant";
import Home from "../component/Home";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />
  },
  {
    path: ROUTES.LOGIN,
    element: <div>Login</div>
  }
]);

export default router;
