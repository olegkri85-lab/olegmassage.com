<template>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--accent-hsl))]">
      <div class="max-w-4xl">
        <p class="text-xs md:text-sm uppercase tracking-widest text-white mb-4">
          {{ subtitle }}
        </p>
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-8">
          {{ title }}
        </h1>
        <p class="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
          {{ description }}
        </p>
        <CtaButton variant="hero" />
      </div>
    </section>

    <!-- Why Choose Section -->
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--lightAccent-hsl))]">
      <div class="max-w-4xl">
        <div class="bg-white rounded-2xl p-8 md:p-12">
          <h2 class="text-2xl md:text-3xl font-display text-gray-900 mb-6">
            {{ whyTitle }}
          </h2>
          <ul class="space-y-4 text-base md:text-lg text-gray-700">
            <li v-for="(benefit, index) in benefits" :key="index" class="flex items-start gap-3">
              <span class="text-[hsl(var(--accent-hsl))] text-xl">✓</span>
              <span>{{ benefit }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-white">
      <div class="max-w-4xl">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-display mb-8">
          {{ servicesTitle }}
        </h2>
        <ServicesGrid />
      </div>
    </section>

    <!-- FAQ Section -->
    <LocationFaq v-if="locationKey" :location-key="locationKey" />

    <!-- Nearby Locations -->
    <NearbyLocations v-if="locationSlug" :location-slug="locationSlug" />

    <!-- CTA Section -->
    <CallToAction />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  subtitle: string
  title: string
  description: string
  whyTitle: string
  benefits: string[]
  servicesTitle: string
  locationKey?: string
  locationSlug?: string
}>()
</script>
