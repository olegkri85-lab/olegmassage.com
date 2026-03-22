<template>
  <LocationPage
    :subtitle="t('location.richterswil.subtitle')"
    :title="t('location.richterswil.title')"
    :description="t('location.richterswil.description')"
    :why-title="t('location.richterswil.why.title')"
    :benefits="benefits"
    :services-title="t('location.richterswil.services.title')"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.richterswil.benefits.1"),
  t("location.richterswil.benefits.2"),
  t("location.richterswil.benefits.3"),
  t("location.richterswil.benefits.4"),
  t("location.richterswil.benefits.5"),
]);

useHead(() => ({
  title: t("location.richterswil.meta.title"),
  meta: [
    { name: "description", content: t("location.richterswil.meta.description") },
    { property: "og:title", content: t("location.richterswil.meta.title") },
    { property: "og:description", content: t("location.richterswil.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/richterswil")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.richterswil.title"),
        description: t("location.richterswil.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Richterswil",
        },
        serviceType: "Mobile Massage",
      }),
    },
  ],
}));
</script>
