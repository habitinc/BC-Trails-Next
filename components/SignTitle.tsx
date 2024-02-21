import React from 'react';

// SignTitleProps interface to define the expected props, can be adjusted as necessary, used in the SignBuilder component and referenced in the index.ts file, broken into title section for usability
interface SignTitleProps {
  trailName: string;
  trailAbout?: string;
  indigenousTrailName: string;
  indigenousAbout?: string;
  setName: (trailName: string) => void;
  setAbout: (trailAbout: string) => void;
  setIndigenousName: (indigenousTrailName: string) => void;
  setIndigenousAbout: (indigenousAbout: string) => void;
}

const SignTitle: React.FC<SignTitleProps> = ({
  trailName,
  trailAbout = '',
  indigenousTrailName,
  indigenousAbout = '',
  setName,
  setAbout,
  setIndigenousName,
  setIndigenousAbout,
}) => {

  // Directly pass the handler for the trailName
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // Handler for changes in the "Trail About" textarea
  const handleAboutChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAbout(e.target.value);
  };

  return (
    <>
      <h2 className="text-md font-semibold mb-1 mt-4">Trail Network Name</h2>
      <input
        type="text"
        value={trailName}
        onChange={handleNameChange}
        className="mt-1 p-2 w-full border border-gray-300 rounded-sm shadow-sm"
        placeholder="Enter the name of the trail network..."
        maxLength={28} // Max length for the trail name
      />
      <h2 className="text-md font-semibold mb-1 mt-4">Trail Network About</h2>
      <textarea
        value={trailAbout}
        onChange={handleAboutChange}
        className="mt-1 p-2 w-full border border-gray-300 rounded-sm shadow-sm"
        placeholder="Enter a brief description of the trail network..."
        rows={3} // Set to 3 lines tall
        maxLength={219} // 73 characters * 3 lines for a simple approximation
      />
       <h2 className="text-md font-semibold mb-1 mt-4">Indigenous Trail Network Name</h2>
      <input
        type="text"
        value={indigenousTrailName}
        onChange={(e) => setIndigenousName(e.target.value)}
        className="mt-1 p-2 w-full border border-gray-300 rounded-sm shadow-sm"
        placeholder="Enter the indigenous name of the trail network (if available)..."
        maxLength={28} // Assuming a similar max length for the indigenous trail name
      />
      <h2 className="text-md font-semibold mb-1 mt-4">Indigenous Trail Network About</h2>
      <textarea
        value={indigenousAbout}
        onChange={(e) => setIndigenousAbout(e.target.value)}
        className="mt-1 p-2 w-full border border-gray-300 rounded-sm shadow-sm"
        placeholder="Enter a brief indigenous description of the trail network (if available)..."
        rows={3} // Set to 3 lines tall
        maxLength={219} // 73 characters * 3 lines for a simple approximation
      />
    </>
  );
};

export default SignTitle;