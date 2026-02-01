import { ArticleLayout } from '@/components/marketing';
import { Zap, TrendingUp, Award, Target } from 'lucide-react';

export const metadata = {
  title: '200+ Resume Action Words to Make Your Resume Stand Out',
  description: 'Powerful action verbs organized by category to supercharge your resume. Transform boring bullet points into compelling achievements.',
};

const toc = [
  { id: 'why-action-words', title: 'Why Action Words Matter' },
  { id: 'leadership', title: 'Leadership &amp; Management' },
  { id: 'communication', title: 'Communication' },
  { id: 'technical', title: 'Technical &amp; Analytical' },
  { id: 'creative', title: 'Creative' },
  { id: 'problem-solving', title: 'Problem Solving' },
  { id: 'how-to-use', title: 'How to Use Action Words' },
];

const relatedArticles = [
  {
    title: 'How to Write a Professional Summary',
    href: '/blog/how-to-write-professional-summary',
    description: 'Craft a compelling summary that captures attention.',
  },
  {
    title: 'How to Quantify Achievements',
    href: '/blog/how-to-quantify-achievements',
    description: 'Show your impact with metrics and numbers.',
  },
];

export default function ResumeActionWordsArticle() {
  return (
    <ArticleLayout
      title="200+ Resume Action Words to Make Your Resume Stand Out"
      description="Powerful action verbs organized by category to supercharge your resume. Transform boring bullet points into compelling achievements."
      keywords={['resume action words', 'resume verbs', 'action verbs', 'power words', 'resume vocabulary']}
      heroTitle="Resume Action Words"
      heroSubtitle="Power up your resume with the right verbs"
      heroIcon={<Zap className="h-10 w-10 text-white" />}
      heroGradient="yellow"
      toc={toc}
      publishDate="2025-01-19"
      readTime="8 min read"
      authorName="Career Expert Team"
      relatedArticles={relatedArticles}
    >
      <section id="why-action-words">
        <h2>Why Action Words Matter</h2>
        
        <p>
          Strong action verbs transform passive job descriptions into compelling achievement statements. 
          Instead of "Responsible for managing a team," write "Led a team of 10 to exceed sales targets by 25%." 
          The right verb makes your contributions clear and impactful.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-red-900">❌ Weak</h3>
            <p className="text-red-800">"Was responsible for the company website"</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-green-900">✓ Strong</h3>
            <p className="text-green-800">"Redesigned company website, increasing conversions by 40%"</p>
          </div>
        </div>
      </section>

      <section id="leadership">
        <h2>Leadership &amp; Management Action Words</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          {['Led', 'Managed', 'Directed', 'Oversaw', 'Supervised', 'Coordinated', 'Guided', 'Mentored', 
            'Trained', 'Developed', 'Empowered', 'Motivated', 'Inspired', 'Championed', 'Spearheaded',
            'Pioneered', 'Governed', 'Orchestrated', 'Navigated', 'Facilitated'].map(word => (
            <span key={word} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-center font-medium">
              {word}
            </span>
          ))}
        </div>
      </section>

      <section id="communication">
        <h2>Communication Action Words</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          {['Presented', 'Negotiated', 'Articulated', 'Corresponded', 'Conveyed', 'Persuaded', 
            'Liaised', 'Mediated', 'Collaborated', 'Consulted', 'Advocated', 'Briefed', 
            'Composed', 'Edited', 'Authored', 'Published', 'Translated', 'Clarified',
            'Influenced', 'Represented'].map(word => (
            <span key={word} className="px-4 py-2 bg-green-100 text-green-800 rounded-lg text-center font-medium">
              {word}
            </span>
          ))}
        </div>
      </section>

      <section id="technical">
        <h2>Technical &amp; Analytical Action Words</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          {['Analyzed', 'Evaluated', 'Assessed', 'Examined', 'Investigated', 'Researched',
            'Calculated', 'Computed', 'Audited', 'Tested', 'Debugged', 'Programmed',
            'Engineered', 'Architected', 'Deployed', 'Integrated', 'Automated', 'Optimized',
            'Streamlined', 'Upgraded'].map(word => (
            <span key={word} className="px-4 py-2 bg-purple-100 text-purple-800 rounded-lg text-center font-medium">
              {word}
            </span>
          ))}
        </div>
      </section>

      <section id="creative">
        <h2>Creative Action Words</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          {['Designed', 'Created', 'Developed', 'Conceptualized', 'Visualized', 'Illustrated',
            'Crafted', 'Produced', 'Generated', 'Invented', 'Innovated', 'Built',
            'Constructed', 'Fashioned', 'Formulated', 'Established', 'Launched', 'Initiated',
            'Introduced', 'Instituted'].map(word => (
            <span key={word} className="px-4 py-2 bg-pink-100 text-pink-800 rounded-lg text-center font-medium">
              {word}
            </span>
          ))}
        </div>
      </section>

      <section id="problem-solving">
        <h2>Problem-Solving Action Words</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          {['Solved', 'Resolved', 'Fixed', 'Remedied', 'Rectified', 'Improved',
            'Enhanced', 'Refined', 'Revamped', 'Restructured', 'Reorganized', 'Revised',
            'Transformed', 'Converted', 'Modernized', 'Simplified', 'Reduced', 'Eliminated',
            'Minimized', 'Maximized'].map(word => (
            <span key={word} className="px-4 py-2 bg-orange-100 text-orange-800 rounded-lg text-center font-medium">
              {word}
            </span>
          ))}
        </div>
      </section>

      <section id="how-to-use">
        <h2>How to Use Action Words Effectively</h2>
        
        <ol className="space-y-4">
          <li>
            <strong>Start every bullet point with an action verb</strong> — Never start with "Responsible for" or "Duties included"
          </li>
          <li>
            <strong>Use variety</strong> — Don't repeat the same verb; mix it up to keep readers engaged
          </li>
          <li>
            <strong>Match the job description</strong> — Mirror the language used in the posting when appropriate
          </li>
          <li>
            <strong>Pair with metrics</strong> — Follow your verb with numbers: "Increased sales by 50%"
          </li>
          <li>
            <strong>Choose strong over weak> — "Executed" is stronger than "Did"; "Spearheaded" is stronger than "Helped with"
          </li>
        </ol>
      </section>
    </ArticleLayout>
  );
}
