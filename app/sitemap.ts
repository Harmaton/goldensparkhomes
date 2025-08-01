import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.goldensparkhomes.africa/',
      lastModified: new Date(),
     changeFrequency: 'weekly',
      priority: 1,
    },
     {
      url: 'https://www.goldensparkhomes.africa/properties',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.goldensparkhomes.africa/properties/staybridge',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: 'https://www.goldensparkhomes.africa/properties/sunrise-twins',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}