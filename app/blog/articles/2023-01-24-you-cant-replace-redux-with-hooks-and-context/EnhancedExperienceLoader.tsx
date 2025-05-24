"use client";

import { ReactNode, useState, useEffect, Suspense, lazy, useDeferredValue } from 'react';
import SquircleProvider from "../../../../components/squircle/SquircleProvider";
import Squircle from "../../../../components/squircle/Squircle";

const MicrofrontendLoader = lazy(() => import("./MicrofrontendLoader"));

interface EnhancedExperienceLoaderProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function EnhancedExperienceLoader({title, subtitle, children}: EnhancedExperienceLoaderProps) {
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
      const handleMediaQueryChange = (event: MediaQueryListEvent) => {
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

  const deferedEnhancedExperience = useDeferredValue(enhancedExperience);

  return (
    <Suspense>
      {deferedEnhancedExperience ? (
        <MicrofrontendLoader/>
      ) : (
        <SquircleProvider>
          <h1>{title}</h1>
          <p><em>{subtitle}</em></p>

          {canLoadEnhancedExperience && (
            <Squircle background="var(--color-amber-200)" className="px-6 py-4 font-bold my-6">
              {!enhancedExperience ? (
                <>
                  An enhanced experience is available for this article.
                  <div className="mt-4">
                    <button
                      onClick={() => setEnhancedExperience(true)}
                      className="bg-amber-700 text-white border-none px-4 py-2 rounded-lg text-base font-bold hover:bg-amber-800 cursor-pointer"
                      style={{fontFamily: "inherit"}}
                    >Enable</button>
                  </div>
                </>
              ) : (
                <em>Loading...</em>
              )}
            </Squircle>
          )}

          {children}
        </SquircleProvider>
      )}
    </Suspense>
  );
}
