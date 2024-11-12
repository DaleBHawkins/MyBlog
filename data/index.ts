export const navbarData = {
  homeTitle: "Dale's Blog",
}

export const footerData = {
  author: 'Dale B Hawkins / 周小双',
  aboutAuthor:
    '你好！我叫Dale B Hawkins，是一名来中国的开发者。希望你喜欢我的博客！下面是我的社交链接:',
  authorInterest:
    "我喜欢听音乐、看科幻电影还有玩游戏，当然，写代码也是我所热爱的事情之一。",
  aboutTheSite:
    "这个博客建立于2024年11月，它不仅仅会记录我的技术进步，也会用于记录我的日常点滴，或者是一些人生随想，总之，它将会是我的一个新的起点。",
}

export const homePage = {
  title: '欢迎来到我博客',
  description:
    '欢迎来到我的博客网站。获取Web开发、Javascript、Typescript、NodeJ、Vue和Nuxt、相关文章、技巧、学习资源等。',
}

export const blogsPage = {
  title: '所有博客',
  description: '在这里，你可以找到我在这个网站上写和发表的所有博客文章。',
}

export const categoryPage = {
  title: 'Tag分类',
  description:
    '分类是由不同博客文章中提到的所有标签生成的',
}

export const aboutPage = {
  title: 'Dale B Hawkins / 周小双',
  description: 'Web开发工程师，毕业于乐山师范学院。{也略微会一点后端/汇编以及硬件开发}。',
  aboutMe:
    "我喜欢听歌 {乡村/流行/一点点POP},同时我也喜欢看电影 {科幻电影}是我的最爱，也会看历史题材的电影，总之，如果有好电影，请记得 E-mail我,时不时我也会玩玩游戏，《彩虹六号:围攻》是陪伴我最久的游戏，它让我的大学生活变得有趣，轻松，阳光，如果你也喜欢，请添加我的 Ubisoft Connect: DALEABC。",
}

export const seoData = {
  description:
    'Web开发工程师，毕业于乐山师范学院。{也略微会一点后端/汇编以及硬件开发}。',
  ogTitle:
    '希望我的博客可以帮助到你。',
  twitterDescription:
    'empty',
  image:
    'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https://blog-nurriyad.vercel.app/',
  twitterHandle: '@qdnvubp',
  mailAddress: '2362626948@qq.com',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
