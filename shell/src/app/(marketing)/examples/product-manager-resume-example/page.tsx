import { ArticleLayout } from '@/components/marketing';
import { Boxes, Lightbulb, Users } from 'lucide-react';

export const metadata = {
  title: 'Product Manager Resume Example | PM Resume Sample',
  description: 'View a professional product manager resume example. Learn how to showcase product launches, user research, and cross-functional leadership.',
};

export default function ProductManagerExample() {
  return (
    <ArticleLayout
      title="Product Manager Resume Example"
      description="View a professional product manager resume example. Learn how to showcase product launches, user research, and cross-functional leadership."
      keywords={['product manager resume example', 'PM resume sample']}
      heroTitle="Product Manager Resume Example"
      heroSubtitle="Build products, build your career"
      heroIcon={<Boxes className="h-10 w-10 text-white" />}
      heroGradient="orange"
      toc={[{ id: 'example', title: 'Full Example' }]}
      publishDate="2025-01-21"
      readTime="5 min read"
      authorName="Career Expert Team"
    >
      <section id="example">
        <h2>Product Manager Resume Example</h2>
        
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8 my-8 shadow-lg">
          <div className="text-center border-b pb-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900">ALEX RIVERA</h1>
            <p className="text-gray-600 mt-2">Senior Product Manager | San Francisco, CA | alex.rivera@email.com</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-orange-500 pb-1 mb-3">PROFESSIONAL SUMMARY</h2>
            <p className="text-gray-700">Results-driven Product Manager with 7+ years building consumer and B2B SaaS products. Track record of 0-to-1 product launches and scaling products to $50M+ ARR.</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-orange-500 pb-1 mb-3">CORE COMPETENCIES</h2>
            <p className="text-gray-700"><strong>Product Strategy:</strong> Market analysis, competitive positioning, roadmap planning</p>
            <p className="text-gray-700"><strong>Analytics:</strong> SQL, Amplitude, Mixpanel, A/B testing, funnel analysis</p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-orange-500 pb-1 mb-3">EXPERIENCE</h2>
            <div className="mb-4">
              <p className="font-semibold">Senior Product Manager | CloudTech Solutions | 2020 - Present</p>
              <ul className="list-disc list-inside text-gray-700 text-sm mt-1">
                <li>Grew ARR from $10M to $50M in 3 years</li>
                <li>Launched mobile app achieving 200K downloads</li>
                <li>Reduced churn by 35% through retention initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
