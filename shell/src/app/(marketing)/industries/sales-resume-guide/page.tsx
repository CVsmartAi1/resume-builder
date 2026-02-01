import { ArticleLayout } from '@/components/marketing';
import { Briefcase, TrendingUp, Target, Award } from 'lucide-react';

export const metadata = {
  title: 'Sales Resume Guide: B2B, Retail &amp; Account Management',
  description: 'Expert guide to writing sales resumes. Tips for B2B sales, account executives, retail sales, and sales leadership roles.',
};

export default function SalesResumeGuide() {
  return (
    <ArticleLayout
      title="Sales Resume Guide"
      description="Expert guide to writing sales resumes. Tips for B2B sales, account executives, retail sales, and sales leadership roles."
      keywords={['sales resume', 'B2B sales resume', 'account executive resume', 'sales representative resume']}
      heroTitle="Sales Resume Guide"
      heroSubtitle="Sell your skills to employers"
      heroIcon={<TrendingUp className="h-10 w-10 text-white" />}
      heroGradient="green"
      toc={[{ id: 'metrics', title: 'Sales Metrics' }, { id: 'skills', title: 'Sales Skills' }]}
      publishDate="2025-01-20"
      readTime="7 min read"
      authorName="Marcus Thompson"
      authorTitle="Sales Recruitment Director"
    >
      <section id="metrics">
        <h2>Essential Sales Metrics</h2>
        
        <ul>
          <li><strong>Quota attainment:</strong> Percentage of target achieved</li>
          <li><strong>Revenue generated:</strong> Annual sales volume</li>
          <li><strong>Deal size:</strong> Average contract value</li>
          <li><strong>Win rate:</strong> Percentage of deals closed</li>
          <li><strong>Pipeline growth:</strong> Year-over-year improvement</li>
        </ul>
      </section>

      <section id="skills">
        <h2>Sales Skills to Highlight</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3>B2B Sales</h3>
            <p className="text-sm">Enterprise sales, solution selling, account management, CRM, Salesforce</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3>Sales Process</h3>
            <p className="text-sm">Prospecting, cold calling, demos, negotiation, closing</p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
