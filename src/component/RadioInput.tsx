type RadioInputProps = {
  label: string;
};

const RadioInput = ({ label }: RadioInputProps) => {
  return (
    <div className="flex items-center">
      <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 text-zinc-600 focus:ring-zinc-600" />
      <label className="ml-3 block text-sm leading-6 text-zinc-300">{label}</label>
    </div>
  );
};

export default RadioInput;
