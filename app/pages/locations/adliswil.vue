<template>
  <LocationPage
    :subtitle="t('location.adliswil.subtitle')"
    :title="t('location.adliswil.title')"
    :description="t('location.adliswil.description')"
    :why-title="t('location.adliswil.why.title')"
    :benefits="benefits"
    :services-title="t('location.adliswil.services.title')"
    location-key="adliswil"
    location-slug="adliswil"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.adliswil.benefits.1"),
  t("location.adliswil.benefits.2"),
  t("location.adliswil.benefits.3"),
  t("location.adliswil.benefits.4"),
  t("location.adliswil.benefits.5"),
]);

const faqSchema = useLocationFaqSchema("adliswil");

useHead(() => ({
  title: t("location.adliswil.meta.title"),
  meta: [
    { name: "description", content: t("location.adliswil.meta.description") },
    { property: "og:title", content: t("location.adliswil.meta.title") },
    { property: "og:description", content: t("location.adliswil.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/adliswil")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.adliswil.title"),
        description: t("location.adliswil.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Adliswil",
        },
        serviceType: "Mobile Massage",
      }),
    },
    ...(faqSchema.value
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify(faqSchema.value),
          },
        ]
      : []),
  ],
}));
</script>
