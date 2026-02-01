import { ArticleLayout } from '@/components/marketing';
import { Crown, Target, Award, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Executive Resume Example | C-Level &amp; Leadership Sample',
  description: 'View a powerful executive resume example. Learn how senior leaders showcase strategic vision, P&amp;L responsibility, and organizational impact.',
};

export default function ExecutiveExample() {
  return (
    <ArticleLayout
      title="Executive Resume Example"
      description="View a powerful executive resume example. Learn how senior leaders showcase strategic vision, P&amp;L responsibility, and organizational impact."
      keywords={['executive resume example', 'CEO resume', 'C-level resume', 'leadership resume sample']}
      heroTitle="Executive Resume Example"
      heroSubtitle="Lead with impact and vision"
      heroIcon={<Crown className="h-10 w-10 text-white" />}
      heroGradient="purple"
      toc={[{ id: 'example', title: 'Full Example' }, { id: 'strategy', title: 'Executive Strategy' }]}
      publishDate="2025-01-21"
      readTime="5 min read"
      authorName="Career Expert Team"
    >
      <section id="example">
        <h2>Full Executive Resume Example</h2>
        
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8 my-8 shadow-lg">
          <div className="text-center border-b pb-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900">MICHAEL R. THOMPSON</h1>
            <p className="text-gray-600 mt-2">Chief Operating Officer | New York, NY | michael.thompson@email.com | 555-987-6543</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-purple-500 pb-1 mb-3">EXECUTIVE SUMMARY</h2>
            <p className="text-gray-700">Visionary operations executive with 20+ years driving transformational growth for Fortune 500 companies. Proven track record of scaling operations, optimizing supply chains, and delivering $100M+ cost savings. Expert in M&amp;A integration, digital transformation, and building high-performance cultures. P&amp;L responsibility for $500M+ business units.</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-purple-500 pb-1 mb-3">CORE COMPETENCIES</h2>
            <p className="text-gray-700"><strong>Leadership:</strong> C-Suite Advisory | Board Relations | Change Management | Organizational Design | Talent Development</p>
            <p className="text-gray-700"><strong>Operations:</strong> Supply Chain Optimization | Lean Six Sigma | Global Manufacturing | Quality Assurance | Vendor Management</p>
            <p className="text-gray-700"><strong>Strategic:</strong> M&amp;A Integration | Digital Transformation | Market Expansion | Cost Reduction | Process Improvement</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-purple-500 pb-1 mb-3">PROFESSIONAL EXPERIENCE</h2>
            
            <div className="mb-6">
              <div className="flex justify-between">
                <p className="font-bold text-lg">Chief Operating Officer | Global Manufacturing Corp</p>
                <p className="text-gray-600">2018 - Present</p>
              </div>
              <p className="text-gray-600 italic">$2B global manufacturer with 5,000+ employees across 12 countries</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Lead global operations, supply chain, manufacturing, and quality for $2B business unit</li>
                <li>Delivered $150M cost savings through Lean Six Sigma and digital transformation initiatives</li>
                <li>Improved on-time delivery from 85% to 98% while reducing inventory by 25%</li>
                <li>Led post-merger integration of 3 acquisitions, retaining 95% of key talent</li>
                <li>Built executive leadership team and reduced turnover by 40% through culture transformation</li>
                <li>Serve on Executive Committee and report directly to CEO</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between">
                <p className="font-bold text-lg">VP of Operations | Industrial Solutions Inc</p>
                <p className="text-gray-600">2012 - 2018</p>
              </div>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Managed 2,000-person manufacturing organization with $800M revenue</li>
                <li>Implemented ERP system across 8 facilities, improving data accuracy by 40%</li>
                <li>Led sustainability initiative reducing carbon footprint by 30%</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-purple-500 pb-1 mb-3">EDUCATION</h2>
            <p className="text-gray-700"><strong>MBA, Operations Management</strong> | Harvard Business School</p>
            <p className="text-gray-700"><strong>BS, Industrial Engineering</strong> | MIT</p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-purple-500 pb-1 mb-3">BOARD &amp; AFFILIATIONS</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Board Member, Manufacturing Leadership Council (2020-Present)</li>
              <li>Advisory Board, Supply Chain Innovation Institute</li>
              <li>Keynote Speaker, National Operations Summit 2022, 2023</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="strategy">
        <h2>Executive Resume Strategy</h2>
        
        <ul>
          <li><strong>Lead with scope:</strong> Show P&amp;L, team size, and geographic responsibility</li>
          <li><strong>Focus on strategy:</strong> Highlight transformation, M&amp;A, and board experience</li>
          <li><strong>Quantify impact:</strong> Millions in savings, percentage improvements, market expansion</li>
          <li><strong>Two pages are standard:</strong> Senior executives need space for comprehensive experience</li>
          <li><strong>Include board roles:</strong> Show external validation and thought leadership</li>
        </ul>
      </section>
    </ArticleLayout>
  );
}
