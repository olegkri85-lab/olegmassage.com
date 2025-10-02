<template>
  <div class="flex gap-2 items-center">
    <button
      v-for="locale in availableLocales"
      :key="locale.code"
      :class="[
        'py-1 px-3 text-xs font-medium cursor-pointer transition-all',
        currentLocale === locale.code
          ? 'bg-white text-black'
          : 'bg-transparent text-white hover:bg-white/10',
      ]"
      @click="switchLanguage(locale.code)"
      :lang="locale.code"
      :aria-label="`Switch to ${locale.name}`"
      :aria-current="currentLocale === locale.code ? 'true' : undefined"
    >
      {{ getLanguageName(locale.code) }}
    </button>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const router = useRouter();

const currentLocale = computed(() => locale.value);

const availableLocales = computed(
  () => locales.value as Array<{ code: string; name: string }>
);

const languageNames: Record<string, string> = {
  'de': 'Deutsch',
  'en': 'English',
  'ru': 'Русский',
  'uk': 'Українська'
};

const getLanguageName = (code: string) => {
  return languageNames[code] || code.toUpperCase();
};

const switchLanguage = (code: string) => {
  const path = switchLocalePath(code);
  router.push(path);
};
</script>
