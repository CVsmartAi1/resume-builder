import { ArticleLayout } from '@/components/marketing';
import { User, Star, Briefcase, Globe } from 'lucide-react';

export const metadata = {
  title: 'Freelance Resume Example | Contractor &amp; Self-Employed Sample',
  description: 'View a freelance resume example. Learn how self-employed professionals showcase client work, projects, and independent business skills.',
};

export default function FreelanceResumeExample() {
  return (
    <ArticleLayout
      title="Freelance Resume Example"
      description="View a freelance resume example. Learn how self-employed professionals showcase client work, projects, and independent business skills."
      keywords={['freelance resume example', 'contractor resume', 'self-employed resume sample']}
      heroTitle="Freelance Resume Example"
      heroSubtitle="Showcase your independent success"
      heroIcon={<Briefcase className="h-10 w-10 text-white" />}
      heroGradient="teal"
      toc={[{ id: 'example', title: 'Full Example' }]}
      publishDate="2025-01-21"
      readTime="5 min read"
      authorName="Career Expert Team"
    >
      <section id="example">
        <h2>Freelance Resume Example</h2>
        
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8 my-8 shadow-lg">
          <div className="text-center border-b pb-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900">SOFIA MARTINEZ</h1>
            <p className="text-gray-600 mt-2">Freelance Graphic Designer | sofia.m@email.com | sofiamartinez.design</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-teal-500 pb-1 mb-3">PROFESSIONAL SUMMARY</h2>
            <p className="text-gray-700">Creative Graphic Designer with 6+ years of freelance experience serving 50+ clients across tech, retail, and hospitality industries. Expert in brand identity, print design, and digital marketing materials. Managed full project lifecycle from concept to delivery while maintaining 95% client satisfaction rate.</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-teal-500 pb-1 mb-3">FREELANCE EXPERIENCE</h2>
            
            <div className="mb-4">
              <p className="font-semibold">Freelance Graphic Designer | Self-Employed | 2019 - Present</p>
              <ul className="list-disc list-inside text-gray-700 text-sm mt-1">
                <li>Serve 50+ clients across branding, print, and digital design projects</li>
                <li>Manage 15-20 concurrent projects with 100% on-time delivery</li>
                <li>Built recurring client base generating $80K+ annual revenue</li>
                <li>Designed brand identity for 3 startups that raised $2M+ in funding</li>
                <li>Collaborate with marketing agencies on white-label design projects</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-teal-500 pb-1 mb-3">SELECTED CLIENTS &amp; PROJECTS</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-medium">TechStartup Inc.</p>
                <p className="text-sm text-gray-600">Complete brand identity including logo, website, and marketing materials</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-medium">Restaurant Group</p>
                <p className="text-sm text-gray-600">Menu design, signage, and social media graphics for 5 locations</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-teal-500 pb-1 mb-3">SKILLS &amp; TOOLS</h2>
            <p className="text-gray-700"><strong>Design:</strong> Brand Identity, Print Design, Packaging, Social Media Graphics</p>
            <p className="text-gray-700"><strong>Software:</strong> Adobe Creative Suite, Figma, Canva, InVision</p>
            <p className="text-gray-700"><strong>Business:</strong> Client Management, Project Estimation, Invoicing, Contract Negotiation</p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
