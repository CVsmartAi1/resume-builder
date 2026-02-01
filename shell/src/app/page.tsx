import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileText, Zap, Download, Palette } from 'lucide-react';

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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-blue-600 rounded-2xl p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Resume?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of job seekers who have landed their dream jobs with our resume builder.
          </p>
          <Link href="/cvs/new">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Building - It is Free!
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2025 Resume Builder. All rights reserved.</p>
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
