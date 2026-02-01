import { ArticleLayout } from '@/components/marketing';
import { Layout, Type, Palette, FileCheck } from 'lucide-react';

export const metadata = {
  title: 'Resume Formatting Guide: Fonts, Margins, and Layout Tips',
  description: 'Master resume formatting with our comprehensive guide. Learn about fonts, spacing, margins, file formats, and layout best practices.',
};

const toc = [
  { id: 'fonts', title: 'Best Fonts for Resumes' },
  { id: 'spacing', title: 'Spacing and Margins' },
  { id: 'layout', title: 'Layout Structure' },
  { id: 'file-formats', title: 'File Formats' },
  { id: 'length', title: 'Resume Length' },
];

export default function ResumeFormattingArticle() {
  return (
    <ArticleLayout
      title="Resume Formatting Guide: Fonts, Margins, and Layout Tips"
      description="Master resume formatting with our comprehensive guide. Learn about fonts, spacing, margins, file formats, and layout best practices."
      keywords={['resume formatting', 'resume fonts', 'resume layout', 'resume margins', 'resume spacing']}
      heroTitle="Resume Formatting Guide"
      heroSubtitle="Make your resume visually professional and ATS-friendly"
      heroIcon={<Layout className="h-10 w-10 text-white" />}
      heroGradient="blue"
      toc={toc}
      publishDate="2025-01-19"
      readTime="7 min read"
      authorName="Career Expert Team"
    >
      <section id="fonts">
        <h2>Best Fonts for Resumes</h2>
        
        <p>Choose professional, readable fonts that work across all systems:</p>
        
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-green-900">✓ Recommended Fonts</h3>
            <ul className="text-green-800 mt-2">
              <li><strong>Arial</strong> — Clean and modern</li>
              <li><strong>Calibri</strong> — Contemporary and professional</li>
              <li><strong>Georgia</strong> — Elegant serif option</li>
              <li><strong>Times New Roman</strong> — Traditional and safe</li>
              <li><strong>Helvetica</strong> — Classic professional</li>
              <li><strong>Garamond</strong> — Sophisticated serif</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-red-900">❌ Fonts to Avoid</h3>
            <ul className="text-red-800 mt-2">
              <li>Comic Sans (unprofessional)</li>
              <li>Papyrus (dated and overused)</li>
              <li>Script or handwriting fonts (hard to read)</li>
              <li>Decorative display fonts</li>
              <li>Fonts smaller than 10pt</li>
            </ul>
          </div>
        </div>
        
        <p><strong>Font Size Guidelines:</strong> Use 11-12pt for body text, 14-16pt for section headers, and 20-24pt for your name.</p>
      </section>

      <section id="spacing">
        <h2>Spacing and Margins</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <h3>Standard Spacing Guidelines</h3>
          
          <ul className="mt-4 space-y-2">
            <li><strong>Margins:</strong> 0.5 to 1 inch on all sides</li>
            <li><strong>Line spacing:</strong> 1.15 to 1.5 for readability</li>
            <li><strong>Section spacing:</strong> 6-12 points between sections</li>
            <li><strong>Bullet spacing:</strong> Consistent spacing between bullets</li>
          </ul>
        </div>
        
        <p>White space is your friend—it makes your resume easier to scan and more visually appealing.</p>
      </section>

      <section id="layout">
        <h2>Layout Structure</h2>
        
        <p>The standard resume structure follows this order:</p>
        
        <ol className="list-decimal list-inside space-y-2 my-4">
          <li><strong>Contact Information</strong> — Name, phone, email, LinkedIn, location</li>
          <li><strong>Professional Summary</strong> — 3-5 sentences highlighting your value</li>
          <li><strong>Work Experience</strong> — Reverse chronological order</li>
          <li><strong>Education</strong> — Degrees, institutions, dates</li>
          <li><strong>Skills</strong> — Relevant technical and soft skills</li>
          <li><strong>Certifications/Awards</strong> — Optional additional sections</li>
        </ol>
      </section>

      <section id="file-formats">
        <h2>File Formats</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3>Microsoft Word (.docx)</h3>
            <ul>
              <li>✓ Most ATS-friendly format</li>
              <li>✓ Easy for recruiters to edit</li>
              <li>✓ Use when no format is specified</li>
            </ul>
          </div>
          
          <div>
            <h3>PDF (.pdf)</h3>
            <ul>
              <li>✓ Preserves formatting exactly</li>
              <li>✓ Professional appearance</li>
              <li>✓ Use when specifically requested</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="length">
        <h2>Resume Length Guidelines</h2>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3>Entry-Level (0-5 years): One Page</h3>
            <p>Focus on relevant experience, internships, projects, and education.</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3>Mid-Level (5-10 years): 1-2 Pages</h3>
            <p>Include relevant roles and achievements; remove outdated experience.</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3>Senior/Executive (10+ years): Two Pages</h3>
            <p>Comprehensive experience summary; focus on leadership and impact.</p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
