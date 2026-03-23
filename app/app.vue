<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage :key="$route.fullPath" />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const { organizationSchema, personSchema, websiteSchema } = useStructuredData();
const { breadcrumbSchema } = useBreadcrumbs();
useTwitterCards();

useHead({
  htmlAttrs: {
    lang: locale,
  },
  script: computed(() => {
    const scripts = [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema.value),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(personSchema.value),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteSchema.value),
      },
    ];

    if (breadcrumbSchema.value) {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema.value),
      });
    }

    return scripts;
  }),
});
</script>
