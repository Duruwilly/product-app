import { useFormikContext } from "formik";
import React, { FC, useState } from "react";
import { IoCloseOutline, IoEllipsisHorizontal } from "react-icons/io5";

interface MultiInputProps {
  label: string;
  name: string;
  placeholder: string;
  label2?: string;
  isIcon?: boolean;
  height?: string
}

const MultiInput: FC<MultiInputProps> = ({
  label,
  name,
  label2,
  placeholder,
  isIcon,
  height
}) => {
  const [input, setInput] = useState("");
  const { values, setFieldValue } = useFormikContext<any>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAddValue = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      setFieldValue(name, [...values[name], input.trim()]);
      setInput("");
    }
  };

  const handleRemove = (itemToRemv: string) => {
    setFieldValue(
      name,
      values[name].filter((val: string) => val !== itemToRemv)
    );
  };

  return (
    <div className={`w-full px-4 py-[10px] border rounded-xl focus:outline-none focus:border-primary text-sm h-full relative overflow-y-scroll ${height || "h-[83px]"}`}>
      <label
        className={`absolute left-4 ${
          values[name]?.length > 0 ? "text-[10px]" : "text-[14px]"
        } text-grey`}
      >
        {label}
      </label>
      {label2 && (
        <p className="text-black font-medium text-sm text-left mt-5">
          {label2}
        </p>
      )}
      {isIcon && (
        <div className="absolute top-2 right-2 p-2">
          <IoEllipsisHorizontal />
        </div>
      )}
      <div className="mt-5 flex items-center flex-wrap gap-1">
        {values[name]?.length > 0 &&
          values[name]?.map((item: string, index: number) => (
            <div
              key={index}
              className="bg-[#f7f7f7] py-[2px] px-[4px] rounded-full flex items-center gap-2 w-fit"
            >
              <p className="text-xs text-black">{item}</p>
              <IoCloseOutline
                size={20}
                className="text-lightGrey cursor-pointer"
                onClick={() => handleRemove(item)}
              />
            </div>
          ))}
      </div>
      <input
        type="text"
        name={name}
        value={input}
        className="border-none focus:border focus:outline-none focus:border-primary w-full mt-5"
        onChange={handleChange}
        onKeyDown={handleAddValue}
        placeholder={placeholder}
      />
    </div>
  );
};

export default MultiInput;
