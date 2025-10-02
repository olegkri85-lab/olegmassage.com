<template>
  <div class="bg-[hsl(var(--accent-hsl))] text-white py-2 px-8 xl:px-16">
    <div class="md:flex justify-between items-center text-xs md:text-sm">
      <LanguageSwitcher />
      <a
        href="tel:+41798499274"
        class="hover:text-gray-300 hidden transition-colors md:flex gap-2 !no-underline"
        target="_blank"
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
          class="lucide lucide-phone-icon lucide-phone"
        >
          <path
            d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
          />
        </svg>

        +41 79 849 92 74
      </a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
