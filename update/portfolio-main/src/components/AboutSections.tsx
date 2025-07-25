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
      title: "Education",
      content: (
        <div className={`text-lg md:text-xl leading-relaxed space-y-6 transition-colors duration-300 ${
          isDark ? 'text-gray-100' : 'text-secondary-foreground'
        }`}>
          <div className="border-l-4 border-pink-400 pl-6 py-2">
            <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
              Post Graduation - Full Stack Software Development
            </h3>
            <p className={`font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-black-300'}`}>
              Lambton College | 2020 - 2024
            </p>
          </div>

          <div className={`border-l-4 pl-6 py-2 transition-colors duration-300 ${isDark ? 'border-white' : 'border-black-400'}`}>
            <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
              Bachelor of Engineering - Computer Engineering
            </h3>
            <p className={`font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-black-300'}`}>
              Gujarat Technological University | 2016 - 2020
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
      title: "Experience",
      content: (
        <div className={`text-lg md:text-xl leading-relaxed space-y-6 transition-colors duration-300 ${
          isDark ? 'text-gray-100' : 'text-secondary-foreground'
        }`}>
          <div className="border-l-4 border-green-400 pl-6 py-2">
            <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
              Full Stack Developer Intern
            </h3>
            <p className={`font-medium mb-2 transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-black-300'}`}>
              Tech Solutions Inc. | 2024 - Present
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
          <div className="flex justify-center mt-6">
            <button className={buttonClass} onClick={() => setCurrentSection(1)}>
              ← Education
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
        <div className="relative w-full h-full">
          {sections.map((sectionKey, index) => (
            <div
              key={sectionKey}
              className={`w-full ${currentSection === index ? 'opacity-100' : 'opacity-0 pointer-events-none'} ${
                isDark ? 'bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6' : 'p-6'
              } transition-all duration-300`}
              style={{
                backfaceVisibility: "hidden",
                position: currentSection === index ? "relative" : "absolute",
                top: 0,
                left: 0,
              }}
            >
              <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                {sectionData[sectionKey].title}
              </h2>
              
              {currentSection === 0 && (
                <div className={`w-full h-0.5 bg-gradient-to-r from-transparent to-transparent mb-6 transition-colors duration-300 ${
                  isDark ? 'via-white/60' : 'via-black/50'
                }`}></div>
              )}
              
              {sectionData[sectionKey].content}
              {getNavigationButtons()}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}