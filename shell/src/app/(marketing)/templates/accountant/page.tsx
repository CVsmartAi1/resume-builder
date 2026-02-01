import { ArticleLayout } from '@/components/marketing';
import { TemplateShowcase } from '@/components/marketing/TemplateShowcase';
import { Calculator, FileSpreadsheet, DollarSign, Shield } from 'lucide-react';

export const metadata = {
  title: 'Accountant Resume Template | ATS-Friendly Format',
  description: 'Create a professional accountant resume with our ATS-friendly template. Showcase your accounting expertise, certifications, and financial reporting skills.',
};

const toc = [
  { id: 'overview', title: 'Template Overview' },
  { id: 'key-sections', title: 'Key Sections' },
  { id: 'tips', title: 'Writing Tips for Accountants' },
  { id: 'keywords', title: 'Essential Keywords' },
  { id: 'example', title: 'Resume Example' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function AccountantTemplate() {
  return (
    <ArticleLayout
      title="Accountant Resume Template"
      description="Create a professional accountant resume with our ATS-friendly template. Showcase your accounting expertise, certifications, and financial reporting skills."
      keywords={['accountant resume', 'CPA resume', 'accounting resume template', 'financial accountant resume']}
      heroTitle="Accountant Resume Template"
      heroSubtitle="Balance your career with a perfectly crafted resume"
      heroIcon={<Calculator className="h-10 w-10 text-white" />}
      heroGradient="green"
      toc={toc}
      publishDate="2025-01-15"
      readTime="7 min read"
      authorName="Thomas Wright"
      authorTitle="Accounting Recruiter"
    >
      <section id="overview">
        <p className="lead text-xl text-gray-600 mb-6">
          Accountants are the financial backbone of every organization. Your resume must demonstrate 
          your technical accounting knowledge, attention to detail, and ability to ensure financial 
          accuracy and compliance while showcasing relevant certifications like CPA or CMA.
        </p>
        
        <div className="my-8">
          <TemplateShowcase role="Accountant" accentColor="bg-green-600" />
        </div>
      </section>

      <section id="key-sections">
        <h2>Essential Resume Sections for Accountants</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              Certifications
            </h3>
            <p>
              Prominently display your CPA, CMA, or other accounting certifications. These credentials 
              are critical differentiators and often required for senior roles. Include license numbers 
              if space permits.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="flex items-center gap-2">
              <FileSpreadsheet className="h-5 w-5 text-blue-600" />
              Technical Skills
            </h3>
            <p>
              List accounting software expertise: QuickBooks, SAP, Oracle, Sage, and advanced Excel 
              skills. Include any ERP systems and tax preparation software you know.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-purple-600" />
              Accounting Functions
            </h3>
            <p>
              Highlight your experience across accounting functions: general ledger, accounts payable/receivable, 
              financial reporting, reconciliations, budgeting, and audit support.
            </p>
          </div>
        </div>
      </section>

      <section id="tips">
        <h2>Expert Writing Tips for Accountants</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3>Show Process Improvements</h3>
            <ul>
              <li>"Reduced month-end close time from 10 to 5 days"</li>
              <li>"Implemented automated reconciliation saving 20 hours monthly"</li>
              <li>"Streamlined AP process reducing processing time by 40%"</li>
              <li>"Eliminated $50K in discrepancies through process improvements"</li>
            </ul>
          </div>
          
          <div>
            <h3>Highlight Compliance &amp; Accuracy</h3>
            <ul>
              <li>Clean audit records with no material weaknesses</li>
              <li>Experience with GAAP, IFRS, and SOX compliance</li>
              <li>Tax preparation and planning experience</li>
              <li>Internal controls implementation</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="keywords">
        <h2>Essential Keywords for Accountant Resumes</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Functions</h4>
            <div className="flex flex-wrap gap-2">
              {['General Ledger', 'Reconciliation', 'Financial Reporting', 'Budgeting', 'Forecasting', 'Audit'].map(k => (
                <span key={k} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Software</h4>
            <div className="flex flex-wrap gap-2">
              {['QuickBooks', 'SAP', 'Oracle', 'Sage', 'Excel', 'NetSuite'].map(k => (
                <span key={k} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Certifications</h4>
            <div className="flex flex-wrap gap-2">
              {['CPA', 'CMA', 'CFA', 'CIA', 'EA', 'MBA'].map(k => (
                <span key={k} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="example">
        <h2>Accountant Resume Example</h2>
        
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
          <pre>{`AMANDA FOSTER, CPA
Senior Accountant | Denver, CO | amanda.f@email.com | linkedin.com/in/amandaf

PROFESSIONAL SUMMARY
 detail-oriented CPA with 5+ years of progressive accounting experience in corporate and public accounting. 
Expert in financial reporting, general ledger management, and process improvement. Proven track record of 
streamlining accounting operations and ensuring compliance with GAAP and regulatory requirements.

CERTIFICATIONS
• Certified Public Accountant (CPA) - Colorado License #CPA12345
• QuickBooks ProAdvisor Certified

TECHNICAL SKILLS
• Accounting Systems: SAP, Oracle, QuickBooks, NetSuite, Sage Intacct
• Advanced Excel: Pivot tables, VLOOKUP, macros, financial modeling
• Reporting: Financial statements, variance analysis, board presentations
• Compliance: GAAP, SOX, Internal controls, Audit support

PROFESSIONAL EXPERIENCE

Senior Accountant | Manufacturing Solutions Inc. | Jan 2021 - Present
• Manage general ledger for $100M revenue division with 5 legal entities
• Prepare monthly financial statements and management reports for executive team
• Lead month-end close process, reducing close time from 10 to 6 days
• Implemented automated reconciliation procedures saving 15 hours monthly
• Support annual external audit; 3 consecutive years with no material weaknesses
• Mentor 2 staff accountants and oversee their professional development

Staff Accountant | Regional CPA Firm | Jun 2018 - Dec 2020
• Prepared individual, corporate, and partnership tax returns for 200+ clients
• Conducted audits for non-profit and small business clients
• Assisted with financial statement preparation and review engagements
• Identified tax savings opportunities averaging $10K per business client

Accounting Associate | Retail Chain Corp. | Aug 2016 - May 2018
• Processed accounts payable for 50+ vendor relationships
• Reconciled 20+ bank and credit card accounts monthly
• Assisted with month-end close and journal entry preparation

EDUCATION
B.S. Accounting | University of Colorado Boulder | 2016
GPA: 3.7/4.0 | Beta Alpha Psi Member`}</pre>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3>Should I include my CPA license number on my resume?</h3>
            <p>
              Including your license number adds credibility and makes verification easier for employers. 
              If you're concerned about privacy, you can provide it upon request or include just the state 
              and "CPA" designation.
            </p>
          </div>
          
          <div>
            <h3>How do I transition from public to corporate accounting?</h3>
            <p>
              Emphasize client industry experience, ERP systems knowledge, and any operational accounting work. 
              Highlight skills that transfer: financial reporting, controls, process improvement, and business 
              advisory experience.
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
