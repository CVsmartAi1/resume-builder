'use client';

import { CV } from '@/lib/cv-schema';
import { Mail, Phone, MapPin, Linkedin, Globe, Github } from 'lucide-react';

interface CreativeTemplateProps {
  cv: CV;
}

export function CreativeTemplate({ cv }: CreativeTemplateProps) {
  const { personalInfo, experience, education, skills } = cv;

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="min-h-[297mm] bg-white">
      {/* Accent Header */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 h-4"></div>
      
      <header className="p-10 pb-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              {personalInfo.firstName}
              <span className="text-violet-600">{personalInfo.lastName}</span>
            </h1>
            {personalInfo.profession && (
              <p className="text-xl text-violet-600 font-medium mt-1">{personalInfo.profession}</p>
            )}
          </div>
          
          {/* Contact Pills */}
          <div className="flex flex-col items-end gap-2 text-sm">
            {personalInfo.email && (
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                <Mail className="h-3.5 w-3.5 text-violet-600" />
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                <Phone className="h-3.5 w-3.5 text-violet-600" />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {(personalInfo.city || personalInfo.country) && (
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                <MapPin className="h-3.5 w-3.5 text-violet-600" />
                <span>{[personalInfo.city, personalInfo.country].filter(Boolean).join(', ')}</span>
              </div>
            )}
            {(personalInfo.linkedin || personalInfo.website || personalInfo.github) && (
              <div className="flex gap-2">
                {personalInfo.linkedin && (
                  <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-xs font-medium">
                    LinkedIn
                  </span>
                )}
                {personalInfo.website && (
                  <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-xs font-medium">
                    Website
                  </span>
                )}
                {personalInfo.github && (
                  <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-xs font-medium">
                    GitHub
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Summary Banner */}
        {personalInfo.summary && (
          <div className="mt-6 bg-gradient-to-r from-violet-50 to-indigo-50 p-4 rounded-lg border-l-4 border-violet-500">
            <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
          </div>
        )}
      </header>

      <div className="px-10 pb-10">
        {/* Two Column Layout */}
        <div className="flex gap-8">
          {/* Left Column - Experience & Education */}
          <div className="flex-1 space-y-8">
            {/* Experience */}
            {experience.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Experience</h2>
                </div>
                <div className="space-y-5">
                  {experience.map((exp) => (
                    <div key={exp.id} className="relative pl-4 border-l-2 border-violet-200">
                      <div className="absolute -left-[5px] top-0 w-2 h-2 bg-violet-600 rounded-full"></div>
                      <h3 className="font-bold text-gray-900">{exp.position}</h3>
                      <p className="text-violet-600 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate || '')}
                        {exp.location && ` • ${exp.location}`}
                      </p>
                      {exp.description && (
                        <p className="text-gray-600 text-sm mt-2 leading-relaxed">{exp.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Education */}
            {education.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Education</h2>
                </div>
                <div className="space-y-5">
                  {education.map((edu) => (
                    <div key={edu.id} className="relative pl-4 border-l-2 border-indigo-200">
                      <div className="absolute -left-[5px] top-0 w-2 h-2 bg-indigo-600 rounded-full"></div>
                      <h3 className="font-bold text-gray-900">{edu.school}</h3>
                      <p className="text-indigo-600 font-medium">
                        {edu.degree}
                        {edu.fieldOfStudy && ` in ${edu.fieldOfStudy}`}
                      </p>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate || '')}
                        {edu.gpa && ` • GPA: ${edu.gpa}`}
                      </p>
                      {edu.description && (
                        <p className="text-gray-600 text-sm mt-2">{edu.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Skills */}
          <div className="w-64">
            {skills.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Skills</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                        index % 3 === 0
                          ? 'bg-violet-100 text-violet-700'
                          : index % 3 === 1
                          ? 'bg-indigo-100 text-indigo-700'
                          : 'bg-purple-100 text-purple-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>

      {/* Accent Footer */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 h-4 mt-auto"></div>
    </div>
  );
}
