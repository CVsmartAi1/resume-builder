'use client';

import { cn } from '@/lib/utils';

interface HeroImageProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  gradient?: 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'teal';
  className?: string;
}

const gradients = {
  blue: 'from-blue-500 to-blue-700',
  purple: 'from-purple-500 to-purple-700',
  green: 'from-green-500 to-green-700',
  orange: 'from-orange-500 to-orange-700',
  pink: 'from-pink-500 to-pink-700',
  teal: 'from-teal-500 to-teal-700',
};

export function HeroImage({ 
  title, 
  subtitle,
  icon,
  gradient = 'blue',
  className 
}: HeroImageProps) {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-2xl bg-gradient-to-br px-8 py-16 text-center",
      gradients[gradient],
      className
    )}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-lg transform rotate-12" />
      <div className="absolute bottom-8 right-8 w-20 h-20 bg-white/10 rounded-full" />
      <div className="absolute top-1/2 right-12 w-12 h-12 bg-white/10 rounded-lg transform -rotate-12" />
      
      {/* Content */}
      <div className="relative z-10">
        {icon && (
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6 backdrop-blur-sm">
            {icon}
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
