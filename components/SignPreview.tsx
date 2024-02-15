// SignPreview.tsx
import React from 'react';
import Image from 'next/image';

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

  // Calculate the heights for the new sections based on the total height
  const titleContainerHeight = displayHeight * 0.2; // 1/5 of the total height
  const mapIconsContainerHeight = displayHeight * (3.25 / 5); // 3.25/5 of the total height
  const logosContainerHeight = displayHeight * 0.75 / 5; // Remaining height

  return (
    <div className='flex flex-col items-center'>
      <div className="preview-box bg-preview rounded-sm" style={{ width: `${displayWidth}px`, height: `${displayHeight}px` }}>
        <div className="flex flex-row sign-title-container" style={{ height: `${displayHeight * 0.2}px` }}>
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
        {/* New Trail Map Icons Container */}
        <div className="trail-map-icons-container bg-bctan" style={{ width: `${displayWidth * 0.8}px`, height: `${mapIconsContainerHeight}px` }}>
          {/* Content for Trail Map Icons */}
        </div>

        {/* New Logos Container */}
        <div className="logos-container flex flex-row justify-between align-middle pr-2" style={{ width: `${displayWidth * 0.8}px`, height: `${logosContainerHeight}px` }}>
          {/* Content for Logos */}
          <Image
            src='/bc-trails-logo.svg'
            height={400}
            width={200}
            alt='BC Trails Logo'
            className='ml-4'
          />
          <div className='flex flex-row gap-10 items-center justify-center text-center'>

            {/* THIS AREA NEEDS TO DYNAMICALLY TAKE IN AN UPLOAD OF A PARTNER LOGO THAT SPECIFIES AN SVG FORMAT AND ALSO HAS A TOTAL OF 4 UPLOAD OPTIONS, THE IMAGE ATTRIBUTES FOR WIDTH ETC CAN CHANGE, BUT THE SRC IS DYNAMICALLY RENDERED OFF OF AN UPLOAD, THIS SHOULD BE BASICALLY A FOREACH LOOP THAT CONTAINS PARTNER LOGOS AND RENDERS THEM ACCORDINGLY, THIS WILL HAVE TO BE PASSED AS AN OPTIONAL PROP TO THE SIGN OBJECT */}

            <div className='flex flex-col items-center justify-center text-center'><h4 className='text-primary-bc-white text-bcsans text-sm'>Trail Partner</h4>
              <Image
                src='/icons/placeholder.svg'
                width={60}
                height={60}
                alt='placeholder icon'
              />
            </div>
            <div className='flex flex-col items-center justify-center text-center'><h4 className='text-primary-bc-white text-bcsans text-sm'>Trail Partner</h4>
              <Image
                src='/icons/placeholder.svg'
                width={60}
                height={60}
                alt='placeholder icon'
              />
            </div><div className='flex flex-col items-center justify-center text-center'><h4 className='text-primary-bc-white text-bcsans text-sm'>Trail Partner</h4>
              <Image
                src='/icons/placeholder.svg'
                width={60}
                height={60}
                alt='placeholder icon'
              />
            </div><div className='flex flex-col items-center justify-center text-center'><h4 className='text-primary-bc-white text-bcsans text-sm'>Trail Partner</h4>
              <Image
                src='/icons/placeholder.svg'
                width={60}
                height={60}
                alt='placeholder icon'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignPreview;