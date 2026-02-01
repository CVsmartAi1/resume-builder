import { ArticleLayout } from '@/components/marketing';
import { Code2, FolderGit2, Award, GraduationCap } from 'lucide-react';

export const metadata = {
  title: 'Software Engineer Resume Example | 2025 Sample',
  description: 'View a complete software engineer resume example with real-world content. See how to showcase technical skills, projects, and achievements effectively.',
};

const toc = [
  { id: 'full-example', title: 'Full Resume Example' },
  { id: 'key-takeaways', title: 'Key Takeaways' },
  { id: 'customization', title: 'How to Customize' },
];

export default function SoftwareEngineerExample() {
  return (
    <ArticleLayout
      title="Software Engineer Resume Example"
      description="View a complete software engineer resume example with real-world content. See how to showcase technical skills, projects, and achievements effectively."
      keywords={['software engineer resume example', 'developer resume sample', 'tech resume example']}
      heroTitle="Software Engineer Resume Example"
      heroSubtitle="See a winning software engineer resume in action"
      heroIcon={<Code2 className="h-10 w-10 text-white" />}
      heroGradient="blue"
      toc={toc}
      publishDate="2025-01-20"
      readTime="5 min read"
      authorName="Alex Chen"
      authorTitle="Technical Recruiter"
    >
      <section id="full-example">
        <h2>Full Software Engineer Resume Example</h2>
        
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8 my-8 shadow-lg">
          <div className="text-center border-b pb-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900">JANE SMITH</h1>
            <p className="text-gray-600 mt-2">Software Engineer | San Francisco, CA | jane.smith@email.com | linkedin.com/in/janesmith | github.com/janesmith</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-500 pb-1 mb-3">PROFESSIONAL SUMMARY</h2>
            <p className="text-gray-700">Results-driven Software Engineer with 5+ years of experience building scalable web applications and distributed systems. Expert in React, Node.js, and cloud architecture. Reduced API latency by 45% and improved system reliability to 99.99% uptime at previous role. Passionate about clean code, performance optimization, and mentoring junior developers.</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-500 pb-1 mb-3">TECHNICAL SKILLS</h2>
            <div className="grid md:grid-cols-2 gap-2 text-gray-700">
              <p><strong>Languages:</strong> JavaScript, TypeScript, Python, Go, SQL</p>
              <p><strong>Frontend:</strong> React, Next.js, Redux, Tailwind CSS, Jest</p>
              <p><strong>Backend:</strong> Node.js, Express, GraphQL, REST APIs</p>
              <p><strong>Cloud &amp; DevOps:</strong> AWS (EC2, Lambda, S3), Docker, Kubernetes, CI/CD</p>
              <p><strong>Databases:</strong> PostgreSQL, MongoDB, Redis, Elasticsearch</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-500 pb-1 mb-3">PROFESSIONAL EXPERIENCE</h2>
            
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-gray-900">Senior Software Engineer | TechCorp Inc.</h3>
                <span className="text-gray-600 text-sm">Jan 2022 - Present</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Architected microservices handling 2M+ daily requests, improving system scalability by 300%</li>
                <li>Led migration from monolith to microservices, reducing deployment time from 4 hours to 15 minutes</li>
                <li>Implemented automated testing suite achieving 90% code coverage, reducing bugs in production by 60%</li>
                <li>Mentored 3 junior developers, conducting code reviews and technical training sessions</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-gray-900">Software Engineer | StartupXYZ</h3>
                <span className="text-gray-600 text-sm">Jun 2019 - Dec 2021</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Developed customer-facing dashboard using React and TypeScript, serving 50,000+ active users</li>
                <li>Built RESTful APIs with Node.js, processing 1M+ transactions daily with &lt;100ms latency</li>
                <li>Implemented real-time notification system using WebSockets, increasing user engagement by 35%</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-500 pb-1 mb-3">PROJECTS</h2>
            <div>
              <p className="font-semibold text-gray-900">Open Source Contributor | React Router | github.com/janesmith</p>
              <ul className="list-disc list-inside text-gray-700 mt-1">
                <li>Contributed 15+ pull requests improving TypeScript definitions and documentation</li>
                <li>Implemented lazy loading feature reducing bundle size by 25%</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-500 pb-1 mb-3">EDUCATION</h2>
            <p className="text-gray-700"><strong>B.S. Computer Science</strong> | University of California, Berkeley | 2019</p>
            <p className="text-gray-600">GPA: 3.8/4.0 | Dean's List | ACM Club President</p>
          </div>
        </div>
      </section>

      <section id="key-takeaways">
        <h2>Key Takeaways</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3>✓ Strong Summary</h3>
            <p>Leads with years of experience, key technologies, and quantified achievements.</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3>✓ Organized Skills>
            <p>Technical skills grouped by category for easy scanning.</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3>✓ Quantified Impact</h3>
            <p>Every bullet point includes metrics: percentages, user counts, time savings.</p>
          </div>
          
          <div className="bg-pink-50 p-4 rounded-lg">
            <h3>✓ Open Source</h3>
            <p>Shows passion and community involvement beyond day job.</p>
          </div>
        </div>
      </section>

      <section id="customization">
        <h2>How to Customize This Example</h2>
        
        <ol>
          <li>Replace technologies with those from the job description</li>
          <li>Adjust metrics to reflect your actual achievements</li>
          <li>Add relevant projects that showcase target skills</li>
          <li>Tailor your summary to match the role requirements</li>
        </ol>
      </section>
    </ArticleLayout>
  );
}
