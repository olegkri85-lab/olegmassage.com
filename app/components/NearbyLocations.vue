<template>
  <section v-if="nearby.length" class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--lightAccent-hsl))]">
    <div class="max-w-4xl">
      <h2 class="text-2xl md:text-3xl font-display text-gray-900 mb-6">
        {{ t("location.nearbyTitle") }}
      </h2>
      <div class="flex flex-wrap gap-3">
        <NuxtLink
          v-for="loc in nearby"
          :key="loc.slug"
          :to="localePath(`/locations/${loc.slug}`)"
          class="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm md:text-base text-gray-700 hover:text-[hsl(var(--accent-hsl))] hover:shadow-md transition-all duration-200"
        >
          {{ loc.displayName }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { locationConfig } from '~/data/locationConfig'

const props = defineProps<{
  locationSlug: string
}>()

const { t } = useI18n()
const localePath = useLocalePath()

const nearby = computed(() => {
  const config = locationConfig[props.locationSlug]
  if (!config) return []
  return config.nearbySlug
    .map(slug => {
      const meta = locationConfig[slug]
      if (!meta) return null
      return { slug, displayName: meta.displayName }
    })
    .filter(Boolean) as { slug: string; displayName: string }[]
})
</script>
