// SignPreview.tsx
import React from 'react';

interface SignPreviewProps {
  dimension: string;
  trailName: string;
  trailAbout: string;
  indigenousTrailName: string;
  indigenousAbout: string;
}

// Utility function to insert line breaks every 73 characters
const insertLineBreaks = (text: string) => {
  const maxLength = 73;
  let result = '';
  for (let i = 0; i < text.length; i += maxLength) {
    result += text.substring(i, Math.min(text.length, i + maxLength));
    if (i + maxLength < text.length) result += '\n'; // Add line break if not the last segment
  }
  return result;
};

const SignPreview: React.FC<SignPreviewProps> = ({
  dimension,
  trailName,
  trailAbout,
  indigenousTrailName,
  indigenousAbout,
}) => {
  // Process the trailAbout text to include line breaks
  const formattedTrailAbout = insertLineBreaks(trailAbout);
  const formattedIndigenousAbout = insertLineBreaks(indigenousAbout);

  // Parse the dimension string to extract width and height
  const [width, height] = dimension.split('x').map(Number);

  // Calculate size for display
  const displayWidth = width * 150;
  const displayHeight = height * 150;

  return (
    <div className='flex flex-col items-center'>
      <div className="preview-box bg-preview-bc-green rounded-sm" style={{ width: `${displayWidth}px`, height: `${displayHeight}px` }}>
        <div className="flex" style={{ height: `${displayHeight * 0.2}px` }}>
          <div style={{ width: `${displayWidth * 0.4}px` }} className="flex flex-col gap-10">
            <div className="mt-2 ml-4">
              <h1 className='text-primary-bc-white text-3xl font-bold'>{trailName}</h1>
              <p className='text-primary-bc-yellow font-bold text-xs mt-1'>About</p>
              {/* Render the formatted text with line breaks */}
              <p className='text-primary-bc-white text-xs mt-1 whitespace-pre-line'>{formattedTrailAbout}</p>
            </div>
          </div>
          <div style={{ width: `${displayWidth * 0.4}px` }} className="flex flex-col gap-10">
            <div className="mt-2">
              <h1 className='text-primary-bc-white text-3xl font-bold'>{indigenousTrailName}</h1>
              <p className='text-primary-bc-yellow font-bold text-xs mt-1'>About</p>
              {/* Render the formatted text with line breaks */}
              <p className='text-primary-bc-white text-xs mt-1 whitespace-pre-line'>{formattedIndigenousAbout}</p>
            </div>
          </div>
          <div style={{ width: `${displayWidth * 0.2}px` }} className="flex flex-col justify-start gap-10">
            {/* Padding */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignPreview;