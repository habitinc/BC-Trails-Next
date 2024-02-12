// SignPreview.tsx
import React from 'react';


const SignPreview: React.FC<{ dimension: string; trailName: string }> = ({ dimension, trailName }) => {
  // Parse the dimension string to extract width and height
  const [width, height] = dimension.split('x').map(Number); // Converts "WxH" into [W, H]

  // Calculate size for display; adjust these multipliers as needed
  const displayWidth = width * 50; // Example conversion to pixels
  const displayHeight = height * 50; // Example conversion to pixels

  return (
    <div className='flex flex-col items-center'>
      <div className="preview-box bg-preview-bc-green p-2 rounded-sm" style={{ width: `${displayWidth}px`, height: `${displayHeight}px` }}>

        <h1 className='text-left text-primary-bc-white text-2xl font-bold'>{trailName}</h1>
        <p className='text-primary-bc-yellow font-bold text-xs py-1'>About</p>
        {/* You can add more visual representations of the sign here, based on the dimensions */}
      </div>
    </div>
  );
};

export default SignPreview;