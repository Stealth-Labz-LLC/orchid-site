import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  const routes: Array<{
    path: string
    changeFrequency: 'daily' | 'weekly' | 'monthly'
    priority: number
  }> = [
    { path: '', changeFrequency: 'daily', priority: 1.0 },
    { path: '/services', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/pricing', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/about-us', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/contact', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/blog', changeFrequency: 'daily', priority: 0.8 },
    { path: '/terms', changeFrequency: 'monthly', priority: 0.5 },
    { path: '/privacy', changeFrequency: 'monthly', priority: 0.5 },
    { path: '/cookies', changeFrequency: 'monthly', priority: 0.5 },
  ]

  const staticPages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  // TODO: Add dynamic blog posts when you have them
  // const blogPosts = await getBlogPosts()
  // const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt || post.createdAt),
  //   changeFrequency: 'monthly',
  //   priority: 0.6,
  // }))

  return staticPages
}
