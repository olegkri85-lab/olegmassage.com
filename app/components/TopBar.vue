<template>
  <div class="bg-[hsl(var(--accent-hsl))] text-white py-2 px-8 xl:px-16">
    <div class="flex justify-between items-center text-xs md:text-sm">
      <LanguageSwitcher />
      <div class="flex items-center gap-4">
        <NuxtLink
          :to="localePath('/contact')"
          class="hover:text-gray-300 transition-colors !no-underline"
        >
          {{ t("contact.subtitle") }}
        </NuxtLink>
        <span class="text-white/30">|</span>
        <a
          href="tel:+41798499274"
          class="hover:text-gray-300 transition-colors flex gap-2 !no-underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
            />
          </svg>
          <span class="hidden md:inline">+41 79 849 92 74</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>
