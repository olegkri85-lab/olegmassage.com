<template>
  <section
    class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--lightAccent-hsl))]"
  >
    <div class="text-center mb-16">
      <p
        class="text-xs md:text-sm uppercase tracking-widest text-gray-600 mb-4"
      >
        {{ t("services.subtitle") }}
      </p>
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-display text-gray-900">
        {{ t("services.title") }}
      </h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-12">
      <ServiceCard
        :title="t('services.classical.title')"
        :description="t('services.classical.description')"
        image="/images/services/classical-massage.jpg"
        image-ratio="4/3"
        image-label="Professional therapist performing classical full-body massage with therapeutic techniques to relieve muscle tension and improve circulation"
      />
      <ServiceCard
        :title="t('services.sports.title')"
        :description="t('services.sports.description')"
        image="/images/services/sports-massage.jpg"
        image-ratio="4/3"
        image-label="Athletic sports massage session focusing on muscle recovery, injury prevention, and flexibility improvement for active individuals and athletes"
      />
      <ServiceCard
        :title="t('services.relaxation.title')"
        :description="t('services.relaxation.description')"
        image="/images/services/relaxation-massage.jpg"
        image-ratio="4/3"
        image-label="Soothing relaxation massage with gentle techniques and warm oils for stress relief and deep body-mind relaxation"
      />
      <ServiceCard
        :title="t('services.cupping.title')"
        :description="t('services.cupping.description')"
        image="/images/services/cupping-therapy.png"
        image-ratio="4/3"
        image-label="Traditional cupping therapy treatment using suction cups to relieve muscle tension, promote blood circulation, and support body detoxification"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
