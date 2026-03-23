<template>
  <div class="bg-red-50 rounded-2xl p-8 md:p-12 mb-16">
    <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-6">
      {{ t(`servicePages.${serviceKey}.contraindications.title`) }}
    </h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      {{ t(`servicePages.${serviceKey}.contraindications.intro`) }}
    </p>
    <ul class="space-y-3">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="flex items-start gap-3 text-base md:text-lg text-gray-700"
      >
        <span class="text-red-500 text-xl mt-0.5">✕</span>
        <span>{{ item }}</span>
      </li>
    </ul>
    <p class="text-base text-gray-600 mt-6 italic">
      {{ t(`servicePages.${serviceKey}.contraindications.note`) }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  serviceKey: string;
}>();

const { t, tm, rt } = useI18n();

const items = computed(() => {
  const raw = tm(`servicePages.${props.serviceKey}.contraindications.items`);
  if (!Array.isArray(raw)) return [];
  return raw.map((item: any) => rt(item));
});
</script>
