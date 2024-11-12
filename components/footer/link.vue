<template>
  <div class="flex flex-col dark:text-zinc-300 my-5 md:my-0 md:justify-self-center">
    <p class="text-black dark:text-zinc-300 text-base font-semibold">快速跳转</p>
    <NuxtLink to="/" class="hover:underline"> 主页 </NuxtLink>
    <NuxtLink to="/blogs" class="hover:underline"> 博客 </NuxtLink>
    <NuxtLink to="/categories" class="hover:underline"> Tags </NuxtLink>
    <NuxtLink to="/about" class="hover:underline"> 关于我 </NuxtLink>
  </div>
</template>
