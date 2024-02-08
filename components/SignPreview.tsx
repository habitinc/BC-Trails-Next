import { DimensionProps } from '@/types';

// SignPreview.tsx
import React from 'react';


const SignPreview: React.FC<{ dimension: string; name: string }> = ({ dimension, name }) => {
  // Parse the dimension string to extract width and height
  const [width, height] = dimension.split('x').map(Number); // Converts "WxH" into [W, H]

  // Calculate size for display; adjust these multipliers as needed
  const displayWidth = width * 50; // Example conversion to pixels
  const displayHeight = height * 50; // Example conversion to pixels

  return (
    <div className="preview-box bg-white p-4 shadow rounded-lg" style={{ width: `${displayWidth}px`, height: `${displayHeight}px` }}>
      <p>Selected Dimension: {dimension}</p>
      <p>Name: {name}</p>
      {/* You can add more visual representations of the sign here, based on the dimensions */}
    </div>
  );
};

export default SignPreview;