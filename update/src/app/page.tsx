'use client';

import FluidCursor from '@/components/FluidCursor';
import { GithubButton } from '@/components/ui/github-button';
import WelcomeModal from '@/components/welcome-modal';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState, useCallback, useMemo, memo } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

const texts = ['Web Developer', 'Frontend Developer'];

// Define props interface for ThemeToggle
interface ThemeToggleProps {
  isDark: boolean;
  handleThemeToggle: () => void;
  isThemeToggling: boolean;
}

// Memoized components for better performance
const ThemeToggle = memo(({ isDark, handleThemeToggle, isThemeToggling }: ThemeToggleProps) => {
  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isThemeToggling) {
      e.currentTarget.style.transform = 'scale(1.05)';
    }
  }, [isThemeToggling]);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'scale(1)';
  }, []);

  return (
    <button
      onClick={handleThemeToggle}
      disabled={isThemeToggling}
      className={`px-4 py-2 backdrop-blur-lg border font-medium rounded-lg transition-all duration-150 shadow-lg flex items-center justify-center ${
        isDark 
          ? 'bg-gray-800/30 hover:bg-gray-700/50 border-white text-white' 
          : 'bg-white/30 hover:bg-white/50 border-black text-black'
      } ${isThemeToggling ? 'opacity-50 cursor-not-allowed' : ''}`}
      style={{ 
        willChange: 'transform',
        transform: 'scale(1)',
        backfaceVisibility: 'hidden'
      }}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isDark ? (
        <svg 
          className="w-4 h-4" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M10 2a6 6 0 015.996 5.85L16 8a6 6 0 01-4 5.659V16a1 1 0 01-1 1H9a1 1 0 01-1-1v-2.341A6 6 0 0110 2zM9 18a1 1 0 001 1h0a1 1 0 001-1v-1H9v1z"/>
        </svg>
      ) : (
        <svg 
          className="w-4 h-4" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
});

ThemeToggle.displayName = 'ThemeToggle';

