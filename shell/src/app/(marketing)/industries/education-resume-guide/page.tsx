import { ArticleLayout } from '@/components/marketing';
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';

export const metadata = {
  title: 'Education Resume Guide: Teachers, Administrators &amp; Faculty',
  description: 'Complete guide to education resumes for teachers, administrators, and academic professionals. Highlight certifications and student impact.',
};

export default function EducationResumeGuide() {
  return (
    <ArticleLayout
      title="Education Resume Guide"
      description="Complete guide to education resumes for teachers, administrators, and academic professionals. Highlight certifications and student impact."
      keywords={['education resume', 'teacher resume', 'academic resume', 'school administrator resume']}
      heroTitle="Education Resume Guide"
      heroSubtitle="Educate employers about your expertise"
      heroIcon={<GraduationCap className="h-10 w-10 text-white" />}
      heroGradient="blue"
      toc={[{ id: 'certifications', title: 'Teaching Certifications' }, { id: 'impact', title: 'Student Impact' }]}
      publishDate="2025-01-20"
      readTime="7 min read"
      authorName="Dr. Linda Thompson"
      authorTitle="Education Recruiter"
    >
      <section id="certifications">
        <h2>Teaching Certifications</h2>
        
        <p>Prominently display your credentials:</p>
        
        <ul>
          <li>State teaching license with grade levels and subject areas</li>
          <li>ESL/ELL endorsements</li>
          <li>Special education certifications</li>
          <li>National Board Certification</li>
        </ul>
      </section>

      <section id="impact">
        <h2>Student Impact Metrics</h2>
        
        <p>Quantify your teaching effectiveness:</p>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="text-blue-800">
            <li>"Increased reading proficiency scores by 25%"</li>
            <li>"Improved state test pass rates from 70% to 95%"</li>
            <li>"Managed classroom of 28 diverse learners"</li>
          </ul>
        </div>
      </section>
    </ArticleLayout>
  );
}
