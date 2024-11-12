<script setup lang="ts">
useHead({
  title: '404',
  meta: [
    {
      name: 'description',
      content: '页面不存在',
    },
  ],
})

defineOgImageComponent('About', {
  headline: 'Wrong Path',
  title: '404',
  description: '页面不存在',
})
</script>

<template>
  <div class="py-5">
    <div class="container max-w-xl mx-auto">
      <Logo404 />
    </div>
  </div>
</template>
