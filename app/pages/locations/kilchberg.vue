<template>
  <LocationPage
    :subtitle="t('location.kilchberg.subtitle')"
    :title="t('location.kilchberg.title')"
    :description="t('location.kilchberg.description')"
    :why-title="t('location.kilchberg.why.title')"
    :benefits="benefits"
    :services-title="t('location.kilchberg.services.title')"
    location-key="kilchberg"
    location-slug="kilchberg"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.kilchberg.benefits.1"),
  t("location.kilchberg.benefits.2"),
  t("location.kilchberg.benefits.3"),
  t("location.kilchberg.benefits.4"),
  t("location.kilchberg.benefits.5"),
]);

const faqSchema = useLocationFaqSchema("kilchberg");

useHead(() => ({
  title: t("location.kilchberg.meta.title"),
  meta: [
    { name: "description", content: t("location.kilchberg.meta.description") },
    { property: "og:title", content: t("location.kilchberg.meta.title") },
    { property: "og:description", content: t("location.kilchberg.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/kilchberg")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.kilchberg.title"),
        description: t("location.kilchberg.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Kilchberg",
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
