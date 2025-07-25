'use client';
import { useEffect, useState, useRef } from 'react';
import fluidCursor from '@/hooks/use-FluidCursor';

const FluidCursor: React.FC = () => {
  const [shouldRender, setShouldRender] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const [showMobileWarning, setShowMobileWarning] = useState<boolean>(false);
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
          setShowMobileWarning(true);
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

    // Add delay and error handling
    const timeoutId = setTimeout(() => {
      try {
        fluidCursor(); // This should now work
        initRef.current = true;
      } catch (error) {
        console.warn('FluidCursor initialization failed:', error);
        setShouldRender(false);
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [shouldRender]);

  // Auto-hide mobile warning
  useEffect(() => {
    if (showMobileWarning) {
      const timer = setTimeout(() => setShowMobileWarning(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showMobileWarning]);

  // Mobile warning
  if (!mounted) return null;
  
  if (showMobileWarning && window.innerWidth < 1024) {
    return (
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
        <div className="bg-black/80 backdrop-blur-lg text-white px-4 py-2 rounded-lg text-sm text-center max-w-xs">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>For better experience, use desktop view</span>
          </div>
        </div>
      </div>
    );
  }

  if (!shouldRender) return null;

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
};

export default FluidCursor;
