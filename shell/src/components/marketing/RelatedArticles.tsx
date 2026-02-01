'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ArrowRight, FileText } from 'lucide-react';

interface RelatedArticle {
  title: string;
  href: string;
  description: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
  title?: string;
}

export function RelatedArticles({ 
  articles,
  title = 'Continue Reading' 
}: RelatedArticlesProps) {
  return (
    <section className="py-12 border-t">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">{title}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Link key={index} href={article.href} className="group">
            <Card className="p-6 h-full hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg shrink-0">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {article.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-blue-600 mt-4 group-hover:underline">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
