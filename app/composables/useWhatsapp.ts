export const useWhatsapp = (ctaKey?: string) => {
  const { t } = useI18n();
  const route = useRoute();

  const phone = "380505872464";

  const whatsappLink = computed(() => {
    const ctaType = ctaKey?.split('.')[1];
    const validTypes = ['hero', 'about', 'services', 'nav'];
    const messageType = ctaType && validTypes.includes(ctaType) ? ctaType : 'default';

    const messageKey = `cta.whatsappMessage.${messageType}`;
    const baseMessage = t(messageKey);

    // Infer city from route path: /locations/{city}
    const city = typeof route.path === 'string' && route.path.startsWith('/locations/')
      ? route.path.split('/')[2]
      : undefined;

    const citySuffix = city ? ` (City: ${city})` : '';
    const message = encodeURIComponent(`${baseMessage}${citySuffix}`);

    const utm = city
      ? `&utm_source=website&utm_medium=whatsapp&utm_campaign=locations&utm_content=${encodeURIComponent(city)}`
      : `&utm_source=website&utm_medium=whatsapp&utm_campaign=global`;

    return `https://wa.me/${phone}?text=${message}${utm}`;
  });

  return {
    whatsappLink,
    phone
  };
};
