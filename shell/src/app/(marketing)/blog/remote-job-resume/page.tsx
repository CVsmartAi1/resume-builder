import { ArticleLayout } from '@/components/marketing';
import { Wifi, Home, Globe, Laptop } from 'lucide-react';

export const metadata = {
  title: 'Remote Job Resume: How to Showcase Remote Work Skills',
  description: 'Learn how to write a resume for remote positions. Highlight remote collaboration, self-motivation, and digital communication skills.',
};

export default function RemoteJobResumeArticle() {
  return (
    <ArticleLayout
      title="Remote Job Resume: How to Showcase Remote Work Skills"
      description="Learn how to write a resume for remote positions. Highlight remote collaboration, self-motivation, and digital communication skills."
      keywords={['remote job resume', 'work from home resume', 'virtual resume', 'remote work skills']}
      heroTitle="Remote Job Resume Guide"
      heroSubtitle="Work from anywhere, succeed everywhere"
      heroIcon={<Wifi className="h-10 w-10 text-white" />}
      heroGradient="blue"
      toc={[{ id: 'skills', title: 'Remote Work Skills' }, { id: 'experience', title: 'Highlighting Remote Experience' }]}
      publishDate="2025-01-24"
      readTime="6 min read"
      authorName="Career Expert Team"
    >
      <section id="skills">
        <h2>Remote Work Skills to Highlight</h2>
        
        <ul>
          <li><strong>Self-motivation and time management</strong></li>
          <li><strong>Digital communication</strong> — Slack, Zoom, email etiquette</li>
          <li><strong>Remote collaboration tools</strong> — Asana, Trello, Notion, Monday</li>
          <li><strong>Independence and proactivity</strong></li>
          <li><strong>Results-oriented work ethic</strong></li>
        </ul>
      </section>

      <section id="experience">
        <h2>Highlighting Remote Experience</h2>
        
        <p>If you have remote work experience, make it clear:</p>
        
        <div className="bg-blue-50 p-6 rounded-lg my-4">
          <p><strong>Format:</strong> Job Title (Remote) | Company | Dates</p>
          <p className="mt-2">"Collaborated with distributed team of 15 across 3 time zones using Slack and Zoom"</p>
          <p>"Managed projects independently while maintaining 98% on-time delivery rate"</p>
        </div>
      </section>
    </ArticleLayout>
  );
}
