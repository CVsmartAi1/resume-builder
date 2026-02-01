import type { Metadata } from 'next';
import { UserButton, useUser } from '@clerk/nextjs';
import { CVsList } from '@/components/dashboard/CVsList';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus, Settings, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dashboard - My Resumes | Resume Builder',
  description: 'Manage and edit your professional resumes. Create, customize, and download ATS-friendly CVs with our AI-powered builder.',
  keywords: ['resume dashboard', 'my resumes', 'cv manager', 'resume editor'],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Dashboard - My Resumes',
    description: 'Manage and edit your professional resumes.',
  },
};

export default function DashboardPage() {
  const { user, isLoaded } = useUser();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Resume Builder
          </Link>
          
          <div className="flex items-center gap-4">
            <Link href="/cvs/new">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Resume
              </Button>
            </Link>
            
            <Link href="/settings">
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </Link>
            
            <Link href="/profile">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {isLoaded ? `Welcome, ${user?.firstName || 'User'}!` : 'Welcome!'}
          </h1>
          <p className="text-gray-600 mt-1">Manage and edit your resumes</p>
        </div>

        <CVsList />
      </main>
    </div>
  );
}
