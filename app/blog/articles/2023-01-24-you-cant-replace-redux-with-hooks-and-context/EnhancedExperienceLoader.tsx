import { useState, useEffect } from 'react';

export default function EnhancedExperienceLoader({title, subtitle, children}) {
  const [canLoadEnhancedExperience, setCanLoadEnhancedExperience] = useState(false);
  const [enhancedExperience, setEnhancedExperience] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== 'undefined') {
      // Create media query to check if screen width is greater than 960px
      const mediaQuery = window.matchMedia('(min-width: 960px)');
      
      // Set initial value based on current match state
      setCanLoadEnhancedExperience(mediaQuery.matches);
      
      // Create handler function for media query changes
      const handleMediaQueryChange = (event) => {
        setCanLoadEnhancedExperience(event.matches);
      };
      
      // Add event listener for changes
      mediaQuery.addEventListener('change', handleMediaQueryChange);
      
      // Clean up event listener on component unmount
      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      };
    }
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <p><em>{subtitle}</em></p>

      {children}
    </div>
  );
}
