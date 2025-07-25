'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';

// Dynamically import components that might cause issues
const FluidCursor = dynamic(() => import('@/components/FluidCursor'), { 
  ssr: false,
  loading: () => null 
});

const GithubButton = dynamic(() => import('@/components/ui/github-button').then(mod => ({ default: mod.GithubButton })), { 
  ssr: false,
  loading: () => <div className="w-10 h-10 bg-white/20 rounded-lg animate-pulse" />
});

export default function About() {
  const router = useRouter();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  // Ensure component is mounted before rendering complex animations
  useEffect(() => {
    setMounted(true);
  }, []);

  // Simplified skills data
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: "⚛️", color: "text-blue-500" },
        { name: "Next.js", icon: "▲", color: "text-gray-600 dark:text-white" },
        { name: "TypeScript", icon: "📘", color: "text-blue-500" },
        { name: "JavaScript", icon: "🟨", color: "text-yellow-500" },
        { name: "HTML5", icon: "🌐", color: "text-orange-500" },
        { name: "CSS3", icon: "🎨", color: "text-blue-500" },
        { name: "Tailwind CSS", icon: "💨", color: "text-cyan-500" },
        { name: "Sass", icon: "🎀", color: "text-pink-500" }
      ]
    },
    {
      title: "Libraries & Frameworks", 
      skills: [
        { name: "Framer Motion", icon: "🎭", color: "text-purple-500" },
        { name: "Shadcn/ui", icon: "🎯", color: "text-gray-500" },
        { name: "Node.js", icon: "🟢", color: "text-green-500" },
        { name: "Express", icon: "🚀", color: "text-gray-600 dark:text-white" },
        { name: "MongoDB", icon: "🍃", color: "text-green-500" },
        { name: "Redux", icon: "🔄", color: "text-purple-500" },
        { name: "React Router", icon: "🛣️", color: "text-red-500" },
        { name: "Axios", icon: "📡", color: "text-blue-500" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: "📝", color: "text-orange-500" },
        { name: "GitHub", icon: "🐙", color: "text-gray-500" },
        { name: "VS Code", icon: "💻", color: "text-blue-500" },
        { name: "Figma", icon: "🎨", color: "text-purple-500" },
        { name: "Webpack", icon: "📦", color: "text-blue-500" },
        { name: "Vite", icon: "⚡", color: "text-yellow-500" },
        { name: "Docker", icon: "🐳", color: "text-blue-500" },
        { name: "Netlify", icon: "🌐", color: "text-teal-500" }
      ]
    }
  ];

  // Simplified useEffect with proper cleanup 
  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => {
        const next = (prev + 1) % skillCategories.length;
        return next;
      });
    }, 6600);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [mounted, skillCategories.length]);

  // Simplified animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <div className={`relative min-h-screen w-full overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Background text */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 flex justify-center overflow-hidden z-0">
        <div className={`bg-gradient-to-b ${
          isDark 
            ? 'from-gray-400/20 to-gray-400/0' 
            : 'from-neutral-500/20 to-neutral-500/0'
        } bg-clip-text text-[3rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] leading-none font-black text-transparent select-none transition-colors duration-300`}>
          Dhvani
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-4 right-4 z-20 flex flex-row sm:flex-col gap-3">
        <GithubButton
          size="custom"
          repoUrl="https://github.com/dp2525/dp2525.github.io"
          className={`bg-white/20 backdrop-blur-lg border transition-all duration-300 ${
            isDark ? 'border-white/30 hover:border-white/50 text-white hover:bg-white/30' : 'border-black/30 hover:border-black/50 text-black hover:bg-white/30'
          }`}
        />

        {/* Container for all buttons */}
        <div className="flex flex-row sm:flex-col gap-3">
          {/* Dark mode toggle */}
          <motion.button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`px-4 py-2 bg-white/20 backdrop-blur-lg border font-medium rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center ${
              isDark 
                ? 'border-white/30 hover:border-white/50 text-white hover:bg-white/30' 
                : 'border-black/30 hover:border-black/50 text-black hover:bg-white/30'
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

          {/* LinkedIn button */}
          <motion.button
            onClick={() => window.open('https://linkedin.com/in/dhvanipatel10/', '_blank')}
            className={`px-4 py-2 bg-white/20 backdrop-blur-lg border font-medium rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center ${
              isDark 
                ? 'border-white/30 hover:border-white/50 text-white hover:bg-white/30' 
                : 'border-black/30 hover:border-black/50 text-black hover:bg-white/30'
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            title="LinkedIn"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
            </svg>
          </motion.button>

          {/* Home button */}
          <motion.button
            onClick={() => router.push('/')}
            className={`px-4 py-2 bg-white/20 backdrop-blur-lg border font-medium rounded-lg transition-all duration-300 shadow-lg ${
              isDark 
                ? 'border-white/30 hover:border-white/50 text-white hover:bg-white/30' 
                : 'border-black/30 hover:border-black/50 text-black hover:bg-white/30'
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            title="Home"
          >
            <img 
              src="/logo.svg" 
              alt="Home" 
              className="w-4 h-4"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.textContent = 'Home';
                }
              }}
            />
          </motion.button>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 pt-20 pb-10">
        
        {/* About Me / Education section with flip */}
        <motion.div
          className="w-full max-w-7xl mx-auto mb-20"
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Flip container with 3D animation - Added glass background */}
            <div className="flex-1 max-w-3xl lg:max-w-2xl text-left relative" style={{ perspective: "1000px" }}>
              <motion.div
                className="relative w-full"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* About Me - Front side with glass effect */}
                <div
                  className={`w-full ${isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'} ${
                    isDark ? 'bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6' : ''
                  } transition-all duration-300`}
                  style={{
                    backfaceVisibility: "hidden",
                    position: isFlipped ? "absolute" : "relative",
                    top: 0,
                    left: 0,
                    transform: "rotateY(0deg)"
                  }}
                >
                  <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>
                    About Me
                  </h2>
                  <div className={`w-full h-0.5 bg-gradient-to-r from-transparent to-transparent mb-6 transition-colors duration-300 ${
                    isDark ? 'via-white/50' : 'via-black/50'
                  }`}></div>
                  <div className={`text-lg md:text-xl leading-relaxed text-justify space-y-4 transition-colors duration-300 ${
                    isDark ? 'text-gray-200' : 'text-secondary-foreground'
                  }`}>
                    <p>
                      I believe that life is a constant learning process and I have always had a hunger for learning new concepts.
                    </p>
                    <p>
                      School time was a period of life when I discovered my interests and dared to dream. 
                      Ever since I could remember, I have always loved the Computers. Whether it was secretly playing games on my father's work computer or through the weekly 2-hour computer laboratory sessions at school, 
                      I developed my passion for the field of Computer Engineering.
                    </p>
                    <p>
                      I'm passionate about web development and creating intuitive user experiences. I have experience in building responsive and interactive web applications using modern technologies like React, Next.js, Tailwind CSS and more.
                    </p>
                  </div>

                  {/* Flip button - centered */}
                  <div className="flex justify-center mt-6">
                    <button
                      className={`px-6 py-3 bg-white/20 backdrop-blur-lg border-2 font-medium shadow-lg transition-all duration-300 rounded-lg ${
                        isDark 
                          ? 'border-white/30 hover:border-white/50 text-white hover:bg-white/30' 
                          : 'border-black/30 hover:border-black/50 text-black hover:bg-white/30'
                      }`}
                      onClick={() => setIsFlipped(true)}
                    >
                      Flip
                    </button>
                  </div>
                </div>

                {/* Education - Back side with glass effect */}
                <div
                  className={`w-full ${isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'} ${
                    isDark ? 'bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6' : ''
                  } transition-all duration-300`}
                  style={{
                    backfaceVisibility: "hidden",
                    position: isFlipped ? "relative" : "absolute",
                    top: 0,
                    left: 0,
                    transform: "rotateY(180deg)"
                  }}
                >
                  <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>
                    Education
                  </h2>
                  <div className={`text-lg md:text-xl leading-relaxed space-y-6 transition-colors duration-300 ${
                    isDark ? 'text-gray-200' : 'text-secondary-foreground'
                  }`}>
                    {/* Education Item 1 */}
                    <div className="border-l-4 border-pink-400 pl-6 py-2">
                      <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-black'
                      }`}>
                        Post Graduation - Full Stack Software Development
                      </h3>
                      <p className={`font-medium mb-1 transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-black-300'
                      }`}>
                        Lambton College | 2020 - 2024
                      </p>
                    </div>

                    {/* Education Item 2 */}
                    <div className={`border-l-4 pl-6 py-2 transition-colors duration-300 ${
                      isDark ? 'border-white' : 'border-black-400'
                    }`}>
                      <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-black'
                      }`}>
                        Bachelor of Engineering - Computer Engineering
                      </h3>
                      <p className={`font-medium mb-1 transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-black-300'
                      }`}>
                        Gujarat Technological University | 2016 - 2020
                      </p>
                    </div>

                    {/* Certifications */}
                    <div className="mt-6">
                      <h4 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-black'
                      }`}>Certifications</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1 bg-blue-500/20 rounded-full text-sm border border-blue-400/30 transition-colors duration-300 ${
                          isDark ? 'text-blue-300' : 'text-black-300'
                        }`}>
                          React Developer
                        </span>
                        <span className={`px-3 py-1 bg-green-500/20 rounded-full text-sm border border-green-400/30 transition-colors duration-300 ${
                          isDark ? 'text-green-300' : 'text-black-300'
                        }`}>
                          JavaScript ES6+
                        </span>
                        <span className={`px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-400/30 transition-colors duration-300 ${
                          isDark ? 'text-purple-300' : 'text-black-300'
                        }`}>
                          Web Development
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Back button */}
                  <button
                    className={`mt-6 px-6 py-3 bg-white/20 backdrop-blur-lg border-2 font-medium shadow-lg transition-all duration-300 rounded-lg ${
                      isDark 
                        ? 'border-white/30 hover:border-white/50 text-white hover:bg-white/30' 
                        : 'border-black/30 hover:border-black/50 text-black hover:bg-white/30'
                    }`}
                    onClick={() => setIsFlipped(false)}
                  >
                    Flip
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Image - right side (stays the same) */}
            <div className="flex-shrink-0 lg:ml-auto">
              <img
                src="/about.png"
                alt="About Me"
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Skills section */}
        <div className="w-full max-w-7xl mx-auto mb-20">
          <motion.div
            className="text-center w-full"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Skills
            </h2>

            {/* Skills display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSkillIndex}
                className="min-h-[400px] flex flex-col items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold mb-8 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {skillCategories[currentSkillIndex]?.title || 'Skills'}
                </h3>

                {/* Skills grid */}
                <div className="grid grid-cols-4 grid-rows-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto h-[400px]">
                  {(skillCategories[currentSkillIndex]?.skills || []).map((skill, index) => (
                    <div
                      key={`${skill.name}-${currentSkillIndex}`}
                      className={`backdrop-blur-lg border-2 rounded-lg p-4 sm:p-6 transition-all duration-300 aspect-square flex flex-col items-center justify-center ${
                        isDark 
                          ? 'bg-gray-800/10 border-white/30 hover:border-white/50 hover:bg-gray-700/20' 
                          : 'bg-white/10 border-black/30 hover:border-black/50 hover:bg-white/20'
                      }`}
                    >
                      <div className="text-2xl sm:text-3xl md:text-4xl mb-2 flex justify-center">
                        <span className={skill.color}>{skill.icon}</span>
                      </div>
                      <p className={`text-xs sm:text-sm font-medium text-center leading-tight px-1 transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Navigation dots */}
                <div className="flex justify-center mt-8 space-x-2">
                  {skillCategories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSkillIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSkillIndex 
                          ? 'bg-blue-500 scale-125' 
                          : isDark ? 'bg-white/30 hover:bg-white/50' : 'bg-black/30 hover:bg-black/50'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Projects section */}
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            className="text-center w-full"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-8 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Project Card 1 */}
              <div className={`backdrop-blur-lg border-2 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isDark 
                  ? 'bg-gray-800/10 border-white/30 hover:border-white/50 hover:bg-gray-700/20' 
                  : 'bg-white/10 border-black/30 hover:border-black/50 hover:bg-white/20'
              }`}>
                <div className="mb-4">
                  <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>Portfolio Website</h3>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-secondary-foreground'
                  }`}>
                    A modern, responsive portfolio website built with Next.js and Tailwind CSS featuring smooth animations and glassmorphism design.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-400/30">Next.js</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs border border-green-400/30">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-400/30">Framer Motion</span>
                </div>
                <div className="flex gap-3">
                  <button className={`flex-1 px-3 py-2 border-2 rounded text-sm transition-all duration-200 ${
                    isDark 
                      ? 'bg-gray-800/20 hover:bg-gray-700/30 border-white/30 hover:border-white/50 text-white' 
                      : 'bg-white/20 hover:bg-white/30 border-black/30 hover:border-black/50 text-black'
                  }`}>
                    Live Demo
                  </button>
                  <button className={`flex-1 px-3 py-2 border-2 rounded text-sm transition-all duration-200 ${
                    isDark 
                      ? 'bg-gray-800/20 hover:bg-gray-700/30 border-white/30 hover:border-white/50 text-white' 
                      : 'bg-white/20 hover:bg-white/30 border-black/30 hover:border-black/50 text-black'
                  }`}>
                    GitHub
                  </button>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className={`backdrop-blur-lg border-2 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isDark 
                  ? 'bg-gray-800/10 border-white/30 hover:border-white/50 hover:bg-gray-700/20' 
                  : 'bg-white/10 border-black/30 hover:border-black/50 hover:bg-white/20'
              }`}>
                <div className="mb-4">
                  <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>E-Commerce App</h3>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-secondary-foreground'
                  }`}>
                    A full-stack e-commerce application with user authentication, shopping cart, and payment integration using modern technologies.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-400/30">React</span>
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs border border-yellow-400/30">Node.js</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs border border-green-400/30">MongoDB</span>
                </div>
                <div className="flex gap-3">
                  <button className={`flex-1 px-3 py-2 border-2 rounded text-sm transition-all duration-200 ${
                    isDark 
                      ? 'bg-gray-800/20 hover:bg-gray-700/30 border-white/30 hover:border-white/50 text-white' 
                      : 'bg-white/20 hover:bg-white/30 border-black/30 hover:border-black/50 text-black'
                  }`}>
                    Live Demo
                  </button>
                  <button className={`flex-1 px-3 py-2 border-2 rounded text-sm transition-all duration-200 ${
                    isDark 
                      ? 'bg-gray-800/20 hover:bg-gray-700/30 border-white/30 hover:border-white/50 text-white' 
                      : 'bg-white/20 hover:bg-white/30 border-black/30 hover:border-black/50 text-black'
                  }`}>
                    GitHub
                  </button>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className={`backdrop-blur-lg border-2 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isDark 
                  ? 'bg-gray-800/10 border-white/30 hover:border-white/50 hover:bg-gray-700/20' 
                  : 'bg-white/10 border-black/30 hover:border-black/50 hover:bg-white/20'
              }`}>
                <div className="mb-4">
                  <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>Task Management</h3>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-secondary-foreground'
                  }`}>
                    A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-400/30">TypeScript</span>
                  <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-xs border border-red-400/30">React</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-400/30">Socket.io</span>
                </div>
                <div className="flex gap-3">
                  <button className={`flex-1 px-3 py-2 border-2 rounded text-sm transition-all duration-200 ${
                    isDark 
                      ? 'bg-gray-800/20 hover:bg-gray-700/30 border-white/30 hover:border-white/50 text-white' 
                      : 'bg-white/20 hover:bg-white/30 border-black/30 hover:border-black/50 text-black'
                  }`}>
                    Live Demo
                  </button>
                  <button className={`flex-1 px-3 py-2 border-2 rounded text-sm transition-all duration-200 ${
                    isDark 
                      ? 'bg-gray-800/20 hover:bg-gray-700/30 border-white/30 hover:border-white/50 text-white' 
                      : 'bg-white/20 hover:bg-white/30 border-black/30 hover:border-black/50 text-black'
                  }`}>
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FluidCursor - only render if mounted */}
      {mounted && <FluidCursor />}
    </div>
  );
}