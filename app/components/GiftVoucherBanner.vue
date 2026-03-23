<template>
  <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--lightAccent-hsl))]">
    <div class="container mx-auto">
      <div class="bg-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 class="text-2xl md:text-3xl font-display text-gray-900 mb-2">
            {{ t("gutschein.banner.title") }}
          </h2>
          <p class="text-base md:text-lg text-gray-600">
            {{ t("gutschein.banner.description") }}
          </p>
        </div>
        <NuxtLink
          :to="localePath('/gift-voucher')"
          class="!no-underline shrink-0 inline-flex items-center gap-2 bg-[hsl(var(--accent-hsl))] text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
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
