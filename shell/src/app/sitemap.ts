import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://resumebuilder.com';
  
  // Static pages
  const staticPages = [
    '',
    '/dashboard',
    '/cvs/new',
  ];
  
  // Template pages (20 roles)
  const templates = [
    'software-engineer',
    'data-analyst',
    'marketing-manager',
    'product-manager',
    'ux-designer',
    'sales-manager',
    'project-manager',
    'financial-analyst',
    'hr-manager',
    'content-writer',
    'graphic-designer',
    'accountant',
    'nurse',
    'teacher',
    'customer-service',
    'business-analyst',
    'web-developer',
    'data-scientist',
    'digital-marketer',
    'operations-manager',
  ];
  
  // Blog articles
  const blogPosts = [
    'ats-friendly-resume-tips',
    'how-to-write-professional-summary',
    'resume-action-words',
    'resume-formatting-guide',
    'how-to-list-skills',
    'resume-mistakes-to-avoid',
    'how-to-quantify-achievements',
    'one-page-vs-two-page-resume',
    'resume-for-career-change',
    'fresh-graduate-resume-guide',
    'senior-level-resume-tips',
    'remote-job-resume',
    'freelance-resume-guide',
    'creative-resume-tips',
    'technical-resume-guide',
  ];
  
  // Industry guides
  const industries = [
    'tech-resume-guide',
    'healthcare-resume-guide',
    'finance-resume-guide',
    'marketing-resume-guide',
    'education-resume-guide',
    'sales-resume-guide',
    'design-resume-guide',
    'consulting-resume-guide',
    'retail-resume-guide',
    'hospitality-resume-guide',
  ];
  
  // Example resumes
  const examples = [
    'software-engineer-resume-example',
    'marketing-manager-resume-example',
    'data-analyst-resume-example',
    'product-manager-resume-example',
    'executive-resume-example',
    'entry-level-resume-example',
    'career-change-resume-example',
    'freelance-resume-example',
    'remote-worker-resume-example',
    'internship-resume-example',
  ];
  
  const routes: MetadataRoute.Sitemap = [
    // Static pages
    ...staticPages.map(path => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    
    // Templates
    ...templates.map(slug => ({
      url: `${baseUrl}/templates/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    
    // Blog posts
    ...blogPosts.map(slug => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    
    // Industry guides
    ...industries.map(slug => ({
      url: `${baseUrl}/industries/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    
    // Examples
    ...examples.map(slug => ({
      url: `${baseUrl}/examples/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
  
  return routes;
}
