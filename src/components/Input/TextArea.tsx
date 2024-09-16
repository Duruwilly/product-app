import React, { TextareaHTMLAttributes } from "react";

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  error?: string | boolean | string[];
}

const TextArea: React.FC<InputProps> = ({ name, error, ...props }) => {
  return (
    <div className="w-full my-2">
      <textarea
        rows={2}
        name={name}
        {...props}
        className="w-full px-4 py-[10px] border rounded-xl focus:outline-none focus:border-primary text-sm"
      />
      {error && <small className="px-3 text-red-500">{error}</small>}
    </div>
  );
};

export default TextArea;
