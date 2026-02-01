import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard',
          '/profile',
          '/settings',
          '/cvs/',
          '/api/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/dashboard',
          '/profile',
          '/settings',
          '/cvs/',
          '/api/',
        ],
      },
    ],
    sitemap: 'https://shell-rho-swart.vercel.app/sitemap.xml',
    host: 'https://shell-rho-swart.vercel.app',
  };
}
