<template>
  <LocationPage
    :subtitle="t('location.kreis9.subtitle')"
    :title="t('location.kreis9.title')"
    :description="t('location.kreis9.description')"
    :why-title="t('location.kreis9.why.title')"
    :benefits="benefits"
    :services-title="t('location.kreis9.services.title')"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.kreis9.benefits.1"),
  t("location.kreis9.benefits.2"),
  t("location.kreis9.benefits.3"),
  t("location.kreis9.benefits.4"),
  t("location.kreis9.benefits.5"),
]);

useHead(() => ({
  title: t("location.kreis9.meta.title"),
  meta: [
    { name: "description", content: t("location.kreis9.meta.description") },
    { property: "og:title", content: t("location.kreis9.meta.title") },
    { property: "og:description", content: t("location.kreis9.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/kreis-9")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.kreis9.title"),
        description: t("location.kreis9.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Zürich Kreis 9 (Altstetten/Albisrieden)",
        },
        serviceType: "Mobile Massage",
      }),
    },
  ],
}));
</script>
