import { ArticleLayout } from '@/components/marketing';
import { Code2, Lightbulb, Layers, Rocket } from 'lucide-react';

export const metadata = {
  title: 'Tech Resume Guide: How to Write a Standout Technology Resume',
  description: 'Expert guide to writing a tech resume that gets noticed. Tips for software engineers, developers, data scientists, and IT professionals.',
};

const toc = [
  { id: 'overview', title: 'Tech Resume Overview' },
  { id: 'technical-skills', title: 'Showcasing Technical Skills' },
  { id: 'projects', title: 'Projects &amp; Portfolio' },
  { id: 'experience', title: 'Professional Experience' },
  { id: 'education', title: 'Education &amp; Certifications' },
  { id: 'faq', title: 'FAQ' },
];

export default function TechResumeGuide() {
  return (
    <ArticleLayout
      title="Tech Resume Guide: How to Write a Standout Technology Resume"
      description="Expert guide to writing a tech resume that gets noticed. Tips for software engineers, developers, data scientists, and IT professionals."
      keywords={['tech resume', 'software engineer resume', 'developer resume', 'IT resume', 'technology resume guide']}
      heroTitle="Tech Resume Guide"
      heroSubtitle="Code your way to your dream job"
      heroIcon={<Code2 className="h-10 w-10 text-white" />}
      heroGradient="blue"
      toc={toc}
      publishDate="2025-01-20"
      readTime="9 min read"
      authorName="Alex Chen"
      authorTitle="Senior Technical Recruiter"
    >
      <section id="overview">
        <h2>Tech Resume Overview</h2>
        
        <p>
          Tech resumes require a unique approach. Recruiters scan for specific technologies, project impact, 
          and proof of problem-solving abilities. Your resume must balance technical depth with business impact 
          while remaining scannable by both humans and ATS systems.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg my-6">
          <h3 className="text-blue-900">What Makes Tech Resumes Different</h3>
          
          <ul className="text-blue-800 mt-2">
            <li>Technical skills section is critical and often first to be scanned</li>
            <li>Projects often matter as much as professional experience</li>
            <li>GitHub/portfolio links are expected</li>
            <li>Quantified impact (scale, performance, business value) is essential</li>
          </ul>
        </div>
      </section>

      <section id="technical-skills">
        <h2>Showcasing Technical Skills</h2>
        
        <p>Organize your technical skills by category for maximum impact:</p>
        
        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <h3>Recommended Skills Categories</h3>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div>
              <h4>Languages</h4>
              <p className="text-gray-600">Python, JavaScript, Java, Go, Rust, TypeScript, etc.</p>
            </div>
            
            <div>
              <h4>Frameworks &amp; Libraries</h4>
              <p className="text-gray-600">React, Node.js, Django, Spring, TensorFlow, etc.</p>
            </div>
            
            <div>
              <h4>Databases</h4>
              <p className="text-gray-600">PostgreSQL, MongoDB, Redis, Elasticsearch, etc.</p>
            </div>
            
            <div>
              <h4>Cloud &amp; DevOps</h4>
              <p className="text-gray-600">AWS, Docker, Kubernetes, CI/CD, Terraform, etc.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2>Projects &amp; Portfolio</h2>
        
        <p>For tech roles, projects demonstrate your abilities in ways job descriptions can't:</p>
        
        <ul>
          <li><strong>Include live links:</strong> GitHub repos, deployed apps, portfolio sites</li>
          <li><strong>Describe the problem:</strong> What did you build and why?</li>
          <li><strong>Highlight technologies:</strong> Which tools did you use and learn?</li>
          <li><strong>Show impact:</strong> Users, performance improvements, or technical achievements</li>
        </ul>
      </section>

      <section id="experience">
        <h2>Professional Experience</h2>
        
        <p>Focus on impact, scale, and complexity:</p>
        
        <div className="bg-green-50 p-6 rounded-lg my-6">
          <h3 className="text-green-900">Strong Example</h3>
          <p className="text-green-800 mt-2">
            "Architected microservices infrastructure handling 2M+ daily requests, reducing latency 
            by 40% and improving system availability to 99.99%"
          </p>
        </div>
        
        <div className="bg-red-50 p-6 rounded-lg">
          <h3 className="text-red-900">Weak Example</h3>
          <p className="text-red-800 mt-2">
            "Responsible for backend development and database management"
          </p>
        </div>
      </section>

      <section id="education">
        <h2>Education &amp; Certifications</h2>
        
        <p>Include relevant certifications that demonstrate expertise:</p>
        
        <ul>
          <li>Cloud certifications (AWS, Azure, GCP)</li>
          <li>Language-specific certifications</li>
          <li>Project management (PMP, Scrum)</li>
          <li>Security certifications (CISSP, Security+)</li>
        </ul>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3>Should I include all programming languages I know?</h3>
            <p>Only include languages you're comfortable being interviewed in. Listing languages you barely know can backfire during technical interviews.</p>
          </div>
          
          <div>
            <h3>How important is my GitHub profile?</h3>
            <p>Very important for developers. Ensure your profile is professional with pinned repositories, clear READMEs, and quality code.</p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
