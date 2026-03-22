<template>
  <footer
    class="bg-[hsl(var(--lightAccent-hsl))] rounded-2xl py-16 px-8 xl:py-32 xl:px-16"
  >
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

    <div class="grid md:grid-cols-6 gap-12 mb-12">
      <div class="md:col-span-2">
        <h3 class="font-display text-lg md:text-xl lg:text-2xl mb-4">
          {{ t("footer.serviceArea") }}
        </h3>
        <div class="grid grid-cols-2 gap-x-8">
          <ul>
            <li v-for="loc in locationCol1" :key="loc.to">
              <NuxtLink
                :to="localePath(loc.to)"
                class="text-gray-900 relative !no-underline hover:underline"
              >
                {{ loc.name }}
              </NuxtLink>
            </li>
          </ul>
          <ul>
            <li v-for="loc in locationCol2" :key="loc.to">
              <NuxtLink
                :to="localePath(loc.to)"
                class="text-gray-900 relative !no-underline hover:underline"
              >
                {{ loc.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3 class="font-display text-lg md:text-xl lg:text-2xl mb-4">
          {{ t("footer.contact") }}
        </h3>
        <ul>
          <li><a href="tel:+41798499274">+41 79 849 92 74</a></li>
          <li>
            <a href="mailto:oleh.kryvorotko@icloud.com"
              >oleh.kryvorotko@icloud.com</a
            >
          </li>
          <li>
            <a href="https://www.threads.com/@massage_in_schweiz">Threads</a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100079107851071"
              >Facebook</a
            >
          </li>
          <li>
            <a href="https://www.instagram.com/massage_in_schweiz/"
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
              :to="localePath('/about')"
              class="text-gray-900 relative !no-underline"
            >
              {{ t("footer.aboutMe") }}
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
  </footer>
  <div
    class="px-8 xl:px-16 text-center text-white bg-black text-xs md:text-sm py-2"
  >
    made by Dix Consulting
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const locationCol1 = [
  { to: "/locations/zurich", name: "Zürich" },
  { to: "/locations/meilen", name: "Meilen" },
  { to: "/locations/horgen", name: "Horgen" },
  { to: "/locations/kuesnacht", name: "Küsnacht" },
  { to: "/locations/thalwil", name: "Thalwil" },
  { to: "/locations/kilchberg", name: "Kilchberg" },
  { to: "/locations/waedenswil", name: "Wädenswil" },
  { to: "/locations/staefa", name: "Stäfa" },
];

const locationCol2 = [
  { to: "/locations/adliswil", name: "Adliswil" },
  { to: "/locations/erlenbach", name: "Erlenbach" },
  { to: "/locations/herrliberg", name: "Herrliberg" },
  { to: "/locations/schwyz", name: "Schwyz" },
  { to: "/locations/luzern", name: "Luzern" },
  { to: "/locations/zug", name: "Zug" },
  { to: "/locations/aargau", name: "Aargau" },
  { to: "/locations/rapperswil-jona", name: "Rapperswil-Jona" },
];
</script>

<style scoped></style>
