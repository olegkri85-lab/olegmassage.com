<template>
  <LocationPage
    :subtitle="t('location.kreis10.subtitle')"
    :title="t('location.kreis10.title')"
    :description="t('location.kreis10.description')"
    :why-title="t('location.kreis10.why.title')"
    :benefits="benefits"
    :services-title="t('location.kreis10.services.title')"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.kreis10.benefits.1"),
  t("location.kreis10.benefits.2"),
  t("location.kreis10.benefits.3"),
  t("location.kreis10.benefits.4"),
  t("location.kreis10.benefits.5"),
]);

useHead(() => ({
  title: t("location.kreis10.meta.title"),
  meta: [
    { name: "description", content: t("location.kreis10.meta.description") },
    { property: "og:title", content: t("location.kreis10.meta.title") },
    { property: "og:description", content: t("location.kreis10.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/kreis-10")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.kreis10.title"),
        description: t("location.kreis10.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Zürich Kreis 10 (Höngg/Wipkingen)",
        },
        serviceType: "Mobile Massage",
      }),
    },
  ],
}));
</script>
