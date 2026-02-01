'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Sparkles } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: 'default' | 'gradient' | 'outline';
}

export function CTASection({
  title = 'Ready to Build Your Professional Resume?',
  description = 'Join thousands of job seekers who have landed their dream jobs. Create your ATS-friendly resume in minutes.',
  buttonText = 'Create My Resume Free',
  variant = 'default',
}: CTASectionProps) {
  const variants = {
    default: 'bg-blue-600 text-white',
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white',
    outline: 'bg-white border-2 border-blue-600 text-blue-600',
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className={`max-w-4xl mx-auto text-center rounded-2xl p-8 sm:p-12 ${variants[variant]}`}>
        <div className="flex justify-center mb-6">
          <div className={`p-3 rounded-full ${variant === 'default' || variant === 'gradient' ? 'bg-white/20' : 'bg-blue-100'}`}>
            <Sparkles className={`h-8 w-8 ${variant === 'default' || variant === 'gradient' ? 'text-white' : 'text-blue-600'}`} />
          </div>
        </div>
        <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${variant === 'outline' ? 'text-gray-900' : 'text-white'}`}>
          {title}
        </h2>
        <p className={`mb-8 text-lg max-w-2xl mx-auto ${variant === 'outline' ? 'text-gray-600' : 'text-white/90'}`}>
          {description}
        </p>
        <Link href="/cvs/new">
          <Button 
            size="lg" 
            variant={variant === 'outline' ? 'default' : 'secondary'}
            className="text-lg px-8 group"
          >
            <FileText className="mr-2 h-5 w-5" />
            {buttonText}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
