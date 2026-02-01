import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { CTA } from '@/components/landing/CTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <CTA />
      
      {/* Simple Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t bg-gray-50">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2025 Resume Builder. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
