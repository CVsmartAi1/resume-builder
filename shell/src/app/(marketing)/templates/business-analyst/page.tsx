import { ArticleLayout } from '@/components/marketing';
import { TemplateShowcase } from '@/components/marketing/TemplateShowcase';
import { Search, Lightbulb, FileBarChart, Target } from 'lucide-react';

export const metadata = {
  title: 'Business Analyst Resume Template | ATS-Friendly Format',
  description: 'Create a professional business analyst resume with our ATS-friendly template. Showcase your analytical skills, requirements gathering, and process improvement expertise.',
};

const toc = [
  { id: 'overview', title: 'Template Overview' },
  { id: 'key-sections', title: 'Key Sections' },
  { id: 'tips', title: 'Writing Tips for Business Analysts' },
  { id: 'keywords', title: 'Essential Keywords' },
  { id: 'example', title: 'Resume Example' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function BusinessAnalystTemplate() {
  return (
    <ArticleLayout
      title="Business Analyst Resume Template"
      description="Create a professional business analyst resume with our ATS-friendly template. Showcase your analytical skills, requirements gathering, and process improvement expertise."
      keywords={['business analyst resume', 'BA resume template', 'systems analyst resume', 'requirements analyst resume']}
      heroTitle="Business Analyst Resume Template"
      heroSubtitle="Analyze your way to career growth"
      heroIcon={<Search className="h-10 w-10 text-white" />}
      heroGradient="blue"
      toc={toc}
      publishDate="2025-01-15"
      readTime="7 min read"
      authorName="Rebecca Taylor"
      authorTitle="Technology Recruiter"
    >
      <section id="overview">
        <p className="lead text-xl text-gray-600 mb-6">
          Business analysts bridge the gap between business needs and technical solutions. Your resume 
          must demonstrate your analytical thinking, requirements elicitation skills, process improvement 
          experience, and ability to translate complex business problems into actionable solutions.
        </p>
        
        <div className="my-8">
          <TemplateShowcase role="Business Analyst" accentColor="bg-blue-600" />
        </div>
      </section>

      <section id="key-sections">
        <h2>Essential Resume Sections for Business Analysts</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="flex items-center gap-2">
              <FileBarChart className="h-5 w-5 text-blue-600" />
              Analytical Achievements
            </h3>
            <p>
              Quantify your business impact: cost savings, efficiency gains, revenue increases, and 
              process improvements. Business analysts are valued for the measurable value they deliver.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-green-600" />
              Requirements &amp; Process
            </h3>
            <p>
              Highlight your experience with requirements gathering, process mapping, use case 
              development, and workflow analysis. Include specific methodologies and tools used.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="flex items-center gap-2">
              <Target className="h-5 w-5 text-purple-600" />
              Stakeholder Management
            </h3>
            <p>
              Demonstrate your ability to work with diverse stakeholders: executives, IT teams, 
              end users, and external vendors. Show your communication and facilitation skills.
            </p>
          </div>
        </div>
      </section>

      <section id="tips">
        <h2>Expert Writing Tips for Business Analysts</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3>Quantify Business Impact</h3>
            <ul>
              <li>"Identified process improvements saving $500K annually"</li>
              <li>"Reduced report generation time from 5 days to 2 hours"</li>
              <li>"Eliminated 30% of redundant processes through analysis"</li>
              <li>"Delivered solution increasing revenue by $2M in first year"</li>
            </ul>
          </div>
          
          <div>
            <h3>Show Technical Skills</h3>
            <ul>
              <li>SQL and data analysis capabilities</li>
              <li>Process modeling tools (Visio, Lucidchart)</li>
              <li>Requirements management tools (Jira, Confluence)</li>
              <li>Business intelligence tools (Tableau, Power BI)</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="keywords">
        <h2>Essential Keywords for Business Analyst Resumes</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">BA Skills</h4>
            <div className="flex flex-wrap gap-2">
              {['Requirements Gathering', 'Process Mapping', 'Use Cases', 'User Stories', 'Data Analysis', 'UML'].map(k => (
                <span key={k} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Methodologies</h4>
            <div className="flex flex-wrap gap-2">
              {['Agile', 'Scrum', 'Waterfall', 'Six Sigma', 'Lean', 'BPMN'].map(k => (
                <span key={k} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Tools</h4>
            <div className="flex flex-wrap gap-2">
              {['Jira', 'Confluence', 'SQL', 'Excel', 'Tableau', 'Visio', 'Salesforce', 'SAP'].map(k => (
                <span key={k} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="example">
        <h2>Business Analyst Resume Example</h2>
        
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
          <pre>{`JAMES WILSON, CBAP
Senior Business Analyst | Atlanta, GA | james.w@email.com | linkedin.com/in/jamesw

CERTIFICATIONS
• Certified Business Analysis Professional (CBAP) - IIBA
• Certified Scrum Product Owner (CSPO)

PROFESSIONAL SUMMARY
Results-driven Business Analyst with 6+ years bridging business needs and technology solutions. 
Expert in requirements elicitation, process optimization, and stakeholder management. Proven track 
record delivering projects that save $1M+ annually and improve operational efficiency by 30%+.

CORE COMPETENCIES
• Analysis: Requirements gathering, process mapping, gap analysis, data modeling, feasibility studies
• Methodologies: Agile/Scrum, Waterfall, Lean Six Sigma, BPMN
• Tools: Jira, Confluence, SQL, Visio, Tableau, Salesforce, SAP
• Soft Skills: Stakeholder management, facilitation, presentation, conflict resolution

PROFESSIONAL EXPERIENCE

Senior Business Analyst | Enterprise Solutions Inc. | Jan 2021 - Present
• Lead business analysis for digital transformation initiative impacting 5,000+ users
• Gather and document requirements for 15+ enterprise applications using Agile methodologies
• Facilitate workshops with 20+ stakeholders to define business processes and system requirements
• Analyze data using SQL to identify trends and support decision-making
• Deliver process improvements reducing order processing time by 45%
• Create user stories, acceptance criteria, and process maps for development team
• Train 200+ end users on new systems and processes

Business Analyst | TechCorp | Jun 2018 - Dec 2020
• Documented as-is and to-be processes for finance system implementation
• Conducted 50+ user interviews and requirements sessions
• Identified automation opportunities saving $300K annually in manual processing
• Created business requirements documents (BRDs) and functional specifications
• Supported UAT and managed defect resolution process
• Received "Rising Star" award for exceptional analysis work

Junior Business Analyst | Consulting Partners | Aug 2016 - May 2018
• Supported senior BAs on 10+ client projects across retail and healthcare
• Created process flow diagrams and wireframes using Visio and Balsamiq
• Conducted market research and competitive analysis
• Developed training materials and user guides

EDUCATION
B.S. Information Systems | Georgia State University | 2016
GPA: 3.7/4.0`}</pre>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3>Should I get CBAP certification as a business analyst?</h3>
            <p>
              The CBAP (Certified Business Analysis Professional) is highly valued, especially for 
              senior roles. It demonstrates mastery of BA principles and is recognized globally. 
              For entry-level positions, focus on building experience first, then pursue certification.
            </p>
          </div>
          
          <div>
            <h3>How technical should a business analyst resume be?</h3>
            <p>
              Include technical skills relevant to your target roles. SQL is increasingly expected. 
              List tools and systems you know, but focus primarily on business outcomes and your 
              role in achieving them. Technical skills support your analysis, not replace it.
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
