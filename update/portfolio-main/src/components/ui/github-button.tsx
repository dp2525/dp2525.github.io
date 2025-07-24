'use client';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const githubButtonVariants = cva(
  'cursor-pointer relative overflow-hidden will-change-transform backface-visibility-hidden transform-gpu transition-all duration-300 ease-out hover:scale-105 group whitespace-nowrap focus-visible:outline-hidden inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background disabled:pointer-events-none disabled:opacity-60 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-white/30 backdrop-blur-lg hover:bg-white/50 border border-white/20 hover:border-white/40 text-black shadow-lg hover:shadow-xl',
        outline:
          'bg-background text-accent-foreground border border-input hover:bg-accent',
      },
      size: {
        default: 'h-8.5 rounded-md px-3 gap-2 text-[0.8125rem] leading-none [&_svg]:size-4',
        sm: 'h-7 rounded-md px-2.5 gap-1.5 text-xs leading-none [&_svg]:size-3.5',
        custom: 'px-4 py-2 rounded-lg text-sm leading-none [&_svg]:size-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'custom',
    },
  }
);

interface GithubButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof githubButtonVariants> {
  repoUrl: string;
}

function GithubButton({
  className,
  variant = 'default',
  size = 'custom',
  repoUrl,
  onClick,
  ...props
}: GithubButtonProps) {
  const navigateToRepo = () => {
    if (!repoUrl) return;
    try {
      const link = document.createElement('a');
      link.href = repoUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      try {
        window.open(repoUrl, '_blank', 'noopener,noreferrer');
      } catch {
        window.location.href = repoUrl;
      }
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
      return;
    }
    navigateToRepo();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      navigateToRepo();
    }
  };

  return (
    <button
      className={cn(githubButtonVariants({ variant, size, className }))}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label="Visit GitHub repository"
      {...props}
    >
      <svg role="img" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    </button>
  );
}

export { GithubButton, githubButtonVariants };
export type { GithubButtonProps };
