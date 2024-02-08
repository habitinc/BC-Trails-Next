import { DimensionProps } from '@/types';

// SignPreview.tsx
import React from 'react';


const SignPreview: React.FC<{ dimension: string }> = ({ dimension }) => {
  const [width, height] = dimension.split('x').map(Number); // Converts "WxH" into [W, H]

  // Use width and height for rendering
  return (
    <div className="preview-container" style={{ width: `${width * 50}px`, height: `${height * 50}px`, border: '1px solid black' }}>
      <p>Preview {dimension}</p>
    </div>
  );
};

export default SignPreview;