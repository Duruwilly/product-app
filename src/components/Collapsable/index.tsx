import { IoIosArrowDown } from "react-icons/io";

type CollapsibleProps = {
  title: string;
  isCollapsed: boolean;
  toggleSection: () => void;
  children: React.ReactNode;
};

const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  isCollapsed,
  toggleSection,
  children,
}) => {
  return (
    <div>
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleSection}
      >
        <p className="text-black text-sm font-medium">{title}</p>
        <IoIosArrowDown
          size={20}
          className={`text-lightGrey transform ${
            isCollapsed ? "rotate-180" : ""
          }`}
        />
      </div>
      {!isCollapsed && <div className="mt-3">{children}</div>}
    </div>
  );
};

export default Collapsible
