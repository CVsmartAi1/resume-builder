import { ArticleLayout } from '@/components/marketing';
import { Briefcase, TrendingUp, Target } from 'lucide-react';

export const metadata = {
  title: 'Marketing Manager Resume Example | 2025 Sample',
  description: 'View a professional marketing manager resume example. Learn how to showcase campaign results, leadership, and marketing ROI.',
};

export default function MarketingManagerExample() {
  return (
    <ArticleLayout
      title="Marketing Manager Resume Example"
      description="View a professional marketing manager resume example. Learn how to showcase campaign results, leadership, and marketing ROI."
      keywords={['marketing manager resume example', 'marketing resume sample']}
      heroTitle="Marketing Manager Resume Example"
      heroSubtitle="Drive your career forward"
      heroIcon={<TrendingUp className="h-10 w-10 text-white" />}
      heroGradient="pink"
      toc={[{ id: 'example', title: 'Full Example' }]}
      publishDate="2025-01-21"
      readTime="5 min read"
      authorName="Career Expert Team"
    >
      <section id="example">
        <h2>Marketing Manager Resume Example</h2>
        
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8 my-8 shadow-lg">
          <div className="text-center border-b pb-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900">JESSICA WILLIAMS</h1>
            <p className="text-gray-600 mt-2">Marketing Manager | Chicago, IL | jessica.w@email.com | linkedin.com/in/jessicaw</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-pink-500 pb-1 mb-3">PROFESSIONAL SUMMARY</h2>
            <p className="text-gray-700">Dynamic Marketing Manager with 6+ years driving growth for B2B SaaS companies. Expert in digital marketing strategy, demand generation, and brand development. Consistently exceeded revenue targets by 125%+ while managing $3M annual budget and leading teams of 8+ marketers.</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-pink-500 pb-1 mb-3">CORE COMPETENCIES</h2>
            <p className="text-gray-700"><strong>Digital Strategy:</strong> SEO/SEM, Content Marketing, Social Media, Email Marketing, Marketing Automation</p>
            <p className="text-gray-700"><strong>Analytics:</strong> Google Analytics, HubSpot, Salesforce, Tableau, A/B Testing, Attribution Modeling</p>
            <p className="text-gray-700"><strong>Leadership:</strong> Team Building, Cross-functional Collaboration, Agency Management, Budget Oversight</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-pink-500 pb-1 mb-3">PROFESSIONAL EXPERIENCE</h2>
            
            <div className="mb-4">
              <div className="flex justify-between">
                <p className="font-semibold">Senior Marketing Manager | TechSolutions Inc.</p>
                <p className="text-gray-600 text-sm">2021 - Present</p>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-sm mt-1">
                <li>Manage $3M marketing budget and lead team of 8 across demand gen, content, and product marketing</li>
                <li>Drove 180% increase in qualified leads through multi-channel campaigns generating $12M pipeline</li>
                <li>Launched account-based marketing program targeting Fortune 500, closing 15 enterprise deals worth $8M</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-pink-500 pb-1 mb-3">EDUCATION</h2>
            <p className="text-gray-700"><strong>MBA, Marketing</strong> | Northwestern University - Kellogg School of Management | 2018</p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
