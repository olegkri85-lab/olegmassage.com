<template>
  <article class="flex flex-col gap-8 h-full">
    <NuxtLink v-if="link" :to="link" class="w-full block !no-underline group/img">
      <NuxtImg
        :src="image"
        :alt="title"
        loading="lazy"
        format="webp"
        quality="80"
        class="w-full h-full object-cover"
        :style="`aspect-ratio: ${imageRatio || '4/3'}`"
      />
    </NuxtLink>
    <div v-else class="w-full">
      <NuxtImg
        :src="image"
        :alt="title"
        loading="lazy"
        format="webp"
        quality="80"
        class="w-full h-full object-cover"
        :style="`aspect-ratio: ${imageRatio || '4/3'}`"
      />
    </div>
    <div class="flex flex-col gap-4 flex-1">
      <NuxtLink v-if="link" :to="link" class="!no-underline">
        <h3 class="text-2xl md:text-3xl lg:text-4xl font-display text-gray-900 break-words hyphens-auto hover:text-[hsl(var(--accent-hsl))] transition-colors">{{ title }}</h3>
      </NuxtLink>
      <h3 v-else class="text-2xl md:text-3xl lg:text-4xl font-display text-gray-900 break-words hyphens-auto">{{ title }}</h3>
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
