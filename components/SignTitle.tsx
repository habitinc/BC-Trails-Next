// SignTitle.tsx
import React from 'react';

interface SignTitleProps {
  trailName: string;
  setName: (trailName: string) => void; // Callback function to update the parent state
}

const SignTitle: React.FC<SignTitleProps> = ({ trailName, setName }) => {
  return (
    <>
      <h2 className="text-md font-semibold mb-1 mt-4">Trail Name</h2>
      <input
        type="text"
        value={trailName}
        onChange={(e) => setName(e.target.value)}
        className="mt-1 p-2 w-full border border-gray-300 rounded-sm shadow-sm"
        placeholder="Enter the name of the trail..."
      />
    </>
  );
};

export default SignTitle;