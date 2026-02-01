'use client';

import { FileText, User, Briefcase, Award, GraduationCap } from 'lucide-react';

interface TemplatePreviewProps {
  role: string;
  accentColor?: string;
}

export function TemplateShowcase({ role, accentColor = 'bg-blue-600' }: TemplatePreviewProps) {
  return (
    <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border">
      {/* Resume Preview Mockup */}
      <div className="p-8 min-h-[600px]">
        {/* Header */}
        <div className={`h-24 ${accentColor} -mx-8 -mt-8 mb-6`} />
        <div className="flex gap-6 -mt-16 mb-6">
          <div className="w-28 h-28 bg-gray-200 rounded-full border-4 border-white shadow-lg" />
          <div className="pt-16">
            <div className="h-8 bg-gray-800 rounded w-48 mb-2" />
            <div className="h-4 bg-gray-400 rounded w-32" />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <Section icon={<User className="h-4 w-4" />} title="Contact" lines={3} />
            <Section icon={<Award className="h-4 w-4" />} title="Skills" lines={4} />
            <Section icon={<GraduationCap className="h-4 w-4" />} title="Education" lines={3} />
          </div>
          
          {/* Right Column */}
          <div className="col-span-2 space-y-6">
            <Section icon={<FileText className="h-4 w-4" />} title="Professional Summary" lines={3} wide />
            <Section icon={<Briefcase className="h-4 w-4" />} title="Experience" lines={8} wide />
          </div>
        </div>
      </div>

      {/* Overlay Badge */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg">
        <span className="text-sm font-semibold text-gray-800">{role} Template</span>
      </div>
    </div>
  );
}

function Section({ 
  icon, 
  title, 
  lines, 
  wide = false 
}: { 
  icon: React.ReactNode; 
  title: string; 
  lines: number;
  wide?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <div className="text-gray-600">{icon}</div>
        <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">{title}</h4>
      </div>
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div 
            key={i} 
            className={`h-3 bg-gray-200 rounded ${wide ? 'w-full' : 'w-4/5'}`} 
            style={{ opacity: 1 - i * 0.15 }}
          />
        ))}
      </div>
    </div>
  );
}
