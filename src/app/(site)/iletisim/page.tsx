import { client } from "@/sanity/lib/client";
import { contactPageQuery } from "@/sanity/lib/queries";
import { buildMetadata } from "@/lib/seo";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactFormMonolithic } from "@/components/forms/ContactFormMonolithic";
import {
  RiMapPin2Line,
  RiPhoneLine,
  RiMailLine,
  RiArrowRightUpLine,
} from "react-icons/ri";

const SOCIAL_ICON_MAP: Record<string, string> = {
  instagram: "Instagram",
  linkedin: "LinkedIn",
  youtube: "YouTube",
  twitter: "Twitter / X",
  facebook: "Facebook",
  tiktok: "TikTok",
};

export async function generateMetadata() {
  const { page } = await client.fetch(contactPageQuery, {}, { next: { tags: ["contact"] } });
  return buildMetadata(page?.seo, "İletişim | Gezgin İnşaat");
}

export default async function ContactPage() {
  const { page, settings } = await client.fetch(
    contactPageQuery,
    {},
    { next: { tags: ["contact"] } }
  );

  const heroTitle = page?.heroTitle || "İletişim";
  const heroPreTitle = page?.heroPreTitle || "Bize Ulaşın";
  const heroSubtitle =
    page?.heroSubtitle ||
    "Hayallerinizdeki yapıyı inşa etmek için profesyonel ekibimizle tanışın. Projeleriniz hakkında detaylı bilgi ve teklif almak için buradayız.";
  const badge1 = page?.heroBadgeLine1 || "Mimari Mükemmellik";
  const badge2 = page?.heroBadgeLine2 || "Gezgin İnşaat Güvencesiyle";
  const contactInfoTitle = page?.contactInfoTitle || "Genel Merkezimiz";

  const phone = settings?.contactInfo?.phone;
  const email = settings?.contactInfo?.email;
  const address = settings?.contactInfo?.address;
  const mapIframe = settings?.contactInfo?.mapIframe;
  const socialLinks: { platform: string; url: string }[] = settings?.socialLinks || [];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[45vh] flex items-center bg-surface-container-low overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img
            alt=""
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuArt-sE3qbssTorcQCHc0HIaoG76eluocykqhloggnjVTPPXx8Tz0Jhm2S0lopJQOVymHmhhW7OmV_m6O2ZlhjqoRrEJ71CE_dZpIys3JNfMdw5_HF-FKKSZ0fsC0lcp0UnczwGOM_W8rBik14Ahfvkikmb7n1xQMvV_w_abvpOTaP0O5tC-CI_3qEQ5elrezo7h0myAa6ELSEwnoyV0jDqXt-E5MtrAemifx1vjPeO69IoMpGF6ar3g74i73XNmPtKrdhGgfBeKf0"
            className="w-full h-full object-cover grayscale"
            aria-hidden="true"
          />
        </div>

        <div className="max-w-[1920px] mx-auto px-4 md:px-12 relative z-10 w-full py-16 md:py-20">
          <div className="max-w-4xl">
            <FadeIn direction="up">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                {heroPreTitle}
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-black text-primary tracking-tighter leading-none mb-6">
                {heroTitle}
              </h1>
              <p className="text-base md:text-lg text-secondary max-w-xl leading-relaxed font-light">
                {heroSubtitle}
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Badge bottom-right */}
        <div className="absolute bottom-0 right-0 w-64 bg-surface-container-highest/50 backdrop-blur-sm p-8 hidden lg:flex items-end">
          <div className="border-l-2 border-primary pl-5">
            <p className="text-sm uppercase tracking-widest font-bold text-on-surface">{badge1}</p>
            <p className="text-xs text-secondary mt-1">{badge2}</p>
          </div>
        </div>
      </section>

      {/* ── Info + Form ──────────────────────────────────── */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-[1920px] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

            {/* Contact info column */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-headline font-bold tracking-tight mb-8 text-on-surface">
                  {contactInfoTitle}
                </h2>
                <div className="space-y-8">
                  {address && (
                    <FadeIn direction="right">
                      <div className="flex items-start gap-5">
                        <RiMapPin2Line className="text-primary mt-1 shrink-0" size={22} />
                        <div>
                          <h3 className="font-bold text-xs tracking-widest uppercase mb-2 text-on-surface">Adres</h3>
                          <p className="text-secondary leading-relaxed whitespace-pre-line">{address}</p>
                        </div>
                      </div>
                    </FadeIn>
                  )}
                  {phone && (
                    <FadeIn direction="right" delay={0.1}>
                      <div className="flex items-start gap-5">
                        <RiPhoneLine className="text-primary mt-1 shrink-0" size={22} />
                        <div>
                          <h3 className="font-bold text-xs tracking-widest uppercase mb-2 text-on-surface">Telefon</h3>
                          <a href={`tel:${phone}`} className="text-secondary hover:text-primary transition-colors">
                            {phone}
                          </a>
                        </div>
                      </div>
                    </FadeIn>
                  )}
                  {email && (
                    <FadeIn direction="right" delay={0.2}>
                      <div className="flex items-start gap-5">
                        <RiMailLine className="text-primary mt-1 shrink-0" size={22} />
                        <div>
                          <h3 className="font-bold text-xs tracking-widest uppercase mb-2 text-on-surface">E-posta</h3>
                          <a href={`mailto:${email}`} className="text-secondary hover:text-primary transition-colors">
                            {email}
                          </a>
                        </div>
                      </div>
                    </FadeIn>
                  )}
                </div>
              </div>

              {/* Social links */}
              {socialLinks.length > 0 && (
                <FadeIn direction="up" delay={0.3}>
                  <div className="pt-8 border-t border-outline-variant/30">
                    <h3 className="font-bold text-xs tracking-widest uppercase mb-6 text-on-surface">
                      Sosyal Medya
                    </h3>
                    <div className="flex flex-wrap gap-6 md:gap-8">
                      {socialLinks.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-primary transition-colors flex items-center gap-2 group"
                        >
                          <span className="text-xs font-bold tracking-widest uppercase">
                            {SOCIAL_ICON_MAP[link.platform?.toLowerCase()] || link.platform}
                          </span>
                          <RiArrowRightUpLine
                            size={14}
                            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              )}
            </div>

            {/* Form column */}
            <div className="lg:col-span-7">
              <FadeIn direction="left" delay={0.1}>
                <ContactFormMonolithic
                  formTitle={page?.formTitle}
                  successMessage={page?.successMessage}
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ─────────────────────────────────────────── */}
      {mapIframe ? (
        <section
          className="w-full h-[45vh] max-h-[500px] bg-surface-container overflow-hidden grayscale contrast-125 opacity-80 hover:grayscale-0 transition-all duration-700"
          dangerouslySetInnerHTML={{ __html: mapIframe }}
        />
      ) : (
        <section className="w-full h-[45vh] max-h-[500px] bg-surface-container-highest flex items-center justify-center">
          <p className="text-secondary text-sm tracking-widest uppercase">
            Harita kodu Sanity &gt; Site Ayarları &gt; İletişim Bilgileri alanından eklenebilir.
          </p>
        </section>
      )}
    </>
  );
}
