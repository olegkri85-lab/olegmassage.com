<template>
  <div class="bg-gray-50">
    <!-- About Me Section -->
    <AboutMe />

    <!-- Testimonials Section -->
    <Testimonials />

    <!-- CTA Section -->
    <CallToAction />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

useHead(() => ({
  title: t("meta.about.title"),
  meta: [
    { name: "description", content: t("meta.about.description") },
    { property: "og:title", content: t("meta.about.title") },
    { property: "og:description", content: t("meta.about.description") },
    { property: "og:type", content: "profile" },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://olegmassage.com${localePath("/about")}`,
    },
  ],
}));
</script>
