<template>
  <LocationPage
    :subtitle="t('location.oerlikon.subtitle')"
    :title="t('location.oerlikon.title')"
    :description="t('location.oerlikon.description')"
    :why-title="t('location.oerlikon.why.title')"
    :benefits="benefits"
    :services-title="t('location.oerlikon.services.title')"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const benefits = computed(() => [
  t("location.oerlikon.benefits.1"),
  t("location.oerlikon.benefits.2"),
  t("location.oerlikon.benefits.3"),
  t("location.oerlikon.benefits.4"),
  t("location.oerlikon.benefits.5"),
]);

useHead(() => ({
  title: t("location.oerlikon.meta.title"),
  meta: [
    { name: "description", content: t("location.oerlikon.meta.description") },
    { property: "og:title", content: t("location.oerlikon.meta.title") },
    { property: "og:description", content: t("location.oerlikon.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://olegmassage.com/images/og/championship-action.jpeg" },
  ],
  link: [
    { rel: "canonical", href: `https://olegmassage.com${localePath("/locations/oerlikon")}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("location.oerlikon.title"),
        description: t("location.oerlikon.description"),
        provider: {
          "@id": "https://olegmassage.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Oerlikon",
        },
        serviceType: "Mobile Massage",
      }),
    },
  ],
}));
</script>
