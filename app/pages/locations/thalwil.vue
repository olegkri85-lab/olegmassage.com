<template>
  <LocationPage
    :subtitle="t('location.thalwil.subtitle')"
    :title="t('location.thalwil.title')"
    :description="t('location.thalwil.description')"
    :why-title="t('location.thalwil.why.title')"
    :benefits="benefits"
    :services-title="t('location.thalwil.services.title')"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.thalwil.benefits.1"),
  t("location.thalwil.benefits.2"),
  t("location.thalwil.benefits.3"),
  t("location.thalwil.benefits.4"),
  t("location.thalwil.benefits.5"),
]);

useHead(() => ({
  title: t("location.thalwil.meta.title"),
  meta: [
    { name: "description", content: t("location.thalwil.meta.description") },
    { property: "og:title", content: t("location.thalwil.meta.title") },
    { property: "og:description", content: t("location.thalwil.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/thalwil")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.thalwil.title"),
        description: t("location.thalwil.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Thalwil",
        },
        serviceType: "Mobile Massage",
      }),
    },
  ],
}));
</script>
