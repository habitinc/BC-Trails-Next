"use client";

import React, { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/16/solid';
import { SignPreview } from '.';
import { DimensionProps } from '@/types';


// Simplified dimensions data
// Updated dimensions data
const dimensions: DimensionProps[] = [
  { title: "3' x 3'", dimensions: "3x3" },
  { title: "8' x 4'", dimensions: "8x4" },
];


const SignBuilder: React.FC = () => {
  const [selectedDimension, setSelectedDimension] = useState<DimensionProps | null>(dimensions[0]);
  const [currentStep, setCurrentStep] = useState(0); // Step index

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="w-full max-w-md mx-auto bg-white border border-gray-300 rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-semibold mb-4">Select Your Dimension</h2>
            <Listbox value={selectedDimension} onChange={setSelectedDimension}>
              <div className="relative mt-1">
                <Listbox.Button className="listbox-button bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-left cursor-default focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full">
                  {selectedDimension?.title || "Select a dimension"}
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md overflow-auto focus:outline-none">
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
              </div>
            </Listbox>
          </div>
        );
      // case 1: Add more cases for additional steps
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-start my-10">
      <div className="flex flex-row space-x-4">
        <div className="form-container">
          {renderStepContent()}
          {/* Implement navigation buttons here if needed */}
        </div>
        {selectedDimension && <SignPreview dimension={selectedDimension.dimensions} />}
      </div>
    </div>
  );
};

export default SignBuilder;