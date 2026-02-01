'use client';

import { motion } from 'framer-motion';
import { 
  Sparkles, 
  LayoutTemplate, 
  FileDown, 
  Bot, 
  Globe, 
  Cloud,
  CheckCircle2
} from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered',
    description: 'Smart suggestions and content optimization powered by advanced AI to help you write better.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: LayoutTemplate,
    title: 'Professional Templates',
    description: 'Choose from 3 stunning, recruiter-approved templates designed for maximum impact.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FileDown,
    title: 'One-Click PDF Export',
    description: 'Download your resume as a beautifully formatted PDF, ready to send to employers instantly.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Bot,
    title: 'ATS-Friendly',
    description: 'Our templates are optimized to pass Applicant Tracking Systems and reach human recruiters.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Globe,
    title: 'Multi-language Support',
    description: 'Create CVs in multiple languages to apply for jobs worldwide. (Coming Soon)',
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Storage',
    description: 'Your resumes are securely stored in the cloud. Access them from anywhere, anytime.',
    color: 'from-indigo-500 to-violet-500',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold text-sm uppercase tracking-wide"
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4"
          >
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Land Your Dream Job
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Powerful features designed to help you create professional resumes that stand out.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-full h-full text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Gradient Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`} />
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {['100% Free', 'No Credit Card', 'No Registration Required', 'Instant Download'].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-gray-600">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span className="font-medium">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
