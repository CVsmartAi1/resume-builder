import { ArticleLayout } from '@/components/marketing';
import { User, Wifi, Laptop } from 'lucide-react';

export const metadata = {
  title: 'Remote Worker Resume Example | Virtual Position Sample',
  description: 'View a remote worker resume example. Learn how to showcase remote collaboration skills and independent work experience.',
};

export default function RemoteWorkerExample() {
  return (
    <ArticleLayout
      title="Remote Worker Resume Example"
      description="View a remote worker resume example. Learn how to showcase remote collaboration skills and independent work experience."
      keywords={['remote worker resume example', 'virtual resume sample']}
      heroTitle="Remote Worker Resume Example"
      heroSubtitle="Work from anywhere, succeed everywhere"
      heroIcon={<Wifi className="h-10 w-10 text-white" />}
      heroGradient="blue"
      toc={[{ id: 'example', title: 'Full Example' }]}
      publishDate="2025-01-21"
      readTime="5 min read"
      authorName="Career Expert Team"
    >
      <section id="example">
        <h2>Remote Worker Resume Example</h2>
        
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8 my-8 shadow-lg">
          <div className="text-center border-b pb-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900">EMMA CHEN</h1>
            <p className="text-gray-600 mt-2">Remote Content Strategist | emma.chen@email.com | Remote (PST Timezone)</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-500 pb-1 mb-3">PROFESSIONAL SUMMARY</h2>
            <p className="text-gray-700">Experienced Content Strategist with 4+ years working remotely for distributed teams. Proven ability to collaborate across time zones, manage projects independently, and deliver high-quality content. Expert in digital communication and async workflows.</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-500 pb-1 mb-3">REMOTE WORK SKILLS</h2>
            <p className="text-gray-700"><strong>Collaboration:</strong> Slack, Zoom, Microsoft Teams, Loom</p>
            <p className="text-gray-700"><strong>Project Management:</strong> Asana, Notion, Trello, Monday.com</p>
            <p className="text-gray-700"><strong>Time Management:</strong> Self-directed, results-oriented, disciplined</p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-500 pb-1 mb-3">PROFESSIONAL EXPERIENCE</h2>
            
            <div className="mb-4">
              <div className="flex justify-between">
                <p className="font-semibold">Content Strategist (Remote) | DigitalFirst Agency</p>
                <p className="text-gray-600 text-sm">2021 - Present</p>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-sm mt-1">
                <li>Collaborate with distributed team of 15 across 4 time zones</li>
                <li>Manage content calendar using Asana and Notion</li>
                <li>Maintain 98% on-time delivery rate working asynchronously</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
