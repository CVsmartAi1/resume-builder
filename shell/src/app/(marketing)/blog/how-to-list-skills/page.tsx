import { ArticleLayout } from '@/components/marketing';
import { List, Star, CheckCircle, Award } from 'lucide-react';

export const metadata = {
  title: 'How to List Skills on Your Resume (With Examples)',
  description: 'Learn the best way to showcase your skills on a resume. Hard skills, soft skills, and technical skills organized for maximum impact.',
};

const toc = [
  { id: 'types', title: 'Types of Skills to Include' },
  { id: 'how-to-list', title: 'How to List Skills Effectively' },
  { id: 'examples', title: 'Skills by Industry' },
  { id: 'tips', title: 'Expert Tips' },
];

export default function HowToListSkillsArticle() {
  return (
    <ArticleLayout
      title="How to List Skills on Your Resume (With Examples)"
      description="Learn the best way to showcase your skills on a resume. Hard skills, soft skills, and technical skills organized for maximum impact."
      keywords={['resume skills', 'how to list skills', 'hard skills', 'soft skills', 'technical skills']}
      heroTitle="How to List Skills on Your Resume"
      heroSubtitle="Showcase your abilities effectively"
      heroIcon={<List className="h-10 w-10 text-white" />}
      heroGradient="green"
      toc={toc}
      publishDate="2025-01-21"
      readTime="6 min read"
      authorName="Career Expert Team"
    >
      <section id="types">
        <h2>Types of Skills to Include</h2>
        
        <p>Your resume should include three types of skills:</p>
        
        <div className="space-y-4 my-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-blue-900">Hard Skills</h3>
            <p className="text-blue-800">Technical abilities learned through training: programming, data analysis, foreign languages, operating machinery.</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-green-900">Soft Skills</h3>
            <p className="text-green-800">Interpersonal traits: communication, leadership, problem-solving, time management.</p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-purple-900">Transferable Skills</h3>
            <p className="text-purple-800">Abilities that apply across jobs: project management, customer service, writing, research.</p>
          </div>
        </div>
      </section>

      <section id="how-to-list">
        <h2>How to List Skills Effectively</h2>
        
        <ol className="space-y-4">
          <li><strong>Create a dedicated Skills section</strong> — Usually near the top or after experience</li>
          <li><strong>Categorize by type</strong> — Group technical skills, languages, and tools separately</li>
          <li><strong>Match the job description</strong> — Include keywords from the posting</li>
          <li><strong>Be specific</strong> — "Python" not "Programming"; "Spanish (Fluent)" not just "Languages"</li>
          <li><strong>Show proficiency levels</strong> — Expert, Advanced, Intermediate, Beginner where relevant</li>
        </ol>
      </section>

      <section id="examples">
        <h2>Skills by Industry</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3>Technology</h3>
            <p className="text-sm text-gray-600">Python, JavaScript, AWS, Docker, SQL, React, Git, Kubernetes</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3>Marketing</h3>
            <p className="text-sm text-gray-600">SEO, Google Analytics, Content Strategy, Social Media, CRM, Email Marketing</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3>Finance</h3>
            <p className="text-sm text-gray-600">Financial Modeling, Excel, SAP, Budgeting, Forecasting, Risk Analysis</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3>Healthcare</h3>
            <p className="text-sm text-gray-600">Patient Care, EMR, Medical Terminology, CPR, Clinical Documentation</p>
          </div>
        </div>
      </section>

      <section id="tips">
        <h2>Expert Tips</h2>
        
        <ul>
          <li><strong>Don't list too many:</strong> Focus on 8-12 most relevant skills</li>
          <li><strong>Back up with evidence:</strong> Use skills in your experience bullet points</li>
          <li><strong>Update regularly:</strong> Keep skills current as you learn new technologies</li>
          <li><strong>Remove outdated skills:</strong> Don't list obsolete technologies</li>
        </ul>
      </section>
    </ArticleLayout>
  );
}
