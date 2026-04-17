import { defineField, defineType } from "sanity";

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "Hakkımızda",
  type: "document",
  groups: [
    { name: "hero", title: "Hero Section" },
    { name: "history", title: "History Section" },
    { name: "values", title: "Values Section" },
    { name: "quality", title: "Quality & Certificates" },
    { name: "sustainability", title: "Sustainability" },
    { name: "cta", title: "CTA Section" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    // --- HERO SECTION ---
    defineField({ name: "heroTitle", title: "Hero Başlık", type: "string", group: "hero", validation: (Rule) => Rule.required() }),
    defineField({
      name: "heroImage",
      title: "Hero Görseli",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt Metni", type: "string" })],
      group: "hero"
    }),

    // --- HISTORY SECTION ---
    defineField({ name: "historyPreTitle", title: "Tarihçe Üst Başlık", type: "string", group: "history" }),
    defineField({ name: "historyTitle", title: "Tarihçe Başlık", type: "string", group: "history" }),
    defineField({ name: "historyText", title: "Tarihçe Metni", type: "array", of: [{ type: "block" }], group: "history" }),
    defineField({
      name: "historyImage1",
      title: "Tarihçe Görseli 1 (Geçmiş)",
      type: "image",
      options: { hotspot: true },
      group: "history"
    }),
    defineField({ name: "historyImage1Label", title: "Görsel 1 Etiket (Örn: 90s)", type: "string", group: "history" }),
    defineField({ name: "historyImage1Sublabel", title: "Görsel 1 Alt Etiket", type: "string", group: "history" }),
    defineField({
      name: "historyImage2",
      title: "Tarihçe Görseli 2 (Günümüz)",
      type: "image",
      options: { hotspot: true },
      group: "history"
    }),
    defineField({ name: "historyImage2Label", title: "Görsel 2 Etiket (Örn: 2024)", type: "string", group: "history" }),
    defineField({ name: "historyImage2Sublabel", title: "Görsel 2 Alt Etiket", type: "string", group: "history" }),

    // --- VALUES SECTION ---
    defineField({
      name: "values",
      title: "Değerler",
      type: "array",
      group: "values",
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

    // --- QUALITY SECTION ---
    defineField({ name: "qualityPreTitle", title: "Kalite Üst Başlık", type: "string", group: "quality" }),
    defineField({ name: "qualityTitle", title: "Kalite Başlık", type: "string", group: "quality" }),
    defineField({ name: "qualityDescription", title: "Kalite Açıklaması", type: "text", rows: 3, group: "quality" }),
    defineField({
      name: "qualityCertificates",
      title: "Sertifikalar",
      type: "array",
      group: "quality",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "React Icon Adı (Örn: RiVerifiedBadgeLine)", type: "string" }),
            defineField({ name: "title", title: "Sertifika Başlığı", type: "string" }),
            defineField({ name: "subtitle", title: "Alt Etiket", type: "string" }),
          ]
        }
      ]
    }),
    defineField({
      name: "qualityStats",
      title: "Kalite İstatistikleri",
      type: "array",
      group: "quality",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Değer", type: "string" }),
            defineField({ name: "label", title: "Etiket", type: "string" }),
          ]
        }
      ]
    }),

    // --- SUSTAINABILITY SECTION ---
    defineField({ name: "sustainabilityPreTitle", title: "Sürdürülebilirlik Üst Başlık", type: "string", group: "sustainability" }),
    defineField({ name: "sustainabilityTitle", title: "Sürdürülebilirlik Başlık", type: "string", group: "sustainability" }),
    defineField({ name: "sustainabilityDescription", title: "Sürdürülebilirlik Açıklaması", type: "text", rows: 4, group: "sustainability" }),
    defineField({
      name: "sustainabilityImage",
      title: "Arka Plan Görseli",
      type: "image",
      options: { hotspot: true },
      group: "sustainability"
    }),

    // --- CTA SECTION ---
    defineField({ name: "ctaTitle", title: "CTA Başlık", type: "string", group: "cta" }),
    defineField({ name: "ctaSubtitle", title: "CTA Alt Başlık", type: "text", rows: 2, group: "cta" }),
    defineField({ name: "ctaButtonLabel1", title: "Birinci Buton Metni", type: "string", group: "cta" }),
    defineField({ name: "ctaButtonLabel2", title: "İkinci Buton Metni", type: "string", group: "cta" }),

    // --- SEO ---
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" }),
  ],
});
