<template>
  <a
    :href="whatsappLink"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center group"
    :aria-label="t('cta.whatsapp')"
  >
    <img
      src="/svg/whatapp.svg"
      alt="WhatsApp"
      class="w-8 h-8 md:w-10 md:h-10"
    />
    <!-- Pulse animation ring -->
    <span
      class="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping"
    ></span>
  </a>
</template>

<script setup lang="ts">
const { t } = useI18n();
const { whatsappLink } = useWhatsapp("cta.button");
</script>

<style scoped>
/* Ensure button stays above other content */
a {
  backdrop-filter: blur(8px);
}
</style>
