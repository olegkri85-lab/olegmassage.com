<template>
  <LocationPage
    :subtitle="t('location.meilen.subtitle')"
    :title="t('location.meilen.title')"
    :description="t('location.meilen.description')"
    :why-title="t('location.meilen.why.title')"
    :benefits="benefits"
    :services-title="t('location.meilen.services.title')"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.meilen.benefits.1"),
  t("location.meilen.benefits.2"),
  t("location.meilen.benefits.3"),
  t("location.meilen.benefits.4"),
  t("location.meilen.benefits.5"),
]);

useHead(() => ({
  title: t("location.meilen.meta.title"),
  meta: [
    { name: "description", content: t("location.meilen.meta.description") },
    { property: "og:title", content: t("location.meilen.meta.title") },
    { property: "og:description", content: t("location.meilen.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/meilen")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.meilen.title"),
        description: t("location.meilen.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Meilen",
        },
        serviceType: "Mobile Massage",
      }),
    },
  ],
}));
</script>
