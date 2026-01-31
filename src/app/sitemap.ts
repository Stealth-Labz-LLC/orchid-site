import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://orchidsw.com'

  const routes: Array<{
    path: string
    changeFrequency: 'daily' | 'weekly' | 'monthly'
    priority: number
  }> = [
    { path: '', changeFrequency: 'daily', priority: 1.0 },
    { path: '/services', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/pricing', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/about-us', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/contact', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/blog', changeFrequency: 'daily', priority: 0.8 },
    { path: '/case-studies', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/case-studies/trafficai', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/case-studies/stealthlabz', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/case-studies/shiksha', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/blog/building-scalable-saas-applications', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/blog/api-security-best-practices', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/blog/database-performance-optimization', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/blog/software-development-company-patna-guide', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/blog/software-development-company-india', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/blog/hire-software-development-company-usa', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/terms', changeFrequency: 'monthly', priority: 0.4 },
    { path: '/privacy', changeFrequency: 'monthly', priority: 0.4 },
    { path: '/cookies', changeFrequency: 'monthly', priority: 0.4 },
  ]

  const staticPages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  return staticPages
}
