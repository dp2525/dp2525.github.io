'use client';

import FluidCursor from '@/components/FluidCursor';
import { GithubButton } from '@/components/ui/github-button';
import WelcomeModal from '@/components/welcome-modal';
import About from '@/app/about/about';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const texts = ['Web Developer', 'Frontend Developer'];

/* ---------- component ---------- */
export default function Home() {
  const router = useRouter();
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

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

  return (
    <>
      {currentPage === 'home' ? (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-10 md:pb-20">
          {/* big blurred footer word - Fixed for mobile */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
            <div
              className="bg-gradient-to-b from-neutral-500/20 to-neutral-500/0 bg-clip-text text-[4rem] leading-none font-black text-transparent select-none xs:text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[16rem]"
              style={{ marginBottom: '-1rem' }}
            >
              Dhvani
            </div>
          </div>

          {/* GitHub button */}
          <div className="absolute top-6 right-8 z-20">
            <GithubButton
              animationDuration={1.5}
              label="Star"
              size={'sm'}
              repoUrl="https://github.com/dp2525/dp2525.github.io"
            />
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

            <h2 className="text-secondary-foreground mt-1 text-xl font-semibold md:text-2xl">
              Hey, I'm 
            </h2>
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              Dhvani Patel👋
            </h1>
            <h3 className="text-secondary-foreground mt-2 text-xl font-medium md:text-2xl -85">
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
            onClick={() => setCurrentPage('about')}
            className="group relative z-20 mt-2 px-8 py-4 bg-white/40 backdrop-blur-lg hover:bg-white/50 border border-black hover:border-black text-black font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 active:scale-95"
            variants={bottomElementVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="relative z-10 flex items-center gap-0">
              Know more
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

          {/* Enhanced FluidCursor for all devices */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <FluidCursor />
          </div>

          <FluidCursor />
        </div>
      ) : (
        <About />
      )}
    </>
  );
}
