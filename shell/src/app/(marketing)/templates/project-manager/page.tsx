import { ArticleLayout } from '@/components/marketing';
import { TemplateShowcase } from '@/components/marketing/TemplateShowcase';
import { FolderKanban, Calendar, Users, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Project Manager Resume Template | ATS-Friendly Format',
  description: 'Create a professional project manager resume with our ATS-friendly template. Showcase your project delivery record, stakeholder management, and PM expertise.',
};

const toc = [
  { id: 'overview', title: 'Template Overview' },
  { id: 'key-sections', title: 'Key Sections' },
  { id: 'tips', title: 'Writing Tips for Project Managers' },
  { id: 'keywords', title: 'Essential Keywords' },
  { id: 'example', title: 'Resume Example' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function ProjectManagerTemplate() {
  return (
    <ArticleLayout
      title="Project Manager Resume Template"
      description="Create a professional project manager resume with our ATS-friendly template. Showcase your project delivery record, stakeholder management, and PM expertise."
      keywords={['project manager resume', 'PM resume template', 'scrum master resume', 'program manager resume']}
      heroTitle="Project Manager Resume Template"
      heroSubtitle="Deliver your career success with a perfectly structured resume"
      heroIcon={<FolderKanban className="h-10 w-10 text-white" />}
      heroGradient="blue"
      toc={toc}
      publishDate="2025-01-15"
      readTime="7 min read"
      authorName="Jennifer Walsh"
      authorTitle="Project Management Recruiter"
    >
      <section id="overview">
        <p className="lead text-xl text-gray-600 mb-6">
          Project managers are the glue that holds complex initiatives together. Your resume must 
          demonstrate your ability to deliver projects on time and on budget, manage diverse stakeholders, 
          and navigate challenges while keeping teams aligned and motivated.
        </p>
        
        <div className="my-8">
          <TemplateShowcase role="Project Manager" accentColor="bg-blue-600" />
        </div>
      </section>

      <section id="key-sections">
        <h2>Essential Resume Sections for Project Managers</h2>
        
        <div className="space-y-6"
        >
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500"
        >
            <h3 className="flex items-center gap-2"
        >
              <CheckCircle className="h-5 w-5 text-blue-600" />
              Project Delivery Record
            </h3>
            <p>
              Highlight your track record of successful project delivery. Include project budgets, 
              team sizes, timelines, and specific achievements like early delivery or cost savings.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500"
        >
            <h3 className="flex items-center gap-2"
        >
              <Users className="h-5 w-5 text-green-600" />
              Stakeholder Management
            </h3>
            <p>
              Project managers work with everyone from executives to individual contributors. 
              Show your ability to manage expectations, communicate progress, and build consensus.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500"
        >
            <h3 className="flex items-center gap-2"
        >
              <Calendar className="h-5 w-5 text-purple-600" />
              Methodologies &amp; Tools
            </h3>
            <p>
              List your PM certifications (PMP, Agile, Scrum), methodologies, and tools 
              (Jira, Asana, MS Project). These are often keywords ATS systems look for.
            </p>
          </div>
        </div>
      </section>

      <section id="tips"
      >
        <h2>Expert Writing Tips for Project Managers</h2>
        
        <div className="grid md:grid-cols-2 gap-6"
        >
          <div>
            <h3>Quantify Project Impact</h3>
            <ul>
              <li>"Delivered $5M software implementation 2 weeks early"</li>
              <li>"Managed cross-functional team of 25 across 3 time zones"</li>
              <li>"Reduced project costs by 20% through vendor negotiations"</li>
              <li>"Improved on-time delivery rate from 70% to 95%"</li>
            </ul>
          </div>
          
          <div>
            <h3>Show Leadership</h3>
            <ul>
              <li>Mention conflict resolution and problem-solving</li>
              <li>Highlight change management experience</li>
              <li>Include mentoring and team development</li>
              <li>Show executive presentation experience</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="keywords"
      >
        <h2>Essential Keywords for Project Manager Resumes</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4"
        >
          <div>
            <h4 className="font-semibold text-gray-900 mb-2"
            >Methodologies</h4>
            <div className="flex flex-wrap gap-2"
            >
              {['Agile', 'Scrum', 'Waterfall', 'Kanban', 'Lean', 'PMP', 'PRINCE2', 'SAFe'].map(k => (
                <span key={k} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2"
            >Skills</h4>
            <div className="flex flex-wrap gap-2"
            >
              {['Risk Management', 'Stakeholder Management', 'Budgeting', 'Resource Planning', 'Change Management', 'Vendor Management'].map(k => (
                <span key={k} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                >{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2"
            >Tools</h4>
            <div className="flex flex-wrap gap-2"
            >
              {['Jira', 'Confluence', 'MS Project', 'Asana', 'Monday.com', 'Smartsheet', 'Trello', 'Slack'].map(k => (
                <span key={k} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                >{k}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="example"
      >
        <h2>Project Manager Resume Example</h2>
        
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto"
        >
          <pre>{`LISA CHEN, PMP
Senior Project Manager | Seattle, WA | lisa.chen@email.com | linkedin.com/in/lisac

PROFESSIONAL SUMMARY
Certified PMP with 7+ years managing complex technology projects from initiation to closure. 
Expert in Agile and Waterfall methodologies. Track record of delivering 20+ projects on time 
and under budget totaling $15M+. Skilled in stakeholder management, risk mitigation, and 
leading cross-functional teams of 30+ members.

CERTIFICATIONS
• Project Management Professional (PMP) - PMI
• Certified ScrumMaster (CSM) - Scrum Alliance
• Agile Certified Practitioner (PMI-ACP)

CORE COMPETENCIES
• Project Management: Scope, schedule, budget, risk, quality, stakeholder management
• Methodologies: Agile, Scrum, Kanban, Waterfall, Hybrid approaches
• Tools: Jira, Confluence, MS Project, Asana, Smartsheet, Microsoft 365
• Leadership: Team building, conflict resolution, change management, executive reporting

PROFESSIONAL EXPERIENCE

Senior Project Manager | Tech Innovations Inc. | Mar 2020 - Present
• Lead portfolio of 8 concurrent projects with combined budget of $8M annually
• Delivered enterprise software implementation ($3M budget) 3 weeks early with 99% user adoption
• Manage distributed teams of 25-30 across engineering, design, QA, and operations
• Implemented Agile transformation improving velocity by 40% and reducing defects by 60%
• Present bi-weekly executive dashboards to C-level stakeholders
• Reduced project risk incidents by 70% through proactive risk management processes

Project Manager | Global Solutions Corp. | Jun 2017 - Feb 2020
• Managed 15+ projects for Fortune 500 clients with average budget of $500K
• Achieved 95% on-time delivery rate and 98% client satisfaction score
• Led migration project moving 10K users to cloud platform with zero downtime
• Developed project management playbook adopted company-wide

EDUCATION
B.S. Industrial Engineering | Georgia Institute of Technology | 2017`}</pre>
        </div>
      </section>

      <section id="faq"
      >
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6"
        >
          <div>
            <h3>Should I include PMP certification on my resume?</h3>
            <p>
              Yes, prominently. PMP is the gold standard in project management. Include it in your 
              header, summary, and certifications section. If you're pursuing it, note "PMP (In Progress)" 
              with expected completion date.
            </p>
          </div>
          
          <div>
            <h3>How do I show Agile experience on my resume?</h3>
            <p>
              Be specific about your role: "Served as Scrum Master for 3 teams" or "Facilitated 
              sprint planning, retrospectives, and daily standups." Include metrics like velocity 
              improvements or cycle time reductions you've achieved.
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
