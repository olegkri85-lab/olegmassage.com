<template>
  <section class="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
    <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-8">
      {{ t(`servicePages.${serviceKey}.faq.title`) }}
    </h2>
    <div class="space-y-6">
      <details
        v-for="(item, index) in items"
        :key="index"
        class="group bg-white rounded-xl"
      >
        <summary
          class="flex items-center justify-between cursor-pointer p-6 text-lg font-medium text-gray-900 select-none"
        >
          {{ item.question }}
          <span class="text-gray-400 group-open:rotate-45 transition-transform text-2xl">+</span>
        </summary>
        <div class="px-6 pb-6 text-base text-gray-700 leading-relaxed">
          {{ item.answer }}
        </div>
      </details>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  serviceKey: string;
}>();

const { t, tm, rt } = useI18n();

const items = computed(() => {
  const raw = tm(`servicePages.${props.serviceKey}.faq.items`);
  if (!Array.isArray(raw)) return [];
  return raw.map((item: any) => ({
    question: rt(item.question),
    answer: rt(item.answer),
  }));
});
</script>
