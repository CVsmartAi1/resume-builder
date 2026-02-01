import { ArticleLayout } from '@/components/marketing';
import { PenTool, Sparkles, Target, User } from 'lucide-react';

export const metadata = {
  title: 'How to Write a Professional Summary That Gets You Hired',
  description: 'Learn how to craft a compelling professional summary that captures recruiters attention. Examples and templates for every career level.',
};

const toc = [
  { id: 'why-summary', title: 'Why You Need a Professional Summary' },
  { id: 'structure', title: 'Structure of a Great Summary' },
  { id: 'examples', title: 'Examples by Career Level' },
  { id: 'writing-tips', title: 'Writing Tips' },
  { id: 'mistakes', title: 'Common Mistakes to Avoid' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

const relatedArticles = [
  {
    title: 'ATS-Friendly Resume Tips',
    href: '/blog/ats-friendly-resume-tips',
    description: 'Optimize your resume for applicant tracking systems.',
  },
  {
    title: 'Resume Action Words',
    href: '/blog/resume-action-words',
    description: 'Powerful verbs to make your resume stand out.',
  },
  {
    title: 'How to Quantify Achievements',
    href: '/blog/how-to-quantify-achievements',
    description: 'Show your impact with metrics and numbers.',
  },
];

export default function ProfessionalSummaryArticle() {
  return (
    <ArticleLayout
      title="How to Write a Professional Summary That Gets You Hired"
      description="Learn how to craft a compelling professional summary that captures recruiters attention. Examples and templates for every career level."
      keywords={['professional summary', 'resume summary', 'career summary', 'resume objective', 'summary statement']}
      heroTitle="How to Write a Professional Summary"
      heroSubtitle="Make your first impression count"
      heroIcon={<PenTool className="h-10 w-10 text-white" />}
      heroGradient="purple"
      toc={toc}
      publishDate="2025-01-18"
      readTime="8 min read"
      authorName="Career Expert Team"
      relatedArticles={relatedArticles}
    >
      <section id="why-summary">
        <h2>Why You Need a Professional Summary</h2>
        
        <p>
          Your professional summary is the first thing recruiters read—and often the only thing if it doesn't 
          grab their attention. In 6 seconds or less, you need to communicate who you are, what you do, and 
          why you're the perfect candidate.
        </p>
        
        <div className="bg-purple-50 p-6 rounded-lg my-6">
          <h3 className="text-purple-900">The Power of a Great Summary</h3>
          <ul className="text-purple-800 mt-2">
            <li>Recruiters spend 6-10 seconds on the initial resume scan</li>
            <li>Your summary appears "above the fold" on every page</li>
            <li>It's your elevator pitch in written form</li>
            <li>It sets the narrative for your entire resume</li>
          </ul>
        </div>
      </section>

      <section id="structure">
        <h2>Structure of a Great Summary</h2>
        
        <p>A powerful professional summary follows a simple formula:</p>
        
        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <strong>Your Professional Identity</strong>
              <p className="text-gray-600">Start with your title and years of experience</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <strong>Key Skills &amp; Expertise</strong>
              <p className="text-gray-600">Highlight your core competencies and specializations</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <strong>Notable Achievements</strong>
              <p className="text-gray-600">Include 1-2 quantifiable accomplishments</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
            <div>
              <strong>What You're Looking For</strong>
              <p className="text-gray-600">End with your career goal or target role</p>
            </div>
          </div>
        </div>
      </section>

      <section id="examples">
        <h2>Examples by Career Level</h2>
        
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-blue-900">Entry-Level / Recent Graduate</h3>
            <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic text-blue-800">
              "Recent Computer Science graduate with hands-on experience in Python, Java, and full-stack 
              development through 3 internships and personal projects. Built a web application serving 
              1,000+ users during capstone project. Seeking a Software Developer role to contribute to 
              innovative products while growing technical expertise."
            </blockquote>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-green-900">Mid-Career Professional</h3>
            <blockquote className="border-l-4 border-green-500 pl-4 my-4 italic text-green-800">
              "Results-driven Marketing Manager with 6+ years driving growth for B2B SaaS companies. 
              Expert in digital marketing strategy, demand generation, and brand development. Consistently 
              exceeded revenue targets by 125%+ while managing $3M annual budget and leading teams of 8+ marketers."
            </blockquote>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-purple-900">Senior / Executive Level</h3>
            <blockquote className="border-l-4 border-purple-500 pl-4 my-4 italic text-purple-800">
              "Visionary Operations Executive with 15+ years optimizing supply chain, manufacturing, and 
              distribution for Fortune 500 companies. Proven track record of reducing costs by 30%, 
              improving on-time delivery to 99%, and leading cross-functional teams of 200+ employees. 
              P&L responsibility for $100M+ business units."
            </blockquote>
          </div>
        </div>
      </section>

      <section id="writing-tips">
        <h2>Writing Tips</h2>
        
        <ul>
          <li><strong>Keep it concise:</strong> Aim for 3-5 sentences or 50-75 words</li>
          <li><strong>Use active voice:</strong> "Led team of 10" not "Was responsible for leading team"</li>
          <li><strong>Quantify when possible:</strong> Numbers make your summary concrete</li>
          <li><strong>Tailor for each job:</strong> Customize keywords for the specific role</li>
          <li><strong>Avoid cliches:</strong> Skip "hardworking," "team player," and "results-oriented"</li>
        </ul>
      </section>

      <section id="mistakes">
        <h2>Common Mistakes to Avoid</h2>
        
        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-red-900">❌ Being Too Vague</h3>
            <p className="text-red-800">"Hardworking professional seeking challenging opportunities" — This could describe anyone.</p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-red-900">❌ Using First Person</h3>
            <p className="text-red-800">"I am a marketing manager with..." — Skip "I am" and start with your title.</p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-red-900">❌ Making It Too Long</h3>
            <p className="text-red-800">A paragraph-long summary loses the reader. Be concise and impactful.</p>
          </div>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3>What's the difference between a summary and an objective?</h3>
            <p>
              A summary focuses on what you bring to the employer (your skills and achievements), while an 
              objective focuses on what you want from the job. Modern resumes use summaries—objectives are 
              considered outdated unless you're making a career change.
            </p>
          </div>
          
          <div>
            <h3>Should I write a summary if I'm entry-level?</h3>
            <p>
              Yes! Even without extensive work experience, you can highlight your education, internships, 
              relevant coursework, skills, and career interests. Focus on potential and transferable skills.
            </p>
          </div>
          
          <div>
            <h3>How do I tailor my summary for different jobs?</h3>
            <p>
              Review the job description for key requirements and incorporate those keywords. Emphasize 
              the aspects of your background most relevant to each specific role. Keep a master summary 
              and customize for applications.
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
