// NavigationButtons.tsx
import React from 'react';
import CustomButton from './CustomButton';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, ArrowPathIcon } from '@heroicons/react/16/solid';

interface NavigationButtonsProps {
  handlePrevStep: () => void;
  handleNextStep: () => void;
  handleStartOver: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  handlePrevStep,
  handleNextStep,
  handleStartOver,
  isPrevDisabled,
  isNextDisabled,
}) => (
  <div className="navigation-buttons mt-4 flex flex-col items-center gap-2">
    <div className="flex justify-between w-full">
      <CustomButton
        title="Previous"
        handleClick={handlePrevStep}
        containerStyles="bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded-md flex items-center mx-auto"
        icon={<ArrowLeftCircleIcon className="w-5 h-5" />}
        isDisabled={isPrevDisabled}
      />
      <CustomButton
        title="Next"
        handleClick={handleNextStep}
        containerStyles="bg-bc-light-blue hover:bg-primary-bc-blue text-white font-bold py-1 px-2 rounded-md flex items-center mx-auto"
        icon={<ArrowRightCircleIcon className="w-5 h-5" />}
        isDisabled={isNextDisabled}
      />
    </div>
    <CustomButton
      title="Reset"
      handleClick={handleStartOver}
      containerStyles="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-md flex items-center mx-auto"
      icon={<ArrowPathIcon className="w-5 h-5" />}
    />
  </div>
);

export default NavigationButtons;