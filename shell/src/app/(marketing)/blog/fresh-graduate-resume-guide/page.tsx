import { ArticleLayout } from '@/components/marketing';
import { GraduationCap, Sparkles, Target, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Fresh Graduate Resume Guide: Land Your First Job',
  description: 'Complete guide to writing a resume as a recent graduate. Tips for showcasing education, internships, and transferable skills.',
};

export default function FreshGraduateResumeArticle() {
  return (
    <ArticleLayout
      title="Fresh Graduate Resume Guide: Land Your First Job"
      description="Complete guide to writing a resume as a recent graduate. Tips for showcasing education, internships, and transferable skills."
      keywords={['fresh graduate resume', 'entry level resume', 'recent graduate', 'first job resume']}
      heroTitle="Fresh Graduate Resume Guide"
      heroSubtitle="Launch your career with confidence"
      heroIcon={<GraduationCap className="h-10 w-10 text-white" />}
      heroGradient="blue"
      toc={[{ id: 'education', title: 'Highlighting Education' }, { id: 'experience', title: 'Gaining Experience' }, { id: 'skills', title: 'Showcasing Skills' }]}
      publishDate="2025-01-23"
      readTime="7 min read"
      authorName="Career Expert Team"
    >
      <section id="education">
        <h2>Highlighting Education</h2>
        
        <p>As a recent graduate, your education section carries more weight:</p>
        
        <ul>
          <li>Place education at the top of your resume</li>
          <li>Include GPA if 3.5 or higher</li>
          <li>List relevant coursework and projects</li>
          <li>Mention honors, awards, and dean's list</li>
          <li>Include study abroad or relevant extracurriculars</li>
        </ul>
      </section>

      <section id="experience">
        <h2>Gaining Experience</h2>
        
        <p>Include these types of experience:</p>
        
        <div className="space-y-4 my-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3>Internships</h3>
            <p>Treat like professional experience with achievements and metrics.</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3>Part-Time Jobs</h3>
            <p>Highlight transferable skills: customer service, teamwork, time management.</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3>Projects</h3>
            <p>Include academic projects, personal websites, apps, or case studies.</p>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2>Showcasing Skills</h2>
        
        <p>Emphasize:</p>
        
        <ul>
          <li>Technical skills from coursework and projects</li>
          <li>Soft skills demonstrated through teamwork and leadership</li>
          <li>Language skills and certifications</li>
          <li>Software and tools proficiency</li>
        </ul>
      </section>
    </ArticleLayout>
  );
}
