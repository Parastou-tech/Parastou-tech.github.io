import { getProjectPosts } from 'app/project/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let project = getProjectPosts().map((post) => ({
    url: `${baseUrl}/project/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/project'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...project]
}
