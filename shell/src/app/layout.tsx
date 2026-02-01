import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Free Resume Builder | AI CV Maker - ATS-Friendly 2025',
  description: 'Create professional ATS-friendly resumes in minutes with our free AI-powered CV builder. Multiple templates, PDF export, and easy customization.',
  keywords: ['resume builder', 'cv maker', 'ats-friendly', 'free resume templates', 'ai resume'],
  openGraph: {
    title: 'Free Resume Builder | AI CV Maker - ATS-Friendly 2025',
    description: 'Create professional resumes in minutes with our free AI-powered CV builder.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
