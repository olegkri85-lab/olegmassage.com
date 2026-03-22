<template>
  <LocationPage
    :subtitle="t('location.oetwil.subtitle')"
    :title="t('location.oetwil.title')"
    :description="t('location.oetwil.description')"
    :why-title="t('location.oetwil.why.title')"
    :benefits="benefits"
    :services-title="t('location.oetwil.services.title')"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.oetwil.benefits.1"),
  t("location.oetwil.benefits.2"),
  t("location.oetwil.benefits.3"),
  t("location.oetwil.benefits.4"),
  t("location.oetwil.benefits.5"),
]);

useHead(() => ({
  title: t("location.oetwil.meta.title"),
  meta: [
    { name: "description", content: t("location.oetwil.meta.description") },
    { property: "og:title", content: t("location.oetwil.meta.title") },
    { property: "og:description", content: t("location.oetwil.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/oetwil")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.oetwil.title"),
        description: t("location.oetwil.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Oetwil am See",
        },
        serviceType: "Mobile Massage",
      }),
    },
  ],
}));
</script>
