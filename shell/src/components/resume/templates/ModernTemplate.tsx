'use client';

import { CV } from '@/lib/cv-schema';
import { Mail, Phone, MapPin, Linkedin, Globe, Github } from 'lucide-react';

interface ModernTemplateProps {
  cv: CV;
}

export function ModernTemplate({ cv }: ModernTemplateProps) {
  const { personalInfo, experience, education, skills } = cv;

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="min-h-[297mm] bg-white">
      {/* Header Section */}
      <header className="bg-slate-900 text-white p-8">
        <h1 className="text-3xl font-bold tracking-tight">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        {personalInfo.profession && (
          <p className="text-slate-300 text-lg mt-1">{personalInfo.profession}</p>
        )}
        
        {/* Contact Info */}
        <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-300">
          {personalInfo.email && (
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {(personalInfo.city || personalInfo.country) && (
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>
                {[personalInfo.city, personalInfo.country].filter(Boolean).join(', ')}
              </span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              <span>Website</span>
            </div>
          )}
          {personalInfo.github && (
            <div className="flex items-center gap-1">
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </div>
          )}
        </div>
      </header>

      <div className="flex">
        {/* Main Content - 2/3 width */}
        <div className="w-2/3 p-8">
          {/* Summary */}
          {personalInfo.summary && (
            <section className="mb-8">
              <h2 className="text-lg font-bold text-slate-900 border-b-2 border-slate-900 pb-1 mb-3">
                Professional Summary
              </h2>
              <p className="text-slate-700 leading-relaxed">{personalInfo.summary}</p>
            </section>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <section className="mb-8">
              <h2 className="text-lg font-bold text-slate-900 border-b-2 border-slate-900 pb-1 mb-4">
                Work Experience
              </h2>
              <div className="space-y-5">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-slate-900">{exp.position}</h3>
                        <p className="text-slate-600">{exp.company}</p>
                      </div>
                      <div className="text-right text-sm text-slate-500">
                        <span>
                          {formatDate(exp.startDate)} -{' '}
                          {exp.current ? 'Present' : formatDate(exp.endDate || '')}
                        </span>
                        {exp.location && (
                          <p className="text-slate-400">{exp.location}</p>
                        )}
                      </div>
                    </div>
                    {exp.description && (
                      <p className="text-slate-700 text-sm mt-2 leading-relaxed">
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
            <section className="mb-8">
              <h2 className="text-lg font-bold text-slate-900 border-b-2 border-slate-900 pb-1 mb-4">
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-slate-900">{edu.school}</h3>
                        <p className="text-slate-600">
                          {edu.degree}
                          {edu.fieldOfStudy && ` in ${edu.fieldOfStudy}`}
                        </p>
                      </div>
                      <div className="text-right text-sm text-slate-500">
                        <span>
                          {formatDate(edu.startDate)} -{' '}
                          {edu.current ? 'Present' : formatDate(edu.endDate || '')}
                        </span>
                        {edu.gpa && (
                          <p className="text-slate-400">GPA: {edu.gpa}</p>
                        )}
                      </div>
                    </div>
                    {edu.description && (
                      <p className="text-slate-700 text-sm mt-2">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar - 1/3 width */}
        <div className="w-1/3 bg-slate-50 p-8">
          {/* Skills */}
          {skills.length > 0 && (
            <section className="mb-8">
              <h2 className="text-lg font-bold text-slate-900 border-b-2 border-slate-900 pb-1 mb-3">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-slate-200 text-slate-700 text-sm rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Contact Details Sidebar */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 border-b-2 border-slate-900 pb-1 mb-3">
              Contact
            </h2>
            <div className="space-y-2 text-sm">
              {personalInfo.email && (
                <div className="text-slate-600">
                  <span className="font-medium">Email:\u003c/span> {personalInfo.email}
                </div>
              )}
              {personalInfo.phone && (
                <div className="text-slate-600">
                  <span className="font-medium">Phone:\u003c/span> {personalInfo.phone}
                </div>
              )}
              {(personalInfo.address || personalInfo.city || personalInfo.country) && (
                <div className="text-slate-600">
                  <span className="font-medium">Address:\u003c/span>{' '}
                  {[personalInfo.address, personalInfo.city, personalInfo.country]
                    .filter(Boolean)
                    .join(', ')}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
