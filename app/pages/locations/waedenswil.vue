<template>
  <LocationPage
    :subtitle="t('location.waedenswil.subtitle')"
    :title="t('location.waedenswil.title')"
    :description="t('location.waedenswil.description')"
    :why-title="t('location.waedenswil.why.title')"
    :benefits="benefits"
    :services-title="t('location.waedenswil.services.title')"
    location-key="waedenswil"
    location-slug="waedenswil"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.waedenswil.benefits.1"),
  t("location.waedenswil.benefits.2"),
  t("location.waedenswil.benefits.3"),
  t("location.waedenswil.benefits.4"),
  t("location.waedenswil.benefits.5"),
]);

const faqSchema = useLocationFaqSchema("waedenswil");

useHead(() => ({
  title: t("location.waedenswil.meta.title"),
  meta: [
    { name: "description", content: t("location.waedenswil.meta.description") },
    { property: "og:title", content: t("location.waedenswil.meta.title") },
    { property: "og:description", content: t("location.waedenswil.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/waedenswil")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.waedenswil.title"),
        description: t("location.waedenswil.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Wädenswil",
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
