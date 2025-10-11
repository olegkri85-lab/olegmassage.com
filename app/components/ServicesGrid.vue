<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-12">
    <ServiceCard
      :title="t('services.classical.title')"
      :description="t('services.classical.description')"
      :duration="`${t('services.duration.massage60')} — 100 CHF • ${t('services.duration.massage90')} — 150 CHF`"
      image="/images/services/classical-massage.jpg"
      image-ratio="4/3"
      image-label="Professional therapist performing classical full-body massage with therapeutic techniques to relieve muscle tension and improve circulation"
    />
    <ServiceCard
      :title="t('services.sports.title')"
      :description="t('services.sports.description')"
      :duration="`${t('services.duration.massage60')} — 100 CHF • ${t('services.duration.massage90')} — 150 CHF`"
      image="/images/services/sports-massage.jpg"
      image-ratio="4/3"
      image-label="Athletic sports massage session focusing on muscle recovery, injury prevention, and flexibility improvement for active individuals and athletes"
    />
    <ServiceCard
      :title="t('services.anticellulite.title')"
      :description="t('services.anticellulite.description')"
      :duration="`${t('services.duration.massage60')} — 100 CHF • ${t('services.duration.massage90')} — 150 CHF`"
      image="/images/services/anticellulite-massage.jpg"
      image-ratio="4/3"
      image-label="Intensive anti-cellulite massage treatment to improve lymph flow, boost metabolism, and firm skin texture"
    />
    <ServiceCard
      :title="t('services.pregnancy.title')"
      :description="t('services.pregnancy.description')"
      :duration="`${t('services.duration.massage60')} — 100 CHF • ${t('services.duration.massage90')} — 150 CHF`"
      image="/images/services/pregnancy-massage.jpg"
      image-ratio="4/3"
      image-label="Gentle and safe pregnancy massage for expecting mothers, reducing back pain and swelling"
    />
    <ServiceCard
      :title="t('services.children.title')"
      :description="t('services.children.description')"
      :duration="`${t('services.duration.massage60')} — 100 CHF`"
      image="/images/services/children-massage.jpg"
      image-ratio="4/3"
      image-label="Playful and gentle children's massage supporting muscle development, sleep, and overall wellbeing"
    />
    <ServiceCard
      :title="t('services.cupping.title')"
      :description="t('services.cupping.description')"
      :duration="`${t('services.duration.cupping')} — 30 CHF`"
      image="/images/services/cupping-therapy.png"
      image-ratio="4/3"
      image-label="Traditional cupping therapy treatment using suction cups to relieve muscle tension, promote blood circulation, and support body detoxification"
    />
    <ServiceCard
      :title="t('services.relaxation.title')"
      :description="t('services.relaxation.description')"
      :duration="`${t('services.duration.massage60')} — 100 CHF • ${t('services.duration.massage90')} — 150 CHF`"
      image="/images/services/relaxation-massage.jpg"
      image-ratio="4/3"
      image-label="Soothing relaxation massage with gentle techniques and warm oils for stress relief and deep body-mind relaxation"
    />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
