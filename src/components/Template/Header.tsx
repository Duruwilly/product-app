import React from "react";
import { useRouter } from "next/navigation";
import { GoArrowLeft } from "react-icons/go";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";

interface IProps {
  title: string;
  onGoBack?: () => void;
  elipses?: boolean;
}

const TemplateHeader = ({ title, elipses, onGoBack }: IProps) => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center px-5 mb-3">
      <div className="flex gap-2 items-center text-black text-base font-medium">
        <GoArrowLeft
          size={20}
          onClick={onGoBack || (() => router.back())}
          className="text-grey font-thin"
        />
        <p className="">{title}</p>
      </div>
      {elipses && <HiOutlineEllipsisVertical size={20} />}
    </div>
  );
};

export default TemplateHeader;
