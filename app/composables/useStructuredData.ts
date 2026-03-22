export const useStructuredData = () => {
  const { locale } = useI18n();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://olegmassage.com/#organization",
    name: "Massazh - Mobile Massage Service",
    description:
      "Professional mobile massage service in Zürichsee region. Specialized in sports massage, classical massage, relaxation massage, and cupping therapy.",
    url: "https://olegmassage.com",
    logo: "https://olegmassage.com/logo.png",
    image: "https://olegmassage.com/images/me.jpeg",
    telephone: "+41798499274",
    email: "oleh.kryvorotko@icloud.com",
    priceRange: "CHF 100-160",
    currenciesAccepted: "CHF",
    paymentAccepted: "Cash, TWINT",
    areaServed: [
      {
        "@type": "City",
        name: "Zürich",
      },
      {
        "@type": "City",
        name: "Meilen",
      },
      {
        "@type": "City",
        name: "Rapperswil",
      },
      {
        "@type": "City",
        name: "Horgen",
      },
      {
        "@type": "City",
        name: "Zug",
      },
      {
        "@type": "City",
        name: "Pfäffikon",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "47.2258",
      longitude: "8.8184",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "CH",
      addressRegion: "Zürich",
      addressLocality: "Zürichsee Region",
    },
    openingHours: "Mo-Su 08:00-20:00",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Massage Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Classical Massage",
            description:
              "Relaxing full-body or partial massage. Promotes circulation and releases muscle tension.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sports Massage",
            description:
              "Ideal for active people and athletes. Supports recovery, prevents injuries, and improves muscle flexibility.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Relaxation Massage",
            description:
              "Anti-stress massage with gentle techniques. Focus on stress relief and calming body and mind.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cupping Therapy",
            description:
              "Traditional cupping therapy to relieve muscle tension, promote circulation, and support detoxification.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "5",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=100079107851071",
      "https://www.instagram.com/massage_in_schweiz/",
      "https://www.threads.com/@massage_in_schweiz",
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://olegmassage.com/#person",
    name: "Oleh Kryvorotko",
    alternateName: "Oleg",
    jobTitle: "Professional Massage Therapist",
    description:
      "Former Olympic gymnast for Ukraine and circus artist. 1st Place winner at the 5th Swiss Massage Championship 2026 in Swedish Massage category. Expert in sports massage, classical massage, Swedish massage, and cupping therapy.",
    image: "https://olegmassage.com/images/me.jpeg",
    alumniOf: "Olympic Team Ukraine - Gymnastics",
    award: "1st Place — Swiss Massage Championship 2026, Swedish Massage Category",
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "1st Place, Swiss Massage Championship 2026 — Swedish Massage",
        dateCreated: "2026-03-15",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Classic Massage with Basics of Human Anatomy and Physiology — PROFMED",
        dateCreated: "2022-03-10",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Anatomy and Physiology — PROFMED",
        dateCreated: "2022-02-24",
      },
    ],
    knowsAbout: [
      "Swedish Massage",
      "Sports Massage",
      "Classical Massage",
      "Relaxation Massage",
      "Anti-Cellulite Massage",
      "Pregnancy Massage",
      "Children's Massage",
      "Cupping Therapy",
      "Mobile Massage Therapy",
      "Athletic Recovery",
      "Injury Prevention",
    ],
    knowsLanguage: ["German", "English", "Russian", "Ukrainian"],
    telephone: "+41798499274",
    email: "oleh.kryvorotko@icloud.com",
    workLocation: {
      "@type": "Place",
      name: "Zürichsee Region",
      address: {
        "@type": "PostalAddress",
        addressCountry: "CH",
        addressRegion: "Zürich",
      },
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://olegmassage.com/#website",
    url: "https://olegmassage.com",
    name: "Massazh - Mobile Massage Zürichsee",
    description: "Professional mobile massage service in Zürichsee region",
    inLanguage: ["de", "en", "ru", "uk"],
    publisher: {
      "@id": "https://olegmassage.com/#organization",
    },
  };

  return {
    organizationSchema,
    personSchema,
    websiteSchema,
  };
};
