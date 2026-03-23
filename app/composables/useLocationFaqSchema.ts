export function useLocationFaqSchema(locationKey: string) {
  const { tm, rt } = useI18n()

  return computed(() => {
    const raw = tm(`location.${locationKey}.faq.items`)
    if (!Array.isArray(raw) || raw.length === 0) return null
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: raw.map((item: any) => ({
        '@type': 'Question',
        name: rt(item.question),
        acceptedAnswer: {
          '@type': 'Answer',
          text: rt(item.answer),
        },
      })),
    }
  })
}
