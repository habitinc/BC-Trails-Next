// SignTitle.tsx
import React from 'react';

interface SignTitleProps {
  name: string;
  setName: (name: string) => void; // Callback function to update the parent state
}

const SignTitle: React.FC<SignTitleProps> = ({ name, setName }) => {
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
};

export default SignTitle;