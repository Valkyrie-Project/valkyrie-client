import { HTMLInputTypeAttribute } from "react";

type TextInputProps = {
  label: string;
  inputType: HTMLInputTypeAttribute | undefined;
  autoComplete?: string | undefined;
  required?: boolean;
};

const TextInput = ({ label, inputType, autoComplete, required = false }: TextInputProps) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium leading-6 text-zinc-50">
        {label}
        <input
          id={label}
          type={inputType}
          autoComplete={autoComplete}
          required={required}
          className="mt-2 block w-full rounded-md border-0 bg-zinc-600/60 py-1.5 text-zinc-50 caret-zinc-50 shadow-sm ring-1 ring-inset ring-zinc-500/80 focus:ring-2 focus:ring-inset focus:ring-zinc-50 sm:text-sm sm:leading-6"
        />
      </label>
    </div>
  );
};

export default TextInput;
