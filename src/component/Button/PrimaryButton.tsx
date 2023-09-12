type PrimaryButtonProps = {
  onClick: () => void;
  buttonText: string;
};

const PrimaryButton = ({ onClick, buttonText }: PrimaryButtonProps) => {
  return (
    <button
      className="mx-0 mt-3 w-full rounded-3xl bg-indigo-800 px-4 py-2.5 text-sm font-semibold leading-6 text-zinc-50 hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-50"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
