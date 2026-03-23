<template>
  <section
    class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--lightAccent-hsl))]"
  >
    <div class="container mx-auto">
      <h2
        class="text-3xl md:text-4xl font-display text-gray-900 mb-12 text-center"
      >
        {{ t("servicePages.relatedServices") }}
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="service in services"
          :key="service.slug"
          :to="localePath(`/services/${service.slug}`)"
          class="group !no-underline"
        >
          <ServiceCard
            :title="t(`services.${service.key}.title`)"
            :description="
              t(`services.${service.key}.description`).substring(0, 120) + '...'
            "
            :image="`/images/services/large/${service.image}`"
            image-ratio="4/3"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

defineProps<{
  services: Array<{ slug: string; key: string; image: string }>
}>();
</script>
