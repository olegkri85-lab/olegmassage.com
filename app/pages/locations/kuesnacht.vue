<template>
  <LocationPage
    :subtitle="t('location.kuesnacht.subtitle')"
    :title="t('location.kuesnacht.title')"
    :description="t('location.kuesnacht.description')"
    :why-title="t('location.kuesnacht.why.title')"
    :benefits="benefits"
    :services-title="t('location.kuesnacht.services.title')"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.kuesnacht.benefits.1"),
  t("location.kuesnacht.benefits.2"),
  t("location.kuesnacht.benefits.3"),
  t("location.kuesnacht.benefits.4"),
  t("location.kuesnacht.benefits.5"),
]);

useHead(() => ({
  title: t("location.kuesnacht.meta.title"),
  meta: [
    { name: "description", content: t("location.kuesnacht.meta.description") },
    { property: "og:title", content: t("location.kuesnacht.meta.title") },
    { property: "og:description", content: t("location.kuesnacht.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/kuesnacht")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.kuesnacht.title"),
        description: t("location.kuesnacht.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Küsnacht",
        },
        serviceType: "Mobile Massage",
      }),
    },
  ],
}));
</script>
