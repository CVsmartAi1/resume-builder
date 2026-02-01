import { ArticleLayout } from '@/components/marketing';
import { FileSearch, CheckCircle, XCircle, AlertTriangle, List } from 'lucide-react';

export const metadata = {
  title: 'ATS-Friendly Resume Tips: How to Beat the Bots in 2025',
  description: 'Learn how to create an ATS-friendly resume that gets past applicant tracking systems and into the hands of recruiters. Expert tips and formatting guidelines.',
};

const toc = [
  { id: 'what-is-ats', title: 'What is an ATS?' },
  { id: 'formatting-tips', title: 'ATS Formatting Best Practices' },
  { id: 'keywords', title: 'Using Keywords Effectively' },
  { id: 'sections', title: 'Structuring Your Sections' },
  { id: 'common-mistakes', title: 'Common ATS Mistakes to Avoid' },
  { id: 'testing', title: 'Testing Your Resume' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

const relatedArticles = [
  {
    title: 'Resume Formatting Guide',
    href: '/blog/resume-formatting-guide',
    description: 'Master the art of resume formatting for maximum impact.',
  },
  {
    title: 'Resume Mistakes to Avoid',
    href: '/blog/resume-mistakes-to-avoid',
    description: 'Common mistakes that could cost you the job.',
  },
  {
    title: 'How to Write a Professional Summary',
    href: '/blog/how-to-write-professional-summary',
    description: 'Craft a compelling summary that captures attention.',
  },
];

export default function ATSResumeTips() {
  return (
    <ArticleLayout
      title="ATS-Friendly Resume Tips: How to Beat the Bots in 2025"
      description="Learn how to create an ATS-friendly resume that gets past applicant tracking systems and into the hands of recruiters. Expert tips and formatting guidelines."
      keywords={['ATS resume', 'applicant tracking system', 'ATS-friendly format', 'resume keywords', 'ATS tips']}
      heroTitle="ATS-Friendly Resume Tips"
      heroSubtitle="Beat the bots and get your resume seen by recruiters"
      heroIcon={<FileSearch className="h-10 w-10 text-white" />}
      heroGradient="blue"
      toc={toc}
      publishDate="2025-01-20"
      modifiedDate="2025-01-20"
      readTime="10 min read"
      authorName="Career Expert Team"
      authorTitle="Resume Writing Professionals"
      relatedArticles={relatedArticles}
    >
      <section id="what-is-ats">
        <h2>What is an Applicant Tracking System (ATS)?</h2>
        
        <p>
          An Applicant Tracking System (ATS) is software used by employers to manage the recruitment process. 
          Over <strong>98% of Fortune 500 companies</strong> use ATS to filter resumes before they ever reach 
          human eyes. These systems scan resumes for keywords, skills, experience, and formatting to determine 
          if a candidate matches the job requirements.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg my-6">
          <h3 className="text-blue-900">Why ATS Matters</h3>
          <ul className="text-blue-800 mt-2">
            <li>75% of resumes are rejected by ATS before a human sees them</li>
            <li>ATS can parse and rank thousands of resumes in seconds</li>
            <li>Formatting errors can cause your resume to be rejected automatically</li>
            <li>Missing keywords are the #1 reason for ATS rejection</li>
          </ul>
        </div>
      </section>

      <section id="formatting-tips">
        <h2>ATS Formatting Best Practices</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="flex items-center gap-2 text-green-900">
              <CheckCircle className="h-5 w-5" />
              Do This
            </h3>
            <ul className="text-green-800 mt-3 space-y-2">
              <li>Use standard fonts: Arial, Calibri, Georgia, or Times New Roman</li>
              <li>Stick to 10-12pt font size</li>
              <li>Use standard section headings: Experience, Education, Skills</li>
              <li>Save as .docx or .pdf (check job posting preference)</li>
              <li>Use simple bullet points (• or -)</li>
              <li>Include dates in MM/YYYY format</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="flex items-center gap-2 text-red-900">
              <XCircle className="h-5 w-5" />
              Avoid This
            </h3>
            <ul className="text-red-800 mt-3 space-y-2">
              <li>Headers, footers, or text boxes</li>
              <li>Tables or columns (ATS reads left-to-right)</li>
              <li>Graphics, images, or charts</li>
              <li>Special characters or creative fonts</li>
              <li>Headers like "My Amazing Journey"</li>
              <li>Multiple columns that confuse parsing</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="keywords">
        <h2>Using Keywords Effectively</h2>
        
        <p>
          Keywords are the most critical factor for ATS success. The system scans for specific words and 
          phrases that match the job description. Here's how to optimize:
        </p>
        
        <div className="space-y-4 my-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3>1. Analyze the Job Description</h3>
            <p>
              Identify hard skills, soft skills, certifications, and industry terms mentioned. Look for 
              repeated words and required qualifications. These are your target keywords.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3>2. Use Exact Matches</h3>
            <p>
              If the job asks for "Project Management," don't just say "Led projects." Use the exact phrase 
              "Project Management" to ensure the ATS recognizes the match.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3>3. Include Variations</h3>
            <p>
              Use both acronyms and full terms: "Search Engine Optimization (SEO)" or "Customer Relationship 
              Management (CRM)." This covers all bases.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3>4. Context Matters</h3>
            <p>
              Don't just list keywords—use them in context. "Managed SEO strategy increasing organic traffic 
              by 150%" is better than simply listing "SEO."
            </p>
          </div>
        </div>
      </section>

      <section id="sections">
        <h2>Structuring Your Resume Sections</h2>
        
        <p>
          ATS expects standard section headings. Using creative titles may cause the system to miss 
          important information entirely.
        </p>
        
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 border">Instead of...</th>
                <th className="p-4 border">Use This</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border">My Career Journey</td>
                <td className="p-4 border font-semibold">Professional Experience</td>
              </tr>
              <tr>
                <td className="p-4 border">What I Learned</td>
                <td className="p-4 border font-semibold">Education</td>
              </tr>
              <tr>
                <td className="p-4 border">Things I'm Good At</td>
                <td className="p-4 border font-semibold">Skills</td>
              </tr>
              <tr>
                <td className="p-4 border">My Awards</td>
                <td className="p-4 border font-semibold">Certifications</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="common-mistakes">
        <h2>Common ATS Mistakes to Avoid</h2>
        
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
            <div>
              <h3>Using PDF When Docx is Requested</h3>
              <p>Always follow the application instructions. When in doubt, use .docx format as it's most reliably parsed.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
            <div>
              <h3>Contact Info in Headers</h3>
              <p>ATS may not read headers and footers. Keep your contact information in the main body of the document.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
            <div>
              <h3>Creative File Names</h3>
              <p>Use "FirstName_LastName_Resume.docx" not "MyAwesomeResume2025Final.docx" for professionalism and clarity.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testing">
        <h2>Testing Your Resume</h2>
        
        <p>Before submitting your resume, test it for ATS compatibility:</p>
        
        <ol className="list-decimal list-inside space-y-2 my-4">
          <li>Copy and paste your resume into a plain text editor—does it make sense?</li>
          <li>Check that dates, company names, and job titles appear in the right order</li>
          <li>Use free ATS scanners online to get a compatibility score</li>
          <li>Ask a friend to review for any formatting oddities</li>
        </ol>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3>Can ATS read PDF files?</h3>
            <p>
              Modern ATS can read PDFs, but some older systems may struggle. Unless the job posting specifies 
              PDF, use .docx format to be safe. Always test your PDF by copying text from it to ensure it's 
              selectable, not an image.
            </p>
          </div>
          
          <div>
            <h3>Should I use a one-page or two-page resume for ATS?</h3>
            <p>
              Length doesn't affect ATS parsing, but most recruiters prefer one page for early-career professionals 
              and up to two pages for those with 10+ years of experience. Focus on relevance over length.
            </p>
          </div>
          
          <div>
            <h3>Do color and design matter for ATS?</h3>
            <p>
              ATS ignores colors and design elements, but humans don't. Use subtle, professional colors that 
              won't interfere with parsing. Avoid dark backgrounds that may cause text recognition issues.
            </p>
          </div>
          
          <div>
            <h3>How many keywords should I include?</h3>
            <p>
              There's no magic number, but aim to naturally incorporate 15-25 relevant keywords throughout 
              your resume. Don't keyword stuff—focus on meaningful usage in context.
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
