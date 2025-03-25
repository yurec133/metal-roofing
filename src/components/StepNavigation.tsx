import React from "react";
import clsx from "clsx";

interface StepNavigationProps {
  currentStep: number;
  handleTabClick: (
    e: React.MouseEvent<HTMLButtonElement>,
    step: number,
  ) => void;
  validatedSteps: number[];
}

const StepNavigation: React.FC<StepNavigationProps> = ({
  currentStep,
  handleTabClick,
  validatedSteps,
}) => {
  return (
    <div className="flex justify-between mb-7">
      <button
        onClick={(e) => handleTabClick(e, 1)}
        className={clsx(
          "cursor-pointer py-2 px-4 w-full text-center border-b-2",
          {
            "border-blue-500 text-blue-500": currentStep === 1,
            "border-gray-100 text-gray-500 hover:text-blue-500":
              currentStep !== 1,
            "border-green-800 text-green-800":
              validatedSteps.includes(1) && currentStep !== 1,
            "hover:text-green-700 hover:border-green-700":
              validatedSteps.includes(1) && currentStep !== 1,
          },
        )}
      >
        Step 1
      </button>
      <button
        onClick={(e) => handleTabClick(e, 2)}
        className={clsx(
          "cursor-pointer py-2 px-4 w-full text-center border-b-2",
          {
            "border-blue-500 text-blue-500": currentStep === 2,
            "border-gray-100 text-gray-500 hover:text-blue-500":
              currentStep !== 2,
            "border-green-800 text-green-800":
              validatedSteps.includes(1) && currentStep !== 2,
            "hover:text-green-700 hover:border-green-700":
              validatedSteps.includes(1) && currentStep !== 2,
          },
        )}
      >
        Step 2
      </button>
      <button
        onClick={(e) => handleTabClick(e, 3)}
        className={`cursor-pointer py-2 px-4 w-full text-center border-b-2 
          ${currentStep === 3 || validatedSteps.includes(3) ? "border-blue-500 text-blue-500" : "border-gray-100 text-gray-500 hover:text-blue-500"}
        `}
      >
        Step 3
      </button>
    </div>
  );
};

export default StepNavigation;
