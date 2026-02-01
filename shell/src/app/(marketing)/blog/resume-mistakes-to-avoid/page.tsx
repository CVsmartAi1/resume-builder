import { ArticleLayout } from '@/components/marketing';
import { AlertTriangle, XCircle, CheckCircle, Lightbulb } from 'lucide-react';

export const metadata = {
  title: 'Resume Mistakes to Avoid: Common Errors That Cost Jobs',
  description: 'Learn the most common resume mistakes that can disqualify you from jobs. Fix these errors to increase your chances of getting hired.',
};

const toc = [
  { id: 'formatting', title: 'Formatting Mistakes' },
  { id: 'content', title: 'Content Mistakes' },
  { id: 'strategy', title: 'Strategic Mistakes' },
  { id: 'proofreading', title: 'Proofreading Errors' },
];

export default function ResumeMistakesArticle() {
  return (
    <ArticleLayout
      title="Resume Mistakes to Avoid: Common Errors That Cost Jobs"
      description="Learn the most common resume mistakes that can disqualify you from jobs. Fix these errors to increase your chances of getting hired."
      keywords={['resume mistakes', 'resume errors', 'common resume mistakes', 'what not to put on resume']}
      heroTitle="Resume Mistakes to Avoid"
      heroSubtitle="Don't let these errors cost you the job"
      heroIcon={<AlertTriangle className="h-10 w-10 text-white" />}
      heroGradient="orange"
      toc={toc}
      publishDate="2025-01-21"
      readTime="8 min read"
      authorName="Career Expert Team"
    >
      <section id="formatting">
        <h2>Formatting Mistakes</h2>
        
        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-red-900">❌ Using Fancy Templates</h3>
            <p className="text-red-800">Graphics, charts, and unusual layouts confuse ATS systems. Stick to clean, simple formatting.</p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-red-900">❌ Inconsistent Formatting</h3>
            <p className="text-red-800">Mixed fonts, varying date formats, and uneven spacing look unprofessional.</p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-red-900">❌ PDF When Docx is Requested</h3>
            <p className="text-red-800">Always follow application instructions. When in doubt, use .docx format.</p>
          </div>
        </div>
      </section>

      <section id="content">
        <h2>Content Mistakes</h2>
        
        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-red-900">❌ Using an Objective Statement</h3>
            <p className="text-red-800">Objectives focus on what you want. Use a professional summary that shows what you offer.</p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-red-900">❌ Listing Job Duties Instead of Achievements</h3>
            <p className="text-red-800">Don't say "Responsible for sales." Say "Exceeded sales targets by 25% for 3 consecutive quarters."</p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-red-900">❌ Including Irrelevant Information</h3>
            <p className="text-red-800">Remove outdated experience, unrelated hobbies, and personal information like age or marital status.</p>
          </div>
        </div>
      </section>

      <section id="strategy">
        <h2>Strategic Mistakes</h2>
        
        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-red-900">❌ Using the Same Resume for Every Job</h3>
            <p className="text-red-800">Tailor your resume for each application. Match keywords from the job description.</p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-red-900">❌ Focusing on Responsibilities Over Results</h3>
            <p className="text-red-800">Employers care about what you accomplished, not just what you were supposed to do.</p>
          </div>
        </div>
      </section>

      <section id="proofreading">
        <h2>Proofreading Errors</h2>
        
        <div className="bg-amber-50 p-6 rounded-lg">
          <h3 className="text-amber-900">⚠️ Typos and Grammar Mistakes</h3>
          
          <p className="text-amber-800 mt-2">
            58% of employers dismiss candidates because of typos. Use spell check, but also read carefully 
            and have someone else review your resume.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
}
