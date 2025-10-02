<template>
  <section class="py-16 px-8 xl:py-32 xl:px-16 bg-[hsl(var(--lightAccent-hsl))]">
    <div class="text-center mb-16">
      <p
        class="text-xs md:text-sm uppercase tracking-widest text-gray-600 mb-4"
      >
        {{ t("testimonials.subtitle") }}
      </p>
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-display text-gray-900">
        {{ t("testimonials.title") }}
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      <div
        v-for="(item, index) in testimonials"
        :key="index"
        class="p-8 flex flex-col gap-6 bg-white"
      >
        <div class="text-4xl text-[hsl(var(--accent-hsl))] font-display">"</div>
        <p class="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
          {{ item.quote }}
        </p>
        <div class="mt-auto">
          <p class="text-base md:text-lg font-medium text-gray-900">{{ item.author }}</p>
          <p class="text-sm md:text-base text-gray-600">{{ item.location }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const testimonials = [
  {
    quote:
      "D'Sportmassage het mer mega gholfe! Oleg weiss genau, wo d'Verspannige sitze und wie mer die löst. I ha mi danach wie neugebore gfühlt!",
    author: "Anna K.",
    location: "Zürich",
  },
  {
    quote:
      "Die Massage war genau das Richtige nach dem Training. Oleg versteht seinen Job wirklich – als ehemaliger Olympia-Turner weiß er, worauf es ankommt.",
    author: "Thomas M.",
    location: "Horgen",
  },
  {
    quote:
      "The convenience of having a professional massage at home is incredible. Everything was perfectly prepared, and I felt completely relaxed afterwards.",
    author: "Sarah J.",
    location: "Rapperswil",
  },
  {
    quote:
      "Олег - настоящий профессионал! Спортивный массаж помог мне восстановиться после травмы. Очень удобно, что он приезжает на дом.",
    author: "Дмитрий П.",
    location: "Meilen",
  },
  {
    quote:
      "Чудова розслаблююча масажна терапія! Олег дуже уважний і професійний. Рекомендую всім, хто шукає якісний масаж.",
    author: "Оксана В.",
    location: "Zürich",
  },
  {
    quote:
      "Ich arbeite als IT-Profi und Sitzen macht meinen Rücken kaputt. Wenn es wieder anfängt weh zu tun, rufe ich sofort Oleg an.",
    author: "Aleksej D.",
    location: "Männedorf",
  },
];
</script>