/* ---------- component ---------- */
export default function Home() {
  const router = useRouter();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isThemeToggling, setIsThemeToggling] = useState(false);
  const [showFluidNotice, setShowFluidNotice] = useState(false);

  // Move all hooks before any conditional logic
  // Debounced theme toggle to prevent rapid clicks
  const handleThemeToggle = useCallback(() => {
    if (isThemeToggling) return;
    setIsThemeToggling(true);
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setTimeout(() => setIsThemeToggling(false), 300);
  }, [theme, setTheme, isThemeToggling]);

  // Optimized navigation handler for better INP
  const handleNavigateToAbout = useCallback((e?: React.MouseEvent<HTMLButtonElement>) => {
    // Use requestAnimationFrame for instant navigation after pointer event
    window.requestAnimationFrame(() => {
      router.push('/about');
    });
  }, [router]);

  const handleDownloadResume = useCallback(() => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Dhvani-Patel-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  // Memoize typing display to reduce re-renders
  const typingDisplay = useMemo(() => (
    <>
      {typedText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
    </>
  ), [typedText, showCursor]);

  // Memoize expensive calculations - moved here with other hooks
  const isDark = useMemo(() => resolvedTheme === 'dark', [resolvedTheme]);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setShowFluidNotice(true);
    }
  }, []);

  /*  animations */
  const topElementVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const bottomElementVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  useEffect(() => {
    const currentText = texts[currentIndex];
    let timeoutId: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing forward
      if (typedText.length < currentText.length) {
        timeoutId = setTimeout(() => {
          setTypedText(currentText.slice(0, typedText.length + 1));
        }, 90);
      } else {
        // Finished typing, wait then start deleting
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Deleting backward
      if (typedText.length > 0) {
        timeoutId = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 50);
      } else {
        // When deletion ends, add a small pause
        timeoutId = setTimeout(() => {
          setIsDeleting(false);
          setCurrentIndex((i) => (i + 1) % texts.length);
        }, 500);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [typedText, currentIndex, isDeleting]);

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  // Prevent hydration mismatch - now after all hooks
  if (!mounted) {
    return null;
  }

  return (
    <div className={`relative flex h-screen flex-col items-center justify-center overflow-hidden px-4 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Fluid effect notification for mobile/tablet */}
      {showFluidNotice && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded shadow z-40 text-sm pointer-events-none">
          ⚠️ Fluid effect is disable 
        </div>
      )}
      {/* Looking for talent button - responsive, only symbol on small screens */}
      <button
        className="fixed top-4 left-4 sm:top-6 sm:left-8 z-30 flex items-center gap-1 px-2 py-1 rounded-md shadow-md border backdrop-blur-lg transition-colors duration-300
          bg-white/80 text-black border-black
          dark:bg-gray-800/80 dark:text-white dark:border-white font-semibold cursor-pointer
          w-auto max-w-xs text-sm"
        onClick={handleDownloadResume}
        type="button"
        title="Download Resume"
      >
        {/* Live blinking dot */}
        <span className="inline-block w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
        <span className="hidden sm:inline ml-1">Looking for a talent?</span>
      </button>
      {/* big blurred footer word - Fixed for mobile */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <div
          className={`bg-gradient-to-b ${
            isDark 
              ? 'from-gray-400/20 to-gray-400/0' 
              : 'from-neutral-500/20 to-neutral-500/0'
          } bg-clip-text text-[4rem] leading-none font-black text-transparent select-none xs:text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[16rem] transition-colors duration-300`}
          style={{ marginBottom: '-1rem' }}
        >
          Dhvani
        </div>
      </div>

      {/* Navigation buttons - Responsive layout */}
      <div className="absolute top-6 right-8 z-20 flex flex-row sm:flex-col gap-3">
        <GithubButton
          size={'custom'}
          repoUrl="https://github.com/dp2525/dp2525.github.io"
          className={`transition-colors duration-300 ${
            isDark ? 'border-white hover:border-white' : 'border-black hover:border-black'
          }`}
        />

        <ThemeToggle 
          isDark={isDark} 
          handleThemeToggle={handleThemeToggle} 
          isThemeToggling={isThemeToggling} 
        />
      </div>

      {/* header */}
      <motion.div
        className="z-1 mb-6 flex flex-col items-center text-center md:mb-8"
        variants={topElementVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="z-100">
          <WelcomeModal />
        </div>

        <h2 className={`mt-1 text-xl font-semibold md:text-2xl transition-colors duration-300 ${
          isDark ? 'text-gray-300' : 'text-secondary-foreground'
        }`}>
          Hey, I'm 
        </h2>
        <h1 className={`text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-black'
        }`}>
          Dhvani Patel👋
        </h1>
        <h3 className={`mt-2 text-xl font-medium md:text-2xl transition-colors duration-300 ${
          isDark ? 'text-gray-300' : 'text-secondary-foreground'
        }`}>
          {typingDisplay}
        </h3>
      </motion.div>

      {/* centre memoji */}
      <motion.div 
        className="relative z-10 h-64 w-56 overflow-hidden sm:h-80 sm:w-72 md:h-96 md:w-80 lg:h-[24em] lg:w-96"
        variants={bottomElementVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/pic.webp"
          alt="girl memoji"
          width={2000}
          height={2000}
          priority
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* button - Optimized for INP */}
      <button 
        onPointerUp={handleNavigateToAbout} // Use pointerup for lower input delay
        className={`group relative z-20 mt-4 px-8 py-4 backdrop-blur-lg border font-semibold rounded-full transition-all duration-150 shadow-lg hover:shadow-2xl ${
          isDark 
            ? 'bg-gray-800/40 hover:bg-gray-800/50 border-white text-white' 
            : 'bg-white/40 hover:bg-white/50 border-black text-black'
        }`}
       

      >
        <span className="relative z-10 flex items-center gap-0">
          Let's start
          <svg 
            className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            style={{ willChange: 'transform', pointerEvents: 'none' }} // Prevent SVG from capturing pointer events
            tabIndex={-1} // Remove from tab order for faster pointer event propagation
            aria-hidden="true"
            focusable="false"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
        <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
      </button>

      {/* Render FluidCursor conditionally based on mounted state and window width */}
      {mounted && typeof window !== 'undefined' && window.innerWidth >= 1024 && <FluidCursor />}
    </div>
  );
}
