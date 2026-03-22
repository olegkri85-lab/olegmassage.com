export const useBreadcrumbs = () => {
  const { t } = useI18n();
  const route = useRoute();
  const localePath = useLocalePath();

  const breadcrumbSchema = computed(() => {
    const path = route.path;
    const items: Array<{ name: string; url: string }> = [];

    // Home is always first
    items.push({
      name: t("nav.home"),
      url: `https://olegmassage.com${localePath("/")}`,
    });

    // Services section
    if (path.includes("/services")) {
      items.push({
        name: t("nav.services"),
        url: `https://olegmassage.com${localePath("/services")}`,
      });

      // Individual service pages
      const serviceMap: Record<string, string> = {
        "swedish-massage": "services.swedish.title",
        "classical-massage": "services.classical.title",
        "sports-massage": "services.sports.title",
        "anticellulite-massage": "services.anticellulite.title",
        "pregnancy-massage": "services.pregnancy.title",
        "children-massage": "services.children.title",
        "cupping-massage": "services.cupping.title",
        "relaxation-massage": "services.relaxation.title",
      };

      for (const [slug, titleKey] of Object.entries(serviceMap)) {
        if (path.includes(`/services/${slug}`)) {
          items.push({
            name: t(titleKey),
            url: `https://olegmassage.com${localePath(`/services/${slug}`)}`,
          });
          break;
        }
      }
    }

    // Certificates section
    if (path.includes("/certificates")) {
      items.push({
        name: t("nav.certificates"),
        url: `https://olegmassage.com${localePath("/certificates")}`,
      });

      const certMap: Record<string, string> = {
        "smc-1st-place": "certificates.smc1stPlace.title",
        "smc-participation": "certificates.smcParticipation.title",
        "smc-workshops": "certificates.smcWorkshops.title",
        "profmed-classic-massage": "certificates.profmedClassic.title",
        "profmed-anatomy": "certificates.profmedAnatomy.title",
      };

      for (const [slug, titleKey] of Object.entries(certMap)) {
        if (path.includes(`/certificates/${slug}`)) {
          items.push({
            name: t(titleKey),
            url: `https://olegmassage.com${localePath(`/certificates/${slug}`)}`,
          });
          break;
        }
      }
    }

    // Locations section
    if (path.includes("/locations")) {
      const locationMap: Record<string, string> = {
        zurich: "location.zurich.title",
        schwyz: "location.schwyz.title",
        luzern: "location.luzern.title",
        zug: "location.zug.title",
        aargau: "location.aargau.title",
        "rapperswil-jona": "location.rapperswilJona.title",
        meilen: "location.meilen.title",
        horgen: "location.horgen.title",
        kuesnacht: "location.kuesnacht.title",
        waedenswil: "location.waedenswil.title",
        staefa: "location.staefa.title",
        thalwil: "location.thalwil.title",
        kilchberg: "location.kilchberg.title",
        adliswil: "location.adliswil.title",
        erlenbach: "location.erlenbach.title",
        herrliberg: "location.herrliberg.title",
        rueschlikon: "location.rueschlikon.title",
        zollikon: "location.zollikon.title",
        oerlikon: "location.oerlikon.title",
        hoengg: "location.hoengg.title",
        wipkingen: "location.wipkingen.title",
      };

      for (const [slug, titleKey] of Object.entries(locationMap)) {
        if (path.includes(`/locations/${slug}`)) {
          items.push({
            name: t(titleKey),
            url: `https://olegmassage.com${localePath(`/locations/${slug}`)}`,
          });
          break;
        }
      }
    }

    // Standalone pages
    const standaloneMap: Record<string, string> = {
      "/about": "nav.about",
      "/faq": "nav.faq",
      "/prices": "nav.prices",
    };

    for (const [pagePath, titleKey] of Object.entries(standaloneMap)) {
      if (
        path.includes(pagePath) &&
        !path.includes("/services") &&
        !path.includes("/certificates") &&
        !path.includes("/locations")
      ) {
        items.push({
          name: t(titleKey),
          url: `https://olegmassage.com${localePath(pagePath)}`,
        });
        break;
      }
    }

    // Only output breadcrumbs if we have more than just Home
    if (items.length <= 1) return null;

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };
  });

  return { breadcrumbSchema };
};
