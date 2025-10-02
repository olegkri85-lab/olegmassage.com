<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--accent-hsl))]">
      <div class="max-w-4xl">
        <p class="text-xs md:text-sm uppercase tracking-widest text-white mb-4">
          {{ t("faq.subtitle") }}
        </p>
        <h1
          class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display leading-none text-white mb-8"
        >
          {{ t("faq.title") }}
        </h1>
      </div>
    </section>

    <!-- FAQ Items -->
    <section
      class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--lightAccent-hsl))]"
    >
      <div class="max-w-4xl mx-auto">
        <div class="space-y-4">
          <div
            v-for="(item, index) in faqItems"
            :key="index"
            class="overflow-hidden"
          >
            <button
              @click="toggleItem(index)"
              class="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
              :aria-expanded="openItems.includes(index)"
            >
              <span class="font-display text-lg md:text-2xl font-medium pr-8">
                {{ item.question }}
              </span>
              <svg
                class="w-6 h-6 flex-shrink-0 transition-transform duration-200"
                :class="{ 'rotate-180': openItems.includes(index) }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              v-show="openItems.includes(index)"
              class="px-6 pb-4 text-gray-600 text-base md:text-lg leading-relaxed transition-all duration-200 overflow-hidden"
              :class="openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
            >
              {{ item.answer }}
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- CTA Section -->
    <CallToAction />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

// Define FAQ items count (we have 10 questions)
const faqItemsCount = 10;
const faqItems = computed(() => {
  const items = [];
  for (let i = 0; i < faqItemsCount; i++) {
    items.push({
      question: t(`faq.items.${i}.question`),
      answer: t(`faq.items.${i}.answer`),
    });
  }
  return items;
});

// Track which items are open
const openItems = ref<number[]>([]);

const toggleItem = (index: number) => {
  const itemIndex = openItems.value.indexOf(index);
  if (itemIndex > -1) {
    openItems.value.splice(itemIndex, 1);
  } else {
    openItems.value.push(index);
  }
};

// SEO Meta tags and FAQ Schema markup
const { locale } = useI18n();
const localePath = useLocalePath();

useHead(() => ({
  title: t("meta.faq.title"),
  meta: [
    {
      name: "description",
      content: t("meta.faq.description"),
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://massazh.me${localePath('/faq')}`,
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.value.map((item: any) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }),
    },
  ],
}));
</script>
