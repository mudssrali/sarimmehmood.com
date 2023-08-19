import glob from 'fast-glob'
import * as path from 'path'

async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/articles/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles'),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  // find pinned article
  const pinnedArticle = articles.find(a => a.pinned)
  // filter out pinned article
  articles = articles.filter(a => !a.pinned)

  articles = articles.sort((a, z) => new Date(z.date) - new Date(a.date))

  return [pinnedArticle, ...articles]
}
