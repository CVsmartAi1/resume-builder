import { ArticleLayout } from '@/components/marketing';
import { TemplateShowcase } from '@/components/marketing/TemplateShowcase';
import { Megaphone, TrendingUp, Target, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'Digital Marketer Resume Template | ATS-Friendly Format',
  description: 'Create a professional digital marketer resume with our ATS-friendly template. Showcase your SEO, SEM, social media, and marketing analytics expertise.',
};

const toc = [
  { id: 'overview', title: 'Template Overview' },
  { id: 'key-sections', title: 'Key Sections' },
  { id: 'tips', title: 'Writing Tips for Digital Marketers' },
  { id: 'keywords', title: 'Essential Keywords' },
  { id: 'example', title: 'Resume Example' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function DigitalMarketerTemplate() {
  return (
    <ArticleLayout
      title="Digital Marketer Resume Template"
      description="Create a professional digital marketer resume with our ATS-friendly template. Showcase your SEO, SEM, social media, and marketing analytics expertise."
      keywords={['digital marketer resume', 'SEO resume', 'PPC resume', 'growth marketing resume']}
      heroTitle="Digital Marketer Resume Template"
      heroSubtitle="Drive your career with data-driven marketing"
      heroIcon={<Megaphone className="h-10 w-10 text-white" />}
      heroGradient="pink"
      toc={toc}
      publishDate="2025-01-15"
      readTime="7 min read"
      authorName="Jessica Adams"
      authorTitle="Marketing Recruiter"
    >
      <section id="overview">
        <p className="lead text-xl text-gray-600 mb-6">
          Digital marketers drive growth through online channels. Your resume must demonstrate your 
          expertise across marketing channels, data analysis capabilities, creative thinking, and 
          proven ability to generate measurable ROI through digital campaigns.
        </p>
        
        <div className="my-8">
          <TemplateShowcase role="Digital Marketer" accentColor="bg-pink-600" />
        </div>
      </section>

      <section id="key-sections">
        <h2>Essential Resume Sections for Digital Marketers</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-pink-500">
            <h3 className="flex items-center gap-2">
              <Target className="h-5 w-5 text-pink-600" />
              Channel Expertise
            </h3>
            <p>
              Highlight your experience across digital channels: SEO, SEM/PPC, social media, email marketing, 
              content marketing, and display advertising. Show depth in your primary channels.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              Analytics &amp; ROI
            </h3>
            <p>
              Demonstrate your data fluency: Google Analytics, marketing attribution, A/B testing, conversion 
              optimization, and how you've used data to drive marketing decisions and improve performance.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Campaign Results
            </h3>
            <p>
              Quantify your marketing impact: traffic growth, conversion rate improvements, CPA reductions, 
              revenue generated, and ROI achieved. Digital marketing is measured by results.
            </p>
          </div>
        </div>
      </section>

      <section id="tips">
        <h2>Expert Writing Tips for Digital Marketers</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3>Show Channel Performance</h3>
            <ul>
              <li>"Grew organic traffic by 200% through SEO optimization"</li>
              <li>"Reduced CPA by 40% while scaling PPC spend 3x"</li>
              <li>"Achieved 500% ROAS on Facebook ad campaigns"</li>
              <li>"Grew email list 150% with 45% open rate"</li>
            </ul>
          </div>
          
          <div>
            <h3>Highlight Tools &amp; Platforms</h3>
            <ul>
              <li>Google Ads, Facebook Ads Manager, LinkedIn Ads</li>
              <li>Google Analytics, Tag Manager, Data Studio</li>
              <li>Marketing automation: HubSpot, Marketo, Pardot</li>
              <li>SEO tools: Ahrefs, SEMrush, Moz, Screaming Frog</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="keywords">
        <h2>Essential Keywords for Digital Marketer Resumes</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Channels</h4>
            <div className="flex flex-wrap gap-2">
              {['SEO', 'SEM', 'PPC', 'Social Media', 'Email Marketing', 'Content Marketing'].map(k => (
                <span key={k} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Analytics</h4>
            <div className="flex flex-wrap gap-2">
              {['Google Analytics', 'A/B Testing', 'Conversion Rate Optimization', 'Attribution', 'KPIs', 'ROAS'].map(k => (
                <span key={k} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Tools</h4>
            <div className="flex flex-wrap gap-2">
              {['Google Ads', 'Facebook Ads', 'HubSpot', 'Salesforce', 'Ahrefs', 'SEMrush'].map(k => (
                <span key={k} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="example">
        <h2>Digital Marketer Resume Example</h2>
        
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
          <pre>{`AMANDA RODRIGUEZ
Digital Marketing Manager | Miami, FL | amanda.r@email.com | linkedin.com/in/amandar

PROFESSIONAL SUMMARY
Results-driven Digital Marketer with 5+ years growing brands through SEO, PPC, and social media. 
Expert in data analysis, conversion optimization, and multi-channel campaign management. Proven 
track record of 300%+ ROI on marketing spend and 200%+ organic traffic growth.

CORE COMPETENCIES
• Paid Media: Google Ads, Facebook/Instagram Ads, LinkedIn Ads, Programmatic, Budget Management
• Organic Growth: SEO, Content Strategy, Link Building, Social Media Management
• Analytics: Google Analytics 4, Tag Manager, Data Studio, A/B Testing, Attribution Modeling
• Marketing Automation: HubSpot, Mailchimp, Klaviyo, Pardot

PROFESSIONAL EXPERIENCE

Digital Marketing Manager | E-commerce Brand | Jan 2021 - Present
• Manage $500K annual digital marketing budget across paid search, social, and display
• Grow organic traffic 250% YoY through technical SEO and content marketing initiatives
• Achieve 450% ROAS on Facebook/Instagram ads with $2M+ in attributed revenue
• Implement email automation flows generating $300K in monthly revenue
• Optimize conversion funnel improving site CVR from 2.5% to 4.2%
• Lead team of 3 specialists across paid media, SEO, and email marketing

Digital Marketing Specialist | SaaS Startup | Jun 2018 - Dec 2020
• Launched and scaled Google Ads account from $0 to $100K monthly spend at 300% ROAS
• Grew organic traffic 150% through SEO blog strategy and technical optimizations
• Managed social media accounts growing following from 10K to 100K across channels
• Implemented marketing attribution model improving budget allocation decisions
• Reduced cost per lead by 35% through landing page optimization and A/B testing

Marketing Coordinator | Agency XYZ | Aug 2016 - May 2018
• Executed digital campaigns for 15+ B2B and B2C clients
• Managed social media content calendars and community engagement
• Assisted with SEO audits and content optimization recommendations
• Created monthly performance reports for client presentations

EDUCATION
B.S. Marketing | Florida International University | 2016

CERTIFICATIONS
• Google Ads Certified (Search, Display, Video, Shopping)
• Google Analytics Individual Qualification
• HubSpot Inbound Marketing Certified`}</pre>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3>Should I include Google Ads certifications on my resume?</h3>
            <p>
              Yes! Google Ads and Analytics certifications are valuable credentials that demonstrate 
              platform expertise. Include them in a certifications section and mention relevant ones 
              in your skills. They're often keywords ATS systems look for.
            </p>
          </div>
          
          <div>
            <h3>How do I show T-shaped skills as a digital marketer?</h3>
            <p>
              Show depth in 1-2 channels (your vertical bar) with breadth across others. For example: 
              "Expert in SEO and content marketing (drove 300% organic growth) with strong working 
              knowledge of PPC, email, and social media." This demonstrates both specialization and versatility.
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
