"use client";

// SignBuilder.tsx
import React, { useState, useEffect } from 'react';
// import DimensionSelector from './DimensionSelector';
import { SignPreview, CustomButton, SignTitle, NavigationButtons } from '@/components';
import StepHandler from './StepHandler';
import { DimensionProps, SignProps } from '@/types';
// import { ArrowLeftCircleIcon, ArrowRightCircleIcon, ArrowPathIcon } from '@heroicons/react/16/solid';

const dimensions: DimensionProps[] = [
  { title: "3' x 3'", dimensions: "3x3" },
  { title: "8' x 4'", dimensions: "8x4" },
];

interface SignBuilderProps {
  onTitleChange: (title: string) => void;
}

const SignBuilder: React.FC<SignBuilderProps> = ({ onTitleChange }) => {
  // Assume the initial state includes dimensions and name, and potentially more properties.
  const [sign, setSign] = useState<SignProps>({ dimensions: dimensions[0].dimensions, trailName: '' });
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Example of determining the title based on the current step
    const titles = ["Please select the size of the sign", "Please fill in the following information:"];
    const currentTitle = titles[currentStep] || "Create Sign";
    onTitleChange(currentTitle);
  }, [currentStep, onTitleChange]);

  const renderStepSummary = () => {
    // Filter out empty or unset properties to avoid displaying them.
    const filledEntries = Object.entries(sign).filter(([_, value]) => value);

    // Only display summaries if past the first step and there are filled entries.
    if (currentStep > 0 && filledEntries.length > 0) {
      return (
        <div className="mb-2">
          {filledEntries.map(([key, value], index) => (
            <div 
              key={key} 
              className={`text-md font-bold py-2 px-4 border-solid border-2 border-gray-300 ${
                index === 0
                  ? "bg-gray-200 text-gray-500 rounded-tl-lg rounded-tr-lg border-b-0" // First item
                  : index === filledEntries.length - 1
                  ? "bg-gray-200 text-gray-500 rounded-bl-lg rounded-br-lg" // Last item
                  : "bg-gray-200 text-gray-500 border-t-0" // Middle items
              }`}
            >
              {/* Convert the key to a readable format and display its value */}
              {formatKey(key)}: <span className="font-normal">{value}</span>
            </div>
          ))}
        </div>
      );
    }

    // Return null or an empty fragment if no entries to display.
    return null;
  };

  // A utility function to format keys for display, e.g., converting "firstName" to "First Name".
  const formatKey = (key: string) => {
    // Split the key into words based on uppercase letters, add spaces, and capitalize.
    return key.replace(/([A-Z])/g, ' $1') // Add space before capital letters.
      .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter.
      .trim();
  };

  const handleDimensionSelect = (dimension: DimensionProps) => {
    setSign({ ...sign, dimensions: dimension.dimensions });
  };

  const handleNameChange = (trailName: string) => {
    setSign(prevSign => ({ ...prevSign, trailName }));
  };
  const handleNextStep = () => {
    if ((currentStep === 0 && sign.dimensions) ||
      (currentStep === 1 && (sign.trailName || '').trim() !== '')) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStartOver = () => {
    setCurrentStep(0);
    setSign({ dimensions: dimensions[0].dimensions, trailName: '' });
  };

  const isNextDisabled = (currentStep === 0 && !sign.dimensions) ||
    (currentStep === 1 && (sign.trailName || '').trim() === '');

  const renderStepContent = () => {
    return (
      <>
        {renderStepSummary()}
        <StepHandler
          currentStep={currentStep}
          handleDimensionSelect={handleDimensionSelect}
          handleNameChange={handleNameChange}
          dimensions={dimensions}
          selectedDimension={dimensions.find(d => d.dimensions === sign.dimensions) || null}
          trailName={sign.trailName || ''}
        />
      </>
    );
  };

  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full mx-auto">
      <div className="form-container w-full md:w-1/3 bg-white p-4 shadow rounded-lg overflow-hidden h-auto md:min-h-[600px]">
        {renderStepContent()}
        <NavigationButtons
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
          handleStartOver={handleStartOver}
          isPrevDisabled={currentStep === 0}
          isNextDisabled={isNextDisabled}
        />
      </div>
      <div className="preview-container w-full md:w-2/3 bg-white p-4 shadow rounded-lg overflow-hidden flex justify-center items-center md:min-h-[600px]">
        <SignPreview dimension={sign.dimensions} trailName={sign.trailName || ''} />
      </div>
    </div>
    
  );
};

export default SignBuilder;