import { ArticleLayout } from '@/components/marketing';
import { TemplateShowcase } from '@/components/marketing/TemplateShowcase';
import { Users, TrendingUp, Target, Award } from 'lucide-react';

export const metadata = {
  title: 'Sales Manager Resume Template | ATS-Friendly Format',
  description: 'Create a winning sales manager resume with our ATS-friendly template. Highlight your revenue achievements, team leadership, and strategic sales initiatives.',
};

const toc = [
  { id: 'overview', title: 'Template Overview' },
  { id: 'key-sections', title: 'Key Sections' },
  { id: 'tips', title: 'Writing Tips for Sales Managers' },
  { id: 'keywords', title: 'Essential Keywords' },
  { id: 'example', title: 'Resume Example' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function SalesManagerTemplate() {
  return (
    <ArticleLayout
      title="Sales Manager Resume Template"
      description="Create a winning sales manager resume with our ATS-friendly template. Highlight your revenue achievements, team leadership, and strategic sales initiatives."
      keywords={['sales manager resume', 'sales resume template', 'account executive resume', 'business development resume']}
      heroTitle="Sales Manager Resume Template"
      heroSubtitle="Close more career opportunities with a results-driven resume"
      heroIcon={<TrendingUp className="h-10 w-10 text-white" />}
      heroGradient="green"
      toc={toc}
      publishDate="2025-01-15"
      readTime="7 min read"
      authorName="Marcus Thompson"
      authorTitle="Sales Recruitment Director"
    >
      <section id="overview">
        <p className="lead text-xl text-gray-600 mb-6">
          Sales managers are judged by their numbers. Your resume must showcase your ability to 
          drive revenue, lead high-performing teams, and execute strategic sales initiatives. 
          Our template helps you present your achievements with the metrics that matter most.
        </p>
        
        <div className="my-8">
          <TemplateShowcase role="Sales Manager" accentColor="bg-green-600" />
        </div>
      </section>

      <section id="key-sections">
        <h2>Essential Resume Sections for Sales Managers</h2>
        
        <div className="space-y-6"
        >
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="flex items-center gap-2">
              <Target className="h-5 w-5 text-green-600" />
              Revenue Achievements
            </h3>
            <p>
              Lead with your most impressive numbers: quota attainment percentage, revenue generated, 
              team growth, and deal sizes. Sales is a numbers game—make yours impossible to ignore.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              Team Leadership
            </h3>
            <p>
              Highlight your experience building and managing sales teams. Include team sizes, 
              hiring achievements, training programs developed, and how you've improved team performance.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h3 className="flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-600" />
              Awards &amp; Recognition
            </h3>
            <p>
              Sales awards matter. Include President's Club, top performer recognitions, and any 
              industry accolades. These validate your achievements and competitive drive.
            </p>
          </div>
        </div>
      </section>

      <section id="tips">
        <h2>Expert Writing Tips for Sales Managers</h2>
        
        <div className="bg-green-50 p-6 rounded-lg"
        >
          <h3>Lead with Numbers</h3>
          <ul className="mt-4"
          >
            <li>"Exceeded annual quota by 145%, generating $5M in new revenue"</li>
            <li>"Grew team from 5 to 15 reps while improving average quota attainment to 120%"</li>
            <li>"Closed 50+ enterprise deals with average ACV of $250K"</li>
            <li>"Reduced sales cycle by 30% through new qualification framework"</li>
          </ul>
        </div>
      </section>

      <section id="keywords"
      >
        <h2>Essential Keywords for Sales Manager Resumes</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4"
        >
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Sales Skills</h4>
            <div className="flex flex-wrap gap-2"
            >
              {['B2B Sales', 'Enterprise Sales', 'Account Management', 'Pipeline Management', 'Forecasting', 'Negotiation'].map(k => (
                <span key={k} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                >{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2"
            >Leadership</h4>
            <div className="flex flex-wrap gap-2"
            >
              {['Team Building', 'Sales Training', 'Performance Management', 'Recruiting', 'Coaching', 'Territory Planning'].map(k => (
                <span key={k} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2"
            >Tools</h4>
            <div className="flex flex-wrap gap-2"
            >
              {['Salesforce', 'HubSpot', 'Outreach', 'LinkedIn Sales Navigator', 'Salesloft', 'Gong'].map(k => (
                <span key={k} className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm"
                >{k}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="example"
      >
        <h2>Sales Manager Resume Example</h2>
        
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto"
        >
          <pre>{`ROBERT ANDERSON
Sales Manager | Chicago, IL | robert.a@email.com | linkedin.com/in/roberta

PROFESSIONAL SUMMARY
Top-performing Sales Manager with 8+ years driving revenue growth in B2B SaaS. Consistently 
exceed targets with 130%+ quota attainment. Expert in building high-performing teams, 
sales process optimization, and enterprise deal negotiation. Generated $25M+ in career revenue.

KEY ACHIEVEMENTS
• Exceeded quota 6 consecutive years (average 140% attainment)
• Built team from 3 to 12 reps with 85% retention rate
• Closed 100+ enterprise deals ($50K-$500K ACV)
• President's Club recipient 2019, 2020, 2021, 2022

PROFESSIONAL EXPERIENCE

Sales Manager | CloudTech Solutions | Jan 2020 - Present
• Manage team of 10 account executives across enterprise and mid-market segments
• Drive $15M annual revenue target; team consistently achieves 125%+ of quota
• Implemented new sales methodology increasing win rates by 25%
• Recruited and onboarded 7 top-performing reps; reduced ramp time by 40%
• Closed personally: 15 enterprise deals worth $3.5M in 2023
• Established key account program generating $5M in expansion revenue

Senior Account Executive | GrowthStartup | Mar 2017 - Dec 2019
• Exceeded $2M annual quota by average 150% over 3 years
• Closed 40+ new logos including 3 Fortune 500 companies
• Maintained 95% customer retention rate through proactive account management
• Top performer award 2018, 2019

EDUCATION
B.S. Business Administration | University of Illinois | 2016

CERTIFICATIONS
• Sandler Sales Training Certified
• Salesforce Certified Administrator`}</pre>
        </div>
      </section>

      <section id="faq"
      >
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6"
        >
          <div>
            <h3>How do I show sales achievements without revealing confidential numbers?</h3>
            <p>
              Use percentages and ranges instead of exact figures. "Increased territory revenue by 45%" 
              or "Closed deals in $100K-$500K range." You can also mention rankings: "Top 5% of 
              200-person sales organization."
            </p>
          </div>
          
          <div>
            <h3>Should I include sales awards on my resume?</h3>
            <p>
              Absolutely! Sales awards demonstrate proven performance. Include President's Club, 
              top performer recognitions, and any industry-specific accolades. These provide 
              third-party validation of your abilities.
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
