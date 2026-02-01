import { ArticleLayout } from '@/components/marketing';
import { TemplateShowcase } from '@/components/marketing/TemplateShowcase';
import { Code2, Lightbulb, Target, Zap } from 'lucide-react';

export const metadata = {
  title: 'Software Engineer Resume Template | ATS-Friendly Format',
  description: 'Create a professional software engineer resume with our ATS-friendly template. Includes tips on showcasing technical skills, projects, and achievements.',
};

const toc = [
  { id: 'overview', title: 'Template Overview' },
  { id: 'key-sections', title: 'Key Sections' },
  { id: 'tips', title: 'Writing Tips for Software Engineers' },
  { id: 'keywords', title: 'Essential Keywords' },
  { id: 'example', title: 'Resume Example' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

const relatedArticles = [
  {
    title: 'Technical Resume Guide',
    href: '/blog/technical-resume-guide',
    description: 'Expert tips for creating technical resumes that stand out.',
  },
  {
    title: 'ATS Resume Tips',
    href: '/blog/ats-friendly-resume-tips',
    description: 'Optimize your resume for applicant tracking systems.',
  },
  {
    title: 'How to List Skills',
    href: '/blog/how-to-list-skills',
    description: 'Best practices for showcasing your technical skills.',
  },
];

export default function SoftwareEngineerTemplate() {
  return (
    <ArticleLayout
      title="Software Engineer Resume Template"
      description="Create a professional software engineer resume with our ATS-friendly template. Includes tips on showcasing technical skills, projects, and achievements."
      keywords={['software engineer resume', 'developer resume template', 'ATS resume', 'tech resume', 'programming resume']}
      heroTitle="Software Engineer Resume Template"
      heroSubtitle="Land your dream tech job with a professionally crafted resume"
      heroIcon={<Code2 className="h-10 w-10 text-white" />}
      heroGradient="blue"
      toc={toc}
      publishDate="2025-01-15"
      readTime="8 min read"
      authorName="Alex Chen"
      authorTitle="Senior Technical Recruiter"
      authorBio="Alex has reviewed 10,000+ tech resumes and helped hundreds of engineers land jobs at top tech companies."
      relatedArticles={relatedArticles}
    >
      <section id="overview">
        <p className="lead text-xl text-gray-600 mb-6">
          A well-crafted software engineer resume is your gateway to top tech companies. Our template is designed 
          to highlight your technical expertise, project experience, and problem-solving abilities while ensuring 
          your resume passes through Applicant Tracking Systems (ATS).
        </p>
        
        <div className="my-8">
          <TemplateShowcase role="Software Engineer" accentColor="bg-blue-600" />
        </div>
      </section>

      <section id="key-sections">
        <h2>Essential Resume Sections for Software Engineers</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              Professional Summary
            </h3>
            <p>
              Start with a compelling 2-3 sentence summary that highlights your years of experience, 
              key technologies, and major achievements. Focus on what makes you unique as a developer.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-green-600" />
              Technical Skills
            </h3>
            <p>
              Organize skills by category: Programming Languages, Frameworks &amp; Libraries, 
              Databases, Cloud &amp; DevOps, and Tools. List only technologies you're proficient in.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-purple-600" />
              Professional Experience
            </h3>
            <p>
              For each role, include 3-5 bullet points highlighting achievements with quantifiable metrics. 
              Use the STAR method (Situation, Task, Action, Result) to structure your accomplishments.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-orange-600" />
              Projects
            </h3>
            <p>
              Showcase personal or open-source projects with links to GitHub repositories. 
              Include technologies used, your specific contributions, and measurable impact.
            </p>
          </div>
        </div>
      </section>

      <section id="tips">
        <h2>Expert Writing Tips for Software Engineers</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3>Quantify Your Impact</h3>
            <ul>
              <li>"Reduced API response time by 40% through query optimization"</li>
              <li>"Architected system handling 1M+ daily active users"</li>
              <li>"Decreased deployment time by 60% with CI/CD pipeline"</li>
              <li>"Led team of 5 developers to deliver project 2 weeks early"</li>
            </ul>
          </div>
          
          <div>
            <h3>Highlight Technical Achievements</h3>
            <ul>
              <li>Focus on scale, performance, and reliability improvements</li>
              <li>Mention specific architectural patterns you've implemented</li>
              <li>Include security improvements and best practices</li>
              <li>Show contributions to open-source projects</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg mt-6">
          <h3 className="text-blue-900">Pro Tip: Tailor for Each Application</h3>
          <p className="text-blue-800">
            Customize your resume for each job application by matching keywords from the job description. 
            If the role emphasizes React and TypeScript, make sure those skills are prominently featured 
            in your skills section and professional summary.
          </p>
        </div>
      </section>

      <section id="keywords">
        <h2>Essential Keywords for Software Engineer Resumes</h2>
        
        <p>Include these high-value keywords to improve your ATS score and catch recruiters' attention:</p>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'Python', 'Java', 'C++', 'Go', 'Rust', 'TypeScript', 'Ruby', 'PHP', 'Swift'].map(lang => (
                <span key={lang} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{lang}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Frameworks</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'Django', 'Spring', 'Angular', 'Vue.js', 'Express', 'Flask', '.NET', 'Rails'].map(fw => (
                <span key={fw} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{fw}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['AWS', 'Docker', 'Kubernetes', 'Git', 'SQL', 'MongoDB', 'Redis', 'GraphQL', 'CI/CD', 'Microservices'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="example">
        <h2>Software Engineer Resume Example</h2>
        
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
          <pre>{`JANE SMITH
Software Engineer | San Francisco, CA | jane.smith@email.com | linkedin.com/in/janesmith

PROFESSIONAL SUMMARY
Results-driven Software Engineer with 5+ years of experience building scalable web applications 
and distributed systems. Expert in React, Node.js, and cloud architecture. Reduced API latency 
by 45% and improved system reliability to 99.99% uptime at previous role.

TECHNICAL SKILLS
• Languages: JavaScript, TypeScript, Python, Go, SQL
• Frontend: React, Next.js, Redux, Tailwind CSS, Jest
• Backend: Node.js, Express, GraphQL, REST APIs
• Cloud & DevOps: AWS (EC2, Lambda, S3), Docker, Kubernetes, CI/CD
• Databases: PostgreSQL, MongoDB, Redis, Elasticsearch

PROFESSIONAL EXPERIENCE

Senior Software Engineer | TechCorp Inc. | Jan 2022 - Present
• Architected microservices handling 2M+ daily requests, improving system scalability by 300%
• Led migration from monolith to microservices, reducing deployment time from 4 hours to 15 minutes
• Implemented automated testing suite achieving 90% code coverage, reducing bugs in production by 60%
• Mentored 3 junior developers, conducting code reviews and technical training sessions

Software Engineer | StartupXYZ | Jun 2019 - Dec 2021
• Developed customer-facing dashboard using React and TypeScript, serving 50,000+ active users
• Built RESTful APIs with Node.js, processing 1M+ transactions daily with <100ms latency
• Implemented real-time notification system using WebSockets, increasing user engagement by 35%

PROJECTS
Open Source Contributor | React Router | github.com/janesmith
• Contributed 15+ pull requests improving TypeScript definitions and documentation
• Implemented lazy loading feature reducing bundle size by 25%

EDUCATION
B.S. Computer Science | University of California, Berkeley | 2019
GPA: 3.8/4.0 | Dean's List | ACM Club President`}</pre>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3>How long should a software engineer resume be?</h3>
            <p>
              For engineers with less than 10 years of experience, aim for a one-page resume. 
              Senior engineers with extensive experience may use two pages, but ensure every 
              line adds value. Recruiters typically spend 6-10 seconds on the initial scan.
            </p>
          </div>
          
          <div>
            <h3>Should I include all programming languages I know?</h3>
            <p>
              Only include languages you're comfortable being interviewed in. Listing languages 
              you barely know can backfire during technical interviews. Focus on the technologies 
              most relevant to the job you're applying for.
            </p>
          </div>
          
          <div>
            <h3>How important are personal projects for entry-level developers?</h3>
            <p>
              Very important! Personal projects demonstrate initiative, passion, and practical 
              coding ability. Include projects that showcase different skills—frontend, backend, 
              and full-stack. Always include links to GitHub repositories and live demos if available.
            </p>
          </div>
          
          <div>
            <h3>Should I include my GitHub profile on my resume?</h3>
            <p>
              Yes, if you have active repositories with quality code. Before applying, clean up 
              your GitHub profile—pin your best projects, write clear READMEs, and ensure your 
              code follows best practices. A strong GitHub presence can significantly boost your application.
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
