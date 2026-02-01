import { ArticleLayout } from '@/components/marketing';
import { TemplateShowcase } from '@/components/marketing/TemplateShowcase';
import { Users, Heart, FileCheck, Shield } from 'lucide-react';

export const metadata = {
  title: 'HR Manager Resume Template | ATS-Friendly Format',
  description: 'Create a professional HR manager resume with our ATS-friendly template. Showcase your people management, recruitment expertise, and HR strategy skills.',
};

const toc = [
  { id: 'overview', title: 'Template Overview' },
  { id: 'key-sections', title: 'Key Sections' },
  { id: 'tips', title: 'Writing Tips for HR Managers' },
  { id: 'keywords', title: 'Essential Keywords' },
  { id: 'example', title: 'Resume Example' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function HRManagerTemplate() {
  return (
    <ArticleLayout
      title="HR Manager Resume Template"
      description="Create a professional HR manager resume with our ATS-friendly template. Showcase your people management, recruitment expertise, and HR strategy skills."
      keywords={['HR manager resume', 'human resources resume', 'recruiter resume', 'people operations resume']}
      heroTitle="HR Manager Resume Template"
      heroSubtitle="Build a resume that attracts top employers"
      heroIcon={<Users className="h-10 w-10 text-white" />}
      heroGradient="purple"
      toc={toc}
      publishDate="2025-01-15"
      readTime="7 min read"
      authorName="Rachel Green"
      authorTitle="HR Executive Recruiter"
    >
      <section id="overview">
        <p className="lead text-xl text-gray-600 mb-6">
          HR managers are the backbone of organizational success, handling everything from talent 
          acquisition to employee relations. Your resume must demonstrate your expertise in people 
          management, policy development, and creating positive workplace cultures.
        </p>
        
        <div className="my-8">
          <TemplateShowcase role="HR Manager" accentColor="bg-purple-600" />
        </div>
      </section>

      <section id="key-sections">
        <h2>Essential Resume Sections for HR Managers</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-purple-600" />
              Employee Relations &amp; Culture
            </h3>
            <p>
              Highlight your experience building positive workplace cultures, handling employee relations 
              issues, and implementing engagement initiatives that improve retention and satisfaction.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="flex items-center gap-2">
              <FileCheck className="h-5 w-5 text-blue-600" />
              Talent Acquisition
            </h3>
            <p>
              Showcase your recruitment expertise: sourcing strategies, interview processes, and 
              hiring metrics. Include time-to-fill improvements and quality of hire achievements.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              Compliance &amp; Policy
            </h3>
            <p>
              Demonstrate your knowledge of employment law, HR policies, and compliance requirements. 
              Include experience with policy development and training programs.
            </p>
          </div>
        </div>
      </section>

      <section id="tips">
        <h2>Expert Writing Tips for HR Managers</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3>Quantify People Impact</h3>
            <ul>
              <li>"Reduced turnover by 35% through engagement initiatives"</li>
              <li>"Hired 100+ employees with 90% retention after 2 years"</li>
              <li>"Improved time-to-fill from 45 to 25 days"</li>
              <li>"Managed HR operations for 500+ employee organization"</li>
            </ul>
          </div>
          
          <div>
            <h3>Show Strategic Thinking</h3>
            <ul>
              <li>Align HR initiatives with business objectives</li>
              <li>Mention diversity and inclusion programs</li>
              <li>Highlight talent development and succession planning</li>
              <li>Include change management experience</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="keywords">
        <h2>Essential Keywords for HR Manager Resumes</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">HR Functions</h4>
            <div className="flex flex-wrap gap-2">
              {['Talent Acquisition', 'Employee Relations', 'Performance Management', 'Compensation', 'Benefits', 'Onboarding'].map(k => (
                <span key={k} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {['SHRM-CP', 'PHR', 'HRIS', 'ATS', 'Succession Planning', 'Diversity & Inclusion'].map(k => (
                <span key={k} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Systems</h4>
            <div className="flex flex-wrap gap-2">
              {['Workday', 'BambooHR', 'ADP', 'Greenhouse', 'Lever', 'LinkedIn Recruiter'].map(k => (
                <span key={k} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="example">
        <h2>HR Manager Resume Example</h2>
        
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
          <pre>{`MICHELLE DAVIS, SHRM-CP
HR Manager | Austin, TX | michelle.d@email.com | linkedin.com/in/michelled

PROFESSIONAL SUMMARY
Strategic HR Manager with 6+ years driving people operations for high-growth technology companies. 
Expert in talent acquisition, employee engagement, and HR program development. Proven track record 
of reducing turnover by 40%, scaling teams from 50 to 200 employees, and implementing HR systems 
that support business growth.

CERTIFICATIONS
• SHRM-Certified Professional (SHRM-CP)
• Professional in Human Resources (PHR)

CORE COMPETENCIES
• Talent Management: Full-cycle recruiting, employer branding, onboarding, retention strategies
• Employee Relations: Conflict resolution, performance management, investigations, coaching
• HR Operations: Policy development, compliance, benefits administration, HRIS implementation
• Strategic HR: Workforce planning, organizational development, DEI initiatives, culture building

PROFESSIONAL EXPERIENCE

HR Manager | TechScale Inc. | Mar 2020 - Present
• Lead HR function for 200-employee SaaS company through rapid growth phase
• Reduced voluntary turnover from 28% to 12% through engagement and development programs
• Built recruiting function from scratch, hiring 75 employees in 18 months
• Implemented performance management system adopted by 95% of managers
• Designed and launched comprehensive onboarding program improving 90-day retention by 40%
• Partner with executive team on strategic workforce planning and organizational design
• Manage HR budget of $2M and oversee benefits administration for all employees

HR Generalist | GrowthStartup | Jun 2017 - Feb 2020
• Supported 100-employee organization as sole HR team member
• Managed full-cycle recruitment for technical and non-technical roles
• Administered benefits programs and ensured compliance with employment regulations
• Resolved employee relations issues and conducted workplace investigations
• Implemented HRIS (BambooHR) streamlining processes and improving data accuracy

EDUCATION
B.S. Human Resources Management | Texas A&M University | 2017`}</pre>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3>Should I include SHRM or PHR certification on my resume?</h3>
            <p>
              Yes, absolutely. These certifications are highly valued in HR and demonstrate your 
              professional competence. Include them in your header and certifications section. 
              They often serve as keywords for ATS systems.
            </p>
          </div>
          
          <div>
            <h3>How do I show confidentiality on an HR resume?</h3>
            <p>
              Demonstrate your professionalism by being specific about processes without revealing 
              sensitive information. Focus on your approach and outcomes: "Conducted thorough 
              investigations following established protocols" rather than specific case details.
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
