<template>
  <div class="bg-gray-50">
    <!-- Hero -->
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--accent-hsl))]">
      <div class="container mx-auto">
        <p class="text-xs md:text-sm uppercase tracking-widest text-white mb-4">
          {{ t("gutschein.subtitle") }}
        </p>
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-8">
          {{ t("gutschein.title") }}
        </h1>
        <p class="text-lg md:text-xl text-white/90 leading-relaxed">
          {{ t("gutschein.description") }}
        </p>
      </div>
    </section>

    <!-- Voucher Options -->
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-white">
      <div class="container mx-auto">
        <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-12 text-center">
          {{ t("gutschein.options.title") }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div
            v-for="option in options"
            :key="option.key"
            class="rounded-2xl p-8 flex flex-col"
            :class="option.key === 'swedish'
              ? 'bg-[hsl(var(--accent-hsl))] text-white ring-2 ring-[hsl(var(--accent-hsl))] scale-[1.02]'
              : 'bg-gray-50'"
          >
            <span
              class="self-start text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full mb-6"
              :class="option.key === 'swedish' ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'"
            >
              {{ t(`gutschein.options.${option.key}.badge`) }}
            </span>
            <h3
              class="text-2xl font-display mb-2"
              :class="option.key === 'swedish' ? 'text-white' : 'text-gray-900'"
            >
              {{ t(`gutschein.options.${option.key}.title`) }}
            </h3>
            <p
              class="text-sm mb-4"
              :class="option.key === 'swedish' ? 'text-white/70' : 'text-gray-500'"
            >
              {{ t(`gutschein.options.${option.key}.duration`) }}
            </p>
            <p
              class="text-3xl font-display mb-4"
              :class="option.key === 'swedish' ? 'text-white' : 'text-[hsl(var(--accent-hsl))]'"
            >
              {{ t(`gutschein.options.${option.key}.price`) }}
            </p>
            <p
              class="text-base leading-relaxed mb-8 flex-grow"
              :class="option.key === 'swedish' ? 'text-white/80' : 'text-gray-700'"
            >
              {{ t(`gutschein.options.${option.key}.description`) }}
            </p>
            <div class="flex flex-col gap-3">
              <a
                :href="whatsappUrl(option.key)"
                target="_blank"
                rel="noopener noreferrer"
                class="!no-underline inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors"
                :class="option.key === 'swedish'
                  ? 'bg-white text-[hsl(var(--accent-hsl))] hover:bg-white/90'
                  : 'bg-[#25D366] text-white hover:bg-[#20bd5a]'"
              >
                {{ t("gutschein.orderWhatsApp") }}
              </a>
              <a
                :href="emailUrl(option.key)"
                class="!no-underline inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors"
                :class="option.key === 'swedish'
                  ? 'bg-white/20 text-white hover:bg-white/30'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'"
              >
                {{ t("gutschein.orderEmail") }}
              </a>
            </div>
          </div>
        </div>

        <!-- How it works -->
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-8 text-center">
            {{ t("gutschein.howItWorks.title") }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="step in ['step1', 'step2', 'step3']" :key="step" class="text-center">
              <div class="w-12 h-12 bg-[hsl(var(--accent-hsl))] text-white rounded-full flex items-center justify-center text-xl font-display mx-auto mb-4">
                {{ step.replace('step', '') }}
              </div>
              <h3 class="text-lg font-display text-gray-900 mb-2">
                {{ t(`gutschein.howItWorks.${step}.title`) }}
              </h3>
              <p class="text-base text-gray-700">
                {{ t(`gutschein.howItWorks.${step}.description`) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Referral -->
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--lightAccent-hsl))]">
      <div class="container mx-auto">
        <div class="bg-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-4">
            {{ t("gutschein.referral.title") }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            {{ t("gutschein.referral.description") }}
          </p>
          <p class="text-2xl font-display text-[hsl(var(--accent-hsl))] mb-8">
            {{ t("gutschein.referral.discount") }}
          </p>
          <a
            :href="referralWhatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="!no-underline inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#20bd5a] transition-colors"
          >
            {{ t("gutschein.referral.shareWhatsApp") }}
          </a>
        </div>
      </div>
    </section>

    <CallToAction />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const options = [
  { key: "relaxation" },
  { key: "swedish" },
  { key: "custom" },
];

const phone = "41798499274";

const whatsappUrl = (optionKey: string) => {
  const title = t(`gutschein.options.${optionKey}.title`);
  const message = encodeURIComponent(`Hallo Oleg, ich möchte einen Gutschein bestellen: ${title}`);
  return `https://wa.me/${phone}?text=${message}`;
};

const emailUrl = (optionKey: string) => {
  const title = t(`gutschein.options.${optionKey}.title`);
  const subject = encodeURIComponent(`Gutschein bestellen: ${title}`);
  const body = encodeURIComponent(`Hallo Oleg,\n\nich möchte einen Gutschein bestellen: ${title}.\n\nBitte kontaktieren Sie mich mit den Details.\n\nMit freundlichen Grüssen`);
  return `mailto:oleh.kryvorotko@icloud.com?subject=${subject}&body=${body}`;
};

const referralWhatsappUrl = computed(() => {
  const message = encodeURIComponent(t("gutschein.referral.shareMessage"));
  return `https://wa.me/?text=${message}`;
});

useHead(() => ({
  title: t("gutschein.meta.title"),
  meta: [
    { name: "description", content: t("gutschein.meta.description") },
    { property: "og:title", content: t("gutschein.meta.title") },
    { property: "og:description", content: t("gutschein.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/gift-voucher")}` },
  ],
}));
</script>
