import React from 'react';
import DimensionSelector from './DimensionSelector';
import SignTitle from './SignTitle';
import { DimensionProps } from '@/types';


// StepHandlerProps interface to define the expected props, can be adjusted as necessary, will need to be refined with each additional prop to handle the steps as the user progresses through sign creation
interface StepHandlerProps {
  currentStep: number;
  handleDimensionSelect: (dimension: DimensionProps) => void;
  handleNameChange: (trailName: string) => void;
  handleAboutChange: (trailAbout: string) => void;
  handleIndigenousNameChange: (indigenousTrailName: string) => void; // New handler
  handleIndigenousAboutChange: (indigenousAbout: string) => void; // New handler
  dimensions: DimensionProps[];
  selectedDimension: DimensionProps | null;
  trailName: string;
  trailAbout?: string;
  indigenousTrailName: string; // New property
  indigenousAbout?: string; // New property
}

const StepHandler: React.FC<StepHandlerProps> = ({
  currentStep,
  handleDimensionSelect,
  handleNameChange,
  handleAboutChange,
  handleIndigenousNameChange, // Include the new handler
  handleIndigenousAboutChange, // Include the new handler
  dimensions,
  selectedDimension,
  trailName,
  trailAbout,
  indigenousTrailName, // Include the new property
  indigenousAbout, // Include the new property
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
          // SignTitle component will eventually have a large number of props, attempt to keep line breaks as is to ensure readability and quick reference and editing capability
          <SignTitle
            trailName={trailName}
            setName={handleNameChange}
            trailAbout={trailAbout}
            setAbout={handleAboutChange}
            indigenousTrailName={indigenousTrailName} // Pass the indigenous name
            indigenousAbout={indigenousAbout} // Pass the indigenous about
            setIndigenousName={handleIndigenousNameChange} // Pass the handler
            setIndigenousAbout={handleIndigenousAboutChange} // Pass the handler
          />
        );
      default:
        return null; // Or some default content
    }
  };

  return <>{renderStepContent()}</>;
};

export default StepHandler;