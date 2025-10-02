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
          Massazh.me
        </span>
      </NuxtLink>
    </div>

    <div class="grid md:grid-cols-5 gap-12 mb-12">
      <div>
        <h3 class="font-display text-lg md:text-xl lg:text-2xl mb-4">
          {{ t("footer.serviceArea") }}
        </h3>
        <ul>
          <li>
            <NuxtLink
              :to="localePath('/locations/zurich')"
              class="text-gray-900 relative !no-underline hover:underline"
            >
              Zürich
            </NuxtLink>
          </li>
          <li>Schwyz</li>
          <li>Luzern</li>
          <li>Zug</li>
          <li>Aargau</li>
          <li>Rapperswil (St. Gallen)</li>
        </ul>
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
</script>

<style scoped></style>
