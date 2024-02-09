import React from 'react';
import { Listbox } from '@headlessui/react';
import { DimensionProps, DimensionSelectorProps } from '@/types'; // Adjust the import path as necessary

const DimensionSelector: React.FC<DimensionSelectorProps> = ({
    dimensions,
    selectedDimension,
    onSelectDimension,
  }) => {

  return (
    <Listbox value={selectedDimension} onChange={onSelectDimension}>
      <Listbox.Button className="listbox-button ...">
        {selectedDimension?.title || "Select a dimension"}
      </Listbox.Button>
      <Listbox.Options className="...">
        {dimensions.map((dimension) => (
          <Listbox.Option
            key={dimension.title}
            value={dimension}
            className={({ active, selected }) => `... ${active ? 'bg-indigo-100' : 'bg-white'} ${selected ? 'font-semibold' : 'font-normal'}`}
          >
            {({ selected }) => (
              <span className={`${selected ? 'font-semibold' : 'font-normal'}`}>
                {dimension.title}
              </span>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default DimensionSelector;