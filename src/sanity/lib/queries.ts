import { groq } from "next-sanity";

// ─── Layout ────────────────────────────────────────────────────────────────────
// Her sayfada bir kez çekilir — header, footer, global ayarlar
export const layoutQuery = groq`{
  "settings": *[_type == "siteSettings"][0] {
    siteName, siteTagline,
    logo { asset->{ _id, url, metadata { lqip, dimensions } }, hotspot, crop },
    logoHeight,
    favicon { asset->{ _id, url } },
    contactInfo { phone, email, address, whatsappNumber, mapIframe },
    socialLinks[] { platform, url },
    gaId, gtmId, googleSearchConsoleId
  },
  "navigation": *[_type == "navigation"][0] {
    headerLinks[] { label, href, openInNewTab, subLinks[] { label, href, openInNewTab } },
    footerLinks[] { label, href, openInNewTab, subLinks[] { label, href, openInNewTab } }
  }
}`;

// ─── Sayfalar ──────────────────────────────────────────────────────────────────

export const homePageQuery = groq`*[_type == "homePage"][0] {
  heroPreTitle, heroTitle, heroSubtitle,
  heroImage { asset->{ _id, url, metadata { lqip, dimensions } }, alt, hotspot, crop },
  
  aboutTitle, aboutText, aboutExperienceYears,
  aboutImage { asset->{ _id, url, metadata { lqip, dimensions } }, alt, hotspot, crop },
  aboutStats[] { value, label },

  servicesTitle, servicesSubtitle,

  whyUsTitle,
  whyUsImage { asset->{ _id, url, metadata { lqip, dimensions } }, alt, hotspot, crop },
  whyUsFeatures[] { title, description },

  projectsTitle,
  "featuredProjects": coalesce(
    featuredProjects[]->{ title, slug, location, category, mainImage { asset->{ _id, url, metadata { lqip, dimensions } }, alt, hotspot, crop } },
    *[_type == "project" && isFeatured == true] | order(_createdAt desc) [0...4] { title, slug, location, category, mainImage { asset->{ _id, url, metadata { lqip, dimensions } }, alt, hotspot, crop } },
    *[_type == "project"] | order(_createdAt desc) [0...4] { title, slug, location, category, mainImage { asset->{ _id, url, metadata { lqip, dimensions } }, alt, hotspot, crop } }
  ),

  ctaTitle, ctaSubtitle, ctaButtonLabel,

  seo
}`;

export const aboutPageQuery = groq`*[_type == "aboutPage"][0] {
  heroTitle,
  heroImage { asset->{ _id, url, metadata { lqip, dimensions } }, alt, hotspot, crop },
  
  historyPreTitle, historyTitle, historyText,
  historyImage1 { asset->{ _id, url, metadata { lqip, dimensions } }, alt, hotspot, crop },
  historyImage1Label, historyImage1Sublabel,
  historyImage2 { asset->{ _id, url, metadata { lqip, dimensions } }, alt, hotspot, crop },
  historyImage2Label, historyImage2Sublabel,

  values[] { title, description },
  
  contentTitle,
  contentBody[] {
    ...,
    _type == "image" => { asset->{ _id, url, metadata { lqip, dimensions } }, alt, hotspot, crop }
  },

  sustainabilityPreTitle, sustainabilityTitle, sustainabilityDescription,
  sustainabilityImage { asset->{ _id, url, metadata { lqip, dimensions } }, alt, hotspot, crop },

  ctaTitle, ctaSubtitle, ctaButtonLabel1, ctaButtonLabel2,

  seo
}`;

export const contactPageQuery = groq`{
  "page": *[_type == "contactPage"][0] {
    heroPreTitle, heroTitle, heroSubtitle, heroBadgeLine1, heroBadgeLine2,
    contactInfoTitle, formTitle, successMessage, seo
  },
  "settings": *[_type == "siteSettings"][0] {
    contactInfo { phone, email, address, mapIframe },
    socialLinks[] { platform, url }
  }
}`;

export const blogPageQuery = groq`*[_type == "blogPage"][0] {
  pageTitle, pageSubtitle, ctaLabel, ctaLink, seo
}`;

export const servicesPageQuery = groq`*[_type == "servicesPage"][0] {
  heroTitle, heroSubtitle, heroBadge,
  
  processTitle, processHighlightedWord, processDescription,
  processes[] { title, description },
  
  ctaTitle, ctaDescription, ctaButtonText1, ctaButtonLink1, ctaButtonText2, ctaButtonLink2,
  
  seo
}`;

