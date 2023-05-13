import { ChangeEventHandler } from "react";

interface InputProps {
  value: string;
  onValueChange: ChangeEventHandler<HTMLInputElement>;
  type: string;
  placeholder: string;
}

function Input({ value, onValueChange, type, placeholder }: InputProps) {
  return (
    <form className="form">
      <input
        className="input"
        type={type}
        value={value}
        onChange={onValueChange}
        style={{ minWidth: "255px", height: 46 }}
      />
      <label className={`placeholder${value === "" ? "" : "-floating"}`}>
        {placeholder}
      </label>
    </form>
  );
}

export default Input;
