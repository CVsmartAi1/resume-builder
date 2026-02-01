import { ArticleLayout } from '@/components/marketing';
import { TemplateShowcase } from '@/components/marketing/TemplateShowcase';
import { Calculator, TrendingUp, PieChart, DollarSign } from 'lucide-react';

export const metadata = {
  title: 'Financial Analyst Resume Template | ATS-Friendly Format',
  description: 'Create a professional financial analyst resume with our ATS-friendly template. Highlight your financial modeling, analysis skills, and business acumen.',
};

const toc = [
  { id: 'overview', title: 'Template Overview' },
  { id: 'key-sections', title: 'Key Sections' },
  { id: 'tips', title: 'Writing Tips for Financial Analysts' },
  { id: 'keywords', title: 'Essential Keywords' },
  { id: 'example', title: 'Resume Example' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function FinancialAnalystTemplate() {
  return (
    <ArticleLayout
      title="Financial Analyst Resume Template"
      description="Create a professional financial analyst resume with our ATS-friendly template. Highlight your financial modeling, analysis skills, and business acumen."
      keywords={['financial analyst resume', 'finance resume template', 'FP&A resume', 'investment banking resume']}
      heroTitle="Financial Analyst Resume Template"
      heroSubtitle="Analyze your path to career success"
      heroIcon={<Calculator className="h-10 w-10 text-white" />}
      heroGradient="green"
      toc={toc}
      publishDate="2025-01-15"
      readTime="7 min read"
      authorName="Michael Chang"
      authorTitle="Finance Recruiter"
    >
      <section id="overview">
        <p className="lead text-xl text-gray-600 mb-6">
          Financial analysts play a critical role in business decision-making. Your resume needs to 
          showcase your analytical skills, financial modeling expertise, and ability to translate 
          complex data into actionable business insights.
        </p>
        
        <div className="my-8">
          <TemplateShowcase role="Financial Analyst" accentColor="bg-green-600" />
        </div>
      </section>

      <section id="key-sections">
        <h2>Essential Resume Sections for Financial Analysts</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              Financial Modeling &amp; Analysis
            </h3>
            <p>
              Highlight your experience with financial models, forecasting, budgeting, and variance analysis. 
              Include specific tools: Excel (advanced functions, VBA), SQL, and financial software.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              Business Impact
            </h3>
            <p>
              Quantify your impact on business decisions. Show how your analysis led to cost savings, 
              revenue growth, or improved operational efficiency.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-purple-600" />
              Certifications
            </h3>
            <p>
              Include relevant certifications like CFA, CPA, or FMVA. These demonstrate your commitment 
              to professional development and expertise in financial analysis.
            </p>
          </div>
        </div>
      </section>

      <section id="tips">
        <h2>Expert Writing Tips for Financial Analysts</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3>Quantify Financial Impact</h3>
            <ul>
              <li>"Built financial model supporting $50M investment decision"</li>
              <li>"Identified cost savings opportunities worth $2M annually"</li>
              <li>"Improved forecast accuracy by 25% through enhanced methodology"</li>
              <li>"Reduced month-end close time by 40% through process automation"</li>
            </ul>
          </div>
          
          <div>
            <h3>Highlight Technical Skills</h3>
            <ul>
              <li>Advanced Excel (pivot tables, VLOOKUP, macros, VBA)</li>
              <li>Financial modeling and valuation</li>
              <li>Data analysis tools (SQL, Tableau, Power BI)</li>
              <li>ERP systems (SAP, Oracle, NetSuite)</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="keywords">
        <h2>Essential Keywords for Financial Analyst Resumes</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Analysis</h4>
            <div className="flex flex-wrap gap-2">
              {['Financial Modeling', 'Forecasting', 'Budgeting', 'Variance Analysis', 'ROI Analysis', 'FP&A'].map(k => (
                <span key={k} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Tools</h4>
            <div className="flex flex-wrap gap-2"
003e
              {['Excel', 'SQL', 'Tableau', 'Power BI', 'SAP', 'Oracle', 'QuickBooks', 'Bloomberg'].map(k => (
                <span key={k} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Certifications</h4>
            <div className="flex flex-wrap gap-2">
              {['CFA', 'CPA', 'FMVA', 'MBA', 'Series 7', 'Series 63'].map(k => (
                <span key={k} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="example">
        <h2>Financial Analyst Resume Example</h2>
        
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
          <pre>{`ANDREW MARTINEZ, CFA
Senior Financial Analyst | New York, NY | andrew.m@email.com | linkedin.com/in/andrewm

PROFESSIONAL SUMMARY
CFA charterholder with 5+ years of experience in financial planning & analysis, strategic 
forecasting, and investment analysis. Expert in building complex financial models and 
providing data-driven insights to executive leadership. Proven track record of improving 
forecast accuracy by 30% and identifying $5M+ in cost savings opportunities.

CERTIFICATIONS
• Chartered Financial Analyst (CFA) - Level III
• Financial Modeling & Valuation Analyst (FMVA) - CFI

TECHNICAL SKILLS
• Advanced Excel: Financial modeling, VBA, pivot tables, Power Query, complex formulas
• Data Analysis: SQL, Python (pandas, numpy), Tableau, Power BI
• Financial Systems: SAP, Oracle Hyperion, Adaptive Insights, NetSuite
• Analysis: DCF, LBO, M&A, comparable company analysis, sensitivity analysis

PROFESSIONAL EXPERIENCE

Senior Financial Analyst | Global Finance Corp. | Jan 2021 - Present
• Lead FP&A function supporting $500M revenue business unit with 15+ locations
• Build and maintain 3-statement financial models used for strategic planning and investor relations
• Develop monthly management reports and board presentations for C-suite executives
• Partner with business units to create annual budgets ($100M+ total) and quarterly forecasts
• Implemented rolling forecast process improving accuracy by 25% and reducing variance
• Identified and implemented cost optimization initiatives saving $3M annually

Financial Analyst | Investment Partners LLC | Jun 2018 - Dec 2020
• Conducted due diligence on 20+ potential investments totaling $200M+ in deal value
• Built valuation models (DCF, comparable analysis) supporting investment committee decisions
• Monitored portfolio company performance and prepared quarterly investor reports
• Created automated reporting dashboards reducing manual work by 20 hours monthly

EDUCATION
B.S. Finance | University of Pennsylvania - Wharton School | 2018
GPA: 3.8/4.0 | Dean's List | Finance Club President`}</pre>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3>Should I include Excel skills on my financial analyst resume?</h3>
            <p>
              Absolutely. Excel is the primary tool for financial analysts. Be specific about your 
              proficiency: VBA/macros, pivot tables, Power Query, financial functions, and modeling 
              capabilities. Consider including an "Advanced Excel" section if it's a core strength.
            </p>
          </div>
          
          <div>
            <h3>How important is the CFA for financial analyst roles?</h3>
            <p>
              The CFA is highly valued, especially for investment analysis and corporate finance roles. 
              If you have it, feature it prominently. If you're a candidate, note your progress. 
              For FP&A roles, an MBA or FMVA may be equally valuable.
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
