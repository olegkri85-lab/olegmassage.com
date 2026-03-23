<template>
  <header class="py-8 p-8 xl:p-16 bg-[hsl(var(--lightAccent-hsl))]">
    <div class="container mx-auto flex justify-between items-center gap-8">
      <div>
        <NuxtLink
          :to="localePath('/')"
          class="text-gray-900 relative !no-underline whitespace-nowrap"
        >
          <span
            class="font-display text-2xl md:text-3xl -tracking-tight font-black leading-tight"
          >
            olegmassage.com
          </span>
        </NuxtLink>
      </div>
      <div class="flex justify-end">
        <AppNavigation />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
