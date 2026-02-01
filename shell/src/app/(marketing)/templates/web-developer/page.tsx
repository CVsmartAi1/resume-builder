import { ArticleLayout } from '@/components/marketing';
import { TemplateShowcase } from '@/components/marketing/TemplateShowcase';
import { Globe, Code2, Layout, Zap } from 'lucide-react';

export const metadata = {
  title: 'Web Developer Resume Template | ATS-Friendly Format',
  description: 'Create a professional web developer resume with our ATS-friendly template. Showcase your front-end, back-end, and full-stack development skills.',
};

const toc = [
  { id: 'overview', title: 'Template Overview' },
  { id: 'key-sections', title: 'Key Sections' },
  { id: 'tips', title: 'Writing Tips for Web Developers' },
  { id: 'keywords', title: 'Essential Keywords' },
  { id: 'example', title: 'Resume Example' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function WebDeveloperTemplate() {
  return (
    <ArticleLayout
      title="Web Developer Resume Template"
      description="Create a professional web developer resume with our ATS-friendly template. Showcase your front-end, back-end, and full-stack development skills."
      keywords={['web developer resume', 'frontend developer resume', 'full stack resume', 'javascript developer resume']}
      heroTitle="Web Developer Resume Template"
      heroSubtitle="Code your way to the perfect job"
      heroIcon={<Globe className="h-10 w-10 text-white" />}
      heroGradient="blue"
      toc={toc}
      publishDate="2025-01-15"
      readTime="7 min read"
      authorName="Ryan Chen"
      authorTitle="Technical Recruiter"
    >
      <section id="overview">
        <p className="lead text-xl text-gray-600 mb-6">
          Web developers build the digital experiences that power modern business. Your resume must 
          showcase your technical skills, portfolio of work, problem-solving abilities, and experience 
          with modern web technologies and frameworks.
        </p>
        
        <div className="my-8">
          <TemplateShowcase role="Web Developer" accentColor="bg-blue-600" />
        </div>
      </section>

      <section id="key-sections">
        <h2>Essential Resume Sections for Web Developers</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-blue-600" />
              Technical Skills
            </h3>
            <p>
              Organize by category: Frontend (HTML, CSS, JavaScript, React), Backend (Node.js, Python, PHP), 
              Databases (SQL, MongoDB), and Tools (Git, Docker, AWS). Tailor to match job requirements.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="flex items-center gap-2">
              <Layout className="h-5 w-5 text-purple-600" />
              Portfolio &amp; Projects
            </h3>
            <p>
              Include links to live sites, GitHub repositories, and portfolio. Show both professional 
              work and personal projects that demonstrate your skills and passion for development.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-green-600" />
              Performance &amp; Impact
            </h3>
            <p>
              Quantify your development impact: page load improvements, conversion rate increases, 
              accessibility enhancements, and feature delivery speed.
            </p>
          </div>
        </div>
      </section>

      <section id="tips"
003e
        <h2>Expert Writing Tips for Web Developers</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3>Show Technical Impact</h3>
            <ul>
              <li>"Improved page load speed by 60% through optimization"</li>
              <li>"Built responsive site serving 1M+ monthly visitors"</li>
              <li>"Implemented accessibility improvements achieving WCAG 2.1 AA"</li>
              <li>"Reduced bundle size by 40% with code splitting"</li>
            </ul>
          </div>
          
          <div>
            <h3>Highlight Collaboration</h3>
            <ul>
              <li>Working with designers on UI/UX implementation</li>
              <li>Code reviews and mentoring junior developers</li>
              <li>Agile/Scrum team participation</li>
              <li>Cross-functional communication</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="keywords">
        <h2>Essential Keywords for Web Developer Resumes</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
            <div className="flex flex-wrap gap-2">
              {['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue', 'Angular', 'TypeScript', 'Tailwind'].map(k => (
                <span key={k} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Python', 'PHP', 'Ruby', 'Express', 'Django', 'REST API', 'GraphQL'].map(k => (
                <span key={k} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Tools</h4>
            <div className="flex flex-wrap gap-2">
              {['Git', 'GitHub', 'Docker', 'AWS', 'Vercel', 'Figma', 'Jest', 'Webpack'].map(k => (
                <span key={k} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="example">
        <h2>Web Developer Resume Example</h2>
        
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
          <pre>{`ALEX RIVERA
Full Stack Web Developer | Austin, TX | alex.r@email.com | alexrivera.dev

PROFESSIONAL SUMMARY
Creative Full Stack Developer with 4+ years building modern web applications. Expert in React, 
Node.js, and cloud technologies. Passionate about performance, accessibility, and user experience. 
Track record of delivering scalable solutions serving 100K+ users.

TECHNICAL SKILLS
• Frontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Accessibility (A11y)
• Backend: Node.js, Express, PostgreSQL, MongoDB, GraphQL, REST APIs
• Cloud & DevOps: AWS (S3, Lambda, RDS), Vercel, Docker, CI/CD, GitHub Actions
• Tools: Git, Figma, Jest, React Testing Library, Cypress, Storybook

PROFESSIONAL EXPERIENCE

Full Stack Developer | Digital Agency Co. | Mar 2021 - Present
• Develop full-stack applications for 20+ clients using React, Node.js, and PostgreSQL
• Lead frontend architecture decisions improving performance scores to 95+ Lighthouse
• Build e-commerce platform processing $2M+ in annual transactions
• Implement design systems used across 10+ projects ensuring UI consistency
• Mentor 3 junior developers through code reviews and pair programming
• Optimize Core Web Vitals resulting in 40% improvement in page load times

Frontend Developer | StartupXYZ | Jun 2019 - Feb 2021
• Built responsive marketing site increasing conversion rate by 35%
• Implemented component library reducing development time by 30%
• Integrated headless CMS enabling content team to manage 500+ pages
• Achieved WCAG 2.1 AA accessibility compliance across all properties

Junior Web Developer | WebSolutions Inc. | Aug 2018 - May 2019
• Developed 15+ client websites using HTML, CSS, JavaScript, and WordPress
• Customized themes and plugins to meet client requirements
• Collaborated with design team on UI/UX implementation

PROJECTS
Personal Portfolio | Next.js, Tailwind, MDX | alexrivera.dev
• Built portfolio site with blog, achieving 100 Lighthouse performance score
• Implemented ISR for fast page loads and SEO optimization

EDUCATION
B.S. Computer Science | University of Texas at Austin | 2018

PORTFOLIO
alexrivera.dev | github.com/alexrivera`}</pre>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3>Should web developers include a portfolio link?</h3>
            <p>
              Absolutely! Your portfolio is as important as your resume. Include live project links, 
              GitHub repositories, and a link to your portfolio website. Make sure projects load 
              quickly and work on mobile devices.
            </p>
          </div>
          
          <div>
            <h3>Do I need to know both frontend and backend to get hired?</h3>
            <p>
              Not necessarily. Many developers specialize. However, having some knowledge of the full 
              stack makes you more versatile. Tailor your resume to the job description—if they want 
              a React developer, emphasize your frontend skills while mentioning backend exposure.
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
