import { ArticleLayout } from '@/components/marketing';
import { BarChart3, Database, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Data Analyst Resume Example | Sample &amp; Template',
  description: 'View a professional data analyst resume example. Learn how to showcase SQL skills, data visualization, and business insights.',
};

export default function DataAnalystExample() {
  return (
    <ArticleLayout
      title="Data Analyst Resume Example"
      description="View a professional data analyst resume example. Learn how to showcase SQL skills, data visualization, and business insights."
      keywords={['data analyst resume example', 'analytics resume sample']}
      heroTitle="Data Analyst Resume Example"
      heroSubtitle="Turn data into career opportunities"
      heroIcon={<BarChart3 className="h-10 w-10 text-white" />}
      heroGradient="purple"
      toc={[{ id: 'example', title: 'Full Example' }]}
      publishDate="2025-01-21"
      readTime="5 min read"
      authorName="Career Expert Team"
    >
      <section id="example">
        <h2>Data Analyst Resume Example</h2>
        
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8 my-8 shadow-lg">
          <div className="text-center border-b pb-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900">MICHAEL JOHNSON</h1>
            <p className="text-gray-600 mt-2">Data Analyst | New York, NY | michael.j@email.com | linkedin.com/in/michaelj</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-purple-500 pb-1 mb-3">PROFESSIONAL SUMMARY</h2>
            <p className="text-gray-700">Detail-oriented Data Analyst with 4+ years transforming complex datasets into actionable business insights. Expert in SQL, Python, and Tableau. Proven track record of improving operational efficiency by 30% through data-driven recommendations.</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-purple-500 pb-1 mb-3">TECHNICAL SKILLS</h2>
            <p className="text-gray-700"><strong>Languages:</strong> SQL, Python, R, VBA</p>
            <p className="text-gray-700"><strong>Visualization:</strong> Tableau, Power BI, Looker, matplotlib, seaborn</p>
            <p className="text-gray-700"><strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, BigQuery</p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-purple-500 pb-1 mb-3">PROFESSIONAL EXPERIENCE</h2>
            
            <div className="mb-4">
              <div className="flex justify-between">
                <p className="font-semibold">Senior Data Analyst | FinanceCorp</p>
                <p className="text-gray-600 text-sm">2021 - Present</p>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-sm mt-1">
                <li>Developed automated reporting system saving 20+ hours weekly</li>
                <li>Analyzed customer behavior data for 2M+ users, identifying upsell opportunities worth $5M annually</li>
                <li>Built interactive Tableau dashboards adopted by 200+ executives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
