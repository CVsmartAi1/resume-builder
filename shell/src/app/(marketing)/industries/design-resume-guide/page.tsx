import { ArticleLayout } from '@/components/marketing';
import { Palette, Brush, Eye, Layers } from 'lucide-react';

export const metadata = {
  title: 'Design Resume Guide: Graphic, UX &amp; Product Design',
  description: 'Complete guide to design resumes for graphic designers, UX/UI designers, and creative professionals. Portfolio tips included.',
};

export default function DesignResumeGuide() {
  return (
    <ArticleLayout
      title="Design Resume Guide"
      description="Complete guide to design resumes for graphic designers, UX/UI designers, and creative professionals. Portfolio tips included."
      keywords={['design resume', 'graphic design resume', 'UX resume', 'product designer resume']}
      heroTitle="Design Resume Guide"
      heroSubtitle="Design your path to creative success"
      heroIcon={<Palette className="h-10 w-10 text-white" />}
      heroGradient="purple"
      toc={[{ id: 'portfolio', title: 'Portfolio Essentials' }, { id: 'skills', title: 'Design Skills' }]}
      publishDate="2025-01-20"
      readTime="7 min read"
      authorName="Daniel Lee"
      authorTitle="Creative Director"
    >
      <section id="portfolio">
        <h2>Portfolio Essentials</h2>
        
        <ul>
          <li>Include portfolio link prominently</li>
          <li>Showcase 8-12 best pieces</li>
          <li>Include case studies with process, not just final designs</li>
          <li>Ensure mobile-responsive portfolio</li>
        </ul>
      </section>

      <section id="skills">
        <h2>Design Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3>Software</h3>
            <p className="text-sm">Figma, Sketch, Adobe Creative Suite, InVision, Principle</p>
          </div>
          
          <div className="bg-pink-50 p-4 rounded-lg">
            <h3>Methods</h3>
            <p className="text-sm">User research, wireframing, prototyping, design systems</p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
