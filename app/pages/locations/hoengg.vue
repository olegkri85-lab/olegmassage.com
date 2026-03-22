<template>
  <LocationPage
    :subtitle="t('location.hoengg.subtitle')"
    :title="t('location.hoengg.title')"
    :description="t('location.hoengg.description')"
    :why-title="t('location.hoengg.why.title')"
    :benefits="benefits"
    :services-title="t('location.hoengg.services.title')"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.hoengg.benefits.1"),
  t("location.hoengg.benefits.2"),
  t("location.hoengg.benefits.3"),
  t("location.hoengg.benefits.4"),
  t("location.hoengg.benefits.5"),
]);

useHead(() => ({
  title: t("location.hoengg.meta.title"),
  meta: [
    { name: "description", content: t("location.hoengg.meta.description") },
    { property: "og:title", content: t("location.hoengg.meta.title") },
    { property: "og:description", content: t("location.hoengg.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/hoengg")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.hoengg.title"),
        description: t("location.hoengg.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Höngg",
        },
        serviceType: "Mobile Massage",
      }),
    },
  ],
}));
</script>
