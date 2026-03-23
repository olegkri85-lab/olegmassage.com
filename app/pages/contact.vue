<template>
  <div class="bg-gray-50">
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--accent-hsl))]">
      <div class="container mx-auto">
        <p class="text-xs md:text-sm uppercase tracking-widest text-white mb-4">
          {{ t("contact.subtitle") }}
        </p>
        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-8"
        >
          {{ t("contact.title") }}
        </h1>
        <p class="text-lg md:text-xl text-white/90 leading-relaxed">
          {{ t("contact.description") }}
        </p>
      </div>
    </section>

    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-white">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <a
            href="https://wa.me/380505872464"
            target="_blank"
            rel="noopener noreferrer"
            class="!no-underline bg-[#25D366]/10 rounded-2xl p-8 hover:shadow-md transition-shadow block"
          >
            <h2 class="text-2xl font-display text-gray-900 mb-2">
              WhatsApp
            </h2>
            <p class="text-lg text-gray-700">
              {{ t("contact.whatsapp") }}
            </p>
          </a>

          <a
            href="tel:+41798499274"
            class="!no-underline bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow block"
          >
            <h2 class="text-2xl font-display text-gray-900 mb-2">
              {{ t("contact.phone") }}
            </h2>
            <p class="text-lg text-gray-700">+41 79 849 92 74</p>
          </a>

          <a
            href="mailto:oleh.kryvorotko@icloud.com"
            class="!no-underline bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow block"
          >
            <h2 class="text-2xl font-display text-gray-900 mb-2">
              {{ t("contact.email") }}
            </h2>
            <p class="text-lg text-gray-700">oleh.kryvorotko@icloud.com</p>
          </a>

          <div class="bg-gray-50 rounded-2xl p-8">
            <h2 class="text-2xl font-display text-gray-900 mb-2">
              {{ t("footer.hours") }}
            </h2>
            <p class="text-lg text-gray-700">
              {{ t("footer.hoursText") }}<br />
              {{ t("footer.hoursTime") }}
            </p>
          </div>
        </div>

        <div class="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 class="text-2xl md:text-3xl font-display text-gray-900 mb-4">
            {{ t("contact.areas.title") }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ t("contact.areas.description") }}
          </p>
        </div>

        <div class="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 class="text-2xl md:text-3xl font-display text-gray-900 mb-4">
            {{ t("contact.languages.title") }}
          </h2>
          <p class="text-lg text-gray-700">
            {{ t("footer.languagesList") }}
          </p>
        </div>
      </div>
    </section>

    <CallToAction />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

useHead(() => ({
  title: t("contact.meta.title"),
  meta: [
    { name: "description", content: t("contact.meta.description") },
    { property: "og:title", content: t("contact.meta.title") },
    { property: "og:description", content: t("contact.meta.description") },
    { property: "og:type", content: "website" },
    {
      property: "og:image",
      content: "https://olegmassage.com/images/og/championship-action.jpeg",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://olegmassage.com${localePath("/contact")}`,
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://olegmassage.com/#organization",
        name: "Oleg Massage",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+41798499274",
            contactType: "customer service",
            availableLanguage: ["German", "English", "Russian", "Ukrainian"],
            hoursAvailable: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "08:00",
              closes: "20:00",
            },
          },
        ],
      }),
    },
  ],
}));
</script>
