<template>
  <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--accent-hsl))]">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 class="text-2xl md:text-3xl font-display text-white mb-2">
            {{ t("gutschein.banner.title") }}
          </h2>
          <p class="text-base md:text-lg text-white/80">
            {{ t("gutschein.banner.description") }}
          </p>
        </div>
        <NuxtLink
          :to="localePath('/gift-voucher')"
          class="!no-underline shrink-0 inline-flex items-center gap-2 bg-white text-[hsl(var(--accent-hsl))] px-8 py-4 rounded-full text-lg font-medium hover:bg-white/90 transition-colors"
        >
          {{ t("gutschein.banner.button") }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>
