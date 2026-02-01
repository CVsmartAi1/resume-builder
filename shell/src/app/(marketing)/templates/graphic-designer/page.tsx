import { ArticleLayout } from '@/components/marketing';
import { TemplateShowcase } from '@/components/marketing/TemplateShowcase';
import { Palette, Image, Layout, Brush } from 'lucide-react';

export const metadata = {
  title: 'Graphic Designer Resume Template | ATS-Friendly Format',
  description: 'Create a stunning graphic designer resume with our ATS-friendly template. Showcase your design portfolio, creative skills, and visual communication expertise.',
};

const toc = [
  { id: 'overview', title: 'Template Overview' },
  { id: 'key-sections', title: 'Key Sections' },
  { id: 'tips', title: 'Writing Tips for Graphic Designers' },
  { id: 'keywords', title: 'Essential Keywords' },
  { id: 'example', title: 'Resume Example' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function GraphicDesignerTemplate() {
  return (
    <ArticleLayout
      title="Graphic Designer Resume Template"
      description="Create a stunning graphic designer resume with our ATS-friendly template. Showcase your design portfolio, creative skills, and visual communication expertise."
      keywords={['graphic designer resume', 'designer resume template', 'creative resume', 'visual designer resume']}
      heroTitle="Graphic Designer Resume Template"
      heroSubtitle="Design your path to creative success"
      heroIcon={<Palette className="h-10 w-10 text-white" />}
      heroGradient="purple"
      toc={toc}
      publishDate="2025-01-15"
      readTime="7 min read"
      authorName="Daniel Lee"
      authorTitle="Creative Director"
    >
      <section id="overview">
        <p className="lead text-xl text-gray-600 mb-6">
          Graphic designers bring ideas to life through visual storytelling. Your resume needs to 
          balance creative expression with professionalism while showcasing your technical skills, 
          design versatility, and portfolio of impactful work.
        </p>
        
        <div className="my-8">
          <TemplateShowcase role="Graphic Designer" accentColor="bg-purple-600" />
        </div>
      </section>

      <section id="key-sections">
        <h2>Essential Resume Sections for Graphic Designers</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="flex items-center gap-2">
              <Image className="h-5 w-5 text-purple-600" />
              Portfolio Link
            </h3>
            <p>
              Your portfolio is your most important asset. Include a prominent link to your Behance, 
              Dribbble, or personal website. Ensure it showcases your best work across different 
              mediums and styles.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-pink-500">
            <h3 className="flex items-center gap-2">
              <Layout className="h-5 w-5 text-pink-600" />
              Design Expertise
            </h3>
            <p>
              List your design specialties: branding, print design, digital design, UI/UX, illustration, 
              motion graphics. Show the breadth and depth of your creative capabilities.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="flex items-center gap-2">
              <Brush className="h-5 w-5 text-blue-600" />
              Technical Skills
            </h3>
            <p>
              Detail your proficiency with design software: Adobe Creative Suite, Figma, Sketch, 
              and any other relevant tools. Include both design and production skills.
            </p>
          </div>
        </div>
      </section>

      <section id="tips">
        <h2>Expert Writing Tips for Graphic Designers</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3>Show Design Impact</h3>
            <ul>
              <li>"Redesigned brand identity increasing brand recognition by 40%"</li>
              <li>"Created marketing materials for product launch generating $2M in sales"</li>
              <li>"Designed website improving conversion rate by 25%"</li>
              <li>"Led visual refresh for 50+ product packaging designs"</li>
            </ul>
          </div>
          
          <div>
            <h3>Highlight Collaboration</h3>
            <ul>
              <li>Working with marketing and product teams</li>
              <li>Managing client relationships and feedback</li>
              <li>Art direction and mentoring junior designers</li>
              <li>Cross-functional project collaboration</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="keywords">
        <h2>Essential Keywords for Graphic Designer Resumes</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Design Areas</h4>
            <div className="flex flex-wrap gap-2">
              {['Branding', 'Print Design', 'Digital Design', 'Packaging', 'Illustration', 'Motion Graphics'].map(k => (
                <span key={k} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Software</h4>
            <div className="flex flex-wrap gap-2">
              {['Photoshop', 'Illustrator', 'InDesign', 'Figma', 'After Effects', 'Sketch'].map(k => (
                <span key={k} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {['Typography', 'Color Theory', 'Layout', 'Visual Identity', 'Art Direction', 'Photo Editing'].map(k => (
                <span key={k} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="example">
        <h2>Graphic Designer Resume Example</h2>
        
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
          <pre>{`SARAH MITCHELL
Senior Graphic Designer | Los Angeles, CA | sarah.m@email.com | sarahmitchell.design

PROFESSIONAL SUMMARY
Creative graphic designer with 6+ years delivering compelling visual solutions for brands 
across tech, lifestyle, and retail industries. Expert in brand identity, digital design, 
and print production. Passionate about creating designs that communicate effectively and 
drive business results. Portfolio includes work for Fortune 500 clients and award-winning 
campaigns.

DESIGN EXPERTISE
• Brand Identity: Logo design, brand guidelines, visual systems, rebranding
• Digital: Website design, social media graphics, email templates, banner ads
• Print: Packaging, brochures, posters, publications, signage, merchandise
• Production: Prepress, color correction, file preparation, vendor management

TECHNICAL SKILLS
• Adobe Creative Suite: Photoshop, Illustrator, InDesign (Expert)
• UI/UX Tools: Figma, Sketch, Adobe XD
• Motion: After Effects, Premiere Pro
• Other: Typography, color theory, photography, illustration

PROFESSIONAL EXPERIENCE

Senior Graphic Designer | Creative Agency LA | Mar 2020 - Present
• Lead brand identity projects for 20+ clients across diverse industries
• Designed packaging for product line generating $5M in first-year sales
• Created comprehensive brand guidelines ensuring consistency across all touchpoints
• Art direct photoshoots and manage relationships with photographers and vendors
• Mentor junior designers and lead design critiques
• Collaborate with account teams to ensure designs meet client objectives

Graphic Designer | Brand Studio | Jun 2017 - Feb 2020
• Designed marketing materials for 50+ campaigns across print and digital
• Redesigned company website improving engagement by 35%
• Created social media graphics achieving 2M+ impressions
• Managed print production and vendor relationships
• Awarded "Designer of the Year" in 2019

Junior Designer | StartupXYZ | Aug 2015 - May 2017
• Designed presentations, social graphics, and marketing collateral
• Assisted senior designers on major brand projects
• Learned print production and file preparation workflows

EDUCATION
B.F.A. Graphic Design | ArtCenter College of Design | 2015

PORTFOLIO
sarahmitchell.design | behance.net/sarahmitchell

AWARDS
• AIGA Design Award 2022
• Communication Arts Award of Excellence 2021`}</pre>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3>Should graphic designers have creative resume designs?</h3>
            <p>
              Balance creativity with readability. While your portfolio showcases your design skills, 
              your resume needs to be ATS-friendly and easy to scan. Use clean typography, subtle 
              color accents, and clear hierarchy. Save creative flair for your portfolio pieces.
            </p>
          </div>
          
          <div>
            <h3>What should I include in my design portfolio?</h3>
            <p>
              Showcase 8-12 of your best pieces that demonstrate range and depth. Include case studies 
              showing your process: brief, concept, design iterations, and final result. Show different 
              types of work: branding, digital, print, and any specialty areas.
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
