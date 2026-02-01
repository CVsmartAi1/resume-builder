import { ArticleLayout } from '@/components/marketing';
import { ArrowRight, Briefcase, Target } from 'lucide-react';

export const metadata = {
  title: 'Career Change Resume Example | Transition Sample',
  description: 'View a career change resume example. Learn how to highlight transferable skills and position your experience for a new industry.',
};

export default function CareerChangeExample() {
  return (
    <ArticleLayout
      title="Career Change Resume Example"
      description="View a career change resume example. Learn how to highlight transferable skills and position your experience for a new industry."
      keywords={['career change resume example', 'transition resume sample']}
      heroTitle="Career Change Resume Example"
      heroSubtitle="Navigate your career transition"
      heroIcon={<ArrowRight className="h-10 w-10 text-white" />}
      heroGradient="purple"
      toc={[{ id: 'example', title: 'Full Example' }]}
      publishDate="2025-01-21"
      readTime="5 min read"
      authorName="Career Expert Team"
    >
      <section id="example">
        <h2>Career Change Resume Example</h2>
        
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8 my-8 shadow-lg">
          <div className="text-center border-b pb-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900">DAVID MARTINEZ</h1>
            <p className="text-gray-600 mt-2">Austin, TX | david.m@email.com | linkedin.com/in/davidm</p>
            <p className="text-blue-600 font-medium mt-1">Transitioning from Sales to Marketing</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-purple-500 pb-1 mb-3">PROFESSIONAL SUMMARY</h2>
            <p className="text-gray-700">Results-driven professional with 5 years of sales experience seeking to leverage customer insights and communication skills in a marketing role. Proven track record of understanding customer needs and crafting compelling messaging that drives action.</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-purple-500 pb-1 mb-3">TRANSFERABLE SKILLS</h2>
            <p className="text-gray-700"><strong>Customer Insights:</strong> Deep understanding of customer pain points and buying behavior from 5 years in B2B sales</p>
            <p className="text-gray-700"><strong>Communication:</strong> Expert at crafting compelling presentations and value propositions</p>
            <p className="text-gray-700"><strong>Analytics:</strong> Experience tracking pipeline metrics and conversion rates</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-purple-500 pb-1 mb-3">RELEVANT EXPERIENCE</h2>
            <div>
              <p className="font-semibold">Sales Representative | TechSolutions Inc.</p>
              <ul className="list-disc list-inside text-gray-700 text-sm mt-1">
                <li>Developed customer personas based on 200+ client interactions</li>
                <li>Created sales collateral that improved conversion rates by 25%</li>
                >li>Collaborated with marketing team on campaign messaging</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-purple-500 pb-1 mb-3">EDUCATION &amp; CERTIFICATIONS</h2>
            <p className="text-gray-700"><strong>Digital Marketing Certificate</strong> | Google | 2024</p>
            <p className="text-gray-700"><strong>B.A. Business Administration</strong> | University of Texas | 2019</p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
