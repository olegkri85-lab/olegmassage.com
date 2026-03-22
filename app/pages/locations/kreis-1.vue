<template>
  <LocationPage
    :subtitle="t('location.kreis1.subtitle')"
    :title="t('location.kreis1.title')"
    :description="t('location.kreis1.description')"
    :why-title="t('location.kreis1.why.title')"
    :benefits="benefits"
    :services-title="t('location.kreis1.services.title')"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.kreis1.benefits.1"),
  t("location.kreis1.benefits.2"),
  t("location.kreis1.benefits.3"),
  t("location.kreis1.benefits.4"),
  t("location.kreis1.benefits.5"),
]);

useHead(() => ({
  title: t("location.kreis1.meta.title"),
  meta: [
    { name: "description", content: t("location.kreis1.meta.description") },
    { property: "og:title", content: t("location.kreis1.meta.title") },
    { property: "og:description", content: t("location.kreis1.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/kreis-1")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.kreis1.title"),
        description: t("location.kreis1.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Zürich Kreis 1 (Altstadt)",
        },
        serviceType: "Mobile Massage",
      }),
    },
  ],
}));
</script>
