"use client";

import React, { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { SignPreview } from '.';
import CustomButton from './CustomButton';
import { DimensionProps } from '@/types';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, ArrowPathIcon } from '@heroicons/react/16/solid';

const dimensions: DimensionProps[] = [
  { title: "3' x 3'", dimensions: "3x3" },
  { title: "8' x 4'", dimensions: "8x4" },
];

const SignBuilder: React.FC = () => {
  const [selectedDimension, setSelectedDimension] = useState<DimensionProps | null>(dimensions[0]);
  const [name, setName] = useState('');
  const [currentStep, setCurrentStep] = useState(0); // Step index to control the flow

  const handleDimensionSelect = (dimension: DimensionProps) => {
    setSelectedDimension(dimension);
    // Do not automatically move to the next step
  };

  // Function updates to not change step on selection
 // Function updates to not change step on selection
 const handleNextStep = () => {
  if ((currentStep === 0 && selectedDimension) || (currentStep === 1 && name.trim() !== '')) {
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
  setSelectedDimension(null);
  setName('');
};

const isNextDisabled = currentStep === 0 && !selectedDimension || currentStep === 1 && name.trim() === '';


  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <h2 className="text-lg font-semibold mb-4">Select Your Dimension</h2>
            <Listbox value={selectedDimension} onChange={handleDimensionSelect}>
              <Listbox.Button className="listbox-button bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-left cursor-default focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full">
                {selectedDimension?.title || "Select a dimension"}
              </Listbox.Button>
              <Listbox.Options className="absolute z-10 mt-1 w-full max-w-xs bg-white shadow-lg max-h-60 rounded-md overflow-auto focus:outline-none">
                {dimensions.map((dimension) => (
                  <Listbox.Option
                    key={dimension.title}
                    value={dimension}
                    className={({ active, selected }) => `cursor-pointer select-none relative py-2 pl-10 pr-4 ${active ? 'bg-indigo-100' : 'bg-white'} ${selected ? 'font-semibold' : 'font-normal'}`}
                  >
                    {({ selected }) => (
                      <div className={`${selected ? 'font-semibold' : 'font-normal'}`}>
                        {dimension.title}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
          </>
        );
      case 1:
        return (
          <>
            <h2 className="text-lg font-semibold mb-4">Enter Name</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
              placeholder="Name of the sign"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full mx-auto" style={{ width: '100%' }}>
      <div className="form-container w-full md:w-1/3 bg-white p-4 shadow rounded-lg overflow-hidden h-auto md:min-h-[600px]">
        {renderStepContent()}
        <div className="navigation-buttons mt-4 flex flex-col items-center gap-2">
          <div className="flex justify-between w-full">
            <CustomButton
              title="Previous Step"
              handleClick={handlePrevStep}
              containerStyles="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-l flex items-center gap-2"
              icon={<ArrowLeftCircleIcon className="w-5 h-5" />}
              isDisabled={currentStep === 0} // Disable if on the first step
            />
            <CustomButton
              title="Next Step"
              handleClick={handleNextStep}
              containerStyles="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r flex items-center gap-2"
              icon={<ArrowRightCircleIcon className="w-5 h-5" />}
              isDisabled={isNextDisabled} // Disable based on step validation
            />
          </div>
          <div>
            <CustomButton
              title="Start Over"
              handleClick={handleStartOver}
              containerStyles="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 flex items-center gap-2"
              icon={<ArrowPathIcon className="w-5 h-5" />}
            />
          </div>
        </div>
      </div>
      <div className="preview-container w-full md:w-2/3 bg-white p-4 shadow rounded-lg overflow-hidden flex justify-center items-center md:min-h-[600px]">
        {selectedDimension && <SignPreview dimension={selectedDimension.dimensions} name={name} />}
      </div>
    </div>
  );
};

export default SignBuilder;