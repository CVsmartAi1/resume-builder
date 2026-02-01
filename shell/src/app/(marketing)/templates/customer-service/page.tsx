import { ArticleLayout } from '@/components/marketing';
import { TemplateShowcase } from '@/components/marketing/TemplateShowcase';
import { Headset, MessageCircle, ThumbsUp, Phone } from 'lucide-react';

export const metadata = {
  title: 'Customer Service Resume Template | ATS-Friendly Format',
  description: 'Create a professional customer service resume with our ATS-friendly template. Showcase your communication skills, problem-solving abilities, and customer satisfaction record.',
};

const toc = [
  { id: 'overview', title: 'Template Overview' },
  { id: 'key-sections', title: 'Key Sections' },
  { id: 'tips', title: 'Writing Tips for Customer Service' },
  { id: 'keywords', title: 'Essential Keywords' },
  { id: 'example', title: 'Resume Example' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function CustomerServiceTemplate() {
  return (
    <ArticleLayout
      title="Customer Service Resume Template"
      description="Create a professional customer service resume with our ATS-friendly template. Showcase your communication skills, problem-solving abilities, and customer satisfaction record."
      keywords={['customer service resume', 'support representative resume', 'call center resume', 'customer care resume']}
      heroTitle="Customer Service Resume Template"
      heroSubtitle="Deliver exceptional career opportunities"
      heroIcon={<Headset className="h-10 w-10 text-white" />}
      heroGradient="teal"
      toc={toc}
      publishDate="2025-01-15"
      readTime="6 min read"
      authorName="Carlos Mendez"
      authorTitle="Customer Success Recruiter"
    >
      <section id="overview">
        <p className="lead text-xl text-gray-600 mb-6">
          Customer service representatives are the front line of business success. Your resume must 
          demonstrate your communication skills, problem-solving abilities, patience under pressure, 
          and track record of delivering exceptional customer experiences.
        </p>
        
        <div className="my-8">
          <TemplateShowcase role="Customer Service" accentColor="bg-teal-600" />
        </div>
      </section>

      <section id="key-sections">
        <h2>Essential Resume Sections for Customer Service</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-teal-500">
            <h3 className="flex items-center gap-2">
              <ThumbsUp className="h-5 w-5 text-teal-600" />
              Customer Satisfaction Metrics
            </h3>
            <p>
              Highlight your CSAT scores, NPS ratings, customer retention contributions, and any 
              awards or recognition for service excellence. Numbers prove your impact on customer experience.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-blue-600" />
              Communication Skills
            </h3>
            <p>
              Emphasize your ability to communicate effectively across channels: phone, email, chat, 
              and social media. Include any multilingual abilities or specialized communication training.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-green-600" />
              Technical Proficiency
            </h3>
            <p>
              List CRM systems, ticketing platforms, and support tools you're proficient with. 
              Technical skills are increasingly important in modern customer service roles.
            </p>
          </div>
        </div>
      </section>

      <section id="tips">
        <h2>Expert Writing Tips for Customer Service</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3>Quantify Your Service Impact</h3>
            <ul>
              <li>"Maintained 95% customer satisfaction score over 12 months"</li>
              <li>"Resolved 50+ tickets daily with 98% first-contact resolution rate"</li>
              <li>"Reduced average handle time by 20% while maintaining quality"</li>
              <li>"Recognized as Top Performer for 6 consecutive months"</li>
            </ul>
          </div>
          
          <div>
            <h3>Show Problem-Solving Skills</h3>
            <ul>
              <li>De-escalation of difficult customer situations</li>
              <li>Complex issue resolution and troubleshooting</li>
              <li>Process improvement suggestions implemented</li>
              <li>Training or mentoring of new team members</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="keywords">
        <h2>Essential Keywords for Customer Service Resumes</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {['Customer Satisfaction', 'Problem Solving', 'Conflict Resolution', 'Active Listening', 'Empathy', 'Multitasking'].map(k => (
                <span key={k} className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Channels</h4>
            <div className="flex flex-wrap gap-2">
              {['Phone Support', 'Email Support', 'Live Chat', 'Social Media', 'In-Person', 'Technical Support'].map(k => (
                <span key={k} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Tools</h4>
            <div className="flex flex-wrap gap-2">
              {['Salesforce', 'Zendesk', 'Freshdesk', 'Intercom', 'HubSpot', 'LiveChat'].map(k => (
                <span key={k} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="example">
        <h2>Customer Service Resume Example</h2>
        
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
          <pre>{`MARCUS JOHNSON
Customer Service Representative | Seattle, WA | marcus.j@email.com | linkedin.com/in/marcusj

PROFESSIONAL SUMMARY
Dedicated Customer Service Representative with 4+ years of experience delivering exceptional 
support across phone, email, and chat channels. Known for empathetic communication, efficient 
problem-solving, and consistently exceeding performance targets. Maintained 96% customer 
satisfaction rating while handling 60+ interactions daily.

CORE COMPETENCIES
• Customer Support: Issue resolution, de-escalation, account management, order processing
• Communication: Active listening, clear explanations, professional email/phone etiquette
• Technical: CRM systems, ticketing platforms, product troubleshooting, knowledge bases
• Languages: English (native), Spanish (fluent)

PROFESSIONAL EXPERIENCE

Senior Customer Service Representative | TechSolutions Inc. | Mar 2021 - Present
• Handle 60+ customer interactions daily via phone, email, and chat with 96% satisfaction rating
• Resolve complex technical issues, achieving 92% first-contact resolution rate
• Mentor 5 new hires, reducing onboarding time by 30%
• Identified process improvement opportunity saving 2 hours daily in ticket routing
• Recognized as "Employee of the Month" 4 times for exceptional service
• Maintain deep product knowledge across 50+ software offerings

Customer Service Representative | RetailPlus Corp. | Jun 2019 - Feb 2021
• Provided phone and email support for e-commerce platform serving 1M+ customers
• Processed 100+ orders and returns daily with 99.5% accuracy
• Achieved 94% customer satisfaction score, exceeding team average by 8%
• Resolved billing disputes and payment issues, recovering $50K in revenue
• Assisted with training materials development for new product launches

EDUCATION
B.A. Communication | University of Washington | 2019

CERTIFICATIONS
• Customer Service Excellence Certification - LinkedIn Learning
• De-escalation Techniques Training`}</pre>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3>How do I show remote customer service experience?</h3>
            <p>
              Highlight your self-motivation, time management, and technology proficiency. Mention 
              specific remote tools used, your home office setup, and any achievements that demonstrate 
              your ability to work independently while maintaining quality.
            </p>
          </div>
          
          <div>
            <h3>Should I include metrics on my customer service resume?</h3>
            <p>
              Absolutely! Include CSAT scores, NPS ratings, average handle time, first-contact resolution 
              rates, ticket volume handled, and any recognition or awards. Metrics demonstrate your 
              effectiveness and are highly valued by employers.
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
