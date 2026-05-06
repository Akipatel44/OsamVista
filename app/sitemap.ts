import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://osamhills.vercel.app',
      lastModified: new Date(),
    },
    {
      url: 'https://osamhills.vercel.app/attractions',
      lastModified: new Date(),
    },
    {
      url: 'https://osamhills.vercel.app/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://osamhills.vercel.app/festival',
      lastModified: new Date(),
    },
    {
      url: 'https://osamhills.vercel.app/gallery',
      lastModified: new Date(),
    },
    {
      url: 'https://osamhills.vercel.app/privacy-policy',
      lastModified: new Date(),
    },
    {
      url: 'https://osamhills.vercel.app/temples',
      lastModified: new Date(),
    },
    {
      url: 'https://osamhills.vercel.app/terms-and-conditions',
      lastModified: new Date(),
    },
    {
      url: 'https://osamhills.vercel.app/visitor-guide',
      lastModified: new Date(),
    },
  ]
}