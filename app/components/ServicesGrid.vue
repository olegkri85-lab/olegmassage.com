<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-12">
    <ServiceCard
      :title="t('services.swedish.title')"
      :description="t('services.swedish.description')"
      :duration="`${t('services.duration.massage60')}, 120 CHF • ${t(
        'services.duration.massage90'
      )}, 160 CHF`"
      image="/images/services/large/swedish-massage.jpeg"
      image-ratio="4/3"
      :link="localePath('/services/swedish-massage')"
      :link-text="t('services.learnMore')"
    />
    <ServiceCard
      :title="t('services.classical.title')"
      :description="t('services.classical.description')"
      :duration="`${t('services.duration.massage60')}, 100 CHF • ${t(
        'services.duration.massage90'
      )}, 150 CHF`"
      image="/images/services/large/classical-massage.jpeg"
      image-ratio="4/3"
      :link="localePath('/services/classical-massage')"
      :link-text="t('services.learnMore')"
    />
    <ServiceCard
      :title="t('services.sports.title')"
      :description="t('services.sports.description')"
      :duration="`${t('services.duration.massage60')}, 140 CHF`"
      image="/images/services/large/sports-massage.jpeg"
      image-ratio="4/3"
      :link="localePath('/services/sports-massage')"
      :link-text="t('services.learnMore')"
    />
    <ServiceCard
      :title="t('services.anticellulite.title')"
      :description="t('services.anticellulite.description')"
      :duration="`${t('services.duration.massage45')}, 100 CHF`"
      image="/images/services/large/anticellulite-massage.jpeg"
      image-ratio="4/3"
      :link="localePath('/services/anticellulite-massage')"
      :link-text="t('services.learnMore')"
    />
    <ServiceCard
      :title="t('services.pregnancy.title')"
      :description="t('services.pregnancy.description')"
      :duration="`${t('services.duration.massage60')}, 120 CHF`"
      image="/images/services/large/pregnancy-massage.jpeg"
      image-ratio="4/3"
      :link="localePath('/services/pregnancy-massage')"
      :link-text="t('services.learnMore')"
    />
    <ServiceCard
      :title="t('services.children.title')"
      :description="t('services.children.description')"
      :duration="`${t('services.duration.massage60')}, 100 CHF`"
      image="/images/services/large/children-massage.jpeg"
      image-ratio="4/3"
      :link="localePath('/services/children-massage')"
      :link-text="t('services.learnMore')"
    />
    <ServiceCard
      :title="t('services.cupping.title')"
      :description="t('services.cupping.description')"
      :duration="`${t('services.duration.cupping')}, 30 CHF`"
      image="/images/services/large/cupping-therapy.jpeg"
      image-ratio="4/3"
      :link="localePath('/services/cupping-massage')"
      :link-text="t('services.learnMore')"
    />
    <ServiceCard
      :title="t('services.relaxation.title')"
      :description="t('services.relaxation.description')"
      :duration="`${t('services.duration.massage60')}, 120 CHF • ${t(
        'services.duration.massage90'
      )}, 160 CHF`"
      image="/images/services/large/relaxation-massage.jpeg"
      image-ratio="4/3"
      :link="localePath('/services/relaxation-massage')"
      :link-text="t('services.learnMore')"
    />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>
