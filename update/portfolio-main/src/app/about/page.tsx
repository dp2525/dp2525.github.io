'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
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
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

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
        { name: "Next.js", icon: "▲", color: "text-white-500" },
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
        { name: "Express", icon: "🚀", color: "text-white-500" },
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
    }, 6600); // (5 seconds)

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

  if (!mounted) {
    return (
      <div className="relative min-h-screen w-full bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background text */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 flex justify-center overflow-hidden z-0">
        <div className="bg-gradient-to-b from-neutral-500/20 to-neutral-500/0 bg-clip-text text-[3rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] leading-none font-black text-transparent select-none">
          Dhvani
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="fixed top-4 right-4 z-20 flex flex-col gap-3">
        <GithubButton
          size="custom"
          repoUrl="https://github.com/dp2525/dp2525.github.io"
          className="border-black hover:border-black"
        />

        {/* Simplified Home button */}
        <motion.button
          onClick={() => router.push('/')}
          className="px-4 py-2 bg-white/30 backdrop-blur-lg hover:bg-white/50 border border-black text-black font-medium rounded-lg transition-all duration-300 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
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

      {/* Main content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 pt-20 pb-10">
        
        {/* About Me section */}
        <motion.div
          className="w-full max-w-7xl mx-auto mb-20"
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Text content - left side with proper alignment */}
            <div className="flex-1 max-w-3xl lg:max-w-2xl text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-left">
                About Me
              </h2>
              <div className="text-secondary-foreground text-lg md:text-xl leading-relaxed text-justify space-y-4">
                <p>
                  I believe that life is a constant learning process and I have always had a hunger for learning new concepts.
                </p>
                <p>
                  School time was a period of life when I discovered my interests and dared to dream. 
                  Ever since I could remember, I have always loved the Computers. Whether it was secretly playing games on my father's work computer or through the weekly 2-hour computer laboratory sessions at school, 
                  I developed my passion for the field of Computer Engineering.
                </p>
                <p>
                  I'm a passionate about web development and creating intuitive user experiences. I have experience in building responsive and interactive web applications using modern technologies like React, Next.js, Tailwind CSS and more.
                </p>
                
              </div>
            </div>

            {/* Image - right side */}
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

        {/* Skills section - simple fade effect only */}
        <div className="w-full max-w-7xl mx-auto mb-20">
          <motion.div
            className="text-center w-full"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Skills
            </h2>

    

            {/* Skills display - no effects */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSkillIndex}
                className="min-h-[400px] flex flex-col items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8">
                  {skillCategories[currentSkillIndex]?.title || 'Skills'}
                </h3>

                {/* Skills grid - no effects, just static display */}
                <div className="grid grid-cols-4 grid-rows-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto h-[400px] ">
                  {(skillCategories[currentSkillIndex]?.skills || []).map((skill, index) => (
                    <div
                      key={`${skill.name}-${currentSkillIndex}`}
                      className="bg-white-300/10 backdrop-blur-lg border-2 border-black/30 hover:border-white/50 rounded-lg p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 aspect-square flex flex-col items-center justify-center"
                    >
                      <div className="text-2xl sm:text-3xl md:text-4xl mb-2 flex justify-center">
                        <span className={skill.color}>{skill.icon}</span>
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-center leading-tight px-1">
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
                          ? 'bg-blue-300 scale-125' 
                          : 'bg-black/30 hover:bg-white/50'
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Project Card 1 */}
              <div className="bg-white/10 backdrop-blur-lg border-2 border-black/30 hover:border-white/50 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
                  <p className="text-secondary-foreground text-sm leading-relaxed">
                    A modern, responsive portfolio website built with Next.js and Tailwind CSS featuring smooth animations and glassmorphism design.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-400/30">Next.js</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs border border-green-400/30">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-400/30">Framer Motion</span>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 px-3 py-2 bg-white/20 hover:bg-white/30 border-2 border-white/30 hover:border-white/50 rounded text-sm transition-all duration-200">
                    Live Demo
                  </button>
                  <button className="flex-1 px-3 py-2 bg-white/20 hover:bg-white/30 border-2 border-white/30 hover:border-white/50 rounded text-sm transition-all duration-200">
                    GitHub
                  </button>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="bg-white/10 backdrop-blur-lg border-2 border-black/30 hover:border-white/50 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">E-Commerce App</h3>
                  <p className="text-secondary-foreground text-sm leading-relaxed">
                    A full-stack e-commerce application with user authentication, shopping cart, and payment integration using modern technologies.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-400/30">React</span>
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs border border-yellow-400/30">Node.js</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs border border-green-400/30">MongoDB</span>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 px-3 py-2 bg-white/20 hover:bg-white/30 border-2 border-white/30 hover:border-white/50 rounded text-sm transition-all duration-200">
                    Live Demo
                  </button>
                  <button className="flex-1 px-3 py-2 bg-white/20 hover:bg-white/30 border-2 border-white/30 hover:border-white/50 rounded text-sm transition-all duration-200">
                    GitHub
                  </button>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="bg-white/10 backdrop-blur-lg border-2 border-black/30 hover:border-white/50 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">Task Management</h3>
                  <p className="text-secondary-foreground text-sm leading-relaxed">
                    A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-400/30">TypeScript</span>
                  <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-xs border border-red-400/30">React</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-400/30">Socket.io</span>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 px-3 py-2 bg-white/20 hover:bg-white/30 border-2 border-white/30 hover:border-white/50 rounded text-sm transition-all duration-200">
                    Live Demo
                  </button>
                  <button className="flex-1 px-3 py-2 bg-white/20 hover:bg-white/30 border-2 border-white/30 hover:border-white/50 rounded text-sm transition-all duration-200">
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