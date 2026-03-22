<template>
  <LocationPage
    :subtitle="t('location.aargau.subtitle')"
    :title="t('location.aargau.title')"
    :description="t('location.aargau.description')"
    :why-title="t('location.aargau.why.title')"
    :benefits="benefits"
    :services-title="t('location.aargau.services.title')"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.aargau.benefits.1"),
  t("location.aargau.benefits.2"),
  t("location.aargau.benefits.3"),
  t("location.aargau.benefits.4"),
  t("location.aargau.benefits.5"),
]);

useHead(() => ({
  title: t("location.aargau.meta.title"),
  meta: [
    { name: "description", content: t("location.aargau.meta.description") },
    { property: "og:title", content: t("location.aargau.meta.title") },
    { property: "og:description", content: t("location.aargau.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/aargau")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.aargau.title"),
        description: t("location.aargau.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Aargau",
        },
        serviceType: "Mobile Massage",
      }),
    },
  ],
}));
</script>
