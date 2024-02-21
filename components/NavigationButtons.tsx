// This component requires use of the ConfirmationModal.tsx component to dictate whether the user is sure of the selection when resetting

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
        <div className="flex justify-between w-full gap-1">
          
          {/* CustomButton.tsx component with applied type handling for each respective button */}
          
          {/* Previous Button */}
          <CustomButton
            title="Back"
            handleClick={handlePrevStep}
            containerStyles="w-32 bg-gray-300 hover:bg-gray-400 text-primary-bc-blue py-3 rounded-md flex items-center mx-auto justify-center gap-2"
            icon={<ArrowLeftCircleIcon className="w-5 h-5" />}
            isDisabled={isPrevDisabled}
          />
          {/* Next Button */}
          <CustomButton
            title="Next"
            handleClick={handleNextStep}
            containerStyles="w-32 bg-bc-light-blue hover:bg-primary-bc-blue text-white py-3 pl-2 rounded-md flex flex-row-reverse items-center mx-auto gap-3 justify-center"
            icon={<ArrowRightCircleIcon className="w-5 h-5" />}
            isDisabled={isNextDisabled}
          />
        </div>
        {/* Reset Button - Now triggers modal */}
        <CustomButton
          title="Reset"
          handleClick={showModal}
          containerStyles="w-32 bg-red-400 hover:bg-red-500 text-white py-3 px-2 rounded-md flex items-center mx-auto justify-center gap-1"
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