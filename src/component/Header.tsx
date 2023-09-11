import { APP_NAME } from "../common/constant";

function Header() {
  return (
    <div className="flex h-12 flex-col items-start justify-center bg-zinc-900 px-4 sm:h-16 sm:px-0">
      <p className="px-4 text-2xl text-white sm:px-10">{APP_NAME}</p>
    </div>
  );
}

export default Header;
