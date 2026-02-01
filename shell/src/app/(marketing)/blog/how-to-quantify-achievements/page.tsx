import { ArticleLayout } from '@/components/marketing';
import { TrendingUp, BarChart3, Target, DollarSign } from 'lucide-react';

export const metadata = {
  title: 'How to Quantify Achievements on Your Resume',
  description: 'Learn how to add numbers and metrics to your resume achievements. Transform vague statements into compelling, quantified accomplishments.',
};

const toc = [
  { id: 'why-quantify', title: 'Why Quantification Matters' },
  { id: 'types', title: 'Types of Metrics to Use' },
  { id: 'examples', title: 'Before and After Examples' },
  { id: 'how-to', title: 'How to Find Your Numbers' },
];

export default function QuantifyAchievementsArticle() {
  return (
    <ArticleLayout
      title="How to Quantify Achievements on Your Resume"
      description="Learn how to add numbers and metrics to your resume achievements. Transform vague statements into compelling, quantified accomplishments."
      keywords={['quantify achievements', 'resume metrics', 'resume numbers', 'measurable achievements']}
      heroTitle="How to Quantify Achievements"
      heroSubtitle="Make your impact measurable and memorable"
      heroIcon={<TrendingUp className="h-10 w-10 text-white" />}
      heroGradient="green"
      toc={toc}
      publishDate="2025-01-22"
      readTime="7 min read"
      authorName="Career Expert Team"
    >
      <section id="why-quantify">
        <h2>Why Quantification Matters</h2>
        
        <p>
          Numbers provide concrete evidence of your abilities. "Increased sales by 50%" is far more 
          compelling than "Responsible for sales growth." Quantified achievements:
        </p>
        
        <ul className="my-4">
          <li>Catch recruiters' attention in the 6-second scan</li>
          <li>Provide context for the scope of your work</li>
          <li>Differentiate you from other candidates</li>
          <li>Demonstrate business impact and value</li>
        </ul>
      </section>

      <section id="types">
        <h2>Types of Metrics to Use</h2>
        
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3>Financial</h3>
            <p className="text-sm">Revenue generated, costs reduced, budget managed, ROI achieved</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3>Time</h3>
            <p className="text-sm">Process time reduced, deadlines met early, faster delivery</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3>Scale</h3>
            <p className="text-sm">Team size, project budget, number of customers, territory size</p>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3>Quality</h3>
            <p className="text-sm">Error rates reduced, satisfaction scores, accuracy rates</p>
          </div>
        </div>
      </section>

      <section id="examples">
        <h2>Before and After Examples</h2>
        
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-red-800">❌ "Managed social media accounts"</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-800">✓ "Grew Instagram following from 5K to 50K in 6 months, increasing engagement by 150%"</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-red-800">❌ "Led a team of developers"</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-800">✓ "Led team of 8 engineers to deliver $2M project 3 weeks ahead of schedule"</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-to">
        <h2>How to Find Your Numbers</h2>
        
        <ol>
          <li><strong>Review performance reviews</strong> — Look for metrics mentioned</li>
          <li><strong>Check company reports</strong> — Find project budgets and team sizes</li>
          <li><strong>Estimate if needed</strong> — "Approximately 50+ clients" or "Over $1M in sales"</li>
          <li><strong>Use percentages</strong> — When exact numbers aren't available</li>
          <li><strong>Show frequency>/strong> — "50+ tickets daily" or "Monthly presentations to executives"</li>
        </ol>
      </section>
    </ArticleLayout>
  );
}
