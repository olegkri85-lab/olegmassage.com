<template>
  <section
    class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--lightAccent-hsl))]"
  >
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <p
          class="text-xs md:text-sm uppercase tracking-widest text-gray-600 mb-4"
        >
          {{ t("services.subtitle") }}
        </p>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-display text-gray-900">
          {{ t("services.title") }}
        </h2>
      </div>
      <ServicesGrid />
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
