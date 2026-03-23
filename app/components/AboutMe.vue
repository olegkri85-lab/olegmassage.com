<template>
  <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--accent-hsl))]">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
      <div class="flex flex-col gap-8">
        <p class="text-xs md:text-sm uppercase tracking-widest text-white">
          {{ t("about.subtitle") }}
        </p>
        <h1
          class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display leading-none text-white"
        >
          {{ t("about.title") }}
        </h1>
        <p
          class="text-base md:text-lg lg:text-xl leading-relaxed max-w-xl text-white"
        >
          {{ t("about.story") }}
        </p>
        <CtaButton
          variant="primary"
          size="md"
          text-key="cta.about"
          class="self-start"
        />
      </div>
      <div class="w-full">
        <div class="overflow-hidden">
          <NuxtImg
            src="/images/me.jpeg"
            :alt="t('images.portrait')"
            loading="eager"
            fetchpriority="high"
            format="webp"
            quality="80"
            class="w-full h-full object-cover"
            style="aspect-ratio: 1/1"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
