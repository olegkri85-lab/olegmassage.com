<template>
  <LocationPage
    :subtitle="t('location.horgen.subtitle')"
    :title="t('location.horgen.title')"
    :description="t('location.horgen.description')"
    :why-title="t('location.horgen.why.title')"
    :benefits="benefits"
    :services-title="t('location.horgen.services.title')"
    location-key="horgen"
    location-slug="horgen"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.horgen.benefits.1"),
  t("location.horgen.benefits.2"),
  t("location.horgen.benefits.3"),
  t("location.horgen.benefits.4"),
  t("location.horgen.benefits.5"),
]);

const faqSchema = useLocationFaqSchema("horgen");

useHead(() => ({
  title: t("location.horgen.meta.title"),
  meta: [
    { name: "description", content: t("location.horgen.meta.description") },
    { property: "og:title", content: t("location.horgen.meta.title") },
    { property: "og:description", content: t("location.horgen.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/horgen")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.horgen.title"),
        description: t("location.horgen.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Horgen",
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
