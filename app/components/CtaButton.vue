<template>
  <a
    :href="whatsappLink"
    target="_blank"
    rel="noopener noreferrer"
    :class="[
      'inline-flex items-center justify-center gap-3 font-medium transition-all tracking-wide !no-underline',
      variantClasses,
      sizeClasses,
    ]"
  >
    <img
      src="/svg/whatapp.svg"
      alt="WhatsApp"
      :class="iconSizeClasses"
      class="flex-shrink-0"
    />
    <slot>{{ t(textKey) }}</slot>
  </a>
</template>

<script setup lang="ts">
const { t } = useI18n();

const props = withDefaults(
  defineProps<{
    variant?: "primary" | "secondary" | "hero" | "nav";
    size?: "sm" | "md" | "lg";
    textKey?: string;
  }>(),
  {
    variant: "primary",
    size: "lg",
    textKey: "cta.button",
  }
);

const { whatsappLink } = useWhatsapp(props.textKey);

const variantClasses = computed(() => {
  switch (props.variant) {
    case "primary":
      return "bg-[#8BC34A] text-[hsl(var(--accent-hsl))] hover:bg-[#689F38] hover:text-white hover:scale-105";
    case "secondary":
      return "bg-cyan-600 text-white hover:bg-cyan-700 hover:-translate-y-0.5";
    case "hero":
      return "bg-[#F5F5F5] text-[hsl(var(--accent-hsl))] hover:bg-cyan-600 hover:text-white hover:scale-105";
    case "nav":
      return "bg-[#8BC34A] text-[hsl(var(--accent-hsl))] hover:bg-[#689F38] hover:text-white hover:scale-105";
    default:
      return "bg-white text-[hsl(var(--accent-hsl))] hover:bg-cyan-600 hover:text-white hover:scale-105";
  }
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case "sm":
      return "py-2 px-6 text-sm uppercase";
    case "md":
      return "py-5 px-12 text-lg";
    case "lg":
      return "py-6 px-16 text-lg md:text-xl";
    default:
      return "py-6 px-16 text-lg md:text-xl";
  }
});

const iconSizeClasses = computed(() => {
  switch (props.size) {
    case "sm":
      return "w-5 h-5";
    case "md":
      return "w-6 h-6";
    case "lg":
      return "w-7 h-7";
    default:
      return "w-7 h-7";
  }
});
</script>
