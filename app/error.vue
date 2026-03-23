<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <div class="flex-1 flex items-center justify-center px-8 py-16">
      <div class="text-center max-w-xl">
        <p class="text-8xl md:text-9xl font-display font-bold text-[hsl(var(--accent-hsl))] mb-6">
          {{ error?.statusCode || 404 }}
        </p>
        <h1 class="text-3xl md:text-4xl font-display text-gray-900 mb-4">
          {{ title }}
        </h1>
        <p class="text-lg text-gray-600 mb-8">
          {{ description }}
        </p>
        <button
          @click="handleError"
          class="inline-flex items-center gap-2 bg-[hsl(var(--accent-hsl))] text-white py-4 px-10 text-lg font-medium hover:opacity-90 transition-opacity"
        >
          {{ homeLabel }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode: number;
    message: string;
  };
}>();

const is404 = computed(() => props.error?.statusCode === 404);

const title = computed(() =>
  is404.value ? "Seite nicht gefunden" : "Ein Fehler ist aufgetreten"
);

const description = computed(() =>
  is404.value
    ? "Die gewünschte Seite existiert nicht oder wurde verschoben."
    : "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut."
);

const homeLabel = "Zur Startseite";

const handleError = () => clearError({ redirect: "/" });
</script>