export const projectsPageQuery = groq`*[_type == "projectsPage"][0] {
  heroTitle,
  heroImage { asset->{ _id, url, metadata { lqip, dimensions } }, alt, hotspot, crop },
  archivePreTitle, archiveTitle,
  stats[] { value, label },
  ctaTitle, ctaButtonText1, ctaButtonLink1, ctaButtonText2, ctaButtonLink2,
  seo
}`;

// ─── Blog ──────────────────────────────────────────────────────────────────────

export const blogListQuery = groq`*[_type == "blogPost"] | order(publishedAt desc) {
  title, slug, excerpt, publishedAt, category->{title, slug},
  mainImage { asset->{ _id, url, metadata { lqip, dimensions } }, alt, hotspot, crop }
}`;

export const blogPostBySlugQuery = groq`*[_type == "blogPost" && slug.current == $slug][0] {
  _id, title, slug, publishedAt, excerpt, category->{_id, title, slug}, seoTags,
  mainImage { asset->{ _id, url, metadata { lqip, dimensions } }, alt, hotspot, crop },
  body[] {
    ...,
    _type == "image" => {
      asset->{ _id, url, metadata { lqip, dimensions } },
      alt, alignment, size, hotspot, crop
    }
  },
  seo
}`;

export const blogCategoriesQuery = groq`*[_type == "blogCategory"] | order(title asc) {
  _id, title, slug
}`;

export const blogListByCategorySlugQuery = groq`*[_type == "blogPost" && category->slug.current == $slug] | order(publishedAt desc) {
  title, slug, excerpt, publishedAt, category->{title, slug},
  mainImage { asset->{ _id, url, metadata { lqip, dimensions } }, alt, hotspot, crop }
}`;

export const blogRelatedPostsQuery = groq`*[_type == "blogPost" && category._ref == $categoryId && _id != $currentPostId] | order(publishedAt desc)[0...3] {
  title, slug, excerpt, publishedAt, category->{title, slug},
  mainImage { asset->{ _id, url, metadata { lqip, dimensions } }, alt, hotspot, crop }
}`;

// ─── Hizmetler ─────────────────────────────────────────────────────────────────

export const serviceListQuery = groq`*[_type == "service"] | order(_createdAt asc) {
  title, slug, preTitle, shortDescription, features,
  mainImage { asset->{ _id, url, metadata { lqip, dimensions } }, alt, hotspot, crop }
}`;

export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0] {
  title, slug,
  mainImage { asset->{ _id, url, metadata { lqip, dimensions } }, alt, hotspot, crop },
  body[] {
    ...,
    _type == "image" => { asset->{ _id, url, metadata { lqip, dimensions } }, alt, alignment, size, hotspot, crop }
  },
  seo
}`;

// ─── Projeler ──────────────────────────────────────────────────────────────────

export const projectListQuery = groq`*[_type == "project"] | order(_createdAt asc) {
  title, slug, location, category, status, shortDescription,
  mainImage { asset->{ _id, url, metadata { lqip, dimensions } }, alt, hotspot, crop }
}`;

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0] {
  title, slug, location, category, status, shortDescription,
  mainImage { asset->{ _id, url, metadata { lqip, dimensions } }, alt, hotspot, crop },
  gallery[] { asset->{ _id, url, metadata { lqip, dimensions } }, alt, hotspot, crop },
  body[] {
    ...,
    _type == "image" => { asset->{ _id, url, metadata { lqip, dimensions } }, alt, alignment, size, hotspot, crop }
  },
  seo
}`;

// ─── Yasal Sayfalar ────────────────────────────────────────────────────────────

export const legalPageBySlugQuery = groq`*[_type == "legalPage" && slug.current == $slug][0] {
  title, slug, body, _updatedAt, seo
}`;

// ─── Sitemap ───────────────────────────────────────────────────────────────────

export const allSlugsForSitemapQuery = groq`{
  "blogPosts": *[_type == "blogPost" && defined(slug.current)] { "slug": slug.current, _updatedAt },
  "blogCategories": *[_type == "blogCategory" && defined(slug.current)] { "slug": slug.current, _updatedAt },
  "services": *[_type == "service" && defined(slug.current)] { "slug": slug.current, _updatedAt },
  "projects": *[_type == "project" && defined(slug.current)] { "slug": slug.current, _updatedAt },
  "legalPages": *[_type == "legalPage" && defined(slug.current)] { "slug": slug.current, _updatedAt }
}`;

// ─── Varsayılan SEO ────────────────────────────────────────────────────────────

export const defaultSeoQuery = groq`*[_type == "siteSettings"][0] {
  "title": defaultSeo.metaTitle,
  "description": defaultSeo.metaDescription,
  "ogImage": defaultOgImage,
  siteName,
  siteTagline,
  favicon { asset->{ _id, url } },
  googleSearchConsoleId
}`;
