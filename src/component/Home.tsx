import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { ROUTES } from "../common/constant";

const Home = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate(ROUTES.LOGIN);
  };

  return (
    <div className="flex h-screen w-full flex-col bg-gradient-to-tl from-gray-800 to-gray-600">
      <Header />
      <div className="flex h-full w-full items-center justify-center">
        <div>
          <p className="pb-2 text-8xl text-gray-50">Valkyrie</p>
          <button
            onClick={navigateToLogin}
            className="mx-0 mt-3 w-full rounded-3xl bg-gray-900 px-4 py-2.5 text-sm font-semibold leading-6 text-gray-50 hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-50"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
