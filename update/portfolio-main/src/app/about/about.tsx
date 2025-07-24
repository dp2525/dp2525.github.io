'use client';

import FluidCursor from '@/components/FluidCursor';
import { GithubButton } from '@/components/ui/github-button';
import { motion } from 'framer-motion';

/* ---------- component ---------- */
export default function About() {
  /*  animations */
  const topElementVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const leftElementVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  return (
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

      {/* Main content container */}
      <div className="flex w-full max-w-6xl mx-auto px-4 items-center justify-between">
        {/* Left side - About Me section */}
        <motion.div
          className="flex-1 max-w-lg z-10"
          variants={leftElementVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold mb-6 md:text-4xl lg:text-5xl">
            About Me
          </h2>
          <p className="text-secondary-foreground text-lg leading-relaxed md:text-xl">
            I'm a passionate Frontend Developer with expertise in creating
            modern, responsive web applications. I love working with React,
            Next.js, and cutting-edge technologies to build user-friendly
            interfaces that provide exceptional user experiences. My goal is
            to combine creativity with functionality to bring ideas to life
            through clean, efficient code.
          </p>
        </motion.div>

        {/* Right side - Main title (centered when no left content on mobile) */}
        <motion.div
          className="flex-1 flex items-center justify-center md:justify-end"
          variants={topElementVariants}
          initial="hidden"
          animate="visible"
        >
        </motion.div>
      </div>

      {/* FluidCursor - Updated for mobile compatibility */}
      <div className="block">
        <FluidCursor />
      </div>
    </div>
  );
}