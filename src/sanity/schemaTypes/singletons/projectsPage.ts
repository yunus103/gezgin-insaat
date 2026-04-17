import { defineField, defineType } from "sanity";

export const projectsPageType = defineType({
  name: "projectsPage",
  title: "Projeler Sayfası",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "filter", title: "Filtre & Arşiv" },
    { name: "stats", title: "İstatistikler" },
    { name: "cta", title: "CTA" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    // Hero
    defineField({ name: "heroTitle", title: "Hero Başlık", type: "string", group: "hero" }),
    defineField({
      name: "heroImage",
      title: "Hero Arka Plan Görseli",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt Metni", type: "string" })],
      group: "hero",
    }),

    // Filter section
    defineField({ name: "archivePreTitle", title: "Arşiv Üst Başlık", type: "string", group: "filter" }),
    defineField({ name: "archiveTitle", title: "Arşiv Başlık", type: "string", group: "filter" }),

    // Stats
    defineField({
      name: "stats",
      title: "İstatistikler",
      type: "array",
      group: "stats",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Değer (Örn: 500+)", type: "string" }),
            defineField({ name: "label", title: "Etiket (Örn: Tamamlanan Proje)", type: "string" }),
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),

    // CTA
    defineField({ name: "ctaTitle", title: "CTA Başlık", type: "string", group: "cta" }),
    defineField({ name: "ctaButtonText1", title: "Buton 1 Metin", type: "string", group: "cta" }),
    defineField({ name: "ctaButtonLink1", title: "Buton 1 Link", type: "string", group: "cta" }),
    defineField({ name: "ctaButtonText2", title: "Buton 2 Metin", type: "string", group: "cta" }),
    defineField({ name: "ctaButtonLink2", title: "Buton 2 Link", type: "string", group: "cta" }),

    // SEO
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" }),
  ],
});
