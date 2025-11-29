import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://balmukund.com'

  // Define all routes
  const routes = [
    '',
    '/about',
    '/about/overview',
    '/about/at-a-glance',
    '/about/awards',
    '/about/board-of-directors',
    '/about/chairman-message',
    '/chairman-message',
    '/our-profile',
    '/follow-on-social',
    '/why-choose-us',
    '/balmukund',
    '/products-showcase',
    '/modern-design',
    '/products',
    '/products/tmt-bars',
    '/products/pig-iron',
    '/products/sponge-iron',
    '/products/fibre-cement-sheets',
    '/careers',
    '/contact',
    '/gallery',
    '/event-gallery',
    '/mason-meet-gallery',
    '/product-gallery',
    '/video-gallery',
    '/voice-of-balmukund',
    '/voice-of-balmukund-gallery',
    '/news-media',
    '/technology',
    '/quality',
    '/quality-assurance',
    '/compliance',
    '/privacy',
    '/terms',
  ]

  // Generate sitemap entries
  const sitemapEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }))

  return sitemapEntries
}

