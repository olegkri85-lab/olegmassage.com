<template>
  <section v-if="servicePackages.length" class="bg-[hsl(var(--lightAccent-hsl))] rounded-2xl p-8 md:p-12 mb-16">
    <div class="flex items-center gap-3 mb-2">
      <h2 class="text-2xl md:text-3xl font-display text-gray-900">
        {{ t("pricing.packages.title") }}
      </h2>
      <span class="bg-[hsl(var(--accent-hsl))] text-white text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full">
        {{ t("pricing.packages.badge") }}
      </span>
    </div>
    <p class="text-base text-gray-600 mb-8">
      {{ t("pricing.packages.description") }}
    </p>
    <div class="space-y-4">
      <div
        v-for="pkg in servicePackages"
        :key="pkg.duration"
        class="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white rounded-xl"
      >
        <div>
          <p class="text-lg font-display text-gray-900">
            {{ t("pricing.packages.sessions") }} · {{ pkg.duration }}
          </p>
        </div>
        <div class="text-right whitespace-nowrap mt-2 sm:mt-0">
          <span class="text-base text-red-500 line-through">{{ pkg.originalPrice }} CHF</span>
          <span class="text-2xl font-bold text-gray-900 ml-3">{{ pkg.price }} CHF</span>
          <span class="block text-sm font-medium text-[hsl(var(--accent-hsl))]">{{ t("pricing.packages.badge") }} (-{{ pkg.originalPrice - pkg.price }} CHF)</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  serviceKey: string
}>()

const { t } = useI18n()

const allPackages: Record<string, Array<{ duration: string; originalPrice: number; price: number }>> = {
  swedish: [
    { duration: "60 Min", originalPrice: 1200, price: 1020 },
    { duration: "90 Min", originalPrice: 1600, price: 1360 },
  ],
  classical: [
    { duration: "60 Min", originalPrice: 1000, price: 850 },
    { duration: "90 Min", originalPrice: 1500, price: 1275 },
  ],
  sports: [
    { duration: "60 Min", originalPrice: 1400, price: 1190 },
  ],
  relaxation: [
    { duration: "60 Min", originalPrice: 1200, price: 1020 },
    { duration: "90 Min", originalPrice: 1600, price: 1360 },
  ],
  anticellulite: [
    { duration: "45 Min", originalPrice: 1000, price: 850 },
  ],
  pregnancy: [
    { duration: "60 Min", originalPrice: 1200, price: 1020 },
  ],
  children: [
    { duration: "60 Min", originalPrice: 1000, price: 850 },
  ],
}

const servicePackages = computed(() => allPackages[props.serviceKey] || [])
</script>
