import InputType from "../types/components/text";

const Input = ({ value, onChange }: InputType) => {
  return (
    <input
      type="text"
      className="outline-0 bg-dark-bg text-dark-fg"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
      autoFocus
    />
  );
};

export default Input;
