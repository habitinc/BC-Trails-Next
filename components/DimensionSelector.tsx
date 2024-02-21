import React from 'react';
import { Listbox } from '@headlessui/react';
import { DimensionProps, DimensionSelectorProps } from '@/types'; // Ensure the path is correct


// DimensionSelector component includes types from /types/index.ts, can be further adjusted or refined from there
const DimensionSelector: React.FC<DimensionSelectorProps> = ({
    dimensions,
    selectedDimension,
    onSelectDimension,
}) => {
  return (
    // This dropdown list uses Headless UI component. // https://headlessui.dev/react/listbox Additionally, these options may be changed to radial menus as request by the client, whatever works more efficiently for the user.
    <div className="relative"> {/* Ensure the dropdown list aligns with this container */}
    <p className='py-2 px-1'>Select Sign Dimensions</p>
      <Listbox value={selectedDimension} onChange={onSelectDimension}>
        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default sm:text-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
          {selectedDimension?.title || "Select a dimension"}
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            {/* Arrow icon */}
            <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </Listbox.Button>
        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {dimensions.map((dimension) => (
            <Listbox.Option
              key={dimension.title}
              value={dimension}
              className={({ active, selected }) => `${active ? 'text-white bg-indigo-600' : 'text-gray-900'} cursor-default select-none relative py-2 pl-10 pr-4`}
            >
              {({ selected }) => (
                <>
                  <span className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}>
                    {dimension.title}
                  </span>
                  {selected ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                      {/* Check icon */}
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default DimensionSelector;