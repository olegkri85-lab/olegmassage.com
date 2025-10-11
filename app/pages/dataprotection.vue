<template>
  <div class="bg-gray-50">
    <section class="py-16 md:py-24 px-8 xl:px-16">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-5xl font-display text-gray-900 mb-4">
          {{ t("dataProtection.title") }}
        </h1>
        <p class="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
          {{ t("dataProtection.intro") }}
        </p>

        <div class="space-y-10">
          <div>
            <h2 class="text-2xl md:text-3xl font-display text-gray-900 mb-4">
              {{ t("dataProtection.responsible.title") }}
            </h2>
            <p class="text-base text-gray-700 leading-relaxed">
              {{
                t("dataProtection.responsible.content", {
                  email: "oleh.kryvorotko@icloud.com",
                })
              }}
            </p>
          </div>

          <div>
            <h2 class="text-2xl md:text-3xl font-display text-gray-900 mb-4">
              {{ t("dataProtection.dataCollection.title") }}
            </h2>
            <p class="text-base text-gray-700 leading-relaxed">
              {{ t("dataProtection.dataCollection.content") }}
            </p>
          </div>

          <div>
            <h2 class="text-2xl md:text-3xl font-display text-gray-900 mb-4">
              {{ t("dataProtection.rights.title") }}
            </h2>
            <p class="text-base text-gray-700 leading-relaxed">
              {{
                t("dataProtection.rights.content", {
                  email: "oleh.kryvorotko@icloud.com",
                })
              }}
            </p>
          </div>

          <div>
            <h2 class="text-2xl md:text-3xl font-display text-gray-900 mb-4">
              {{ t("dataProtection.contact.title") }}
            </h2>
            <p class="text-base text-gray-700 leading-relaxed">
              {{
                t("dataProtection.contact.content", {
                  email: "oleh.kryvorotko@icloud.com",
                })
              }}
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
  title: t("meta.dataProtection.title"),
  meta: [
    { name: "description", content: t("meta.dataProtection.description") },
    { name: "robots", content: "noindex, follow" },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://olegmassage.com${localePath("/dataprotection")}`,
    },
  ],
}));
</script>
