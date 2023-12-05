import glob from 'fast-glob'
import * as path from 'path'

async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/blog/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/blog'),
  })

  let articles = (await Promise.all(articleFilenames.map(importArticle))).filter(a => !a.hidden)

  // find pinned article
  const pinnedArticle = articles.find(a => a.pinned)
  // filter out pinned article
  articles = articles.filter(a => !a.pinned)
    .sort((a, z) => new Date(z.date) - new Date(a.date))

  return pinnedArticle ? [pinnedArticle, ...articles] : articles
}
