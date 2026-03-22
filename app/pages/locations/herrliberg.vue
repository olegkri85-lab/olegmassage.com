<template>
  <LocationPage
    :subtitle="t('location.herrliberg.subtitle')"
    :title="t('location.herrliberg.title')"
    :description="t('location.herrliberg.description')"
    :why-title="t('location.herrliberg.why.title')"
    :benefits="benefits"
    :services-title="t('location.herrliberg.services.title')"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.herrliberg.benefits.1"),
  t("location.herrliberg.benefits.2"),
  t("location.herrliberg.benefits.3"),
  t("location.herrliberg.benefits.4"),
  t("location.herrliberg.benefits.5"),
]);

useHead(() => ({
  title: t("location.herrliberg.meta.title"),
  meta: [
    { name: "description", content: t("location.herrliberg.meta.description") },
    { property: "og:title", content: t("location.herrliberg.meta.title") },
    { property: "og:description", content: t("location.herrliberg.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/herrliberg")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.herrliberg.title"),
        description: t("location.herrliberg.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Herrliberg",
        },
        serviceType: "Mobile Massage",
      }),
    },
  ],
}));
</script>
