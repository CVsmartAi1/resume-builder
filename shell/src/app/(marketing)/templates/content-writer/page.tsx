import { ArticleLayout } from '@/components/marketing';
import { TemplateShowcase } from '@/components/marketing/TemplateShowcase';
import { PenTool, BookOpen, Edit3, Award } from 'lucide-react';

export const metadata = {
  title: 'Content Writer Resume Template | ATS-Friendly Format',
  description: 'Create a compelling content writer resume with our ATS-friendly template. Showcase your writing portfolio, SEO skills, and content strategy expertise.',
};

const toc = [
  { id: 'overview', title: 'Template Overview' },
  { id: 'key-sections', title: 'Key Sections' },
  { id: 'tips', title: 'Writing Tips for Content Writers' },
  { id: 'keywords', title: 'Essential Keywords' },
  { id: 'example', title: 'Resume Example' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function ContentWriterTemplate() {
  return (
    <ArticleLayout
      title="Content Writer Resume Template"
      description="Create a compelling content writer resume with our ATS-friendly template. Showcase your writing portfolio, SEO skills, and content strategy expertise."
      keywords={['content writer resume', 'copywriter resume', 'content marketing resume', 'SEO writer resume']}
      heroTitle="Content Writer Resume Template"
      heroSubtitle="Craft words that open career doors"
      heroIcon={<PenTool className="h-10 w-10 text-white" />}
      heroGradient="pink"
      toc={toc}
      publishDate="2025-01-15"
      readTime="7 min read"
      authorName="Natalie Brooks"
      authorTitle="Content Strategy Recruiter"
    >
      <section id="overview">
        <p className="lead text-xl text-gray-600 mb-6">
          Content writers are storytellers who drive engagement and conversions. Your resume needs 
          to demonstrate your writing versatility, SEO knowledge, and ability to create content that 
          achieves business goals while showcasing your unique voice and style.
        </p>
        
        <div className="my-8">
          <TemplateShowcase role="Content Writer" accentColor="bg-pink-600" />
        </div>
      </section>

      <section id="key-sections">
        <h2>Essential Resume Sections for Content Writers</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-pink-500">
            <h3 className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-pink-600" />
              Portfolio Links
            </h3>
            <p>
              Include links to your published work, portfolio website, or content samples. 
              Recruiters want to see your writing style, versatility, and the quality of your work.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500"
003e
            <h3 className="flex items-center gap-2"
003e
              <Edit3 className="h-5 w-5 text-purple-600" />
              Content Metrics
            </h3>
            <p>
              Quantify your content impact: organic traffic growth, engagement rates, conversion 
              improvements, and content performance metrics. Numbers prove your content delivers results.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500"
003e
            <h3 className="flex items-center gap-2"
003e
              <Award className="h-5 w-5 text-blue-600" />
              Versatility
            </h3>
            <p>
              Show your range: blog posts, whitepapers, email campaigns, social media, video scripts, 
              and different industries or subject matters you've covered.
            </p>
          </div>
        </div>
      </section>

      <section id="tips"
003e
        <h2>Expert Writing Tips for Content Writers</h2>
        
        <div className="grid md:grid-cols-2 gap-6"
003e
          <div>
            <h3>Show Content Impact</h3>
            <ul>
              <li>"Grew blog traffic from 10K to 100K monthly visitors"</li>
              <li>"Created email campaigns with 45% open rate and 15% CTR"</li>
              <li>"Wrote content generating 500+ qualified leads monthly"</li>
              <li>"Published 50+ articles featured on industry publications"</li>
            </ul>
          </div>
          
          <div>
            <h3>Highlight SEO Skills</h3>
            <ul>
              <li>Keyword research and optimization</li>
              <li>Content strategy and editorial planning</li>
              <li>On-page SEO and meta descriptions</li>
              <li>Content management systems (WordPress, HubSpot)</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="keywords"
003e
        <h2>Essential Keywords for Content Writer Resumes</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4"
003e
          <div>
            <h4 className="font-semibold text-gray-900 mb-2"
003eContent Types</h4>
            <div className="flex flex-wrap gap-2"
003e
              {['Blog Writing', 'Copywriting', 'SEO Writing', 'Email Marketing', 'Whitepapers', 'Social Media'].map(k => (
                <span key={k} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm"
003e{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2"
003eSkills</h4>
            <div className="flex flex-wrap gap-2"
003e
              {['SEO', 'Content Strategy', 'Editorial Calendar', 'Keyword Research', 'Google Analytics', 'AP Style'].map(k => (
                <span key={k} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
003e{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2"
003eTools</h4>
            <div className="flex flex-wrap gap-2"
003e
              {['WordPress', 'HubSpot', 'Grammarly', 'Ahrefs', 'SEMrush', 'Google Docs'].map(k => (
                <span key={k} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
003e{k}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="example"
003e
        <h2>Content Writer Resume Example</h2>
        
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto"
003e
          <pre>{`EMMA WILSON
Senior Content Writer | Portland, OR | emma.w@email.com | emmawilsonwrites.com

PROFESSIONAL SUMMARY
Versatile content writer with 5+ years creating engaging, SEO-optimized content for B2B SaaS 
and e-commerce brands. Expert in blog strategy, email marketing, and conversion copywriting. 
Track record of growing organic traffic by 200%+ and generating 1000+ leads through content 
marketing initiatives.

CORE COMPETENCIES
• Content Creation: Blog posts, whitepapers, case studies, email campaigns, website copy, video scripts
• SEO: Keyword research, on-page optimization, content strategy, editorial planning, competitive analysis
• Analytics: Google Analytics, SEMrush, Ahrefs, HubSpot, content performance tracking
• Industries: SaaS, fintech, e-commerce, healthcare, B2B technology

PROFESSIONAL EXPERIENCE

Senior Content Writer | CloudTech Solutions | Jan 2021 - Present
• Lead blog strategy producing 8-10 SEO-optimized articles monthly; grew organic traffic from 50K to 200K
• Write email nurture campaigns achieving 42% average open rate and 12% click-through rate
• Create sales enablement content including case studies, one-pagers, and competitive battlecards
• Collaborate with demand gen team on content strategy generating 500+ MQLs quarterly
• Interview customers and subject matter experts to create authentic, authoritative content

Content Writer | GrowthAgency | Jun 2018 - Dec 2020
• Produced 200+ blog posts for 15+ clients across diverse industries
• Improved client organic traffic by average of 150% within 6 months
• Wrote website copy for 30+ client websites and landing pages
• Managed editorial calendar and content workflow for team of 5 writers

Freelance Writer | Self-Employed | Jan 2016 - May 2018
• Contributed articles to publications including TechCrunch, Forbes, and Inc.
• Built portfolio covering technology, entrepreneurship, and digital marketing
• Developed expertise in SEO best practices and content marketing strategy

EDUCATION
B.A. English | University of Oregon | 2015
Minor: Journalism

PORTFOLIO
emmawilsonwrites.com/portfolio`}</pre>
        </div>
      </section>

      <section id="faq"
003e
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6"
003e
          <div>
            <h3>Should I include writing samples with my resume?</h3>
            <p>
              Include a link to your portfolio rather than attaching samples. Your resume should be 
              clean and scannable. Make sure your portfolio is well-organized with your best work 
              prominently featured and easily accessible.
            </p>
          </div>
          
          <div>
            <h3>How do I show SEO skills on my resume?</h3>
            <p>
              Include specific SEO achievements: "Increased organic traffic by X%," "Ranked #1 for 
              [keyword]," or "Improved click-through rates by X%." List SEO tools you're proficient 
              with and mention any SEO certifications you hold.
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
