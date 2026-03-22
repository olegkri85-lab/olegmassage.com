<template>
  <LocationPage
    :subtitle="t('location.kreis6.subtitle')"
    :title="t('location.kreis6.title')"
    :description="t('location.kreis6.description')"
    :why-title="t('location.kreis6.why.title')"
    :benefits="benefits"
    :services-title="t('location.kreis6.services.title')"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.kreis6.benefits.1"),
  t("location.kreis6.benefits.2"),
  t("location.kreis6.benefits.3"),
  t("location.kreis6.benefits.4"),
  t("location.kreis6.benefits.5"),
]);

useHead(() => ({
  title: t("location.kreis6.meta.title"),
  meta: [
    { name: "description", content: t("location.kreis6.meta.description") },
    { property: "og:title", content: t("location.kreis6.meta.title") },
    { property: "og:description", content: t("location.kreis6.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/kreis-6")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.kreis6.title"),
        description: t("location.kreis6.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Zürich Kreis 6 (Unterstrass)",
        },
        serviceType: "Mobile Massage",
      }),
    },
  ],
}));
</script>
