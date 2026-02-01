import { ArticleLayout } from '@/components/marketing';
import { Megaphone, TrendingUp, Palette, Target } from 'lucide-react';

export const metadata = {
  title: 'Marketing Resume Guide: Digital, Content &amp; Brand Marketing',
  description: 'Complete guide to writing marketing resumes. Tips for digital marketers, content creators, brand managers, and marketing executives.',
};

export default function MarketingResumeGuide() {
  return (
    <ArticleLayout
      title="Marketing Resume Guide: Digital, Content &amp; Brand Marketing"
      description="Complete guide to writing marketing resumes. Tips for digital marketers, content creators, brand managers, and marketing executives."
      keywords={['marketing resume', 'digital marketing resume', 'content marketing resume', 'brand manager resume']}
      heroTitle="Marketing Resume Guide"
      heroSubtitle="Market yourself for career success"
      heroIcon={<Megaphone className="h-10 w-10 text-white" />}
      heroGradient="pink"
      toc={[{ id: 'channels', title: 'Marketing Channels' }, { id: 'metrics', title: 'Key Metrics' }, { id: 'tools', title: 'Essential Tools' }]}
      publishDate="2025-01-20"
      readTime="8 min read"
      authorName="Jessica Adams"
      authorTitle="Marketing Recruiter"
    >
      <section id="channels">
        <h2>Marketing Channels to Highlight</h2>
        
        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="bg-pink-50 p-4 rounded-lg">
            <h3>Digital Marketing</h3>
            <p className="text-sm">SEO, SEM, PPC, social media, email marketing</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3>Content Marketing</h3>
            <p className="text-sm">Blogging, video, podcasts, whitepapers, case studies</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3>Brand Marketing</h3>
            <p className="text-sm">Brand strategy, positioning, identity, guidelines</p>
          </div>
        </div>
      </section>

      <section id="metrics">
        <h2>Key Marketing Metrics</h2>
        
        <p>Show your impact with these metrics:</p>
        
        <ul>
          <li>Traffic growth (organic, paid, social)</li>
          <li>Conversion rates and lead generation</li>
          <li>ROI and ROAS (Return on Ad Spend)</li>
          <li>Engagement rates and follower growth</li>
          <li>Revenue attributed to marketing</li>
        </ul>
      </section>

      <section id="tools">
        <h2>Essential Marketing Tools</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4>Analytics</h4>
            <p className="text-sm">Google Analytics, Adobe Analytics, Tableau, Data Studio</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4>Advertising</h4>
            <p className="text-sm">Google Ads, Facebook Ads Manager, LinkedIn Ads</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4>Automation</h4>
            <p className="text-sm">HubSpot, Marketo, Pardot, Mailchimp</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4>SEO</h4>
            <p className="text-sm">Ahrefs, SEMrush, Moz, Screaming Frog</p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
