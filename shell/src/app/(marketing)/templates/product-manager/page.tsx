import { ArticleLayout } from '@/components/marketing';
import { TemplateShowcase } from '@/components/marketing/TemplateShowcase';
import { Boxes, Lightbulb, Users, Rocket } from 'lucide-react';

export const metadata = {
  title: 'Product Manager Resume Template | ATS-Friendly Format',
  description: 'Create a standout product manager resume with our ATS-friendly template. Highlight your product launches, user research, and cross-functional leadership.',
};

const toc = [
  { id: 'overview', title: 'Template Overview' },
  { id: 'key-sections', title: 'Key Sections' },
  { id: 'tips', title: 'Writing Tips for Product Managers' },
  { id: 'keywords', title: 'Essential Keywords' },
  { id: 'example', title: 'Resume Example' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function ProductManagerTemplate() {
  return (
    <ArticleLayout
      title="Product Manager Resume Template"
      description="Create a standout product manager resume with our ATS-friendly template. Highlight your product launches, user research, and cross-functional leadership."
      keywords={['product manager resume', 'PM resume template', 'product owner resume', 'technical product manager']}
      heroTitle="Product Manager Resume Template"
      heroSubtitle="Showcase your ability to build products users love"
      heroIcon={<Boxes className="h-10 w-10 text-white" />}
      heroGradient="orange"
      toc={toc}
      publishDate="2025-01-15"
      readTime="8 min read"
      authorName="David Park"
      authorTitle="Product Leadership Recruiter"
    >
      <section id="overview">
        <p className="lead text-xl text-gray-600 mb-6">
          Product managers sit at the intersection of business, technology, and user experience. 
          Your resume needs to demonstrate your ability to lead cross-functional teams, define 
          product strategy, and deliver measurable business outcomes through successful product launches.
        </p>
        
        <div className="my-8">
          <TemplateShowcase role="Product Manager" accentColor="bg-orange-600" />
        </div>
      </section>

      <section id="key-sections">
        <h2>Essential Resume Sections for Product Managers</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-orange-600" />
              Product Impact Summary
            </h3>
            <p>
              Lead with quantifiable product achievements: user growth, revenue impact, feature adoption rates, 
              and successful launches. Product managers are measured by outcomes, not activities.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              Cross-Functional Leadership
            </h3>
            <p>
              Highlight your experience working with engineering, design, marketing, and sales teams. 
              Include team sizes, stakeholders managed, and how you influenced without authority.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-green-600" />
              Product Strategy
            </h3>
            <p>
              Showcase your strategic thinking: market research, competitive analysis, roadmap development, 
              and prioritization frameworks (RICE, MoSCoW, Kano) you've used.
            </p>
          </div>
        </div>
      </section>

      <section id="tips">
        <h2>Expert Writing Tips for Product Managers</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3>Lead with Metrics</h3>
            <ul>
              <li>"Grew MAU from 100K to 1M within 12 months"</li>
              <li>"Increased conversion rate by 45% through UX improvements"</li>
              <li>"Reduced churn by 30% with retention feature launch"</li>
              <li>"Launched 3 products generating $10M ARR"</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3>Show Your Process</h3>
            <ul>
              <li>Conducted user research with 50+ customers</li>
              <li>Defined PRDs for 15+ features</li>
              <li>Managed product backlog of 200+ items</li>
              <li>Facilitated sprint planning with 12-person engineering team</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="keywords">
        <h2>Essential Keywords for Product Manager Resumes</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Product Skills</h4>
            <div className="flex flex-wrap gap-2">
              {['Product Strategy', 'Roadmapping', 'User Research', 'A/B Testing', 'Agile', 'Scrum', 'Product Discovery', 'Go-to-Market'].map(k => (
                <span key={k} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Tools</h4>
            <div className="flex flex-wrap gap-2">
              {['Jira', 'Confluence', 'Figma', 'Amplitude', 'Mixpanel', 'Productboard', 'Aha!', 'Notion'].map(k => (
                <span key={k} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Metrics</h4>
            <div className="flex flex-wrap gap-2">
              {['KPIs', 'OKRs', 'North Star Metric', 'Cohort Analysis', 'Retention', 'Churn', 'LTV', 'CAC'].map(k => (
                <span key={k} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="example">
        <h2>Product Manager Resume Example</h2>
        
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
          <pre>{`ALEX RIVERA
Senior Product Manager | San Francisco, CA | alex.rivera@email.com | linkedin.com/in/alexr

PROFESSIONAL SUMMARY
Results-driven Product Manager with 7+ years building consumer and B2B SaaS products. 
Track record of 0-to-1 product launches and scaling products to $50M+ ARR. Expert in 
user research, agile development, and data-informed decision making. Managed cross-functional 
teams of 15+ across engineering, design, and data science.

CORE COMPETENCIES
• Product Strategy: Market analysis, competitive positioning, roadmap planning, OKR definition
• Product Development: Agile/Scrum, user stories, PRDs, sprint planning, release management
• User Research: Customer interviews, usability testing, survey design, persona development
• Analytics: SQL, Amplitude, Mixpanel, A/B testing, funnel analysis, cohort retention

PROFESSIONAL EXPERIENCE

Senior Product Manager | CloudTech Solutions | Jan 2020 - Present
• Lead product for company's flagship collaboration tool serving 500K+ users
• Grew ARR from $10M to $50M in 3 years through new feature development and expansion revenue
• Launched mobile app achieving 200K downloads and 4.8★ rating in first 6 months
• Reduced churn by 35% through data-driven retention initiatives and feature improvements
• Managed product roadmap and backlog for team of 12 engineers and 3 designers
• Conducted 100+ customer interviews informing product strategy and prioritization

Product Manager | StartupXYZ | Jun 2017 - Dec 2019
• Owned product for analytics dashboard from concept to launch, acquiring first 10K users
• Defined MVP scope and iterative roadmap, shipping features every 2 weeks
• Improved user activation rate by 60% through onboarding flow optimization
• Collaborated with sales to close first 50 enterprise customers worth $2M ARR

Associate Product Manager | TechGiant Inc. | Aug 2015 - May 2017
• Supported senior PMs on 3 product lines with combined $100M+ annual revenue
• Analyzed user behavior data to identify optimization opportunities
• Coordinated cross-functional teams across 4 global offices

EDUCATION
MBA | Stanford Graduate School of Business | 2015
B.S. Computer Science | UC Berkeley | 2013`}</pre>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3>Should I include technical skills as a product manager?</h3>
            <p>
              Yes, especially SQL and basic data analysis skills. Technical PMs should include more 
              detail—APIs, system architecture, coding languages. Even non-technical PMs benefit from 
              showing they can work effectively with engineering teams.
            </p>
          </div>
          
          <div>
            <h3>How do I show leadership without direct reports?</h3>
            <p>
              Product managers lead through influence. Highlight cross-functional collaboration, 
              stakeholder management, and how you've driven outcomes across teams. Mention specific 
              team sizes you've worked with and how you facilitated decision-making.
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
