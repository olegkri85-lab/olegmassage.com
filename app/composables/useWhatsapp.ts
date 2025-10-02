export const useWhatsapp = (ctaKey?: string) => {
  const { t } = useI18n();

  const phone = "380505872464";

  const whatsappLink = computed(() => {
    // Extract the specific CTA type (e.g., "hero", "about", "nav") from the key
    const ctaType = ctaKey?.split('.')[1];

    // Map the CTA type to WhatsApp message key
    const validTypes = ['hero', 'about', 'services', 'nav'];
    const messageType = ctaType && validTypes.includes(ctaType) ? ctaType : 'default';

    const messageKey = `cta.whatsappMessage.${messageType}`;
    const message = encodeURIComponent(t(messageKey));
    return `https://wa.me/${phone}?text=${message}`;
  });

  return {
    whatsappLink,
    phone
  };
};
