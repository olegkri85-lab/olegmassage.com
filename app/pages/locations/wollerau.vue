<template>
  <LocationPage
    :subtitle="t('location.wollerau.subtitle')"
    :title="t('location.wollerau.title')"
    :description="t('location.wollerau.description')"
    :why-title="t('location.wollerau.why.title')"
    :benefits="benefits"
    :services-title="t('location.wollerau.services.title')"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.wollerau.benefits.1"),
  t("location.wollerau.benefits.2"),
  t("location.wollerau.benefits.3"),
  t("location.wollerau.benefits.4"),
  t("location.wollerau.benefits.5"),
]);

useHead(() => ({
  title: t("location.wollerau.meta.title"),
  meta: [
    { name: "description", content: t("location.wollerau.meta.description") },
    { property: "og:title", content: t("location.wollerau.meta.title") },
    { property: "og:description", content: t("location.wollerau.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/wollerau")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.wollerau.title"),
        description: t("location.wollerau.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Wollerau",
        },
        serviceType: "Mobile Massage",
      }),
    },
  ],
}));
</script>
