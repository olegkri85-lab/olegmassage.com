<template>
  <LocationPage
    :subtitle="t('location.pfaeffikon.subtitle')"
    :title="t('location.pfaeffikon.title')"
    :description="t('location.pfaeffikon.description')"
    :why-title="t('location.pfaeffikon.why.title')"
    :benefits="benefits"
    :services-title="t('location.pfaeffikon.services.title')"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.pfaeffikon.benefits.1"),
  t("location.pfaeffikon.benefits.2"),
  t("location.pfaeffikon.benefits.3"),
  t("location.pfaeffikon.benefits.4"),
  t("location.pfaeffikon.benefits.5"),
]);

useHead(() => ({
  title: t("location.pfaeffikon.meta.title"),
  meta: [
    { name: "description", content: t("location.pfaeffikon.meta.description") },
    { property: "og:title", content: t("location.pfaeffikon.meta.title") },
    { property: "og:description", content: t("location.pfaeffikon.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/pfaeffikon")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.pfaeffikon.title"),
        description: t("location.pfaeffikon.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Pfäffikon SZ",
        },
        serviceType: "Mobile Massage",
      }),
    },
  ],
}));
</script>
