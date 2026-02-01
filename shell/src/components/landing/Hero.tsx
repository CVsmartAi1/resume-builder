'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, FileText, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const stats = [
    { icon: FileText, value: '50,000+', label: 'CVs Created' },
    { icon: Users, value: '10,000+', label: 'Happy Users' },
    { icon: Star, value: '4.9/5', label: 'User Rating' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium">Now with AI-Powered Suggestions</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Build Your{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                Perfect CV
              </span>{' '}
              in Minutes
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Create professional, ATS-friendly resumes with our AI-powered builder. 
              Choose from stunning templates and land your dream job faster.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Link href="/cvs/new">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-6"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Social Proof Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-8 justify-center lg:justify-start"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <stat.icon className="h-5 w-5 text-blue-200" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Preview Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            {/* Main Preview Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 aspect-[4/5]">
                {/* Mock Resume Preview */}
                <div className="space-y-4">
                  <div className="h-20 bg-slate-800 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">JOHN DOE</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-slate-300 rounded w-3/4" />
                    <div className="h-3 bg-slate-200 rounded w-1/2" />
                  </div>
                  <div className="h-px bg-slate-300 my-4" />
                  <div className="space-y-2">
                    <div className="h-4 bg-slate-800 rounded w-1/3" />
                    <div className="h-3 bg-slate-300 rounded w-full" />
                    <div className="h-3 bg-slate-300 rounded w-5/6" />
                    <div className="h-3 bg-slate-300 rounded w-4/5" />
                  </div>
                  <div className="h-px bg-slate-300 my-4" />
                  <div className="space-y-2">
                    <div className="h-4 bg-slate-800 rounded w-1/3" />
                    <div className="h-3 bg-slate-300 rounded w-full" />
                    <div className="h-3 bg-slate-300 rounded w-3/4" />
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                AI Optimized
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
