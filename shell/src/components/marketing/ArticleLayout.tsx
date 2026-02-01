'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { AuthorBox } from './AuthorBox';
import { CTASection } from './CTASection';
import { RelatedArticles } from './RelatedArticles';
import { SEOHead } from './SEOHead';
import { HeroImage } from './HeroImage';

interface TOCItem {
  id: string;
  title: string;
  level?: number;
}

interface ArticleLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  keywords?: string[];
  heroTitle?: string;
  heroSubtitle?: string;
  heroIcon?: React.ReactNode;
  heroGradient?: 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'teal';
  toc?: TOCItem[];
  showTOC?: boolean;
  publishDate?: string;
  modifiedDate?: string;
  readTime?: string;
  authorName?: string;
  authorTitle?: string;
  authorBio?: string;
  relatedArticles?: Array<{
    title: string;
    href: string;
    description: string;
  }>;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  jsonLd?: Record<string, unknown>;
}

export function ArticleLayout({
  children,
  title,
  description,
  keywords,
  heroTitle,
  heroSubtitle,
  heroIcon,
  heroGradient = 'blue',
  toc,
  showTOC = true,
  publishDate,
  modifiedDate,
  readTime,
  authorName,
  authorTitle,
  authorBio,
  relatedArticles,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  jsonLd,
}: ArticleLayoutProps) {
  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        ogType="article"
        publishedTime={publishDate}
        modifiedTime={modifiedDate}
        author={authorName}
        jsonLd={jsonLd}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        {(heroTitle || heroIcon) && (
          <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-4">
            <div className="max-w-5xl mx-auto">
              <HeroImage
                title={heroTitle || title}
                subtitle={heroSubtitle}
                icon={heroIcon}
                gradient={heroGradient}
              />
            </div>
          </div>
        )}

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium truncate">{title}</li>
            </ol>
          </nav>

          {/* Title (if no hero) */}
          {!heroTitle && (
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h1>
          )}

          {/* Author Info */}
          <div className="mb-8">
            <AuthorBox
              name={authorName}
              title={authorTitle}
              bio={authorBio}
              date={publishDate}
              readTime={readTime}
            />
          </div>

          {/* Main Content Layout */}
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Table of Contents - Sidebar */}
            {showTOC && toc && toc.length > 0 && (
              <aside className="lg:col-span-1 order-2 lg:order-1">
                <div className="sticky top-24">
                  <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    {toc.map((item, index) => (
                      <Link
                        key={index}
                        href={`#${item.id}`}
                        className={cn(
                          "block text-sm hover:text-blue-600 transition-colors",
                          item.level === 2 ? "text-gray-600 pl-0" : "text-gray-500 pl-4"
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </nav>
                </div>
              </aside>
            )}

            {/* Article Content */}
            <article className={cn(
              "prose prose-lg max-w-none order-1",
              showTOC && toc && toc.length > 0 ? "lg:col-span-3" : "lg:col-span-4"
            )}>
              <div className="prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-li:text-gray-600 prose-strong:text-gray-900">
                {children}
              </div>

              {/* Related Articles */}
              {relatedArticles && relatedArticles.length > 0 && (
                <RelatedArticles articles={relatedArticles} />
              )}

              {/* CTA Section */}
              <div className="mt-12">
                <CTASection
                  title={ctaTitle}
                  description={ctaDescription}
                  buttonText={ctaButtonText}
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
