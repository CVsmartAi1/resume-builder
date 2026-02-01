import { ArticleLayout } from '@/components/marketing';
import { DollarSign, TrendingUp, Calculator, PieChart } from 'lucide-react';

export const metadata = {
  title: 'Finance Resume Guide: Banking, Accounting &amp; Financial Services',
  description: 'Expert guide to writing finance resumes for banking, accounting, investment, and financial services roles. Tips for showcasing financial acumen.',
};

export default function FinanceResumeGuide() {
  return (
    <ArticleLayout
      title="Finance Resume Guide: Banking, Accounting &amp; Financial Services"
      description="Expert guide to writing finance resumes for banking, accounting, investment, and financial services roles. Tips for showcasing financial acumen."
      keywords={['finance resume', 'banking resume', 'accounting resume', 'investment banking resume']}
      heroTitle="Finance Resume Guide"
      heroSubtitle="Calculate your path to career success"
      heroIcon={<DollarSign className="h-10 w-10 text-white" />}
      heroGradient="green"
      toc={[{ id: 'certifications', title: 'Key Certifications' }, { id: 'skills', title: 'Essential Skills' }, { id: 'metrics', title: 'Financial Metrics' }]}
      publishDate="2025-01-20"
      readTime="8 min read"
      authorName="Michael Chang"
      authorTitle="Finance Recruiter"
    >
      <section id="certifications">
        <h2>Key Certifications</h2>
        
        <p>Finance certifications that boost your resume:</p>
        
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3>Accounting</h3>
            <p className="text-sm">CPA (Certified Public Accountant), CMA (Certified Management Accountant)</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3>Investment</h3>
            <p className="text-sm">CFA (Chartered Financial Analyst), Series 7, Series 63</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3>Risk Management</h3>
            <p className="text-sm">FRM (Financial Risk Manager), PRM (Professional Risk Manager)</p>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3>Analysis</h3>
            <p className="text-sm">FMVA (Financial Modeling &amp; Valuation Analyst), CB</p>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2>Essential Skills</h2>
        
        <ul>
          <li><strong>Technical:</strong> Financial modeling, valuation, forecasting, budgeting</li>
          <li><strong>Software:</strong> Excel (advanced), SAP, Oracle, QuickBooks, Bloomberg</li>
          <li><strong>Analysis:</strong> Ratio analysis, variance analysis, risk assessment</li>
          <li><strong>Compliance:</strong> GAAP, IFRS, SOX, regulatory reporting</li>
        </ul>
      </section>

      <section id="metrics">
        <h2>Financial Metrics to Highlight</h2>
        
        <p>Quantify your impact with financial metrics:</p>
        
        <div className="bg-green-50 p-6 rounded-lg">
          <ul className="text-green-800">
            <li>"Reduced operating costs by $2M annually"</li>
            <li>"Improved forecast accuracy by 30%"</li>
            <li>"Managed $50M investment portfolio"</li>
            <li>"Reduced month-end close time by 40%"</li>
          </ul>
        </div>
      </section>
    </ArticleLayout>
  );
}
