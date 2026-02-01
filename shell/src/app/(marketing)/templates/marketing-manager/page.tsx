import { ArticleLayout } from '@/components/marketing';
import { TemplateShowcase } from '@/components/marketing/TemplateShowcase';
import { Megaphone, TrendingUp, Target, Users } from 'lucide-react';

export const metadata = {
  title: 'Marketing Manager Resume Template | ATS-Friendly Format',
  description: 'Create a compelling marketing manager resume with our ATS-friendly template. Showcase your campaign results, leadership skills, and strategic thinking.',
};

const toc = [
  { id: 'overview', title: 'Template Overview' },
  { id: 'key-sections', title: 'Key Sections' },
  { id: 'tips', title: 'Writing Tips for Marketing Managers' },
  { id: 'keywords', title: 'Essential Keywords' },
  { id: 'example', title: 'Resume Example' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function MarketingManagerTemplate() {
  return (
    <ArticleLayout
      title="Marketing Manager Resume Template"
      description="Create a compelling marketing manager resume with our ATS-friendly template. Showcase your campaign results, leadership skills, and strategic thinking."
      keywords={['marketing manager resume', 'marketing resume template', 'digital marketing resume', 'brand manager resume']}
      heroTitle="Marketing Manager Resume Template"
      heroSubtitle="Drive your career forward with a results-focused resume"
      heroIcon={<Megaphone className="h-10 w-10 text-white" />}
      heroGradient="pink"
      toc={toc}
      publishDate="2025-01-15"
      readTime="7 min read"
      authorName="Emily Roberts"
      authorTitle="Marketing Executive Recruiter"
    >
      <section id="overview">
        <p className="lead text-xl text-gray-600 mb-6">
          Marketing managers need to demonstrate both creative vision and analytical prowess. 
          Our template helps you showcase campaign successes, team leadership, budget management, 
          and the ability to drive measurable business growth.
        </p>
        
        <div className="my-8">
          <TemplateShowcase role="Marketing Manager" accentColor="bg-pink-600" />
        </div>
      </section>

      <section id="key-sections">
        <h2>Essential Resume Sections for Marketing Managers</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-pink-500">
            <h3 className="flex items-center gap-2">
              <Target className="h-5 w-5 text-pink-600" />
              Results-Driven Summary
            </h3>
            <p>
              Open with a powerful summary highlighting years of experience, key achievements, 
              and expertise areas. Include specific metrics like "Increased ROI by 150%" or 
              "Managed $2M annual marketing budget."
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-purple-600" />
              Campaign Highlights
            </h3>
            <p>
              Detail your most successful campaigns with specific metrics: conversion rates, 
              lead generation numbers, revenue growth, and brand awareness improvements. 
              Use percentages and dollar amounts whenever possible.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              Leadership &amp; Team Management
            </h3>
            <p>
              Marketing managers lead teams. Highlight your experience managing direct reports, 
              cross-functional collaboration, and mentoring junior marketers. Include team sizes 
              and leadership achievements.
            </p>
          </div>
        </div>
      </section>

      <section id="tips">
        <h2>Expert Writing Tips for Marketing Managers</h2>
        
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
          <h3>Focus on Revenue Impact</h3>
          <ul className="mt-4">
            <li>"Generated $5M in pipeline through integrated campaign"</li>
            <li>"Reduced CAC by 35% while increasing customer LTV by 50%"</li>
            <li>"Achieved 280% ROI on paid media spend"</li>
            <li>"Grew email list by 150K subscribers with 45% open rate"</li>
          </ul>
        </div>
      </section>

      <section id="keywords">
        <h2>Essential Keywords for Marketing Manager Resumes</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Digital Marketing</h4>
            <div className="flex flex-wrap gap-2">
              {['SEO', 'SEM', 'PPC', 'Google Ads', 'Social Media', 'Content Marketing', 'Email Marketing', 'Marketing Automation'].map(k => (
                <span key={k} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Analytics</h4>
            <div className="flex flex-wrap gap-2">
              {['Google Analytics', 'CRM', 'A/B Testing', 'Conversion Optimization', 'KPI Tracking', 'ROI Analysis', 'Market Research'].map(k => (
                <span key={k} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Leadership</h4>
            <div className="flex flex-wrap gap-2">
              {['Team Management', 'Strategic Planning', 'Budget Management', 'Cross-functional Leadership', 'Vendor Management', 'Stakeholder Communication'].map(k => (
                <span key={k} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="example">
        <h2>Marketing Manager Resume Example</h2>
        
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
          <pre>{`JESSICA WILLIAMS
Marketing Manager | Chicago, IL | jessica.w@email.com | linkedin.com/in/jessicaw

PROFESSIONAL SUMMARY
Dynamic Marketing Manager with 6+ years driving growth for B2B SaaS companies. Expert in 
digital marketing strategy, demand generation, and brand development. Consistently exceeded 
revenue targets by 125%+ while managing $3M annual budget and leading teams of 8+ marketers.

CORE COMPETENCIES
• Digital Strategy: SEO/SEM, Content Marketing, Social Media, Email Marketing, Marketing Automation
• Analytics: Google Analytics, HubSpot, Salesforce, Tableau, A/B Testing, Attribution Modeling
• Leadership: Team Building, Cross-functional Collaboration, Agency Management, Budget Oversight
• Campaign Management: Integrated Campaigns, Product Launches, Event Marketing, Account-Based Marketing

PROFESSIONAL EXPERIENCE

Senior Marketing Manager | TechSolutions Inc. | Jan 2021 - Present
• Manage $3M marketing budget and lead team of 8 across demand gen, content, and product marketing
• Drove 180% increase in qualified leads through multi-channel campaigns generating $12M pipeline
• Launched account-based marketing program targeting Fortune 500, closing 15 enterprise deals worth $8M
• Optimized marketing automation workflows improving lead-to-customer conversion by 40%
• Reduced customer acquisition cost by 30% while improving customer lifetime value by 55%

Marketing Manager | GrowthStartup | Mar 2018 - Dec 2020
• Built marketing function from scratch, growing team from 0 to 5 employees
• Developed content strategy that increased organic traffic by 300% and generated 50K+ leads
• Managed product launch generating $2M in first-quarter revenue, 150% above target
• Implemented marketing attribution system enabling data-driven budget allocation decisions

EDUCATION
MBA, Marketing | Northwestern University - Kellogg School of Management | 2018
B.A. Communications | University of Michigan | 2015`}</pre>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3>How do I show ROI on my marketing resume?</h3>
            <p>
              Use specific numbers: revenue generated, pipeline created, cost savings, efficiency gains. 
              Frame achievements as business impact. "Increased leads by 200%" is good; 
              "Generated $5M in pipeline through campaign costing $200K (25x ROI)" is better.
            </p>
          </div>
          
          <div>
            <h3>Should I include specific tools and platforms?</h3>
            <p>
              Yes! Marketing technology expertise is highly valued. Include your proficiency with 
              marketing automation (HubSpot, Marketo, Pardot), analytics (Google Analytics, Tableau), 
              advertising platforms (Google Ads, Facebook Ads Manager), and CRM systems (Salesforce).
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
