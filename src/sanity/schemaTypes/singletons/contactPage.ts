import { defineField, defineType } from "sanity";

export const contactPageType = defineType({
  name: "contactPage",
  title: "İletişim Sayfası",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "form", title: "Form" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    // Hero
    defineField({ name: "heroPreTitle", title: "Hero Üst Yazı", type: "string", group: "hero", initialValue: "Bize Ulaşın" }),
    defineField({ name: "heroTitle", title: "Hero Başlık", type: "string", group: "hero", initialValue: "İletişim", validation: (Rule) => Rule.required() }),
    defineField({ name: "heroSubtitle", title: "Hero Alt Yazı", type: "text", rows: 2, group: "hero" }),
    defineField({ name: "heroBadgeLine1", title: "Sağ Badge Satır 1", type: "string", group: "hero", initialValue: "Mimari Mükemmellik" }),
    defineField({ name: "heroBadgeLine2", title: "Sağ Badge Satır 2", type: "string", group: "hero", initialValue: "Gezgin İnşaat Güvencesiyle" }),

    // Form
    defineField({ name: "contactInfoTitle", title: "İletişim Bilgileri Başlığı", type: "string", group: "form", initialValue: "Genel Merkezimiz" }),
    defineField({ name: "formTitle", title: "Form Başlığı", type: "string", group: "form", initialValue: "Mesaj Gönderin" }),
    defineField({
      name: "successMessage",
      title: "Form Başarı Mesajı",
      type: "text",
      rows: 2,
      group: "form",
      initialValue: "Mesajınız alındı. En kısa sürede size dönüş yapacağız.",
    }),

    // SEO
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" }),
  ],
});
