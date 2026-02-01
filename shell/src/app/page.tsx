import type { Metadata } from 'next';
import { Hero, Features, Testimonials, CTA, Footer } from '@/components/landing';

export const metadata: Metadata = {
  title: 'Resume Builder - Create Professional CVs in Minutes | Free AI-Powered',
  description: 'Build professional, ATS-friendly resumes with our AI-powered CV builder. Choose from stunning templates, get smart suggestions, and download PDF instantly. 100% free!',
  keywords: ['resume builder', 'cv maker', 'professional resume', 'ats friendly', 'free resume builder', 'ai resume', 'cv templates', 'resume pdf'],
  authors: [{ name: 'Resume Builder' }],
  creator: 'Resume Builder',
  publisher: 'Resume Builder',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shell-rho-swart.vercel.app',
    siteName: 'Resume Builder',
    title: 'Resume Builder - Create Professional CVs in Minutes',
    description: 'Build professional, ATS-friendly resumes with our AI-powered CV builder. 100% free!',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resume Builder - Professional CV Maker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume Builder - Create Professional CVs in Minutes',
    description: 'Build professional, ATS-friendly resumes with our AI-powered CV builder. 100% free!',
    images: ['/og-image.png'],
    creator: '@resumebuilder',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://shell-rho-swart.vercel.app',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
