// Use client directive for any components or pages utilizing state or hooks such as useState, useEffect, useReducer, useContext, etc. This directive is not required for components that only use props and do not have any internal state or side effects.
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
  const [sign, setSign] = useState<SignProps>({
    dimensions: dimensions[0].dimensions,
    trailNetworkName: '', // Initialize the new field TRAIL NETWORK
    trailNetworkAbout: '',
    indigenousTrailNetworkName: '', // Initialize the new field
    indigenousTrailNetworkAbout: '', // Initialize the new field
  });





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
              className={`text-md font-bold py-2 px-4 border-solid border-2 border-gray-300 ${index === 0
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
    setSign(prevSign => ({ ...prevSign, trailNetworkName: trailName }));
  };

  const handleAboutChange = (trailAbout: string) => {
    setSign((prevSign) => ({
      ...prevSign,
      trailNetworkAbout: trailAbout, // Update the trailAbout property
    }));
  };

  const handleIndigenousNameChange = (indigenousTrailName: string) => {
    setSign(prevSign => ({
      ...prevSign,
      indigenousTrailNetworkName: indigenousTrailName,
    }));
  };

  const handleIndigenousAboutChange = (indigenousAbout: string) => {
    setSign(prevSign => ({
      ...prevSign,
      indigenousTrailNetworkAbout: indigenousAbout,
    }));
  };


  const handleNextStep = () => {
    if ((currentStep === 0 && sign.dimensions) ||
      (currentStep === 1 && (sign.trailNetworkName || '').trim() !== '')) {
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
    setSign({ dimensions: dimensions[0].dimensions, trailNetworkName: '' });
  };

  const isNextDisabled = (currentStep === 0 && !sign.dimensions) ||
    (currentStep === 1 && (sign.trailNetworkName || '').trim() === '');

  const renderStepContent = () => {
    return (
      <>
        {renderStepSummary()}
        <StepHandler
          currentStep={currentStep}
          handleDimensionSelect={handleDimensionSelect}
          handleNameChange={handleNameChange}
          handleAboutChange={handleAboutChange}
          handleIndigenousNameChange={handleIndigenousNameChange} // Pass the new handler
          handleIndigenousAboutChange={handleIndigenousAboutChange} // Pass the new handler
          dimensions={dimensions}
          selectedDimension={dimensions.find(d => d.dimensions === sign.dimensions) || null}
          trailName={sign.trailNetworkName || ''}
          trailAbout={sign.trailNetworkAbout || ''}
          indigenousTrailName={sign.indigenousTrailNetworkName || ''} // Pass the new field
          indigenousAbout={sign.indigenousTrailNetworkAbout || ''} // Pass the new field
        />
      </>
    );
  };

  return (
    <div className="flex flex-col  space-y-4 md:space-y-0  w-full mx-auto">
      <div className="form-container w-full bg-white p-4 shadow rounded-lg overflow-hidden h-auto md:min-h-[600px]">
        {renderStepContent()}
        <NavigationButtons
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
          handleStartOver={handleStartOver}
          isPrevDisabled={currentStep === 0}
          isNextDisabled={isNextDisabled}
        />
      </div>
      <div className="preview-container w-full bg-white p-4 shadow rounded-lg overflow-hidden flex justify-center items-center md:min-h-[600px]">
        <SignPreview dimension={sign.dimensions} trailName={sign.trailNetworkName || ''} trailAbout={sign.trailNetworkAbout || ''} indigenousTrailName={sign.indigenousTrailNetworkName || ''} indigenousAbout={sign.indigenousTrailNetworkAbout || ''} />
      </div>
    </div>

  );
};

export default SignBuilder;