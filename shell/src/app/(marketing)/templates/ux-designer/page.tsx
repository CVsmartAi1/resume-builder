import { ArticleLayout } from '@/components/marketing';
import { TemplateShowcase } from '@/components/marketing/TemplateShowcase';
import { Palette, Figma, Lightbulb, Eye } from 'lucide-react';

export const metadata = {
  title: 'UX Designer Resume Template | ATS-Friendly Format',
  description: 'Create a stunning UX designer resume with our ATS-friendly template. Showcase your design process, portfolio work, and user-centered approach.',
};

const toc = [
  { id: 'overview', title: 'Template Overview' },
  { id: 'key-sections', title: 'Key Sections' },
  { id: 'tips', title: 'Writing Tips for UX Designers' },
  { id: 'keywords', title: 'Essential Keywords' },
  { id: 'example', title: 'Resume Example' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function UXDesignerTemplate() {
  return (
    <ArticleLayout
      title="UX Designer Resume Template"
      description="Create a stunning UX designer resume with our ATS-friendly template. Showcase your design process, portfolio work, and user-centered approach."
      keywords={['UX designer resume', 'UI UX resume', 'product designer resume', 'user experience resume']}
      heroTitle="UX Designer Resume Template"
      heroSubtitle="Design a resume that showcases your creative problem-solving"
      heroIcon={<Palette className="h-10 w-10 text-white" />}
      heroGradient="teal"
      toc={toc}
      publishDate="2025-01-15"
      readTime="7 min read"
      authorName="Maya Johnson"
      authorTitle="Design Recruiter"
    >
      <section id="overview">
        <p className="lead text-xl text-gray-600 mb-6">
          As a UX designer, your resume is a design challenge in itself. It needs to be clean, 
          scannable, and demonstrate your understanding of user experience principles while 
          showcasing your design process, research skills, and portfolio achievements.
        </p>
        
        <div className="my-8">
          <TemplateShowcase role="UX Designer" accentColor="bg-teal-600" />
        </div>
      </section>

      <section id="key-sections">
        <h2>Essential Resume Sections for UX Designers</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-teal-500">
            <h3 className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-teal-600" />
              Portfolio Link
            </h3>
            <p>
              Your portfolio is as important as your resume. Include a prominent link to your 
              portfolio website, Behance, or Dribbble. Ensure it showcases your design process, 
              not just final designs.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-purple-600" />
              Design Process
            </h3>
            <p>
              Describe your approach to design challenges. Include specific methodologies: 
              user research, journey mapping, wireframing, prototyping, usability testing, 
              and iterative design.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-pink-500">
            <h3 className="flex items-center gap-2">
              <Figma className="h-5 w-5 text-pink-600" />
              Tools &amp; Skills
            </h3>
            <p>
              List your design toolkit: Figma, Sketch, Adobe XD, prototyping tools, 
              design systems, and any coding skills (HTML/CSS). Include collaboration 
              tools like Miro, Notion, or Jira.
            </p>
          </div>
        </div>
      </section>

      <section id="tips">
        <h2>Expert Writing Tips for UX Designers</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3>Show Impact, Not Just Activities</h3>
            <ul>
              <li>"Redesigned checkout flow increasing conversion by 35%"</li>
              <li>"Reduced user task completion time from 5 min to 2 min"</li>
              <li>"Improved NPS score by 20 points through UX improvements"</li>
              <li>"Designed for 1M+ daily active users"</li>
            </ul>
          </div>
          
          <div>
            <h3>Highlight Collaboration</h3>
            <ul>
              <li>Mention working with PMs, engineers, and stakeholders</li>
              <li>Include workshop facilitation experience</li>
              <li>Show experience presenting to leadership</li>
              <li>Highlight design system contributions</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="keywords">
        <h2>Essential Keywords for UX Designer Resumes</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Design Skills</h4>
            <div className="flex flex-wrap gap-2">
              {['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Information Architecture', 'Interaction Design'].map(k => (
                <span key={k} className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Tools</h4>
            <div className="flex flex-wrap gap-2">
              {['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Principle', 'Framer', 'Miro', 'Maze'].map(k => (
                <span key={k} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Methods</h4>
            <div className="flex flex-wrap gap-2">
              {['Design Thinking', 'Design Systems', 'User Flows', 'Journey Maps', 'A/B Testing', 'Accessibility'].map(k => (
                <span key={k} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="example">
        <h2>UX Designer Resume Example</h2>
        
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
          <pre>{`SOPHIE CHEN
Senior UX Designer | New York, NY | sophie.chen@email.com | sophiechen.design

PROFESSIONAL SUMMARY
Creative UX Designer with 5+ years crafting intuitive digital experiences for web and mobile. 
Expert in user-centered design, design systems, and cross-functional collaboration. Proven track 
record improving key metrics: increased conversion 40%, reduced support tickets 25%, improved 
user satisfaction scores 30%.

DESIGN EXPERTISE
• User Research: Interviews, surveys, usability testing, persona development, journey mapping
• Design: Wireframing, prototyping, visual design, design systems, responsive design
• Tools: Figma, Sketch, Adobe Creative Suite, Principle, Miro, Maze, UserTesting.com
• Methods: Design sprints, design thinking, agile/Scrum, A/B testing, accessibility (WCAG)

PROFESSIONAL EXPERIENCE

Senior UX Designer | FinTech Innovations | Mar 2021 - Present
• Lead UX for mobile banking app with 2M+ users, owning end-to-end design process
• Redesigned onboarding flow increasing completion rate from 45% to 78%
• Created and maintained comprehensive design system used by 20+ designers across 5 products
• Conducted 50+ user interviews and usability tests informing product roadmap
• Collaborated with product and engineering to ship 30+ features in agile sprints
• Mentored 3 junior designers, establishing team design critique practices

UX Designer | E-commerce Plus | Jun 2019 - Feb 2021
• Designed checkout experience reducing cart abandonment by 35% ($2M annual revenue impact)
• Built interactive prototypes for stakeholder presentations and user testing
• Led design sprint that identified $500K cost-saving opportunity in fulfillment flow
• Improved mobile conversion rate by 25% through responsive design optimization

Junior UX Designer | AgencyXYZ | Aug 2017 - May 2019
• Designed websites and apps for 15+ clients across finance, healthcare, and retail
• Conducted competitive analysis and heuristic evaluations
• Created wireframes, mockups, and prototypes for client presentations

EDUCATION
B.F.A. Graphic Design | Rhode Island School of Design | 2017
Minor: Human-Computer Interaction

CERTIFICATIONS
• Google UX Design Professional Certificate
• Nielsen Norman Group UX Master Certification`}</pre>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3>Should UX designers have a creative resume design?</h3>
            <p>
              Balance creativity with readability. Your portfolio showcases your design skills; 
              your resume needs to be ATS-friendly and scannable. Use clean typography, subtle 
              color, and clear hierarchy. Save creative flair for your portfolio.
            </p>
          </div>
          
          <div>
            <h3>How important is the portfolio for UX roles?</h3>
            <p>
              Critical. Your portfolio carries more weight than your resume. Include case studies 
              showing your process: problem statement, research, ideation, iteration, and results. 
              Most hiring managers review portfolios before resumes.
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
