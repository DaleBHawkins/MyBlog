import { Feed } from 'feed'
import { serverQueryContent } from '#content/server'

const basePath = 'https://www.baidu.com'

export default defineEventHandler(async (event) => {
  setHeader(event, 'content-type', 'text/xml')
  const docs = await serverQueryContent(event).sort({ date: -1 }).find()
  const feed = new Feed({
    title: "Dale's personal blog site",
    description: "Dale's personal blog site",
    id: basePath,
    link: basePath,
    language: 'en',
    favicon: `${basePath}/favicon.ico`,
    copyright: 'MIT',
    author: {
      name: 'Dale B Hawkins',
      email: '2362626948@qq.com',
      link: basePath,
    },
  })

  // Add the feed items
  docs.forEach((doc) => {
    feed.addItem({
      title: doc.title || '',
      id: basePath + doc._path,
      link: basePath + doc._path,
      description: doc.description,
      content: doc.description,
      date: new Date(doc.date),
    })
  })

  return feed.rss2()
})
