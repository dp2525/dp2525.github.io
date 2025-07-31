'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import AboutSections from '@/components/AboutSections';

// Dynamically import components that might cause issues
const GithubButton = dynamic(() => import('@/components/ui/github-button').then(mod => ({ default: mod.GithubButton })), { 
  ssr: false,
  loading: () => <div className="w-10 h-10 bg-white/20 rounded-lg animate-pulse" />
});

export default function About() {
  const router = useRouter();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Simplified handlers
  const handleThemeToggle = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

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
        { name: "Postman", icon: "📦", color: "text-blue-500" },
        { name: "Vite", icon: "⚡", color: "text-yellow-500" },
        { name: "Docker", icon: "🐳", color: "text-blue-500" },
        { name: "Notpad++", icon: "🌐", color: "text-teal-500" }
      ]
    }
  ];

  // Simplified useEffect with proper cleanup 
  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skillCategories.length);
    }, 6600);

    return () => clearInterval(interval);
  }, [mounted, skillCategories.length]);

  // Simplified animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Prevent hydration mismatch
  if (!mounted) return null;

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
        } bg-clip-text text-[4rem] leading-none font-black text-transparent select-none xs:text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[16rem] transition-colors duration-300`}
        style={{ marginBottom: '-1rem' }}
        >
          Dhvani
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-4 right-4 z-20 flex flex-row sm:flex-col gap-3">
        <GithubButton
          size="custom"
          repoUrl="https://github.com/dp2525/dp2525.github.io"
          className={`btn-glass ${isDark ? 'btn-glass-dark' : 'btn-glass-light'}`}
          title="GitHub"
        />

        <div className="flex flex-row sm:flex-col gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={handleThemeToggle}
            className={`btn-glass ${isDark ? 'btn-glass-dark' : 'btn-glass-light'}`}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 015.996 5.85L16 8a6 6 0 01-4 5.659V16a1 1 0 01-1 1H9a1 1 0 01-1-1v-2.341A6 6 0 0110 2zM9 18a1 1 0 001 1h0a1 1 0 001-1v-1H9v1z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* LinkedIn button */}
          <button
            onClick={() => window.open('https://linkedin.com/in/dhvanipatel10/', '_blank')}
            className={`btn-glass ${isDark ? 'btn-glass-dark' : 'btn-glass-light'}`}
            title="LinkedIn"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Home button */}
          <button
            onClick={() => router.push('/')}
            className={`btn-glass ${isDark ? 'btn-glass-dark' : 'btn-glass-light'}`}
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
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 pt-20 pb-10">
        
        {/* About Me / Education / Experience Sections Component */}
        <AboutSections isDark={isDark} />

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
                  isDark ? 'text-black-300' : 'text-black-700'
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

                {/* Navigation dots - Simplified */}
                <div className="flex justify-center mt-8 space-x-2">
                  {skillCategories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSkillIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        index === currentSkillIndex 
                          ? 'bg-blue-500 scale-125 focus:ring-blue-500' 
                          : isDark 
                            ? 'bg-white/30 hover:bg-white/50 focus:ring-white/50' 
                            : 'bg-black/30 hover:bg-black/50 focus:ring-black/50'
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
              {/* Project Cards - keeping the existing project cards code */}
              {[
                {
                  title: "Portfolio Website",
                  description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS featuring smooth animations and glassmorphism design.",
                  tags: [
                    { name: "Next.js", color: "blue" },
                    { name: "Tailwind CSS", color: "green" },
                    { name: "Framer Motion", color: "purple" }
                  ],
                  repoUrl: "https://github.com/dp2525/dp2525.github.io"
                },
                {
                  title: "E-Commerce App",
                  description: "A full-stack e-commerce application with user authentication, shopping cart, and payment integration using modern technologies.",
                  tags: [
                    { name: "React", color: "blue" },
                    { name: "Node.js", color: "yellow" },
                    { name: "MongoDB", color: "green" }
                  ],
                  repoUrl: "https://github.com/dp2525/ecommerce-app"
                },
                {
                  title: "Task Management",
                  description: "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
                  tags: [
                    { name: "TypeScript", color: "blue" },
                    { name: "React", color: "red" },
                    { name: "Socket.io", color: "purple" }
                  ],
                  repoUrl: "https://github.com/dp2525/task-management"
                }
              ].map((project, index) => (
                <div
                  key={index}
                  className={`backdrop-blur-lg border-2 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${
                    isDark 
                      ? 'bg-gray-800/10 border-white/30 hover:border-white/50 hover:bg-gray-700/20' 
                      : 'bg-white/10 border-black/30 hover:border-black/50 hover:bg-white/20'
                  }`}
                  onClick={() => window.open(project.repoUrl, '_blank')}
                  title="View on GitHub"
                >
                  {/* Thumbnail */}
                  <img
                    src="/p1.webp"
                    alt="Project Thumbnail"
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  {/* Project Title */}
                  <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>{project.title}</h3>
                  {/* Only thumbnail and title shown */}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}