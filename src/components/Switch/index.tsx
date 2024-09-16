import { useState } from "react";

interface SwitchProps {
  onToggle: () => void;
}

const Switch: React.FC<SwitchProps> = ({ onToggle }) => {
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    if (isOn) {
      setIsOn(false);
      onToggle();
    } else {
      setIsOn(true);
    }
  };

  return (
    <div
      onClick={handleToggle}
      className={`w-[32.5px] h-5 flex items-center bg-gray-300 rounded-full cursor-pointer transition-colors ${
        isOn ? "bg-primary" : "bg-gray-400"
      }`}
    >
      <div
        className={`bg-white w-[15px] h-[15px] rounded-full shadow-md transform transition-transform ${
          isOn ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </div>
  );
};

export default Switch;
