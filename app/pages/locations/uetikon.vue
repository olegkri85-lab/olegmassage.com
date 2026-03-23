<template>
  <LocationPage
    :subtitle="t('location.uetikon.subtitle')"
    :title="t('location.uetikon.title')"
    :description="t('location.uetikon.description')"
    :why-title="t('location.uetikon.why.title')"
    :benefits="benefits"
    :services-title="t('location.uetikon.services.title')"
    location-key="uetikon"
    location-slug="uetikon"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.uetikon.benefits.1"),
  t("location.uetikon.benefits.2"),
  t("location.uetikon.benefits.3"),
  t("location.uetikon.benefits.4"),
  t("location.uetikon.benefits.5"),
]);

const faqSchema = useLocationFaqSchema("uetikon");

useHead(() => ({
  title: t("location.uetikon.meta.title"),
  meta: [
    { name: "description", content: t("location.uetikon.meta.description") },
    { property: "og:title", content: t("location.uetikon.meta.title") },
    { property: "og:description", content: t("location.uetikon.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/uetikon")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.uetikon.title"),
        description: t("location.uetikon.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Uetikon am See",
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
