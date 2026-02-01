import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Resume Builder - Create Professional CVs in Minutes',
  description: 'Build professional, ATS-friendly resumes with our AI-powered CV builder. Choose from stunning templates, get smart suggestions, and download PDF instantly.',
};

// Schema.org structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': 'https://shell-rho-swart.vercel.app/#app',
      name: 'Resume Builder',
      description: 'AI-powered resume builder with professional templates',
      url: 'https://shell-rho-swart.vercel.app',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '10000',
      },
      featureList: [
        'AI-Powered Suggestions',
        'Professional Templates',
        'ATS-Friendly Format',
        'One-Click PDF Export',
        'Cloud Storage',
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://shell-rho-swart.vercel.app/#organization',
      name: 'Resume Builder',
      url: 'https://shell-rho-swart.vercel.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://shell-rho-swart.vercel.app/logo.png',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://shell-rho-swart.vercel.app/#website',
      url: 'https://shell-rho-swart.vercel.app',
      name: 'Resume Builder',
      publisher: {
        '@id': 'https://shell-rho-swart.vercel.app/#organization',
      },
    },
  ],
};

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
          footerActionLink: 'text-blue-600 hover:text-blue-700',
          card: 'bg-white shadow-xl rounded-2xl',
          headerTitle: 'text-2xl font-bold text-gray-900',
          headerSubtitle: 'text-gray-600',
        },
      }}
    >
      <html lang="en">
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </head>
        <body className={inter.className}>
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </body>
        
        {GA_TRACKING_ID && (
          <GoogleAnalytics gaId={GA_TRACKING_ID} />
        )}
      </html>
    </ClerkProvider>
  );
}
