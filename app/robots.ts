import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'], // Block admin and API routes
        crawlDelay: 1, // Be respectful to search engines
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
        // No crawl delay for Google - they're usually well-behaved
      }
    ],
    sitemap: 'https://www.goldensparkhomes.africa/sitemap.xml',
    host: 'https://www.goldensparkhomes.africa', // Preferred domain
  }
}