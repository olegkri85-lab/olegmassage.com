<template>
  <article class="flex flex-col gap-8 h-full">
    <div class="w-full">
      <ImagePlaceholder
        :ratio="imageRatio"
        :src="image"
        :alt="title"
        :label="imageLabel"
        loading="lazy"
      />
    </div>
    <div class="flex flex-col gap-4 flex-1">
      <h3 class="text-2xl md:text-3xl lg:text-4xl font-display text-gray-900 break-words hyphens-auto">{{ title }}</h3>
      <p class="text-base md:text-lg lg:text-xl leading-relaxed text-gray-600">{{ description }}</p>
      <div v-if="duration || price" class="mt-auto space-y-2">
        <p v-if="duration" class="text-base md:text-lg text-gray-700">
          <strong>{{ duration }}</strong>
        </p>
        <p v-if="price" class="text-2xl md:text-3xl font-display text-[hsl(var(--accent-hsl))] font-bold">{{ price }}</p>
      </div>
      <NuxtLink
        v-if="link"
        :to="link"
        class="inline-flex items-center gap-2 text-[hsl(var(--accent-hsl))] hover:underline font-medium text-base md:text-lg"
      >
        {{ linkText || 'Learn more' }}
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  duration?: string
  price?: string
  image?: string
  imageLabel?: string
  imageRatio?: '16/9' | '4/3' | '3/2' | '1/1' | '2/3'
  link?: string
  linkText?: string
}>()
</script>
