<template>
  <section v-if="items.length" class="py-16 px-8 xl:py-32 xl:px-16 bg-gray-50">
    <div class="container mx-auto">
      <h2 class="text-3xl md:text-4xl font-display text-gray-900 mb-8">
        {{ t("location.faqTitle") }}
      </h2>
      <div class="space-y-4">
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
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  locationKey: string
}>()

const { t, tm, rt } = useI18n()

const items = computed(() => {
  const raw = tm(`location.${props.locationKey}.faq.items`)
  if (!Array.isArray(raw)) return []
  return raw.map((item: any) => ({
    question: rt(item.question),
    answer: rt(item.answer),
  }))
})
</script>
