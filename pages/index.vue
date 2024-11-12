<script lang="ts" setup>
import { navbarData } from '~/data'

useHead({
  title: '主页',
  meta: [
    {
      name: 'description',
      content:
        '欢迎来到我的博客网站。获取Web开发、Javascript、Typescript、NodeJS、Vue和Nuxt、相关文章、技巧、学习资源等。',
    },
  ],
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: '欢迎 👋',
  title: navbarData.homeTitle,
  description: '欢迎进入我的世界',
  link: '/Dale.JPG',
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero />
    <MainRecent />
    <MainTrending />
  </main>
</template>
