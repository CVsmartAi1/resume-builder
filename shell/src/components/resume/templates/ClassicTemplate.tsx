'use client';

import { CV } from '@/lib/cv-schema';
import { Mail, Phone, MapPin, Linkedin, Globe, Github } from 'lucide-react';

interface ClassicTemplateProps {
  cv: CV;
}

export function ClassicTemplate({ cv }: ClassicTemplateProps) {
  const { personalInfo, experience, education, skills } = cv;

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  return (
    <div className="min-h-[297mm] bg-white p-10 font-serif">
      {/* Header */}
      <header className="text-center border-b-2 border-black pb-6 mb-6">
        <h1 className="text-3xl font-bold text-black tracking-wide uppercase">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        
        {personalInfo.profession && (
          <p className="text-lg text-gray-700 mt-2 italic">{personalInfo.profession}</p>
        )}
        
        {/* Contact Line */}
        <div className="flex flex-wrap justify-center gap-3 mt-3 text-sm text-gray-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {(personalInfo.city || personalInfo.country) && (
            <span>
              • {[personalInfo.city, personalInfo.country].filter(Boolean).join(', ')}
            </span>
          )}
          {personalInfo.linkedin && <span>• LinkedIn</span>}
          {personalInfo.website && <span>• {personalInfo.website}</span>}
        </div>
      </header>

      {/* Summary */}
      {personalInfo.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-black uppercase tracking-wider border-b border-gray-400 pb-1 mb-3">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">{personalInfo.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-black uppercase tracking-wider border-b border-gray-400 pb-1 mb-4">
            Professional Experience
          </h2>
          <div className="space-y-5">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-black">{exp.position}</h3>
                  <span className="text-sm text-gray-600 italic">
                    {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate || '')}
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-gray-700 italic">{exp.company}</span>
                  {exp.location && <span className="text-sm text-gray-500">{exp.location}</span>}
                </div>
                {exp.description && (
                  <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-black uppercase tracking-wider border-b border-gray-400 pb-1 mb-4">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-black">{edu.degree}</span>
                    {edu.fieldOfStudy && (
                      <span className="text-gray-700"> in {edu.fieldOfStudy}</span>
                    )}
                  </div>
                  <span className="text-sm text-gray-600 italic">
                    {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate || '')}
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-gray-700">{edu.school}</span>
                  {edu.gpa && <span className="text-sm text-gray-500">GPA: {edu.gpa}</span>}
                </div>
                {edu.description && (
                  <p className="text-gray-700 text-sm mt-2">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section>
          <h2 className="text-lg font-bold text-black uppercase tracking-wider border-b border-gray-400 pb-1 mb-3">
            Skills
          </h2>
          <p className="text-gray-700">{skills.join(' • ')}</p>
        </section>
      )}
    </div>
  );
}
