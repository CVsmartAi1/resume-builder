import { ArticleLayout } from '@/components/marketing';
import { Palette, Brush, Lightbulb, Eye } from 'lucide-react';

export const metadata = {
  title: 'Creative Resume Tips: Design Portfolio &amp; Creative Fields',
  description: 'Guide to writing resumes for creative professionals. Balance creativity with professionalism for design, writing, and artistic roles.',
};

export default function CreativeResumeTipsArticle() {
  return (
    <ArticleLayout
      title="Creative Resume Tips"
      description="Guide to writing resumes for creative professionals. Balance creativity with professionalism for design, writing, and artistic roles."
      keywords={['creative resume', 'designer resume', 'portfolio resume', 'artistic resume']}
      heroTitle="Creative Resume Tips"
      heroSubtitle="Express your creativity professionally"
      heroIcon={<Palette className="h-10 w-10 text-white" />}
      heroGradient="pink"
      toc={[{ id: 'balance', title: 'Balancing Creativity' }, { id: 'portfolio', title: 'Portfolio Integration' }]}
      publishDate="2025-01-24"
      readTime="6 min read"
      authorName="Career Expert Team"
    >
      <section id="balance">
        <h2>Balancing Creativity with Professionalism</h2>
        
        <p>Creative resumes walk a fine line:</p>
        
        <ul>
          <li>Your portfolio shows creativity; your resume should be scannable</li>
          <li>Use subtle color accents, not rainbow explosions</li>
          <li>Clean typography matters more than decorative elements</li>
          <li>Ensure ATS compatibility—many creative roles still use ATS</li>
        </ul>
      </section>

      <section id="portfolio">
        <h2>Portfolio Integration</h2>
        
        <p>Your portfolio is as important as your resume:</p>
        
        <ul>
          <li>Include portfolio link prominently in contact section</li>
          <li>Mention specific projects in experience bullets</li>
          <li>Quantify portfolio impact: views, awards, client results</li>
          <li>Keep portfolio updated and mobile-friendly</li>
        </ul>
      </section>
    </ArticleLayout>
  );
}
