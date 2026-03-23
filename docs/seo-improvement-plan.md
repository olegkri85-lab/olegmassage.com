# SEO Improvement Plan - olegmassage.com

**Date**: 2026-03-23
**Status**: In Progress
**Total pages audited**: 63 (across 4 languages)
**Last updated**: 2026-03-23

---

## Current SEO Strengths

- Structured data: LocalBusiness, Person, Service, FAQPage, BreadcrumbList, Offer, WebSite schemas
- 41 location pages for local SEO
- 8 educational guide articles for informational keywords
- 8 detailed service pages with benefits, FAQ, testimonials, contraindications
- Multilingual (de/en/ru/uk) with proper hreflang and locale-prefixed URLs
- Canonical URLs on all pages
- Auto-generated sitemap with lastmod
- robots.txt correctly blocks legal pages
- Strong E-E-A-T: Olympic background, Swiss Massage Championship 1st place, professional certifications

---

## Priority 1: Critical Fixes - ALL DONE

### 1.1 Image Alt Texts Are Too Generic - DONE

**Completed externally.**

---

### 1.2 Location Pages: Thin/Duplicate Content Risk - DONE

**Problem**: All 41 location pages follow the same template with 5 bullet benefits and a brief description. Google may flag these as thin or duplicate content.

**Completed 2026-03-23:**
- [x] Add location-specific FAQ section with FAQPage schema (3 unique questions per location)
- [x] Add "Auch in der Nähe" links to neighboring locations
- [x] Replace generic hero description with unique text mentioning local landmarks
- [x] All 41 locations x 4 languages = 164 unique descriptions + 492 unique FAQ Q&As

**Files created:**
- `app/data/locationConfig.ts` - 41 locations with nearby mappings
- `app/composables/useLocationFaqSchema.ts` - FAQPage JSON-LD composable
- `app/components/LocationFaq.vue` - FAQ accordion component
- `app/components/NearbyLocations.vue` - Nearby location links component

**Files modified:**
- `app/components/LocationPage.vue` - added FAQ + nearby sections
- `app/pages/locations/*.vue` (all 41) - added locationKey, locationSlug props + FAQ schema
- `i18n/locales/{de,en,ru,uk}.json` - unique descriptions + FAQ per location + shared keys

---

### 1.3 Missing Internal Cross-Links - DONE

**Completed externally.**

---

## Priority 2: Important Improvements

### 2.1 Add Dedicated Contact Page - ALREADY EXISTS

Contact page already exists at `app/pages/contact.vue` with WhatsApp, phone, email, hours, service areas, languages, and LocalBusiness schema.

---

### 2.2 OG Images for Location Pages

**Problem**: All 41 location pages use the same `championship-action.jpeg` OG image.

**Fix**:
- [ ] Create 3-4 regional OG images (Zürich city, Zürichsee, Schwyz/Luzern/Zug, Aargau)
- [ ] Assign appropriate regional image per location page

**Note**: Requires graphic design work, cannot be automated.

---

### 2.3 Expand Guide Article Depth - DONE

**Completed 2026-03-23.** All 8 guide articles expanded across all 4 languages:
- whichMassage: 264 → 1218 words (+10 new sections: howToChoose, combination)
- firstMassage: 208 → 959 words (+3 new sections: whatToWear, commonQuestions, afterEffects)
- mobileVsStudio: 173 → 581 words (+3 new sections: costComparison, whoIsItFor, quality)
- massageFrequency: 289 → 1072 words (+2 new sections: signs, longTerm)
- backPain: 306 → 1352 words (+3 new sections: exercises, ergonomics, whenToSeeDoctor)
- swedishVsClassical: 373 → 1309 words (+2 new sections: history, duration)
- pregnancyMassage: 303 → 1342 words (+3 new sections: positioning, postpartum, mobileAdvantage)
- mobileBenefits: 319 → 1396 words (+3 new sections: families, elderly, corporate)

---

