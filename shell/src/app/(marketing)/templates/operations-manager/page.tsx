import { ArticleLayout } from '@/components/marketing';
import { TemplateShowcase } from '@/components/marketing/TemplateShowcase';
import { Settings, Users, TrendingUp, ClipboardList } from 'lucide-react';

export const metadata = {
  title: 'Operations Manager Resume Template | ATS-Friendly Format',
  description: 'Create a professional operations manager resume with our ATS-friendly template. Showcase your process optimization, team leadership, and operational excellence.',
};

const toc = [
  { id: 'overview', title: 'Template Overview' },
  { id: 'key-sections', title: 'Key Sections' },
  { id: 'tips', title: 'Writing Tips for Operations Managers' },
  { id: 'keywords', title: 'Essential Keywords' },
  { id: 'example', title: 'Resume Example' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function OperationsManagerTemplate() {
  return (
    <ArticleLayout
      title="Operations Manager Resume Template"
      description="Create a professional operations manager resume with our ATS-friendly template. Showcase your process optimization, team leadership, and operational excellence."
      keywords={['operations manager resume', 'operations resume', 'supply chain resume', 'general manager resume']}
      heroTitle="Operations Manager Resume Template"
      heroSubtitle="Optimize your career trajectory"
      heroIcon={<Settings className="h-10 w-10 text-white" />}
      heroGradient="orange"
      toc={toc}
      publishDate="2025-01-15"
      readTime="7 min read"
      authorName="Robert Hayes"
      authorTitle="Operations Executive Recruiter"
    >
      <section id="overview">
        <p className="lead text-xl text-gray-600 mb-6">
          Operations managers keep businesses running efficiently. Your resume must demonstrate your 
          ability to optimize processes, lead teams, manage budgets, and deliver measurable improvements 
          in efficiency, quality, and cost reduction.
        </p>
        
        <div className="my-8">
          <TemplateShowcase role="Operations Manager" accentColor="bg-orange-600" />
        </div>
      </section>

      <section id="key-sections">
        <h2>Essential Resume Sections for Operations Managers</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-orange-600" />
              Operational Improvements
            </h3>
            <p>
              Quantify your impact on efficiency, cost reduction, quality improvement, and productivity gains. 
              Operations is all about measurable results and continuous improvement.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              Team Leadership
            </h3>
            <p>
              Highlight your experience managing teams, developing talent, and building high-performance cultures. 
              Include team sizes and leadership achievements.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-green-600" />
              Process &amp; Systems
            </h3>
            <p>
              Detail your experience with process improvement methodologies (Lean, Six Sigma), ERP systems, 
              and operations management tools.
            </p>
          </div>
        </div>
      </section>

      <section id="tips">
        <h2>Expert Writing Tips for Operations Managers</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3>Quantify Efficiency Gains</h3>
            <ul>
              <li>"Reduced operational costs by 25% ($2M annually) through process optimization"</li>
              <li>"Improved order fulfillment rate from 92% to 99.5%"</li>
              <li>"Reduced lead time by 40% through supply chain improvements"</li>
              <li>"Increased productivity by 35% while maintaining quality standards"</li>
            </ul>
          </div>
          
          <div>
            <h3>Show Strategic Leadership</h3>
            <ul>
              <li>P&L responsibility and budget management</li>
              <li>Cross-functional collaboration experience</li>
              <li>Change management and transformation initiatives</li>
              <li>Vendor and supplier relationship management</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="keywords">
        <h2>Essential Keywords for Operations Manager Resumes</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Methodologies</h4>
            <div className="flex flex-wrap gap-2">
              {['Lean', 'Six Sigma', 'Continuous Improvement', 'Kaizen', 'Process Optimization', 'KPI Management'].map(k => (
                <span key={k} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Areas</h4>
            <div className="flex flex-wrap gap-2">
              {['Supply Chain', 'Logistics', 'Inventory Management', 'Quality Assurance', 'Production', 'Facilities'].map(k => (
                <span key={k} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Tools</h4>
            <div className="flex flex-wrap gap-2">
              {['SAP', 'Oracle', 'NetSuite', 'Salesforce', 'Excel', 'Tableau'].map(k => (
                <span key={k} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="example">
        <h2>Operations Manager Resume Example</h2>
        
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
          <pre>{`MICHAEL THOMPSON
Operations Manager | Dallas, TX | michael.t@email.com | linkedin.com/in/michaelt

PROFESSIONAL SUMMARY
Strategic Operations Manager with 8+ years optimizing supply chain, manufacturing, and distribution 
operations. Expert in Lean Six Sigma, process improvement, and team leadership. Proven track record 
of reducing costs by 30%, improving on-time delivery to 98%, and leading teams of 50+ employees. 
Managed $10M+ annual budgets and P&L responsibility.

CERTIFICATIONS
• Lean Six Sigma Black Belt
• Project Management Professional (PMP)
• Supply Chain Operations Reference (SCOR) certified

CORE COMPETENCIES
• Operations Management: Supply chain optimization, inventory management, production planning, quality control
• Process Improvement: Lean manufacturing, Six Sigma, workflow analysis, continuous improvement initiatives
• Leadership: Team building, performance management, training development, change management
• Systems: SAP ERP, Oracle NetSuite, WMS, TMS, Advanced Excel, Tableau

PROFESSIONAL EXPERIENCE

Operations Manager | Manufacturing Solutions Inc. | Jan 2020 - Present
• Lead operations for 200-employee manufacturing facility with $50M annual revenue
• Reduce operational costs by 25% ($3M annually) through Lean initiatives and waste elimination
• Improve on-time delivery from 85% to 98% through production planning optimization
• Implement inventory management system reducing carrying costs by 20% while improving availability
• Manage team of 5 supervisors and 75 production associates; achieve 95% employee retention
• Oversee $8M annual operating budget and capital expenditure planning
• Lead facility expansion project increasing capacity by 40%

Senior Operations Supervisor | Logistics Corp. | Jun 2016 - Dec 2019
• Supervised warehouse operations team of 40 employees across 3 shifts
• Reduced order processing time by 35% through workflow redesign
• Implement safety program reducing incidents by 60% and achieving OSHA compliance
• Optimize transportation routes saving $500K annually in freight costs
• Selected to lead Lean transformation initiative across 5 facilities

Operations Analyst | Supply Chain Partners | Aug 2013 - May 2016
• Analyzed operational data identifying $2M in cost reduction opportunities
• Created KPI dashboards used by executive leadership for strategic decisions
• Supported implementation of new WMS improving inventory accuracy to 99.8%

EDUCATION
MBA Operations Management | Southern Methodist University | 2016
B.S. Industrial Engineering | Texas A&M University | 2013`}</pre>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3>Should I include Six Sigma certification on my operations resume?</h3>
            <p>
              Yes, definitely. Six Sigma (Green Belt or Black Belt) and Lean certifications are highly 
              valued in operations roles. They demonstrate your commitment to process improvement and 
              provide credibility for your optimization achievements.
            </p>
          </div>
          
          <div>
            <h3>How do I show P&L responsibility on my resume?</h3>
            <p>
              Be specific about budget sizes managed: "Managed $10M annual operating budget" or "Responsible 
              for P&L of $50M revenue business unit." Include cost savings and revenue improvements you've 
              delivered through operational excellence.
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
