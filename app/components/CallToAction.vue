<template>
  <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--accent-hsl))] text-center">
    <div class="container mx-auto">
      <h2 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-medium text-white mb-12">
        {{ t("cta.title") }}
      </h2>
      <CtaButton variant="primary" size="lg" text-key="cta.button" />
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
