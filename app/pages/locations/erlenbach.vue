<template>
  <LocationPage
    :subtitle="t('location.erlenbach.subtitle')"
    :title="t('location.erlenbach.title')"
    :description="t('location.erlenbach.description')"
    :why-title="t('location.erlenbach.why.title')"
    :benefits="benefits"
    :services-title="t('location.erlenbach.services.title')"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.erlenbach.benefits.1"),
  t("location.erlenbach.benefits.2"),
  t("location.erlenbach.benefits.3"),
  t("location.erlenbach.benefits.4"),
  t("location.erlenbach.benefits.5"),
]);

useHead(() => ({
  title: t("location.erlenbach.meta.title"),
  meta: [
    { name: "description", content: t("location.erlenbach.meta.description") },
    { property: "og:title", content: t("location.erlenbach.meta.title") },
    { property: "og:description", content: t("location.erlenbach.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/erlenbach")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.erlenbach.title"),
        description: t("location.erlenbach.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Erlenbach",
        },
        serviceType: "Mobile Massage",
      }),
    },
  ],
}));
</script>
