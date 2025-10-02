<template>
  <section class="relative aspect-video overflow-hidden">
    <!-- Background Video -->
    <video
      ref="videoRef"
      class="absolute inset-0 w-full h-full object-cover"
      autoplay
      muted
      playsinline
      @ended="onVideoEnd"
    >
      <source src="/video/video.mp4" type="video/mp4" />
    </video>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/30" />

    <!-- CTA Button (shows after video ends) -->
    <Transition
      enter-active-class="transition-all duration-500"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
    >
      <div
        v-if="showButton"
        class="absolute inset-0 flex items-center justify-center"
      >
        <CtaButton variant="hero" size="lg" text-key="cta.hero" />
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
const videoRef = ref<HTMLVideoElement | null>(null);
const showButton = ref(false);

const onVideoEnd = () => {
  showButton.value = true;
};
</script>
