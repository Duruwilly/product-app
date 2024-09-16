import React from "react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="flex items-center justify-between gap-2 w-full mb-3">
      {[...Array(totalSteps)].map((_, index) => (
        <div key={index} className="flex-1 flex items-center">
          <div
            className={`w-full h-1 rounded-[15px] ${
              index < currentStep ? "bg-primary" : "bg-gray-300"
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
