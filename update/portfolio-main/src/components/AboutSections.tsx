'use client';
import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';

interface AboutSectionsProps {
  isDark: boolean;
}

export default function AboutSections({ isDark }: AboutSectionsProps) {
  const [currentSection, setCurrentSection] = useState(0); // 0: About, 1: Education, 2: Experience

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const sectionData = {
    about: {
      title: "About Me",
      content: (
        <div className={`text-lg md:text-xl leading-relaxed text-justify space-y-4 transition-colors duration-300 ${
          isDark ? 'text-gray-100' : 'text-secondary-foreground'
        }`}>
          <p>I believe that life is a constant learning process and I have always had a hunger for learning new concepts.</p>
          <p>School time was a period of life when I discovered my interests and dared to dream. Ever since I could remember, I have always loved the Computers. Whether it was secretly playing games on my father's work computer or through the weekly 2-hour computer laboratory sessions at school, I developed my passion for the field of Computer Engineering.</p>
          <p>I'm passionate about web development and creating intuitive user experiences. I have experience in building responsive and interactive web applications using modern technologies like React, Next.js, Tailwind CSS and more.</p>
        </div>
      )
    },
    education: {
      title: "Education 🎓",
      content: (
        <div className={`text-lg md:text-xl leading-relaxed space-y-6 transition-colors duration-300 ${
          isDark ? 'text-gray-100' : 'text-secondary-foreground'
        }`}>
          <div className="border-l-4 border-pink-400 pl-6 py-2">
            <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
            Post Graduation - Full Stack Software Development
            </h3>
            <p className={`font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-black-300'}`}>
            🏛️ Lambton College | 📅 2020 - 2024
            </p>
          </div>

          <div className={`border-l-4 pl-6 py-2 transition-colors duration-300 ${isDark ? 'border-white' : 'border-black-400'}`}>
            <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
             Bachelor of Engineering - Computer Engineering
            </h3>
            <p className={`font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-black-300'}`}>
             🏛️ Gujarat Technological University | 📅 2016 - 2020
            </p>
          </div>

          <div className="mt-6">
            <h4 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
              Certifications
            </h4>
            <div className="flex flex-wrap gap-2">
              {['React Developer', 'JavaScript ES6+', 'Web Development'].map((cert, index) => (
                <span key={cert} className={`px-3 py-1 rounded-full text-sm border transition-colors duration-300 ${
                  index === 0 ? `bg-blue-500/20 border-blue-400/30 ${isDark ? 'text-blue-200' : 'text-black-300'}` :
                  index === 1 ? `bg-green-500/20 border-green-400/30 ${isDark ? 'text-green-200' : 'text-black-300'}` :
                  `bg-purple-500/20 border-purple-400/30 ${isDark ? 'text-purple-200' : 'text-black-300'}`
                }`}>
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      )
    },
    experience: {
      title: "Experience 💼",
      content: (
        <div className={`text-lg md:text-xl leading-relaxed space-y-6 transition-colors duration-300 ${
          isDark ? 'text-gray-100' : 'text-secondary-foreground'
        }`}>
          <div className="border-l-4 border-green-400 pl-6 py-2">
            <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
              Full Stack Developer Intern
            </h3>
            <p className={`font-medium mb-2 transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-black-300'}`}>
              🏢 Tech Solutions Inc. | 📅 2024 - Present
            </p>
            <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Developing responsive web applications using React, Node.js, and MongoDB. Collaborated with team to improve user experience and optimize performance.
            </p>
          </div>

          <div className={`border-l-4 pl-6 py-2 transition-colors duration-300 ${isDark ? 'border-blue-400' : 'border-blue-500'}`}>
            <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
              Frontend Developer
            </h3>
            <p className={`font-medium mb-2 transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-black-300'}`}>
              Digital Agency | 2023 - 2024
            </p>
            <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Created modern, responsive websites using React and Tailwind CSS. Worked on multiple client projects and improved site performance by 40%.
            </p>
          </div>

          <div className={`border-l-4 pl-6 py-2 transition-colors duration-300 ${isDark ? 'border-purple-400' : 'border-purple-500'}`}>
            <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
              Web Development Freelancer
            </h3>
            <p className={`font-medium mb-2 transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-black-300'}`}>
              Self-Employed | 2022 - 2023
            </p>
            <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Built custom websites for small businesses and startups. Managed full project lifecycle from design to deployment.
            </p>
          </div>

          <div className="mt-6">
            <h4 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
              Key Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'React', color: 'red' },
                { name: 'TypeScript', color: 'blue' },
                { name: 'Node.js', color: 'green' },
                { name: 'Next.js', color: 'yellow' },
                { name: 'MongoDB', color: 'indigo' }
              ].map((skill) => (
                <span key={skill.name} className={`px-3 py-1 rounded-full text-sm border transition-colors duration-300 ${
                  skill.color === 'red' ? `bg-red-500/20 border-red-400/30 ${isDark ? 'text-red-200' : 'text-red-700'}` :
                  skill.color === 'blue' ? `bg-blue-500/20 border-blue-400/30 ${isDark ? 'text-blue-200' : 'text-blue-700'}` :
                  skill.color === 'green' ? `bg-green-500/20 border-green-400/30 ${isDark ? 'text-green-200' : 'text-green-700'}` :
                  skill.color === 'yellow' ? `bg-yellow-500/20 border-yellow-400/30 ${isDark ? 'text-yellow-200' : 'text-yellow-700'}` :
                  `bg-indigo-500/20 border-indigo-400/30 ${isDark ? 'text-indigo-200' : 'text-indigo-700'}`
                }`}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )
    }
  };

  const sections = ['about', 'education', 'experience'] as const;
  const currentSectionKey = sections[currentSection];

  const getNavigationButtons = () => {
    switch (currentSection) {
      case 0:
        return (
          <div className="flex justify-center gap-4 mt-6">
            <button 
              className={`btn-nav ${isDark ? 'btn-nav-dark' : 'btn-nav-light'} focus:outline-none focus:ring-0`}
              onClick={() => setCurrentSection(1)}
            >
              Education →
            </button>
          </div>
        );
      case 1:
        return (
          <div className="flex justify-center gap-4 mt-6">
            <button 
              className={`btn-nav ${isDark ? 'btn-nav-dark' : 'btn-nav-light'} focus:outline-none focus:ring-0`}
              onClick={() => setCurrentSection(0)}
            >
              ← About Me
            </button>
            <button 
              className={`btn-nav ${isDark ? 'btn-nav-dark' : 'btn-nav-light'} focus:outline-none focus:ring-0`}
              onClick={() => setCurrentSection(2)}
            >
              Experience →
            </button>
          </div>
        );
      case 2:
        return (
          <div className="flex justify-center gap-4 mt-6">
            <button 
              className={`btn-nav ${isDark ? 'btn-nav-dark' : 'btn-nav-light'} focus:outline-none focus:ring-0`}
              onClick={() => setCurrentSection(1)}
            >
              ← Education
            </button>
            <button 
              className={`btn-nav ${isDark ? 'btn-nav-dark' : 'btn-nav-light'} focus:outline-none focus:ring-0`}
              onClick={() => setCurrentSection(0)}
            >
              About Me →
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto mb-16">
      <motion.div
        className="relative w-full min-h-[500px] perspective-1000"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        {/* About Me Section - Mobile: Image first, Desktop: Left/Right Layout */}
        {currentSection === 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Mobile: Image appears first, Desktop: About content on left */}
            <div className={`order-2 lg:order-1 ${
              isDark ? 'bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6' : 'p-6'
            } transition-all duration-300`}>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                {sectionData.about.title}
              </h2>
              
              <div className={`w-full h-0.5 bg-gradient-to-r from-transparent to-transparent mb-6 transition-colors duration-300 ${
                isDark ? 'via-white/60' : 'via-black/50'
              }`}></div>
              
              {sectionData.about.content}
              {getNavigationButtons()}
            </div>

            {/* Mobile: Image appears first, Desktop: Image on right */}
            <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px] rounded-xl transition-all duration-300 flex items-center justify-center overflow-hidden">
              {/* Your about.png image */}
              <img 
                src="/about.png" 
                alt="About Dhvani Patel" 
                className="w-full h-full object-contain rounded-xl relative z-10"
              />
              
              {/* Just 3 Floating Elements */}
              <motion.div
                className="absolute top-16 right-8 text-2xl z-20"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🌟🚀 
              </motion.div>
              
              <motion.div
                className="absolute bottom-24 left-8 text-xl z-20"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  rotate: [0, 45, -45, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                ✨
              </motion.div>
              
              <motion.div
                className="absolute top-40 left-4 text-lg z-20"
                animate={{
                  y: [0, -12, 0],
                  scale: [1, 1.4, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                💫
              </motion.div>
            </div>
          </div>
        )}

        {/* Education and Experience Sections - Full Width */}
        {currentSection !== 0 && (
          <motion.div
            key={currentSectionKey}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full h-full"
          >
            <div className={`w-full ${
              currentSection === 1 
                ? 'p-6' // No glass effect for education section
                : isDark ? 'bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6' : 'p-6'
            } transition-all duration-300`}>
              
              {/* Education section with gears */}
              {currentSection === 1 && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* Mobile: Gears appear first, Desktop: Content takes 2 columns */}
                  <div className={`order-2 lg:order-1 lg:col-span-2 ${
                    isDark ? 'bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6' : 'p-6'
                  } transition-all duration-300`}>
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-black'
                    }`}>
                      {sectionData.education.title}
                    </h2>
                    
                    {sectionData.education.content}
                    {getNavigationButtons()}
                  </div>
                  
                  {/* Mobile: Gears appear first, Desktop: Gears take 1 column */}
                  <div className="order-1 lg:order-2 relative h-[300px] lg:h-[600px] flex items-center justify-center">
                    {/* Large gear */}
                    <motion.div
                      className="absolute flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      {/* Rotating gear emoji */}
                      <motion.div
                        className="text-8xl lg:text-9xl"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        ⚙️
                      </motion.div>
                    </motion.div>
                    
                    {/* Medium gear - top right */}
                    <motion.div
                      className="absolute top-4 lg:top-8 right-2 lg:right-4 flex items-center justify-center"
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      {/* Rotating gear emoji */}
                      <motion.div
                        className="text-5xl lg:text-6xl"
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        ⚙️
                      </motion.div>
                    </motion.div>
                    
                    {/* Small gear - bottom left */}
                    <motion.div
                      className="absolute bottom-8 lg:bottom-12 left-2 lg:left-4 flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                    </motion.div>
                    

                    {/* Tiny gear - middle right */}
                    <motion.div
                      className="absolute top-1/2 right-4 lg:right-8 flex items-center justify-center"
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      {/* Rotating gear emoji */}
                      <motion.div
                        className="text-3xl lg:text-4xl"
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        ⚙️
                      </motion.div>
                    </motion.div>
                    
                    {/* Extra tiny gear - top left */}
                    <motion.div
                      className="absolute top-12 lg:top-16 left-4 lg:left-8 flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      {/* Rotating gear emoji */}
                      <motion.div
                        className="text-2xl lg:text-3xl"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        ⚙️
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              )}

              {/* Experience section - simple layout */}
              {currentSection === 2 && (
                <>
                  <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>
                    {sectionData.experience.title}
                  </h2>
                  
                  {sectionData.experience.content}
                  {getNavigationButtons()}
                </>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}