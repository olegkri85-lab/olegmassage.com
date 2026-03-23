<template>
  <footer
    class="bg-[hsl(var(--lightAccent-hsl))] rounded-2xl py-16 px-8 xl:py-32 xl:px-16"
  >
    <div class="container mx-auto">
    <div class="pb-16">
      <NuxtLink
        :to="localePath('/')"
        class="!no-underline text-gray-900 relative"
      >
        <span
          class="font-display text-2xl md:text-3xl lg:text-4xl -tracking-tight font-black leading-tight"
        >
          olegmassage.com
        </span>
      </NuxtLink>
    </div>

    <!-- Service Areas -->
    <div class="mb-12 space-y-6">
      <div>
        <h3 class="font-display text-lg md:text-xl lg:text-2xl mb-3">
          Massage in Zürich
        </h3>
        <div class="flex flex-wrap gap-x-1 gap-y-0.5 text-sm">
          <template v-for="(loc, i) in kreise" :key="loc.to">
            <NuxtLink :to="localePath(loc.to)" class="text-gray-700 !no-underline hover:underline hover:text-gray-900 whitespace-nowrap">{{ loc.name }}</NuxtLink>
            <span v-if="i < kreise.length - 1" class="text-gray-400">|</span>
          </template>
        </div>
      </div>
      <div>
        <h3 class="font-display text-lg md:text-xl lg:text-2xl mb-3">
          Massage am Zürichsee
        </h3>
        <div class="flex flex-wrap gap-x-1 gap-y-0.5 text-sm">
          <template v-for="(loc, i) in zuerichsee" :key="loc.to">
            <NuxtLink :to="localePath(loc.to)" class="text-gray-700 !no-underline hover:underline hover:text-gray-900 whitespace-nowrap">{{ loc.name }}</NuxtLink>
            <span v-if="i < zuerichsee.length - 1" class="text-gray-400">|</span>
          </template>
        </div>
      </div>
      <div>
        <h3 class="font-display text-lg md:text-xl lg:text-2xl mb-3">
          Massage in der Region
        </h3>
        <div class="flex flex-wrap gap-x-1 gap-y-0.5 text-sm">
          <template v-for="(loc, i) in regions" :key="loc.to">
            <NuxtLink :to="localePath(loc.to)" class="text-gray-700 !no-underline hover:underline hover:text-gray-900 whitespace-nowrap">{{ loc.name }}</NuxtLink>
            <span v-if="i < regions.length - 1" class="text-gray-400">|</span>
          </template>
        </div>
      </div>
    </div>

    <!-- Other Footer Columns -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
      <div>
        <h3 class="font-display text-lg md:text-xl lg:text-2xl mb-4">
          {{ t("footer.contact") }}
        </h3>
        <ul>
          <li><a href="tel:+41798499274">+41 79 849 92 74</a></li>
          <li>
            <a href="mailto:oleh.kryvorotko@icloud.com" class="break-all"
              >oleh.kryvorotko@icloud.com</a
            >
          </li>
          <li>
            <a href="https://www.threads.com/@massage_in_schweiz" target="_blank" rel="noopener noreferrer">Threads</a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100079107851071" target="_blank" rel="noopener noreferrer"
              >Facebook</a
            >
          </li>
          <li>
            <a href="https://www.instagram.com/massage_in_schweiz/" target="_blank" rel="noopener noreferrer"
              >Instagram</a
            >
          </li>
        </ul>
      </div>
      <div>
        <h3 class="font-display text-lg md:text-xl lg:text-2xl mb-4">
          {{ t("footer.info") }}
        </h3>
        <ul>
          <li>
            <NuxtLink
              :to="localePath('/contact')"
              class="text-gray-900 relative !no-underline"
            >
              {{ t("contact.subtitle") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="localePath('/about')"
              class="text-gray-900 relative !no-underline"
            >
              {{ t("footer.aboutMe") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="localePath('/guide')"
              class="text-gray-900 relative !no-underline"
            >
              {{ t("nav.guide") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="localePath('/certificates')"
              class="text-gray-900 relative !no-underline"
            >
              {{ t("nav.certificates") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="localePath('/faq')"
              class="text-gray-900 relative !no-underline"
            >
              {{ t("footer.faq") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="localePath('/legal')"
              class="text-gray-900 relative !no-underline"
            >
              {{ t("footer.legal") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="localePath('/dataprotection')"
              class="text-gray-900 relative !no-underline"
            >
              {{ t("footer.dataProtection") }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="font-display text-lg md:text-xl lg:text-2xl mb-4">
          {{ t("footer.hours") }}
        </h3>
        <ul>
          <li>{{ t("footer.hoursText") }}</li>
          <li>{{ t("footer.hoursTime") }}</li>
          <li>{{ t("footer.flexible") }}</li>
        </ul>
      </div>
      <div>
        <h3 class="font-display text-lg md:text-xl lg:text-2xl mb-4">
          {{ t("footer.payment") }}
        </h3>
        <p>{{ t("footer.paymentMethods") }}</p>
      </div>
    </div>
    </div>
  </footer>
  <div
    class="px-8 xl:px-16 text-center text-white bg-black text-xs md:text-sm py-2"
  >
    made by <a href="https://dix.consulting/" target="_blank" rel="noopener noreferrer" class="text-white hover:underline">Dix Consulting</a>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const kreise = [
  { to: "/locations/zurich", name: "Zürich" },
  { to: "/locations/kreis-1", name: "Kreis 1 (Altstadt)" },
  { to: "/locations/kreis-2", name: "Kreis 2 (Enge)" },
  { to: "/locations/kreis-3", name: "Kreis 3 (Wiedikon)" },
  { to: "/locations/kreis-4", name: "Kreis 4 (Aussersihl)" },
  { to: "/locations/kreis-5", name: "Kreis 5 (Industrie)" },
  { to: "/locations/kreis-6", name: "Kreis 6 (Unterstrass)" },
  { to: "/locations/kreis-7", name: "Kreis 7 (Fluntern)" },
  { to: "/locations/kreis-8", name: "Kreis 8 (Seefeld)" },
  { to: "/locations/kreis-9", name: "Kreis 9 (Altstetten)" },
  { to: "/locations/kreis-10", name: "Kreis 10 (Höngg)" },
  { to: "/locations/kreis-11", name: "Kreis 11 (Oerlikon)" },
  { to: "/locations/kreis-12", name: "Kreis 12 (Schwamendingen)" },
  { to: "/locations/oerlikon", name: "Oerlikon" },
  { to: "/locations/hoengg", name: "Höngg" },
  { to: "/locations/wipkingen", name: "Wipkingen" },
];

const zuerichsee = [
  { to: "/locations/meilen", name: "Meilen" },
  { to: "/locations/horgen", name: "Horgen" },
  { to: "/locations/kuesnacht", name: "Küsnacht" },
  { to: "/locations/thalwil", name: "Thalwil" },
  { to: "/locations/kilchberg", name: "Kilchberg" },
  { to: "/locations/waedenswil", name: "Wädenswil" },
  { to: "/locations/staefa", name: "Stäfa" },
  { to: "/locations/adliswil", name: "Adliswil" },
  { to: "/locations/erlenbach", name: "Erlenbach" },
  { to: "/locations/herrliberg", name: "Herrliberg" },
  { to: "/locations/rueschlikon", name: "Rüschlikon" },
  { to: "/locations/zollikon", name: "Zollikon" },
  { to: "/locations/maennedorf", name: "Männedorf" },
  { to: "/locations/uetikon", name: "Uetikon am See" },
  { to: "/locations/oetwil", name: "Oetwil am See" },
  { to: "/locations/richterswil", name: "Richterswil" },
  { to: "/locations/au", name: "Au ZH" },
];

const regions = [
  { to: "/locations/schwyz", name: "Schwyz" },
  { to: "/locations/luzern", name: "Luzern" },
  { to: "/locations/zug", name: "Zug" },
  { to: "/locations/aargau", name: "Aargau" },
  { to: "/locations/rapperswil-jona", name: "Rapperswil-Jona" },
  { to: "/locations/wollerau", name: "Wollerau" },
  { to: "/locations/freienbach", name: "Freienbach" },
  { to: "/locations/pfaeffikon", name: "Pfäffikon SZ" },
];
</script>

<style scoped></style>
