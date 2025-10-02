<template>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--accent-hsl))]">
      <div class="max-w-4xl">
        <p class="text-xs md:text-sm uppercase tracking-widest text-white mb-4">
          {{ t("location.rapperswilJona.subtitle") || t("location.zurich.subtitle") }}
        </p>
        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-8"
        >
          {{ t("location.rapperswilJona.title") }}
        </h1>
        <p class="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
          {{ t("location.rapperswilJona.description") }}
        </p>
        <CtaButton variant="hero" />
      </div>
    </section>

    <!-- Service Areas -->
    <section
      class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--lightAccent-hsl))]"
    >
      <div class="max-w-4xl">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-display mb-8">
          {{ t("location.rapperswilJona.areas.title") }}
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <div
            v-for="area in areas"
            :key="area"
            class="bg-white p-4 rounded-lg"
          >
            <p class="text-base md:text-lg">{{ area }}</p>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-8 md:p-12 mb-12">
          <h3 class="text-2xl md:text-3xl font-display text-gray-900 mb-6">
            {{ t("location.rapperswilJona.why.title") }}
          </h3>
          <ul class="space-y-4 text-base md:text-lg text-gray-700">
            <li
              v-for="(benefit, index) in benefits"
              :key="index"
              class="flex items-start gap-3"
            >
              <span class="text-[hsl(var(--accent-hsl))] text-xl">✓</span>
              <span>{{ benefit }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16 px-8 xl:py-32 xl:px-16 bg-white">
      <div class="max-w-4xl">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-display mb-8">
          {{ t("location.rapperswilJona.services.title") }}
        </h2>
        <div class="grid md:grid-cols-2 gap-6 mb-12">
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl md:text-2xl font-display mb-4">
              Klassische Massage
            </h3>
            <p class="text-gray-700 mb-4">
              Entspannung und Regeneration für den ganzen Körper.
            </p>
            <p class="font-bold text-[hsl(var(--accent-hsl))]">
              60 Min — 100 CHF • 90 Min — 150 CHF
            </p>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl md:text-2xl font-display mb-4">Sportmassage</h3>
            <p class="text-gray-700 mb-4">
              Gezielte Massage für Sportler zur Leistungssteigerung und
              Erholung.
            </p>
            <p class="font-bold text-[hsl(var(--accent-hsl))]">
              60 Min — 100 CHF • 90 Min — 150 CHF
            </p>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl md:text-2xl font-display mb-4">
              Entspannungsmassage
            </h3>
            <p class="text-gray-700 mb-4">
              Stressabbau und Wohlbefinden in Ihrer gewohnten Umgebung.
            </p>
            <p class="font-bold text-[hsl(var(--accent-hsl))]">
              60 Min — 100 CHF • 90 Min — 150 CHF
            </p>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl md:text-2xl font-display mb-4">
              Schröpftherapie
            </h3>
            <p class="text-gray-700 mb-4">
              Fördert die Durchblutung und lockert das Gewebe.
            </p>
            <p class="font-bold text-[hsl(var(--accent-hsl))]">
              15 Min — 30 CHF
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CallToAction />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const areas = [
  "Rapperswil",
  "Jona",
  "Bollingen",
  "Kempraten",
  "Hurden",
  "Lido",
  "Schmerikon",
  "Eschenbach",
  "Uznach",
];

const benefits = [
  t("location.rapperswilJona.benefits.1"),
  t("location.rapperswilJona.benefits.2"),
  t("location.rapperswilJona.benefits.3"),
  t("location.rapperswilJona.benefits.4"),
  t("location.rapperswilJona.benefits.5"),
];

useHead(() => ({
  title: t("location.rapperswilJona.meta.title"),
  meta: [
    { name: "description", content: t("location.rapperswilJona.meta.description") },
    { property: "og:title", content: t("location.rapperswilJona.meta.title") },
    { property: "og:description", content: t("location.rapperswilJona.meta.description") },
    { property: "og:type", content: "website" },
  ],
  link: [
    { rel: "canonical", href: `https://massazh.me${localePath("/locations/rapperswil-jona")}` },
    { rel: "alternate", hreflang: "de", href: `https://massazh.me${localePath("/locations/rapperswil-jona", "de")}` },
    { rel: "alternate", hreflang: "en", href: `https://massazh.me${localePath("/locations/rapperswil-jona", "en")}` },
    { rel: "alternate", hreflang: "ru", href: `https://massazh.me${localePath("/locations/rapperswil-jona", "ru")}` },
    { rel: "alternate", hreflang: "uk", href: `https://massazh.me${localePath("/locations/rapperswil-jona", "uk")}` },
    { rel: "alternate", hreflang: "x-default", href: `https://massazh.me${localePath("/locations/rapperswil-jona")}` },
  ],
}));
</script>
