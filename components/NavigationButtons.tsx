"use client";

// NavigationButtons.tsx
import React, { useState } from 'react';
import { CustomButton, ConfirmationModal } from '@/components';
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
  }) => {
    // State to control the visibility of the confirmation modal
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    // Function to show the modal
    const showModal = () => setIsModalOpen(true);
  
    // Function to hide the modal and trigger reset
    const confirmReset = () => {
      setIsModalOpen(false); // Close the modal
      handleStartOver(); // Call the reset function
    };
  
    // Function to simply hide the modal without resetting
    const cancelReset = () => setIsModalOpen(false);
  
    return (
      <div className="navigation-buttons mt-4 flex flex-col items-center gap-2">
        <div className="flex justify-between w-full">
          {/* Previous Button */}
          <CustomButton
            title="Previous"
            handleClick={handlePrevStep}
            containerStyles="w-40 bg-gray-500 hover:bg-gray-600 text-white py-1 px-2 rounded-md flex items-center mx-auto justify-center gap-1"
            icon={<ArrowLeftCircleIcon className="w-5 h-5" />}
            isDisabled={isPrevDisabled}
          />
          {/* Next Button */}
          <CustomButton
            title="Next"
            handleClick={handleNextStep}
            containerStyles="w-40 bg-bc-light-blue hover:bg-primary-bc-blue text-white py-1 pl-3 rounded-md flex flex-row-reverse items-center mx-auto gap-3 justify-center"
            icon={<ArrowRightCircleIcon className="w-5 h-5" />}
            isDisabled={isNextDisabled}
          />
        </div>
        {/* Reset Button - Now triggers modal */}
        <CustomButton
          title="Reset"
          handleClick={showModal}
          containerStyles="w-40 bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md flex items-center mx-auto justify-center gap-1"
          icon={<ArrowPathIcon className="w-5 h-5" />}
        />
        {/* Confirmation Modal */}
        <ConfirmationModal
          isOpen={isModalOpen}
          onConfirm={confirmReset}
          onCancel={cancelReset}
        />
      </div>
    );
  };
  
  export default NavigationButtons;