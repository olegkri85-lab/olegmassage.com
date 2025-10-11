<template>
  <div class="container mx-auto bg-gray-200">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Analytics />
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n();
import { Analytics } from "@vercel/analytics/nuxt";

const route = useRoute();
const switchLocalePath = useSwitchLocalePath();
const { organizationSchema, personSchema, websiteSchema } = useStructuredData();

useHead({
  htmlAttrs: {
    lang: locale,
  },
  link: computed(() => {
    const links: Array<{ rel: string; hreflang: string; href: string }> = [];

    // Add alternate links for each locale
    (locales.value as Array<{ code: string; name: string }>).forEach((loc) => {
      links.push({
        rel: "alternate",
        hreflang: loc.code,
        href: `https://olegmassage.com${switchLocalePath(loc.code)}`,
      });
    });

    // Add x-default
    links.push({
      rel: "alternate",
      hreflang: "x-default",
      href: `https://olegmassage.com${switchLocalePath("de")}`,
    });

    return links;
  }),
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
