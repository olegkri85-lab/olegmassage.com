<template>
  <!-- Desktop Navigation -->
  <nav class="hidden xl:flex gap-6 items-center">
    <NuxtLink
      v-for="link in navLinks"
      :key="link.to"
      :to="localePath(link.to)"
      class="!no-underline text-gray-900 text-base hover:text-green-800 transition-colors relative [&.router-link-active]:after:content-[''] [&.router-link-active]:after:absolute [&.router-link-active]:after:-bottom-1 [&.router-link-active]:after:left-0 [&.router-link-active]:after:right-0 [&.router-link-active]:after:h-0.5 [&.router-link-active]:after:bg-[#8BC34A]"
    >
      {{ t(link.label) }}
    </NuxtLink>
    <CtaButton variant="nav" size="sm" text-key="cta.nav" />
  </nav>

  <!-- Mobile Navigation -->
  <button
    @click="isOpen = !isOpen"
    class="xl:hidden flex flex-col gap-1.5 p-2"
    :aria-label="isOpen ? 'Close menu' : 'Open menu'"
  >
    <span
      class="w-6 h-0.5 bg-gray-900 transition-all"
      :class="isOpen ? 'rotate-45 translate-y-2' : ''"
    ></span>
    <span
      class="w-6 h-0.5 bg-gray-900 transition-all"
      :class="isOpen ? 'opacity-0' : ''"
    ></span>
    <span
      class="w-6 h-0.5 bg-gray-900 transition-all"
      :class="isOpen ? '-rotate-45 -translate-y-2' : ''"
    ></span>
  </button>

  <!-- Mobile Menu Overlay -->
  <Transition
    enter-active-class="transition-opacity duration-200"
    leave-active-class="transition-opacity duration-200"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="xl:hidden fixed inset-0 bg-black/50 z-40"
      @click="isOpen = false"
    ></div>
  </Transition>

  <!-- Mobile Menu Panel -->
  <Transition
    enter-active-class="transition-transform duration-300"
    leave-active-class="transition-transform duration-300"
    enter-from-class="translate-x-full"
    leave-to-class="translate-x-full"
  >
    <nav
      v-if="isOpen"
      class="xl:hidden fixed top-0 right-0 bottom-0 w-64 bg-white z-50 p-8 flex flex-col gap-8"
    >
      <button
        @click="isOpen = false"
        class="self-end p-2"
        aria-label="Close menu"
      >
        <span
          class="w-6 h-0.5 bg-gray-900 block rotate-45 translate-y-0.5"
        ></span>
        <span
          class="w-6 h-0.5 bg-gray-900 block -rotate-45 -translate-y-0.5"
        ></span>
      </button>
      <NuxtLink
        v-for="link in navLinks"
        :key="link.to"
        :to="localePath(link.to)"
        @click="isOpen = false"
        class="!no-underline text-gray-900 text-xl font-medium hover:text-cyan-600 transition-colors"
      >
        {{ t(link.label) }}
      </NuxtLink>
    </nav>
  </Transition>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const isOpen = ref(false);

const navLinks = [
  { to: "/", label: "nav.home" },
  { to: "/services", label: "nav.services" },
  { to: "/prices", label: "nav.prices" },
  { to: "/about", label: "nav.about" },
  { to: "/certificates", label: "nav.certificates" },
  { to: "/faq", label: "nav.faq" },
];
</script>
