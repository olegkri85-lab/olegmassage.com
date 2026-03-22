<template>
  <section class="bg-[hsl(var(--lightAccent-hsl))] rounded-2xl p-8 md:p-12 mb-16">
    <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-8">
      {{ t("serviceTestimonials.title") }}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="(item, index) in testimonials"
        :key="index"
        class="bg-white p-6 md:p-8 rounded-xl flex flex-col gap-4"
      >
        <div class="text-3xl text-[hsl(var(--accent-hsl))] font-display">"</div>
        <p class="text-base md:text-lg leading-relaxed text-gray-700">
          {{ item.quote }}
        </p>
        <div class="mt-auto">
          <p class="text-base font-medium text-gray-900">{{ item.author }}</p>
          <p class="text-sm text-gray-600">{{ item.location }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  serviceKey: string;
}>();

const { t, tm, rt } = useI18n();

const testimonials = computed(() => {
  const raw = tm(`serviceTestimonials.${props.serviceKey}`);
  if (!Array.isArray(raw)) return [];
  return raw.map((item: any) => ({
    quote: rt(item.quote),
    author: rt(item.author),
    location: rt(item.location),
  }));
});
</script>
