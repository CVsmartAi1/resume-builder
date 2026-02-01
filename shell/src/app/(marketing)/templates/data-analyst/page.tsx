import { ArticleLayout } from '@/components/marketing';
import { TemplateShowcase } from '@/components/marketing/TemplateShowcase';
import { BarChart3, Database, TrendingUp, PieChart } from 'lucide-react';

export const metadata = {
  title: 'Data Analyst Resume Template | ATS-Friendly Format',
  description: 'Create a professional data analyst resume with our ATS-friendly template. Showcase your analytical skills, SQL expertise, and data visualization experience.',
};

const toc = [
  { id: 'overview', title: 'Template Overview' },
  { id: 'key-sections', title: 'Key Sections' },
  { id: 'tips', title: 'Writing Tips for Data Analysts' },
  { id: 'keywords', title: 'Essential Keywords' },
  { id: 'example', title: 'Resume Example' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

const relatedArticles = [
  {
    title: 'How to Quantify Achievements',
    href: '/blog/how-to-quantify-achievements',
    description: 'Learn how to showcase your impact with metrics.',
  },
  {
    title: 'ATS Resume Tips',
    href: '/blog/ats-friendly-resume-tips',
    description: 'Optimize your resume for applicant tracking systems.',
  },
  {
    title: 'Technical Resume Guide',
    href: '/blog/technical-resume-guide',
    description: 'Expert tips for creating technical resumes.',
  },
];

export default function DataAnalystTemplate() {
  return (
    <ArticleLayout
      title="Data Analyst Resume Template"
      description="Create a professional data analyst resume with our ATS-friendly template. Showcase your analytical skills, SQL expertise, and data visualization experience."
      keywords={['data analyst resume', 'analytics resume', 'SQL resume', 'data science resume', 'business analyst resume']}
      heroTitle="Data Analyst Resume Template"
      heroSubtitle="Highlight your analytical prowess and data-driven achievements"
      heroIcon={<BarChart3 className="h-10 w-10 text-white" />}
      heroGradient="purple"
      toc={toc}
      publishDate="2025-01-15"
      readTime="7 min read"
      authorName="Sarah Martinez"
      authorTitle="Data Science Recruiter"
      authorBio="Sarah specializes in recruiting analytics professionals and has helped hundreds of data analysts land roles at Fortune 500 companies."
      relatedArticles={relatedArticles}
    >
      <section id="overview">
        <p className="lead text-xl text-gray-600 mb-6">
          Data analysts are in high demand across industries, but competition for top roles is fierce. 
          Our specialized template helps you highlight your technical skills, statistical knowledge, 
          and ability to translate complex data into actionable business insights.
        </p>
        
        <div className="my-8">
          <TemplateShowcase role="Data Analyst" accentColor="bg-purple-600" />
        </div>
      </section>

      <section id="key-sections">
        <h2>Essential Resume Sections for Data Analysts</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="flex items-center gap-2">
              <Database className="h-5 w-5 text-purple-600" />
              Technical Skills Section
            </h3>
            <p>
              Organize your technical skills into clear categories: Programming Languages (Python, R, SQL), 
              Data Visualization Tools (Tableau, Power BI, Looker), Statistical Software (SPSS, SAS), 
              and Databases (MySQL, PostgreSQL, MongoDB).
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              Projects &amp; Portfolio
            </h3>
            <p>
              Showcase data analysis projects with quantifiable outcomes. Include links to GitHub 
              repositories, Kaggle competitions, or portfolio websites demonstrating your 
              data visualization and analytical capabilities.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Professional Experience
            </h3>
            <p>
              Focus on business impact. Instead of "analyzed customer data," write 
              "Identified customer churn patterns that reduced attrition by 25% and increased 
              retention revenue by $2M annually."
            </p>
          </div>
        </div>
      </section>

      <section id="tips">
        <h2>Expert Writing Tips for Data Analysts</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3>Quantify Everything</h3>
            <ul>
              <li>"Analyzed 10M+ records to identify market trends"</li>
              <li>"Reduced reporting time by 70% through automation"</li>
              <li>"Built dashboards used by 500+ stakeholders"</li>
              <li>"Increased forecast accuracy by 35%"</li>
            </ul>
          </div>
          
          <div>
            <h3>Highlight Business Impact</h3>
            <ul>
              <li>Connect analysis to revenue or cost savings</li>
              <li>Show how insights drove strategic decisions</li>
              <li>Mention stakeholders who benefited from your work</li>
              <li>Demonstrate communication of complex findings</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="keywords">
        <h2>Essential Keywords for Data Analyst Resumes</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Technical Skills</h4>
            <div className="flex flex-wrap gap-2">
              {['SQL', 'Python', 'R', 'Excel', 'Tableau', 'Power BI', 'SAS', 'SPSS'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Analytics</h4>
            <div className="flex flex-wrap gap-2">
              {['Regression', 'Forecasting', 'A/B Testing', 'ETL', 'Statistical Analysis', 'Data Mining', 'Machine Learning', 'KPI'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Tools</h4>
            <div className="flex flex-wrap gap-2">
              {['AWS', 'Google Cloud', 'Snowflake', 'BigQuery', 'Git', 'Jupyter', 'Pandas', 'NumPy'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="example">
        <h2>Data Analyst Resume Example</h2>
        
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
          <pre>{`MICHAEL JOHNSON
Data Analyst | New York, NY | michael.j@email.com | linkedin.com/in/michaelj

PROFESSIONAL SUMMARY
Detail-oriented Data Analyst with 4+ years of experience transforming complex datasets into 
actionable business insights. Expert in SQL, Python, and Tableau. Proven track record of 
improving operational efficiency by 30% through data-driven recommendations.

TECHNICAL SKILLS
• Languages: SQL, Python, R, VBA
• Visualization: Tableau, Power BI, Looker, matplotlib, seaborn
• Databases: PostgreSQL, MySQL, MongoDB, BigQuery
• Tools: Jupyter, Git, AWS (S3, Redshift), Excel (PivotTables, VLOOKUP)
• Statistics: Regression analysis, A/B testing, hypothesis testing, forecasting

PROFESSIONAL EXPERIENCE

Senior Data Analyst | FinanceCorp | Mar 2021 - Present
• Developed automated reporting system saving 20+ hours weekly, reducing manual errors by 95%
• Analyzed customer behavior data for 2M+ users, identifying upsell opportunities worth $5M annually
• Built interactive Tableau dashboards adopted by 200+ executives for real-time decision making
• Led A/B testing initiatives that improved conversion rates by 18% across marketing campaigns

Data Analyst | RetailGiant Inc. | Jun 2019 - Feb 2021
• Created inventory forecasting models reducing stockouts by 40% and excess inventory by 25%
• Designed SQL queries processing 50M+ transactions to identify pricing optimization opportunities
• Collaborated with marketing team to segment 1M+ customers, increasing email campaign ROI by 35%
• Presented monthly insights to C-suite, influencing $10M+ in strategic investments

PROJECTS
Customer Churn Prediction Model | Python, scikit-learn | github.com/michaelj
• Built machine learning model achieving 87% accuracy in predicting customer churn
• Implemented data pipeline processing 100K+ daily records using Apache Airflow

EDUCATION
B.S. Statistics | Columbia University | 2019
Minor: Computer Science | GPA: 3.7/4.0

CERTIFICATIONS
• Google Data Analytics Professional Certificate
• Tableau Desktop Specialist`}</pre>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3>Should entry-level data analysts include academic projects?</h3>
            <p>
              Absolutely! For entry-level positions, academic projects, internships, and personal 
              data analysis projects are crucial. Treat them like professional experience by 
              highlighting the business questions you answered, tools used, and insights discovered.
            </p>
          </div>
          
          <div>
            <h3>How do I showcase SQL skills on my resume?</h3>
            <p>
              Include specific SQL accomplishments like "Optimized complex queries reducing runtime 
              from 5 minutes to 30 seconds" or "Designed database schema supporting 10M+ records." 
              Mention specific SQL skills: window functions, CTEs, stored procedures, query optimization.
            </p>
          </div>
          
          <div>
            <h3>Do I need to know programming for data analyst roles?</h3>
            <p>
              While not always required, Python or R proficiency significantly increases your 
              competitiveness. Many modern data analyst roles expect at least basic scripting 
              for data cleaning, analysis, and automation. List your proficiency level honestly.
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
