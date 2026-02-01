import { ArticleLayout } from '@/components/marketing';
import { FileText, Scale, CheckCircle, XCircle } from 'lucide-react';

export const metadata = {
  title: 'One-Page vs Two-Page Resume: Which Should You Use?',
  description: 'Learn when to use a one-page versus two-page resume. Guidelines based on experience level, industry, and career stage.',
};

const toc = [
  { id: 'general-rule', title: 'The General Rule' },
  { id: 'one-page', title: 'When to Use One Page' },
  { id: 'two-page', title: 'When to Use Two Pages' },
  { id: 'exceptions', title: 'Exceptions and Special Cases' },
];

export default function OnePageVsTwoPageArticle() {
  return (
    <ArticleLayout
      title="One-Page vs Two-Page Resume: Which Should You Use?"
      description="Learn when to use a one-page versus two-page resume. Guidelines based on experience level, industry, and career stage."
      keywords={['one page resume', 'two page resume', 'resume length', 'how long should resume be']}
      heroTitle="One-Page vs Two-Page Resume"
      heroSubtitle="Find the right length for your experience"
      heroIcon={<Scale className="h-10 w-10 text-white" />}
      heroGradient="blue"
      toc={toc}
      publishDate="2025-01-22"
      readTime="6 min read"
      authorName="Career Expert Team"
    >
      <section id="general-rule">
        <h2>The General Rule</h2>
        
        <p>Resume length depends on your experience level:</p>
        
        <div className="space-y-4 my-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-blue-900">0-5 Years Experience: One Page</h3>
            <p className="text-blue-800">Early career professionals should keep resumes concise and focused.</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-green-900">5-10 Years Experience: 1-2 Pages</h3>
            <p className="text-green-800">Mid-career professionals may need more space to showcase growth.</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-purple-900">10+ Years Experience: Two Pages</h3>
            <p className="text-purple-800">Senior professionals and executives often need two pages for comprehensive experience.</p>
          </div>
        </div>
      </section>

      <section id="one-page">
        <h2>When to Use One Page</h2>
        
        <ul>
          <li>You're entry-level or early career</li>
          <li>You're changing careers and have limited relevant experience</li>
          <li>The job posting specifically requests one page</li>
          <li>You're applying to conservative industries (finance, law, government)</li>
        </ul>
      </section>

      <section id="two-page">
        <h2>When to Use Two Pages</h2>
        
        <ul>
          <li>You have 10+ years of relevant experience</li>
          <li>You're in academia, research, or scientific fields</li>
          <li>You have extensive publications, patents, or speaking engagements</li>
          <li>You're a senior executive with multiple leadership roles</li>
        </ul>
      </section>

      <section id="exceptions">
        <h2>Exceptions and Special Cases</h2>
        
        <div className="bg-amber-50 p-6 rounded-lg">
          <h3 className="text-amber-900">CVs vs. Resumes</h3>
          
          <p className="text-amber-800 mt-2">
            Academic CVs can be 3+ pages. Federal resumes often require 2-4 pages to address all 
            requirements. International resumes may have different length conventions.
          </p>
        </div>
        
        <p className="mt-4"><strong>Key rule:</strong> Every line should add value. If you go to two pages, 
        ensure the second page contains compelling content, not filler.</p>
      </section>
    </ArticleLayout>
  );
}
