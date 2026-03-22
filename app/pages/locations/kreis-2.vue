<template>
  <LocationPage
    :subtitle="t('location.kreis2.subtitle')"
    :title="t('location.kreis2.title')"
    :description="t('location.kreis2.description')"
    :why-title="t('location.kreis2.why.title')"
    :benefits="benefits"
    :services-title="t('location.kreis2.services.title')"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.kreis2.benefits.1"),
  t("location.kreis2.benefits.2"),
  t("location.kreis2.benefits.3"),
  t("location.kreis2.benefits.4"),
  t("location.kreis2.benefits.5"),
]);

useHead(() => ({
  title: t("location.kreis2.meta.title"),
  meta: [
    { name: "description", content: t("location.kreis2.meta.description") },
    { property: "og:title", content: t("location.kreis2.meta.title") },
    { property: "og:description", content: t("location.kreis2.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/kreis-2")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.kreis2.title"),
        description: t("location.kreis2.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Zürich Kreis 2 (Enge/Wollishofen)",
        },
        serviceType: "Mobile Massage",
      }),
    },
  ],
}));
</script>
