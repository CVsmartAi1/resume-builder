import { ArticleLayout } from '@/components/marketing';
import { TemplateShowcase } from '@/components/marketing/TemplateShowcase';
import { Brain, Database, BarChart3, Code } from 'lucide-react';

export const metadata = {
  title: 'Data Scientist Resume Template | ATS-Friendly Format',
  description: 'Create a professional data scientist resume with our ATS-friendly template. Showcase your machine learning expertise, statistical analysis, and data storytelling skills.',
};

const toc = [
  { id: 'overview', title: 'Template Overview' },
  { id: 'key-sections', title: 'Key Sections' },
  { id: 'tips', title: 'Writing Tips for Data Scientists' },
  { id: 'keywords', title: 'Essential Keywords' },
  { id: 'example', title: 'Resume Example' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function DataScientistTemplate() {
  return (
    <ArticleLayout
      title="Data Scientist Resume Template"
      description="Create a professional data scientist resume with our ATS-friendly template. Showcase your machine learning expertise, statistical analysis, and data storytelling skills."
      keywords={['data scientist resume', 'machine learning resume', 'data science CV', 'ML engineer resume']}
      heroTitle="Data Scientist Resume Template"
      heroSubtitle="Model your way to career success"
      heroIcon={<Brain className="h-10 w-10 text-white" />}
      heroGradient="purple"
      toc={toc}
      publishDate="2025-01-15"
      readTime="8 min read"
      authorName="Dr. Kevin Liu"
      authorTitle="Data Science Recruiter"
    >
      <section id="overview">
        <p className="lead text-xl text-gray-600 mb-6">
          Data scientists extract insights from complex data to drive business decisions. Your resume 
          must demonstrate your technical expertise in statistics and machine learning, programming skills, 
          business acumen, and ability to communicate findings to non-technical stakeholders.
        </p>
        
        <div className="my-8">
          <TemplateShowcase role="Data Scientist" accentColor="bg-purple-600" />
        </div>
      </section>

      <section id="key-sections">
        <h2>Essential Resume Sections for Data Scientists</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="flex items-center gap-2">
              <Code className="h-5 w-5 text-purple-600" />
              Technical Skills
            </h3>
            <p>
              Highlight programming languages (Python, R, SQL), ML frameworks (TensorFlow, PyTorch, scikit-learn), 
              big data tools (Spark, Hadoop), and cloud platforms (AWS, GCP, Azure).
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-blue-600" />
              ML &amp; Statistical Methods
            </h3>
            <p>
              Detail your expertise in machine learning algorithms, statistical modeling, experimental design, 
              A/B testing, and deep learning. Include specific techniques relevant to your target roles.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-green-600" />
              Business Impact
            </h3>
            <p>
              Quantify your models' impact: revenue generated, costs saved, efficiency gains, or decision improvements. 
              Data science is valued for business outcomes, not just technical complexity.
            </p>
          </div>
        </div>
      </section>

      <section id="tips">
        <h2>Expert Writing Tips for Data Scientists</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3>Quantify Model Impact</h3>
            <ul>
              <li>"Built churn prediction model preventing $2M in annual revenue loss"</li>
              <li>"Improved recommendation engine increasing conversion by 25%"</li>
              <li>"Developed fraud detection with 95% precision and 90% recall"</li>
              <li>"Reduced forecasting error by 40% through ensemble methods"</li>
            </ul>
          </div>
          
          <div>
            <h3>Show End-to-End Experience</h3>
            <ul>
              <li>Problem definition and stakeholder collaboration</li>
              <li>Data collection, cleaning, and feature engineering</li>
              <li>Model development, validation, and deployment</li>
              <li>Monitoring, maintenance, and iteration</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="keywords">
        <h2>Essential Keywords for Data Scientist Resumes</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'R', 'SQL', 'Scala', 'Julia', 'SAS'].map(k => (
                <span key={k} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">ML/AI</h4>
            <div className="flex flex-wrap gap-2">
              {['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Neural Networks', 'Reinforcement Learning'].map(k => (
                <span key={k} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Tools</h4>
            <div className="flex flex-wrap gap-2">
              {['TensorFlow', 'PyTorch', 'scikit-learn', 'Spark', 'AWS', 'Docker', 'Kubernetes'].map(k => (
                <span key={k} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="example">
        <h2>Data Scientist Resume Example</h2>
        
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
          <pre>{`DAVID KIM, Ph.D.
Senior Data Scientist | San Francisco, CA | david.k@email.com | linkedin.com/in/davidk

EDUCATION
Ph.D. Statistics | Stanford University | 2018
B.S. Mathematics | MIT | 2013

TECHNICAL SKILLS
• Languages: Python, R, SQL, Scala
• ML/AI: scikit-learn, TensorFlow, PyTorch, XGBoost, NLP (spaCy, NLTK, Transformers)
• Big Data: Spark, Hadoop, Kafka, Airflow
• Cloud: AWS (SageMaker, EC2, S3), GCP (BigQuery, Vertex AI), Docker, Kubernetes
• Visualization: matplotlib, seaborn, Plotly, Tableau

PROFESSIONAL EXPERIENCE

Senior Data Scientist | TechCorp AI | Jan 2021 - Present
• Lead data science initiatives for personalization team serving 50M+ users
• Built recommendation engine increasing engagement by 35% and revenue by $15M annually
• Developed churn prediction model with 92% precision, preventing $5M in annual losses
• Architected ML pipeline processing 10M+ events daily using Spark and Airflow
• Mentored team of 4 data scientists; established code review and best practices
• Published research at NeurIPS and presented at industry conferences

Data Scientist | FinTech Innovations | Jun 2018 - Dec 2020
• Built credit risk models reducing default rates by 20% while maintaining approval volumes
• Developed real-time fraud detection system with 99.5% accuracy, processing 100K+ transactions/day
• Implemented A/B testing framework used across 20+ product experiments
• Created customer segmentation for targeted marketing campaigns improving ROI by 40%
• Collaborated with engineering to deploy models to production using AWS SageMaker

Research Assistant | Stanford AI Lab | 2013 - 2018
• Published 5 papers on deep learning and natural language processing
• Developed novel neural network architectures for text classification
• Managed large-scale datasets and distributed computing experiments

PROJECTS
Kaggle Competition - Top 1% Finish | Customer Churn Prediction
• Engineered 200+ features and implemented ensemble of gradient boosted models
• Achieved top 1% ranking among 5,000+ participants`}</pre>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3>Should I include publications on my data science resume?</h3>
            <p>
              Yes, especially for research-heavy roles or senior positions. Include relevant papers, 
              conference presentations, and open-source contributions. For industry-focused roles, 
              prioritize business impact over academic publications.
            </p>
          </div>
          
          <div>
            <h3>How important is a PhD for data science roles?</h3>
            <p>
              A PhD is beneficial but not required. Many successful data scientists have Master's 
              degrees or even Bachelor's with strong portfolios. Focus on demonstrating practical 
              skills through projects, Kaggle competitions, or work experience.
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