### 2.4 Heading Hierarchy Fix on Services Index - NOT NEEDED

Services index already uses `<h2>` for "Preise & Konditionen". No fix required.

---

## Priority 3: Quick Wins

### 3.1 Add Twitter Card Meta Tags

**Problem**: OG tags present but no Twitter Card tags.

**Fix**: Add to `useHead()` in layout or per-page:
```js
{ name: 'twitter:card', content: 'summary_large_image' },
{ name: 'twitter:title', content: title },
{ name: 'twitter:description', content: description },
{ name: 'twitter:image', content: ogImage },
```

**Files to change**: `app/layouts/default.vue` or create a shared `useSeoMeta()` composable

---

### 3.2 Add Reviewer City to Testimonials

**Problem**: Testimonials lack location info, which weakens local trust signals.

**Fix**: Add city/region to each testimonial in i18n files.

**Example**:
```json
"serviceTestimonials": {
  "swedish": {
    "testimonial1": {
      "text": "...",
      "author": "Anna M.",
      "location": "Meilen"
    }
  }
}
```

**Files to change**:
- `i18n/locales/*.json` - add `location` to each testimonial
- Testimonial components - render location

---

### 3.3 Strengthen Aggregate Rating

**Problem**: Only 6 reviews in Organization schema. Low count reduces credibility.

**Fix**:
- [ ] Add more reviews to structured data as real reviews come in
- [ ] Consider Google Reviews integration or link to Google Business profile

**File**: `app/composables/useStructuredData.ts`

---

## Priority 4: Content Gap Opportunities

New pages/articles to create for untapped keyword clusters:

| Topic | Target Keywords | Type | Priority |
|-------|----------------|------|----------|
| Massage Gutschein Zürich | gift voucher, Geschenkgutschein | New page | High |
| Massage nach dem Sport | post-workout recovery, Regeneration | Guide article | Medium |
| Massage bei Stress/Burnout | stress relief, Entspannung, Burnout | Guide article | Medium |
| Massage Kosten Schweiz | price comparison, was kostet Massage | Guide article | Medium |
| Bewertungen / Reviews | testimonials, Erfahrungen, Bewertungen | New page | Medium |

---

## Priority 5: Future Enhancements

### 5.1 Video Schema

If massage demonstration videos are created:
- Add `VideoObject` schema to relevant service pages
- Host on YouTube, embed on site
- Target video rich results in Google

### 5.2 Google Business Profile Integration

- Link structured data to Google Business Profile
- Encourage and display Google Reviews
- Add `sameAs` link to Google Maps listing

### 5.3 Core Web Vitals Audit

- Measure LCP, FID, CLS via Google Search Console
- Optimize largest contentful paint (hero images)
- Check cumulative layout shift on mobile

---

## Implementation Checklist

### Phase 1 - Quick Wins (1-2 days)
- [ ] Fix H3 -> H2 on services index
- [ ] Add twitter:card meta tags
- [ ] Add reviewer city to testimonials

### Phase 2 - Content Fixes - DONE
- [x] Create descriptive alt text keys for all images
- [x] Add cross-links: services -> guides
- [x] Add cross-links: guides -> related guides
- [ ] Expand guide articles to 1000+ words

### Phase 3 - Location SEO - DONE
- [x] Add location-specific FAQs (all 41 locations, 3 unique Qs each)
- [x] Add nearby location links (all 41 locations)
- [x] Replace generic descriptions with unique text per location
- [ ] Create regional OG images (still todo)

### Phase 4 - New Pages (1-2 weeks)
- [ ] Create contact page with schema
- [ ] Create gift voucher page
- [ ] Create reviews/testimonials page
- [ ] Write 2-3 new guide articles

### Phase 5 - Ongoing
- [ ] Add more reviews to structured data as they come in
- [ ] Monitor Search Console for indexing issues
- [ ] Track keyword rankings for location pages
- [ ] Core Web Vitals optimization
