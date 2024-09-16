import React, { useState, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: string | boolean | string[];
  label: string;
}

const Input: React.FC<InputProps> = ({
  name,
  error,
  label,
  value,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const hasValue = Boolean(value) || isFocused;

  return (
    <div className="w-full my-2 relative">
      <label
        htmlFor={name}
        className={`absolute left-4 transition-all duration-300 ease-in-out text-grey ${
          hasValue
            ? "top-[10%] transform -translate-y-[10%] text-[10px]"
            : "top-[50%] transform -translate-y-[50%] text-sm"
        }`}
      >
        {label}
      </label>

      <input
        name={name}
        id={name}
        value={value}
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-4 py-[10px] border rounded-xl focus:outline-none focus:border-primary text-sm"
      />

      {error && <small className="px-3 text-red-500">{error}</small>}
    </div>
  );
};

export default Input;
