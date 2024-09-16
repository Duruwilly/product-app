import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "filled" | "outline";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  variant,
  ...rest
}) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`w-full py-[10px] mt-4 ${
        variant === "outline"
          ? "bg-transparent text-primary"
          : "bg-primary text-white"
      } rounded-full ${
        variant === "outline" ? "shadow-none" : "shadow-xl shadow-[#FE2C5533]"
      } border border-primary ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
