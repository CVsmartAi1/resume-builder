import { ArticleLayout } from '@/components/marketing';
import { GraduationCap, BookOpen, Users } from 'lucide-react';

export const metadata = {
  title: 'Internship Resume Example | Student &amp; Intern Sample',
  description: 'View an internship resume example. Learn how students can showcase education, projects, and extracurricular activities to land internships.',
};

export default function InternshipResumeExample() {
  return (
    <ArticleLayout
      title="Internship Resume Example"
      description="View an internship resume example. Learn how students can showcase education, projects, and extracurricular activities to land internships."
      keywords={['internship resume example', 'student resume sample', 'intern resume']}
      heroTitle="Internship Resume Example"
      heroSubtitle="Launch your career with an internship"
      heroIcon={<GraduationCap className="h-10 w-10 text-white" />}
      heroGradient="blue"
      toc={[{ id: 'example', title: 'Full Example' }]}
      publishDate="2025-01-21"
      readTime="5 min read"
      authorName="Career Expert Team"
    >
      <section id="example">
        <h2>Internship Resume Example</h2>
        
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8 my-8 shadow-lg">
          <div className="text-center border-b pb-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900">JAMES WILSON</h1>
            <p className="text-gray-600 mt-2">Computer Science Student | Ann Arbor, MI | james.w@email.com</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-500 pb-1 mb-3">EDUCATION</h2>
            <div>
              <p className="font-semibold">B.S. Computer Science | University of Michigan</p>
              <p className="text-gray-600">Expected Graduation: May 2026 | GPA: 3.7/4.0</p>
              <p className="text-gray-600">Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-500 pb-1 mb-3">PROJECTS</h2>
            
            <div className="mb-3">
              <p className="font-semibold">E-Commerce Website | Personal Project</p>
              <ul className="list-disc list-inside text-gray-700 text-sm mt-1">
                <li>Built full-stack e-commerce app using React, Node.js, and MongoDB</li>
                <li>Implemented user authentication, shopping cart, and payment processing</li>
                <li>Deployed on AWS with CI/CD pipeline using GitHub Actions</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-500 pb-1 mb-3">EXPERIENCE</h2>
            
            <div className="mb-3">
              <p className="font-semibold">Teaching Assistant | University of Michigan</p>
              <ul className="list-disc list-inside text-gray-700 text-sm mt-1">
                <li>Assist 50+ students with introductory programming concepts</li>
                <li>Grade assignments and provide constructive feedback</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-500 pb-1 mb-3">SKILLS &amp; ACTIVITIES</h2>
            <p className="text-gray-700"><strong>Technical:</strong> JavaScript, Python, React, Node.js, SQL, Git</p>
            <p className="text-gray-700"><strong>Activities:</strong> ACM Club Member, Hackathon Participant (2nd place, 2024)</p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
