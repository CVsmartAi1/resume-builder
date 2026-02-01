import { ArticleLayout } from '@/components/marketing';
import { User, Sparkles, Target, Briefcase } from 'lucide-react';

export const metadata = {
  title: 'Entry-Level Resume Example | Sample for New Grads',
  description: 'View a complete entry-level resume example. See how recent graduates showcase education, internships, and skills to land their first job.',
};

export default function EntryLevelExample() {
  return (
    <ArticleLayout
      title="Entry-Level Resume Example"
      description="View a complete entry-level resume example. See how recent graduates showcase education, internships, and skills to land their first job."
      keywords={['entry level resume example', 'new grad resume sample', 'first job resume', 'recent graduate resume']}
      heroTitle="Entry-Level Resume Example"
      heroSubtitle="Launch your career with a strong first impression"
      heroIcon={<User className="h-10 w-10 text-white" />}
      heroGradient="blue"
      toc={[{ id: 'example', title: 'Full Example' }, { id: 'tips', title: 'Key Tips' }]}
      publishDate="2025-01-21"
      readTime="5 min read"
      authorName="Career Expert Team"
    >
      <section id="example">
        <h2>Full Entry-Level Resume Example</h2>
        
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8 my-8 shadow-lg">
          <div className="text-center border-b pb-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900">SARAH JOHNSON</h1>
            <p className="text-gray-600 mt-2">Boston, MA | sarah.j@email.com | 555-123-4567 | linkedin.com/in/sarahj</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-500 pb-1 mb-3">EDUCATION</h2>
            <div>
              <p className="font-semibold">Bachelor of Science in Marketing</p>
              <p className="text-gray-600">Boston University | Graduated: May 2024</p>
              <p className="text-gray-600">GPA: 3.7/4.0 | Dean's List | Marketing Club President</p>
              <p className="text-sm text-gray-500 mt-1">Relevant Coursework: Digital Marketing, Consumer Behavior, Marketing Analytics, Brand Management</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-500 pb-1 mb-3">EXPERIENCE</h2>
            
            <div className="mb-4">
              <div className="flex justify-between">
                <p className="font-semibold">Marketing Intern | TechStart Inc.</p>
                <p className="text-gray-600 text-sm">Jun 2023 - Aug 2023</p>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-sm mt-1">
                <li>Assisted with social media campaigns that increased engagement by 35%</li>
                <li>Created content calendar for 4 social platforms using Hootsuite</li>
                <li>Analyzed campaign performance using Google Analytics and prepared weekly reports</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between">
                <p className="font-semibold">Student Ambassador | Boston University</p>
                <p className="text-gray-600 text-sm">Sep 2022 - May 2024</p>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-sm mt-1">
                <li>Led campus tours for 500+ prospective students and families</li>
                <li>Represented the university at recruitment events and college fairs</li>
                <li>Trained 15 new student ambassadors on presentation and communication skills</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-500 pb-1 mb-3">PROJECTS</h2>
            <div>
              <p className="font-semibold">Digital Marketing Campaign Project</p>
              <ul className="list-disc list-inside text-gray-700 text-sm mt-1">
                <li>Developed comprehensive marketing plan for local business as capstone project</li>
                <li>Created social media strategy, email campaign, and content calendar</li>
                <li>Presented recommendations to client; 80% of strategies implemented</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-500 pb-1 mb-3">SKILLS</h2>
            <p className="text-gray-700 text-sm"><strong>Marketing:</strong> Social Media Marketing, Content Creation, Email Marketing, SEO Basics, Google Analytics</p>
            <p className="text-gray-700 text-sm"><strong>Tools:</strong> Hootsuite, Mailchimp, Canva, Adobe Creative Suite, Microsoft Office</p>
            <p className="text-gray-700 text-sm"><strong>Languages:</strong> English (Native), Spanish (Conversational)</p>
          </div>
        </div>
      </section>

      <section id="tips">
        <h2>Key Tips for Entry-Level Resumes</h2>
        
        <ul>
          <li><strong>Lead with education:</strong> Your degree is your strongest credential at this stage</li>
          <li><strong>Include internships:</strong> Treat them like professional experience</li>
          <li><strong>Add projects:</strong> Academic projects demonstrate applied skills</li>
          <li><strong>Highlight leadership:</strong> Clubs, sports, and volunteer roles show initiative</li>
          <li><strong>Keep it to one page:</strong> Concise and focused is better for entry-level</li>
        </ul>
      </section>
    </ArticleLayout>
  );
}
