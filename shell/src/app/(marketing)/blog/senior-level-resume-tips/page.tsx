import { ArticleLayout } from '@/components/marketing';
import { Star, Award, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Senior-Level Resume Tips: Executive Resume Writing Guide',
  description: 'Expert tips for writing senior-level and executive resumes. Showcase leadership, strategic vision, and organizational impact.',
};

export default function SeniorLevelResumeTips() {
  return (
    <ArticleLayout
      title="Senior-Level Resume Tips"
      description="Expert tips for writing senior-level and executive resumes. Showcase leadership, strategic vision, and organizational impact."
      keywords={['senior level resume', 'executive resume', 'leadership resume', 'management resume tips']}
      heroTitle="Senior-Level Resume Tips"
      heroSubtitle="Position yourself for executive success"
      heroIcon={<Star className="h-10 w-10 text-white" />}
      heroGradient="purple"
      toc={[{ id: 'strategy', title: 'Senior Resume Strategy' }, { id: 'metrics', title: 'Leadership Metrics' }]}
      publishDate="2025-01-24"
      readTime="7 min read"
      authorName="Career Expert Team"
    >
      <section id="strategy">
        <h2>Senior Resume Strategy</h2>
        
        <ul>
          <li><strong>Lead with scope:</strong> Team size, budget responsibility, geographic scope</li>
          <li><strong>Focus on strategy:</strong> Board interactions, M&amp;A, transformation initiatives</li>
          <li><strong>Quantify at scale:</strong> Millions in impact, percentage improvements, market expansion</li>
          <li><strong>Two pages expected:</strong> Senior leaders need space for comprehensive achievements</li>
        </ul>
      </section>

      <section id="metrics">
        <h2>Leadership Metrics to Highlight</h2>
        
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3>Organizational Impact</h3>
            <p>Revenue growth, cost reduction, market share gains, organizational transformation</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3>Team Leadership</h3>
            <p>Team size managed, succession planning, talent development, retention improvements</p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
