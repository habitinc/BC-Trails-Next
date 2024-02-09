// StepHandler.tsx
import React from 'react';
import DimensionSelector from './DimensionSelector';
import SignTitle from './SignTitle';
import { DimensionProps } from '@/types';

interface StepHandlerProps {
  currentStep: number;
  handleDimensionSelect: (dimension: DimensionProps) => void;
  handleNameChange: (name: string) => void;
  dimensions: DimensionProps[];
  selectedDimension: DimensionProps | null;
  name: string;
}

const StepHandler: React.FC<StepHandlerProps> = ({
  currentStep,
  handleDimensionSelect,
  handleNameChange,
  dimensions,
  selectedDimension,
  name,
}) => {
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
          name={name}
          setName={handleNameChange}
        />
      );
    default:
      return null; // Or some default content
  }
};

export default StepHandler;