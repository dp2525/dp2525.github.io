'use client';

import FluidCursor from '@/components/FluidCursor';
import { GithubButton } from '@/components/ui/github-button';
import WelcomeModal from '@/components/welcome-modal';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

const texts = ['Web Developer', 'Frontend Developer'];

/* ---------- component ---------- */
export default function Home() {
  const router = useRouter();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  useEffect(() => {
    // Preload assets in background
    const img = new window.Image();
    img.src = '/pic.png';

    // Preload videos
    const linkWebm = document.createElement('link');
    linkWebm.rel = 'preload';
    linkWebm.as = 'video';
    linkWebm.href = '/final_memojis.webm';
    document.head.appendChild(linkWebm);

    const linkMp4 = document.createElement('link');
    linkMp4.rel = 'prefetch';
    linkMp4.as = 'video';
    linkMp4.href = '/final_memojis_ios.mp4';
    document.head.appendChild(linkMp4);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <div className={`relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-10 md:pb-20 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
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

        {/* Dark mode toggle */}
        <motion.button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={`px-4 py-2 backdrop-blur-lg border font-medium rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center ${
            isDark 
              ? 'bg-gray-800/30 hover:bg-gray-700/50 border-white text-white' 
              : 'bg-white/30 hover:bg-white/50 border-black text-black'
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isDark ? (
            <motion.svg 
              className="w-4 h-4" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <path d="M10 2a6 6 0 015.996 5.85L16 8a6 6 0 01-4 5.659V16a1 1 0 01-1 1H9a1 1 0 01-1-1v-2.341A6 6 0 0110 2zM9 18a1 1 0 001 1h0a1 1 0 001-1v-1H9v1z"/>
            </motion.svg>
          ) : (
            <motion.svg 
              className="w-4 h-4" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 0.5 }}
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </motion.svg>
          )}
        </motion.button>
      </div>

      {/* header */}
      <motion.div
        className="z-1 mt-24 mb-8 flex flex-col items-center text-center md:mt-4 md:mb-12"
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
          {typedText}
          <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
        </h3>
      </motion.div>

      {/* centre memoji */}
      <motion.div 
        className="relative z-10 h-64 w-56 overflow-hidden sm:h-120 sm:w-120"
        variants={bottomElementVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/pic.png"
          alt="girl memoji"
          width={2000}
          height={2000}
          priority
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* button */}
      <motion.button 
        onClick={() => router.push('/about')}
        className={`group relative z-20 mt-2 px-8 py-4 backdrop-blur-lg border font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 active:scale-95 ${
          isDark 
            ? 'bg-gray-800/40 hover:bg-gray-800/50 border-white text-white' 
            : 'bg-white/40 hover:bg-white/50 border-black text-black'
        }`}
        variants={bottomElementVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="relative z-10 flex items-center gap-0">
          Let's start
          <svg 
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
        <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </motion.button>

      <FluidCursor />
    </div>
  );
}
