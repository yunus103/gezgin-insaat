import { defineField, defineType } from "sanity";

export const servicesPageType = defineType({
  name: "servicesPage",
  title: "Hizmetler Sayfası",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "process", title: "Felsefe / Süreç" },
    { name: "cta", title: "CTA" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    // Hero
    defineField({ name: "heroTitle", title: "Hero Başlık", type: "string", group: "hero" }),
    defineField({ name: "heroSubtitle", title: "Hero Alt Başlık", type: "text", rows: 3, group: "hero" }),
    defineField({ name: "heroBadge", title: "Hero Rozet Yazısı", type: "string", description: "Örn: Architectural Authority", group: "hero" }),

    // Process
    defineField({ name: "processTitle", title: "Süreç Başlığı", type: "string", group: "process" }),
    defineField({ name: "processHighlightedWord", title: "Süreç Vurgulu Kelime", type: "string", group: "process" }),
    defineField({ name: "processDescription", title: "Süreç Açıklaması", type: "text", rows: 3, group: "process" }),
    defineField({
      name: "processes",
      title: "Süreç Adımları (Maksimum 4)",
      type: "array",
      group: "process",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Başlık", type: "string" }),
            defineField({ name: "description", title: "Açıklama", type: "text", rows: 2 }),
          ],
        },
      ],
      validation: (Rule) => Rule.max(4),
    }),

    // CTA
    defineField({ name: "ctaTitle", title: "CTA Başlık", type: "string", group: "cta" }),
    defineField({ name: "ctaDescription", title: "CTA Açıklama", type: "text", rows: 3, group: "cta" }),
    defineField({ name: "ctaButtonText1", title: "Buton 1 Metin", type: "string", group: "cta" }),
    defineField({ name: "ctaButtonLink1", title: "Buton 1 Link", type: "string", group: "cta" }),
    defineField({ name: "ctaButtonText2", title: "Buton 2 Metin", type: "string", group: "cta" }),
    defineField({ name: "ctaButtonLink2", title: "Buton 2 Link", type: "string", group: "cta" }),

    // SEO
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" }),
  ],
});
