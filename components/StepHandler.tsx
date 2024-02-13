import React from 'react';
import DimensionSelector from './DimensionSelector';
import SignTitle from './SignTitle';
import { DimensionProps } from '@/types';

interface StepHandlerProps {
  currentStep: number;
  handleDimensionSelect: (dimension: DimensionProps) => void;
  handleNameChange: (trailName: string) => void;
  handleAboutChange: (trailAbout: string) => void;
  dimensions: DimensionProps[];
  selectedDimension: DimensionProps | null;
  trailName: string;
  trailAbout?: string;
  // Consider adding functions to move to next/previous steps if StepHandler is to control step transitions
}

const StepHandler: React.FC<StepHandlerProps> = ({
  currentStep,
  handleDimensionSelect,
  handleNameChange,
  handleAboutChange,
  dimensions,
  selectedDimension,
  trailName,
  trailAbout,
}) => {
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <DimensionSelector
            dimensions={dimensions}
            selectedDimension={selectedDimension}
            onSelectDimension={handleDimensionSelect}
          />
        );
      case 1:
        return (
          <SignTitle
            trailName={trailName}
            setName={handleNameChange}
            trailAbout={trailAbout}
            setAbout={handleAboutChange}
          />
        );
      default:
        return null; // Or some default content
    }
  };

  return <>{renderStepContent()}</>;
};

export default StepHandler;