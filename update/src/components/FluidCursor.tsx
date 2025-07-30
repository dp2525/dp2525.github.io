'use client';
import { useEffect, useState, useRef, memo } from 'react';

import fluidCursor from '@/hooks/use-FluidCursor';

declare global {
  interface Window {
    fluidCursorCleanup?: () => void;
  }
}

const FluidCursor = memo(() => {
  const [shouldRender, setShouldRender] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const initRef = useRef<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const checkSupport = (): boolean => {
      try {
        const isMobile = window.innerWidth < 1024;

        if (isMobile) {
          return false;
        }

        // Test WebGL support
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

        // Clean up test canvas
        canvas.width = 0;
        canvas.height = 0;

        return !!gl;
      } catch (error) {
        console.warn('WebGL check failed:', error);
        return false;
      }
    };

    setShouldRender(checkSupport());

    // Handle resize
    const handleResize = () => {
      const newShouldRender = checkSupport();
      if (newShouldRender !== shouldRender) {
        setShouldRender(newShouldRender);
        initRef.current = false; // Reset init flag
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mounted, shouldRender]);

  useEffect(() => {
    if (!shouldRender || initRef.current) return;

    const timeoutId = setTimeout(() => {
      try {
        fluidCursor();
        initRef.current = true;
      } catch (error) {
        console.warn('FluidCursor initialization failed:', error);
        setShouldRender(false);
      }
    }, 100); // Reduced delay for better INP

    return () => {
      clearTimeout(timeoutId);

      // Cleanup on unmount
      if (typeof window !== 'undefined' && window.fluidCursorCleanup) {
        window.fluidCursorCleanup();
      }
    };
  }, [shouldRender]);

  // Don't render anything if not supported or not mounted
  if (!mounted || !shouldRender) return null;

  return (
    <div className="fixed top-0 left-0 z-0 pointer-events-none">
      <canvas
        id="fluid"
        className="h-screen w-screen"
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      />
    </div>
  );
});

FluidCursor.displayName = 'FluidCursor';

export default FluidCursor;
