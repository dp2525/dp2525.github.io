'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { X, Code, Palette, Rocket, Heart } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// Added a trigger prop to accept custom triggers
interface WelcomeModalProps {
  trigger?: React.ReactNode;
}

export default function WelcomeModal({ trigger }: WelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Default trigger is the logo
  const defaultTrigger = (
    <Button
      variant="ghost"
      className="h-auto w-auto cursor-pointer rounded-2xl bg-white/30 p-3 shadow-lg backdrop-blur-lg hover:bg-white/60 focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
      onClick={() => setIsOpen(true)}
    >
      <Image
        src="/logo.svg"
        width={100}
        height={100}
        alt="Logo"
        className="w-6 md:w-8"
      />
      <span className="sr-only">About</span>
    </Button>
  );

  return (
    <>
      {/* Use custom trigger if provided, otherwise use default */}
      {trigger ? (
        <div onClick={() => setIsOpen(true)}>{trigger}</div>
      ) : (
        defaultTrigger
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-background z-52 max-h-[85vh] overflow-auto rounded-2xl border-none p-4 py-6 shadow-xl sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex h-full flex-col"
          >
            {/* Header */}
            <DialogHeader className="relative flex flex-row items-start justify-between px-8 pt-8 pb-6">
              <div>
                <DialogTitle className="flex items-center gap-3 text-3xl md:text-4xl font-bold tracking-tight">
                  <span className="text-2xl">👋</span>
                  Welcome to Dhvani's Portfolio
                </DialogTitle>
                <DialogDescription className="mt-2 text-base text-muted-foreground">
                  Full Stack Developer & UI/UX Enthusiast
                </DialogDescription>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="sticky top-0 right-0 cursor-pointer rounded-full bg-black p-2 text-white hover:bg-black/90 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogHeader>

            {/* Content area */}
            <div className="space-y-6 overflow-y-auto px-2 py-4 md:px-8">
              <section className="bg-accent w-full space-y-8 rounded-2xl p-8">
                {/* About section */}
                <div className="space-y-3">
                  <h3 className="text-primary flex items-center gap-2 text-xl font-semibold">
                    <Code className="h-5 w-5" />
                    About This Portfolio
                  </h3>
                  <p className="text-accent-foreground text-base leading-relaxed">
                    Welcome to my interactive portfolio! I'm <strong>Dhvani Patel</strong>, a passionate full-stack developer who loves creating beautiful and functional web experiences. This portfolio showcases my journey, projects, and skills in modern web development.
                  </p>
                </div>

                {/* What You'll Find section */}
                <div className="space-y-4">
                  <h3 className="text-primary flex items-center gap-2 text-xl font-semibold">
                    <Palette className="h-5 w-5" />
                    What You'll Discover
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-background/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Rocket className="h-4 w-4 text-blue-500" />
                        My Projects
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Explore my latest web applications, from e-commerce platforms to interactive tools.
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Code className="h-4 w-4 text-green-500" />
                        Technical Skills
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        React, Next.js, TypeScript, Node.js, and modern web technologies.
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Heart className="h-4 w-4 text-red-500" />
                        My Journey
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        From Computer Engineering graduate to passionate full-stack developer.
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Palette className="h-4 w-4 text-purple-500" />
                        Design Philosophy
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Clean, responsive designs with focus on user experience and accessibility.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Tips */}
                <div className="space-y-3">
                  <h3 className="text-primary flex items-center gap-2 text-xl font-semibold">
                    <span className="text-xl">🧭</span>
                    Navigation Tips
                  </h3>
                  <div className="bg-background/30 rounded-lg p-4">
                    <ul className="space-y-2 text-accent-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 font-medium">•</span>
                        <span><strong>Home:</strong> Quick overview and introduction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-medium">•</span>
                        <span><strong>About:</strong> My story, education, and project showcase</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 font-medium">•</span>
                        <span><strong>Contact:</strong> Let's connect and collaborate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span><strong>Theme Toggle:</strong> Switch between light and dark modes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="flex flex-col items-center px-8 pt-4 pb-4 md:pb-8">
              <Button
                onClick={() => setIsOpen(false)}
                className="h-auto rounded-full px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90"
                size="lg"
              >
                Explore My Portfolio
              </Button>
              <div className="mt-4 text-center">
                <p className="text-muted-foreground text-sm">
                  Thank you for visiting! I hope you enjoy exploring my work. 
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Feel free to reach out if you'd like to collaborate! ✨
                </p>
              </div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}
