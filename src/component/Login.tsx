import { Link, useNavigate } from "react-router-dom";
import { APP_NAME, ROUTES } from "../common/constant";
import UserAuthContainer from "./UserAuthContainer";
import { PrimaryButton, SecondaryButton } from "./Button";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";

const LOGIN_TEXT = "Login to";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(ROUTES.HOME);
  };

  const handleGoogleLogin = () => {
    console.log("Google login, not implemented yet");
  };
  const handleAppleLogin = () => {
    console.log("Google login, not implemented yet");
  };

  return (
    <UserAuthContainer>
      <div className="flex w-full flex-col p-5 sm:p-10">
        <p className="self-center text-2xl text-zinc-50 sm:text-4xl">
          {LOGIN_TEXT} {APP_NAME}
        </p>

        <div className="mt-0 flex w-full flex-col items-center justify-center gap-4 px-1 py-5 sm:mt-5 sm:px-10 sm:py-10">
          <SecondaryButton onClick={handleGoogleLogin} buttonText="Log in with Google" />
          <SecondaryButton onClick={handleAppleLogin} buttonText="Log in with Apple" />
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
        <div className="mt-0 flex w-full flex-col items-center justify-center gap-4 px-1 py-5 sm:mt-5 sm:px-10 sm:py-10">
          <TextInput label="Email" inputType="email" autoComplete="email" required />
          <TextInput label="Password" inputType="password" autoComplete="current-password" required />
        </div>

        <div className="mt-0 flex w-full items-center justify-between px-1 sm:mt-5 sm:px-10">
          <RadioInput label="Remember me" />

          <Link to="#" className="text-sm font-semibold leading-6 text-zinc-300 underline hover:text-zinc-50">
            Forgot password?
          </Link>
        </div>
        <div className="mt-0 w-full px-1 sm:mt-5 sm:px-10">
          <PrimaryButton onClick={handleLogin} buttonText="Log in to your account" />
        </div>
        <div className="mt-5 flex w-full items-center gap-2 px-1 sm:mt-5 sm:px-10">
          <p className="text-center text-sm text-zinc-300">Don't have an account yet? </p>
          <Link
            to={ROUTES.SIGNUP}
            className="text-sm font-semibold leading-6 text-zinc-300 underline hover:text-zinc-50"
          >
            Sign up
          </Link>
        </div>
      </div>
    </UserAuthContainer>
  );
};

export default Login;
