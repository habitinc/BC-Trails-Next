// Use client directive for any components or pages utilizing state or hooks such as useState, useEffect, useReducer, useContext, etc. This directive is not required for components that only use props and do not have any internal state or side effects.
"use client";

import { useEffect } from 'react';

const BackgroundCarousel = () => {
    useEffect(() => {
      
      // Pulled from public/assets/images
      const images = [
        '/assets/images/mountain-biking.jpg',
        '/assets/images/hiking.jpg',
        '/assets/images/snowmobile.jpg',
        '/assets/images/mountain-biking-two.jpg',
      ];
      let currentImageIndex = 0;
  
      const updateBackgroundImage = () => {
        // Adding a white overlay using linear-gradient
        const backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('${images[currentImageIndex]}')`;
        document.body.style.backgroundImage = backgroundImage;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        currentImageIndex = (currentImageIndex + 1) % images.length;
      };
  
      // Set the initial background with overlay
      updateBackgroundImage();
  
      // Change background every X milliseconds (e.g., 5000ms = 5s)
      const intervalId = setInterval(updateBackgroundImage, 5000);
  
      return () => clearInterval(intervalId); // Clear the interval on component unmount
    }, []);
  
    return null; // Component does not render anything, provide null on return
  };

export default BackgroundCarousel;