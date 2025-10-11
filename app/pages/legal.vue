<template>
  <div class="bg-gray-50">
    <section class="py-16 md:py-24 px-8 xl:px-16">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-5xl font-display text-gray-900 mb-4">
          {{ t("legal.title") }}
        </h1>
        <p class="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
          {{ t("legal.intro") }}
        </p>

        <div class="space-y-10">
          <div>
            <h2 class="text-2xl md:text-3xl font-display text-gray-900 mb-4">
              {{ t("legal.information.title") }}
            </h2>
            <p class="text-base text-gray-700 leading-relaxed">
              {{
                t("legal.information.content", {
                  email: "oleh.kryvorotko@icloud.com",
                })
              }}
            </p>
          </div>

          <div>
            <h2 class="text-2xl md:text-3xl font-display text-gray-900 mb-4">
              {{ t("legal.liability.title") }}
            </h2>
            <p class="text-base text-gray-700 leading-relaxed">
              {{ t("legal.liability.content") }}
            </p>
          </div>

          <div>
            <h2 class="text-2xl md:text-3xl font-display text-gray-900 mb-4">
              {{ t("legal.copyright.title") }}
            </h2>
            <p class="text-base text-gray-700 leading-relaxed">
              {{ t("legal.copyright.content") }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

useHead(() => ({
  title: t("meta.legal.title"),
  meta: [
    { name: "description", content: t("meta.legal.description") },
    { name: "robots", content: "noindex, follow" },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://olegmassage.com${localePath("/legal")}`,
    },
  ],
}));
</script>
