import { defineField, defineType } from "sanity";

export const homePageType = defineType({
  name: "homePage",
  title: "Ana Sayfa",
  type: "document",
  groups: [
    { name: "hero", title: "Hero Section" },
    { name: "about", title: "About Section" },
    { name: "services", title: "Services Section" },
    { name: "whyUs", title: "Why Us Section" },
    { name: "projects", title: "Projects Section" },
    { name: "cta", title: "CTA Section" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    // --- HERO SECTION ---
    defineField({ name: "heroPreTitle", title: "Hero Üst Başlık", type: "string", group: "hero" }),
    defineField({ name: "heroTitle", title: "Hero Başlık", type: "string", group: "hero", validation: (Rule) => Rule.required() }),
    defineField({ name: "heroSubtitle", title: "Hero Alt Başlık", type: "text", rows: 3, group: "hero" }),
    defineField({
      name: "heroImage",
      title: "Hero Görseli",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt Metni", type: "string" })],
      group: "hero"
    }),

    // --- ABOUT SECTION ---
    defineField({ name: "aboutTitle", title: "Hakkımızda Başlık", type: "string", group: "about" }),
    defineField({ name: "aboutText", title: "Hakkımızda Metni", type: "array", of: [{ type: "block" }], group: "about" }),
    defineField({
      name: "aboutImage",
      title: "Hakkımızda Görseli",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt Metni", type: "string" })],
      group: "about"
    }),
    defineField({ name: "aboutExperienceYears", title: "Tecrübe Yılı", type: "string", group: "about" }),
    defineField({
      name: "aboutStats",
      title: "Hakkımızda İstatistikler",
      type: "array",
      group: "about",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Değer (Örn: 500+)", type: "string" }),
            defineField({ name: "label", title: "Etiket", type: "string" }),
          ]
        }
      ]
    }),

    // --- SERVICES SECTION ---
    defineField({ name: "servicesTitle", title: "Hizmetler Başlık", type: "string", group: "services" }),
    defineField({ name: "servicesSubtitle", title: "Hizmetler Alt Başlık", type: "string", group: "services" }),

    // --- WHY US SECTION ---
    defineField({ name: "whyUsTitle", title: "Neden Biz Başlık", type: "string", group: "whyUs" }),
    defineField({
      name: "whyUsImage",
      title: "Neden Biz Görseli",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt Metni", type: "string" })],
      group: "whyUs"
    }),
    defineField({
      name: "whyUsFeatures",
      title: "Neden Biz Özellikleri",
      type: "array",
      group: "whyUs",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Başlık", type: "string" }),
            defineField({ name: "description", title: "Açıklama", type: "text", rows: 3 }),
          ]
        }
      ]
    }),

    // --- PROJECTS SECTION ---
    defineField({ name: "projectsTitle", title: "Projeler Başlık", type: "string", group: "projects" }),
    defineField({
      name: "featuredProjects",
      title: "Öne Çıkan Projeler (Manuel Seçim)",
      description: "Boş bırakılırsa en son eklenen projeler otomatik gösterilir",
      type: "array",
      group: "projects",
      of: [{ type: "reference", to: [{ type: "project" }] }]
    }),

    // --- CTA SECTION ---
    defineField({ name: "ctaTitle", title: "CTA Başlık", type: "string", group: "cta" }),
    defineField({ name: "ctaSubtitle", title: "CTA Alt Başlık", type: "text", rows: 2, group: "cta" }),
    defineField({ name: "ctaButtonLabel", title: "CTA Buton Yazısı", type: "string", group: "cta" }),

    // --- SEO ---
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" }),
  ],
});
