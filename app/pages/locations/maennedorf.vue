<template>
  <LocationPage
    :subtitle="t('location.maennedorf.subtitle')"
    :title="t('location.maennedorf.title')"
    :description="t('location.maennedorf.description')"
    :why-title="t('location.maennedorf.why.title')"
    :benefits="benefits"
    :services-title="t('location.maennedorf.services.title')"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.maennedorf.benefits.1"),
  t("location.maennedorf.benefits.2"),
  t("location.maennedorf.benefits.3"),
  t("location.maennedorf.benefits.4"),
  t("location.maennedorf.benefits.5"),
]);

useHead(() => ({
  title: t("location.maennedorf.meta.title"),
  meta: [
    { name: "description", content: t("location.maennedorf.meta.description") },
    { property: "og:title", content: t("location.maennedorf.meta.title") },
    { property: "og:description", content: t("location.maennedorf.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/maennedorf")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.maennedorf.title"),
        description: t("location.maennedorf.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Männedorf",
        },
        serviceType: "Mobile Massage",
      }),
    },
  ],
}));
</script>
