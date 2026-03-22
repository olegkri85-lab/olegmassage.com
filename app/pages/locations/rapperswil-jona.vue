<template>
  <LocationPage
    :subtitle="t('location.rapperswilJona.subtitle')"
    :title="t('location.rapperswilJona.title')"
    :description="t('location.rapperswilJona.description')"
    :why-title="t('location.rapperswilJona.why.title')"
    :benefits="benefits"
    :services-title="t('location.rapperswilJona.services.title')"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.rapperswilJona.benefits.1"),
  t("location.rapperswilJona.benefits.2"),
  t("location.rapperswilJona.benefits.3"),
  t("location.rapperswilJona.benefits.4"),
  t("location.rapperswilJona.benefits.5"),
]);

useHead(() => ({
  title: t("location.rapperswilJona.meta.title"),
  meta: [
    { name: "description", content: t("location.rapperswilJona.meta.description") },
    { property: "og:title", content: t("location.rapperswilJona.meta.title") },
    { property: "og:description", content: t("location.rapperswilJona.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/rapperswil-jona")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.rapperswilJona.title"),
        description: t("location.rapperswilJona.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Rapperswil-Jona",
        },
        serviceType: "Mobile Massage",
      }),
    },
  ],
}));
</script>
