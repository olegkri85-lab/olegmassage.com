# SEO Improvement Plan - olegmassage.com

**Date**: 2026-03-23
**Status**: Draft
**Total pages audited**: 63 (across 4 languages)

---

## Current SEO Strengths

- Structured data: LocalBusiness, Person, Service, FAQPage, BreadcrumbList, Offer, WebSite schemas
- 34 location pages for local SEO
- 8 educational guide articles for informational keywords
- 8 detailed service pages with benefits, FAQ, testimonials, contraindications
- Multilingual (de/en/ru/uk) with proper hreflang and locale-prefixed URLs
- Canonical URLs on all pages
- Auto-generated sitemap with lastmod
- robots.txt correctly blocks legal pages
- Strong E-E-A-T: Olympic background, Swiss Massage Championship 1st place, professional certifications

---

## Priority 1: Critical Fixes

### 1.1 Image Alt Texts Are Too Generic

**Problem**: Alt texts reuse service titles (e.g. "Schwedische Massage") instead of descriptive text.

**Fix**: Create dedicated `altText` keys in all i18n locale files.

**Examples**:
- Bad: `"Schwedische Massage"`
- Good: `"Professioneller Massagetherapeut führt schwedische Massage zu Hause in Zürich durch"`

**Files to change**:
- `i18n/locales/de.json`, `en.json`, `ru.json`, `uk.json` - add `altText` keys per service/page
- `app/components/ImagePlaceholder.vue` or page files - reference new alt keys

---

### 1.2 Location Pages: Thin/Duplicate Content Risk

**Problem**: All 34 location pages follow the same template with 5 bullet benefits and a brief description. Google may flag these as thin or duplicate content.

**Fix** (per location page):
- [ ] Add location-specific FAQ section with FAQPage schema (3-5 questions per location)
- [ ] Add "Auch in der Nähe" links to neighboring locations
- [ ] Add unique opening paragraph mentioning local landmarks or neighborhoods
- [ ] Add travel/arrival info specific to each area

**Files to change**:
- `i18n/locales/*.json` - expand `location.*` keys with FAQ, nearby links, unique intro
- `app/components/LocationPage.vue` - add FAQ section and nearby locations component
- Location page files in `app/pages/locations/` - add schema for FAQ

---

### 1.3 Missing Internal Cross-Links

**Problem**: Pages that should link to each other don't.

**Fix**:
- [ ] Service pages link to relevant guide articles (e.g. Swedish massage -> "Swedish vs Classical" guide)
- [ ] Guide articles cross-link to related guides (e.g. "First Massage" -> "Which Massage")
- [ ] Location pages link to nearby locations
- [ ] Services index links contextually to guides

**Files to change**:
- `app/pages/services/*.vue` - add "Mehr erfahren" links to guides
- `app/pages/guide/*.vue` - add "Verwandte Artikel" section
- `app/components/LocationPage.vue` - add nearby locations section

---

## Priority 2: Important Improvements

### 2.1 Add Dedicated Contact Page

**Problem**: No `/contact` page. WhatsApp widget is the only CTA.

**Fix**:
- [ ] Create `app/pages/contact.vue` with phone, email, WhatsApp, service hours
- [ ] Add ContactPoint schema markup
- [ ] Add to main navigation
- [ ] Add i18n translations for all 4 languages

---

### 2.2 OG Images for Location Pages

**Problem**: All 34 location pages use the same `championship-action.jpeg` OG image.

**Fix**:
- [ ] Create 3-4 regional OG images (Zürich city, Zürichsee, Schwyz/Luzern/Zug, Aargau)
- [ ] Assign appropriate regional image per location page

**Files to change**:
- Add images to `public/images/og/`
- Update `useHead()` in location page files or LocationPage component

---

### 2.3 Expand Guide Article Depth

**Problem**: Guide articles are relatively short. Competing pages for informational keywords tend to be 1000+ words.

**Fix per article**:
- [ ] Add H2/H3 subheadings with detailed sections
- [ ] Add comparison tables where relevant (which-massage, swedish-vs-classical)
- [ ] Add "Key takeaways" or summary boxes
- [ ] Target 1000+ words per article

**Files to change**:
- `i18n/locales/*.json` - expand guide content
- `app/pages/guide/*.vue` - add new content sections

---

### 2.4 Heading Hierarchy Fix on Services Index

**Problem**: Services index page jumps from H1 to H3 for "Preise & Konditionen".

**Fix**: Change H3 to H2.

**File**: `app/pages/services/index.vue`

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

### Phase 2 - Content Fixes (3-5 days)
- [ ] Create descriptive alt text keys for all images
- [ ] Add cross-links: services -> guides
- [ ] Add cross-links: guides -> related guides
- [ ] Expand guide articles to 1000+ words

### Phase 3 - Location SEO (5-7 days)
- [ ] Add location-specific FAQs (top 10 locations first)
- [ ] Add nearby location links
- [ ] Add unique intro paragraphs per location
- [ ] Create regional OG images

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
