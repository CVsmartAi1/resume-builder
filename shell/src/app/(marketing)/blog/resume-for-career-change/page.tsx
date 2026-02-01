import { ArticleLayout } from '@/components/marketing';
import { Briefcase, ArrowRight, Target, Lightbulb } from 'lucide-react';

export const metadata = {
  title: 'Resume for Career Change: How to Transition Successfully',
  description: 'Learn how to write a resume for a career change. Tips for highlighting transferable skills and positioning your experience for a new industry.',
};

export default function CareerChangeResumeArticle() {
  return (
    <ArticleLayout
      title="Resume for Career Change: How to Transition Successfully"
      description="Learn how to write a resume for a career change. Tips for highlighting transferable skills and positioning your experience for a new industry."
      keywords={['career change resume', 'changing careers', 'transferable skills', 'career transition']}
      heroTitle="Resume for Career Change"
      heroSubtitle="Position your experience for a new path"
      heroIcon={<ArrowRight className="h-10 w-10 text-white" />}
      heroGradient="purple"
      toc={[{ id: 'strategy', title: 'Career Change Strategy' }, { id: 'format', title: 'Resume Format' }, { id: 'skills', title: 'Transferable Skills' }]}
      publishDate="2025-01-23"
      readTime="7 min read"
      authorName="Career Expert Team"
    >
      <section id="strategy">
        <h2>Career Change Strategy</h2>
        
        <p>Changing careers requires reframing your experience to highlight relevant skills:</p>
        
        <ul>
          <li>Use a functional or hybrid resume format</li>
          <li>Lead with a compelling objective explaining the transition</li>
          <li>Highlight transferable skills prominently</li>
          <li>Include relevant coursework, certifications, or projects</li>
        </ul>
      </section>

      <section id="format">
        <h2>Resume Format for Career Changers</h2>
        
        <p>Consider these formats when changing careers:</p>
        
        <div className="space-y-4 my-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3>Functional Resume</h3>
            <p>Groups experience by skill category rather than chronology. Good for highlighting transferable skills.</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3>Hybrid/Combination Resume</h3>
            <p>Features skills section at top followed by work history. Balances transferable skills with experience.</p>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2>Transferable Skills</h2>
        
        <p>These skills apply across industries:</p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4>Leadership</h4>
            <p className="text-sm">Team management, mentoring, decision-making, conflict resolution</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4>Communication</h4>
            <p className="text-sm">Writing, presenting, client relations, negotiating</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4>Project Management</h4>
            <p className="text-sm">Planning, organizing, budgeting, meeting deadlines</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4>Problem Solving</h4>
            <p className="text-sm">Analysis, critical thinking, creativity, troubleshooting</p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
