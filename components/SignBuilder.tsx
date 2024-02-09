"use client";

// SignBuilder.tsx
import React, { useState } from 'react';
import DimensionSelector from './DimensionSelector';
import { SignPreview, CustomButton, SignTitle, NavigationButtons } from '@/components';
import StepHandler from './StepHandler';
import { DimensionProps, SignProps } from '@/types';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, ArrowPathIcon } from '@heroicons/react/16/solid';

const dimensions: DimensionProps[] = [
  { title: "3' x 3'", dimensions: "3x3" },
  { title: "8' x 4'", dimensions: "8x4" },
];


const SignBuilder: React.FC = () => {
  // Initialize selectedDimension state

  const [sign, setSign] = useState<SignProps>({ dimensions: dimensions[0].dimensions, name: '' });
  const [currentStep, setCurrentStep] = useState(0);

  const renderStepSummary = () => {
    const summaries = [];

    // Always show the dimension selection summary if past the first step
    if (currentStep > 0) {
      summaries.push(
        <div key="dimension-summary" className="text-lg font-bold mb-2">
          Dimensions: <span className="font-normal">{sign.dimensions}</span>
        </div>
      );
    }

    // Add more summaries for other steps as needed
    // if (currentStep > N) { ... }

    return summaries;
  };

  const handleDimensionSelect = (dimension: DimensionProps) => {
    setSign({ ...sign, dimensions: dimension.dimensions });
  };

  const handleNameChange = (name: string) => {
    setSign(prevSign => ({ ...prevSign, name }));
  };
  const handleNextStep = () => {
    if ((currentStep === 0 && sign.dimensions) || (currentStep === 1 && sign.name.trim() !== '')) {
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
    setSign({ dimensions: dimensions[0].dimensions, name: '' });
  };

  const isNextDisabled = (currentStep === 0 && !sign.dimensions) || (currentStep === 1 && sign.name.trim() === '');

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
          name={sign.name}
        />
      </>
    );
  };

  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full mx-auto" style={{ width: '100%' }}>
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
        <SignPreview dimension={sign.dimensions} name={sign.name} />
      </div>
    </div>
  );
};

export default SignBuilder;