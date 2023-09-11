import { Link, useNavigate } from "react-router-dom";
import { APP_NAME, ROUTES } from "../common/constant";
import Header from "./Header";

const LOGIN_TEXT = "Login to";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-tl from-zinc-800 to-zinc-600 sm:h-screen">
      <Header />
      <div className="flex h-fit flex-col items-center sm:px-0">
        <div className="my-8 flex h-full w-5/6 rounded-lg bg-zinc-900 sm:my-10 md:w-3/5 xl:w-2/6">
          <div className="flex w-full flex-col p-5 sm:p-10">
            <p className="self-center text-2xl text-zinc-50 sm:text-4xl">
              {LOGIN_TEXT} {APP_NAME}
            </p>
            <div className="sm:mt:5 mt-0 flex w-full flex-col items-center justify-center gap-4 px-1 py-5 sm:px-10 sm:py-10">
              <div className="w-full">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-zinc-50">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 bg-zinc-600/60 py-1.5 text-zinc-50 shadow-sm ring-1 ring-inset ring-zinc-500/80 focus:ring-2 focus:ring-inset focus:ring-zinc-50 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="w-full">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-zinc-50">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 bg-zinc-600/60 py-1.5 text-zinc-50 shadow-sm ring-1 ring-inset ring-zinc-500/80 focus:ring-2 focus:ring-inset focus:ring-zinc-50 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="relative flex gap-1">
              <div className="inset-0 flex flex-1 items-center" aria-hidden="true">
                <div className="w-full border-t border-zinc-400" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 text-sm text-zinc-50">Or</span>
              </div>
              <div className="inset-0 flex flex-1 items-center" aria-hidden="true">
                <div className="w-full border-t border-zinc-400" />
              </div>
            </div>
            <div className="sm:mt:5 mt-0 flex w-full flex-col items-center justify-center gap-4 px-1 py-5 sm:px-10 sm:py-10">
              <button
                type="button"
                className="mx-0 w-full rounded-3xl bg-zinc-900 px-4 py-2.5 text-sm font-semibold leading-6 text-zinc-50 ring-2 ring-inset ring-zinc-500 hover:ring-zinc-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-50 sm:mx-10"
              >
                Log in with Google
              </button>
              <button
                type="button"
                className="mx-0 w-full rounded-3xl bg-zinc-900 px-4 py-2.5 text-sm font-semibold leading-6 text-zinc-50 ring-2 ring-inset ring-zinc-500 hover:ring-zinc-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-50 sm:mx-10"
              >
                Log in with Apple
              </button>
              <button
                type="button"
                className="mx-0 w-full rounded-3xl bg-zinc-900 px-4 py-2.5 text-sm font-semibold leading-6 text-zinc-50 ring-2 ring-inset ring-zinc-500 hover:ring-zinc-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-50 sm:mx-10"
              >
                Log in with Facebook
              </button>
            </div>
            <div className="sm:mt:5 mt-0 flex w-full items-center justify-between px-1 sm:px-10">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-zinc-300 text-zinc-600 focus:ring-zinc-600"
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-zinc-300">
                  Remember me
                </label>
              </div>

              <div className="text-sm leading-6">
                <Link to="#" className="font-semibold text-zinc-400 hover:text-zinc-300">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="sm:mt:5 mt-0 w-full px-1 sm:px-10">
              <button
                type="submit"
                className="mx-0 mt-3 w-full rounded-3xl bg-zinc-600 px-4 py-2.5 text-sm font-semibold leading-6 text-zinc-50 hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-50"
                onClick={handleLogin}
              >
                Log in to your account
              </button>
            </div>
            <div className="sm:mt:5 mt-5 flex w-full items-center gap-2 px-1 sm:px-10">
              <p className="text-center text-sm text-zinc-300">Don't have an account yet? </p>
              <Link to="#" className="text-sm font-semibold leading-6 text-zinc-400 hover:text-zinc-300">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
