import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Zap, 
  Download, 
  Palette, 
  ArrowRight,
  Code2,
  BarChart3,
  Megaphone,
  Briefcase,
  BookOpen,
  GraduationCap,
  Users
} from 'lucide-react';
import { CTASection } from '@/components/marketing/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Build Your Perfect Resume with{' '}
            <span className="text-blue-600">AI-Powered CV Builder</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create, customize, and download professional ATS-friendly resumes in minutes. 
            Stand out to recruiters with stunning templates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cvs/new">
              <Button size="lg" className="text-lg px-8">
                <FileText className="mr-2 h-5 w-5" />
                Create Resume
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="text-lg px-8">
                My Resumes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything You Need to Land Your Dream Job
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Palette className="h-8 w-8 text-blue-600" />}
              title="Beautiful Templates"
              description="Choose from modern, classic, and creative templates designed by professionals."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-yellow-500" />}
              title="AI-Powered"
              description="Get smart suggestions and optimize your resume for ATS systems."
            />
            <FeatureCard
              icon={<Download className="h-8 w-8 text-green-600" />}
              title="PDF Export"
              description="Download your resume as a professional PDF ready to send to employers."
            />
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Resume Templates by Role</h2>
              <p className="text-gray-600 mt-2">Professional templates tailored for specific job titles</p>
            </div>
            <Link href="/templates/software-engineer">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <TemplateCard 
              icon={<Code2 className="h-6 w-6" />}
              title="Software Engineer"
              href="/templates/software-engineer"
            />
            <TemplateCard 
              icon={<BarChart3 className="h-6 w-6" />}
              title="Data Analyst"
              href="/templates/data-analyst"
            />
            <TemplateCard 
              icon={<Megaphone className="h-6 w-6" />}
              title="Marketing Manager"
              href="/templates/marketing-manager"
            />
            <TemplateCard 
              icon={<Briefcase className="h-6 w-6" />}
              title="Product Manager"
              href="/templates/product-manager"
            />
          </div>
        </div>
      </section>

      {/* Resume Tips Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Resume Writing Tips</h2>
              <p className="text-gray-600 mt-2">Expert advice to help you create a standout resume</p>
            </div>
            <Link href="/blog/ats-friendly-resume-tips">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <ArticleCard 
              title="ATS-Friendly Resume Tips"
              description="Learn how to optimize your resume for applicant tracking systems"
              href="/blog/ats-friendly-resume-tips"
              icon={<BookOpen className="h-5 w-5" />}
            />
            <ArticleCard 
              title="How to Write a Professional Summary"
              description="Craft a compelling summary that captures recruiters' attention"
              href="/blog/how-to-write-professional-summary"
              icon={<BookOpen className="h-5 w-5" />}
            />
            <ArticleCard 
              title="Resume Action Words"
              description="Powerful verbs to make your resume stand out from the competition"
              href="/blog/resume-action-words"
              icon={<BookOpen className="h-5 w-5" />}
            />
          </div>
        </div>
      </section>

      {/* Industry Guides Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Industry-Specific Guides</h2>
              <p className="text-gray-600 mt-2">Tailored advice for different industries</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <IndustryCard 
              title="Tech Resume Guide"
              description="Software, IT, and data science"
              href="/industries/tech-resume-guide"
              icon={<Code2 className="h-6 w-6" />}
            />
            <IndustryCard 
              title="Healthcare Guide"
              description="Nursing and medical roles"
              href="/industries/healthcare-resume-guide"
              icon={<Users className="h-6 w-6" />}
            />
            <IndustryCard 
              title="Finance Guide"
              description="Banking and financial services"
              href="/industries/finance-resume-guide"
              icon={<BarChart3 className="h-6 w-6" />}
            />
            <IndustryCard 
              title="Marketing Guide"
              description="Digital and traditional marketing"
              href="/industries/marketing-resume-guide"
              icon={<Megaphone className="h-6 w-6" />}
            />
          </div>
        </div>
      </section>

      {/* Resume Examples Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Resume Examples</h2>
              <p className="text-gray-600 mt-2">Real-world resume samples for inspiration</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <ExampleCard 
              title="Software Engineer Example"
              description="Full-stack developer with 5+ years experience"
              href="/examples/software-engineer-resume-example"
            />
            
            <ExampleCard 
              title="Entry-Level Example"
              description="Recent graduate resume sample"
              href="/examples/entry-level-resume-example"
            />
            
            <ExampleCard 
              title="Executive Example"
              description="C-level and senior leadership sample"
              href="/examples/executive-resume-example"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Templates</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/templates/software-engineer" className="text-gray-600 hover:text-blue-600">Software Engineer</Link></li>
                <li><Link href="/templates/data-analyst" className="text-gray-600 hover:text-blue-600">Data Analyst</Link></li>
                <li><Link href="/templates/marketing-manager" className="text-gray-600 hover:text-blue-600">Marketing Manager</Link></li>
                <li><Link href="/templates/product-manager" className="text-gray-600 hover:text-blue-600">Product Manager</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog/ats-friendly-resume-tips" className="text-gray-600 hover:text-blue-600">ATS Tips</Link></li>
                <li><Link href="/blog/how-to-write-professional-summary" className="text-gray-600 hover:text-blue-600">Summary Guide</Link></li>
                <li><Link href="/blog/resume-action-words" className="text-gray-600 hover:text-blue-600">Action Words</Link></li>
                <li><Link href="/blog/resume-formatting-guide" className="text-gray-600 hover:text-blue-600">Formatting Guide</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Industries</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/industries/tech-resume-guide" className="text-gray-600 hover:text-blue-600">Tech</Link></li>
                <li><Link href="/industries/healthcare-resume-guide" className="text-gray-600 hover:text-blue-600">Healthcare</Link></li>
                <li><Link href="/industries/finance-resume-guide" className="text-gray-600 hover:text-blue-600">Finance</Link></li>
                <li><Link href="/industries/marketing-resume-guide" className="text-gray-600 hover:text-blue-600">Marketing</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
                <li><Link href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy</Link></li>
                <li><Link href="/terms" className="text-gray-600 hover:text-blue-600">Terms</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-gray-500 text-sm">
            <p>© 2025 Resume Builder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl border bg-white hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TemplateCard({ icon, title, href }: { icon: React.ReactNode; title: string; href: string }) {
  return (
    <Link href={href} className="group">
      <div className="p-4 rounded-lg border bg-white hover:shadow-md transition-all">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg text-blue-600">{icon}</div>
          <span className="font-medium text-gray-900 group-hover:text-blue-600">{title}</span>
        </div>
      </div>
    </Link>
  );
}

function ArticleCard({ icon, title, description, href }: { icon: React.ReactNode; title: string; description: string; href: string }) {
  return (
    <Link href={href} className="group">
      <div className="p-6 rounded-xl border bg-white hover:shadow-lg transition-all h-full">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-purple-100 rounded-lg text-purple-600">{icon}</div>
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function IndustryCard({ icon, title, description, href }: { icon: React.ReactNode; title: string; description: string; href: string }) {
  return (
    <Link href={href} className="group">
      <div className="p-6 rounded-xl border bg-white hover:shadow-lg transition-all h-full">
        <div className="p-3 bg-green-100 rounded-lg text-green-600 w-fit mb-4">{icon}</div>
        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
}

function ExampleCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="group">
      <div className="p-6 rounded-xl border bg-white hover:shadow-lg transition-all h-full">
        <div className="p-3 bg-orange-100 rounded-lg w-fit mb-4">
          <FileText className="h-6 w-6 text-orange-600" />
        </div>
        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
