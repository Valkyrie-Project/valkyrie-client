type SecondaryButtonProps = {
  onClick: () => void;
  buttonText: string;
};

const SecondaryButton = ({ onClick, buttonText }: SecondaryButtonProps) => {
  return (
    <button
      className="mx-0 w-full rounded-3xl bg-zinc-900 px-4 py-2.5 text-sm font-semibold leading-6 text-zinc-50 ring-2 ring-inset ring-zinc-500 hover:ring-zinc-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-50 sm:mx-10"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default SecondaryButton;
