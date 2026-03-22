<template>
  <div class="container mx-auto bg-gray-200">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage :key="$route.fullPath" />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const { organizationSchema, personSchema, websiteSchema } = useStructuredData();

useHead({
  htmlAttrs: {
    lang: locale,
  },
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(organizationSchema),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify(personSchema),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify(websiteSchema),
    },
  ],
});
</script>
