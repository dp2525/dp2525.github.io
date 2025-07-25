'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
    const buttonClass = `px-6 py-3 bg-white/20 backdrop-blur-lg border-2 font-medium shadow-lg transition-all duration-300 rounded-lg ${
      isDark 
        ? 'border-white/30 hover:border-white/50 text-white hover:bg-white/30' 
        : 'border-black/30 hover:border-black/50 text-black hover:bg-white/30'
    }`;

    switch (currentSection) {
      case 0:
        return (
          <div className="flex justify-center gap-4 mt-6">
            <button className={buttonClass} onClick={() => setCurrentSection(1)}>
              Education →
            </button>
          </div>
        );
      case 1:
        return (
          <div className="flex justify-center gap-4 mt-6">
            <button className={buttonClass} onClick={() => setCurrentSection(0)}>
              ← About Me
            </button>
            <button className={buttonClass} onClick={() => setCurrentSection(2)}>
              Experience →
            </button>
          </div>
        );
      case 2:
        return (
          <div className="flex justify-center gap-4 mt-6">
            <button className={buttonClass} onClick={() => setCurrentSection(1)}>
              ← Education
            </button>
            <button className={buttonClass} onClick={() => setCurrentSection(0)}>
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
              isDark ? 'bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6' : 'p-6'
            } transition-all duration-300`}>
              
              {/* Education section with gears */}
              {currentSection === 1 && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* Mobile: Gears appear first, Desktop: Content takes 2 columns */}
                  <div className="order-2 lg:order-1 lg:col-span-2">
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
                      className={`absolute w-24 h-24 lg:w-32 lg:h-32 rounded-full border-6 lg:border-8 ${
                        isDark ? 'border-white/30' : 'border-black/30'
                      } flex items-center justify-center`}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        background: `conic-gradient(from 0deg, ${
                          isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                        } 0deg, transparent 45deg, ${
                          isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                        } 90deg, transparent 135deg, ${
                          isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                        } 180deg, transparent 225deg, ${
                          isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                        } 270deg, transparent 315deg)`
                      }}
                    >
                      {/* Gear teeth */}
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className={`absolute w-3 h-6 lg:w-4 lg:h-8 ${
                            isDark ? 'bg-white/40' : 'bg-black/40'
                          } rounded-sm`}
                          style={{
                            transform: `rotate(${i * 45}deg) translateY(-${window.innerWidth >= 1024 ? '70' : '50'}px)`,
                            transformOrigin: `50% ${window.innerWidth >= 1024 ? '70' : '50'}px`
                          }}
                        />
                      ))}
                      
                      {/* Center hub */}
                      <div className={`w-6 h-6 lg:w-8 lg:h-8 rounded-full ${
                        isDark ? 'bg-white/50' : 'bg-black/50'
                      }`} />
                      
                      {/* Education icon in center */}
                      <div className="absolute text-xl lg:text-2xl">🎓</div>
                    </motion.div>
                    
                    {/* Medium gear - top right */}
                    <motion.div
                      className={`absolute top-8 lg:top-16 right-4 lg:right-8 w-16 h-16 lg:w-20 lg:h-20 rounded-full border-4 lg:border-6 ${
                        isDark ? 'border-white/25' : 'border-black/25'
                      } flex items-center justify-center`}
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        background: `conic-gradient(from 0deg, ${
                          isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'
                        } 0deg, transparent 60deg, ${
                          isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'
                        } 120deg, transparent 180deg, ${
                          isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'
                        } 240deg, transparent 300deg)`
                      }}
                    >
                      {/* Gear teeth */}
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className={`absolute w-2 h-4 lg:w-3 lg:h-6 ${
                            isDark ? 'bg-white/30' : 'bg-black/30'
                          } rounded-sm`}
                          style={{
                            transform: `rotate(${i * 60}deg) translateY(-${window.innerWidth >= 1024 ? '45' : '35'}px)`,
                            transformOrigin: `50% ${window.innerWidth >= 1024 ? '45' : '35'}px`
                          }}
                        />
                      ))}
                      
                      <div className={`w-4 h-4 lg:w-6 lg:h-6 rounded-full ${
                        isDark ? 'bg-white/40' : 'bg-black/40'
                      }`} />
                      <div className="absolute text-sm lg:text-lg">📚</div>
                    </motion.div>
                    
                    {/* Small gear - bottom left */}
                    <motion.div
                      className={`absolute bottom-12 lg:bottom-20 left-2 lg:left-4 w-12 h-12 lg:w-16 lg:h-16 rounded-full border-3 lg:border-4 ${
                        isDark ? 'border-white/20' : 'border-black/20'
                      } flex items-center justify-center`}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        background: `conic-gradient(from 0deg, ${
                          isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'
                        } 0deg, transparent 72deg, ${
                          isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'
                        } 144deg, transparent 216deg, ${
                          isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'
                        } 288deg, transparent 360deg)`
                      }}
                    >
                      {/* Gear teeth */}
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`absolute w-1.5 h-3 lg:w-2 lg:h-4 ${
                            isDark ? 'bg-white/25' : 'bg-black/25'
                          } rounded-sm`}
                          style={{
                            transform: `rotate(${i * 72}deg) translateY(-${window.innerWidth >= 1024 ? '35' : '26'}px)`,
                            transformOrigin: `50% ${window.innerWidth >= 1024 ? '35' : '26'}px`
                          }}
                        />
                      ))}
                      
                      <div className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full ${
                        isDark ? 'bg-white/35' : 'bg-black/35'
                      }`} />
                      <div className="absolute text-xs lg:text-sm">💡</div>
                    </motion.div>
                    
                    {/* Tiny gear - middle right */}
                    <motion.div
                      className={`absolute top-1/2 right-8 lg:right-16 w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 lg:border-3 ${
                        isDark ? 'border-white/15' : 'border-black/15'
                      } flex items-center justify-center`}
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        background: `conic-gradient(from 0deg, ${
                          isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'
                        } 0deg, transparent 90deg, ${
                          isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'
                        } 180deg, transparent 270deg)`
                      }}
                    >
                      {/* Gear teeth */}
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`absolute w-1 h-2 lg:w-1.5 lg:h-3 ${
                            isDark ? 'bg-white/20' : 'bg-black/20'
                          } rounded-sm`}
                          style={{
                            transform: `rotate(${i * 90}deg) translateY(-${window.innerWidth >= 1024 ? '27' : '22'}px)`,
                            transformOrigin: `50% ${window.innerWidth >= 1024 ? '27' : '22'}px`
                          }}
                        />
                      ))}
                      
                      <div className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full ${
                        isDark ? 'bg-white/30' : 'bg-black/30'
                      }`} />
                      <div className="absolute text-xs">⚙️</div>
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