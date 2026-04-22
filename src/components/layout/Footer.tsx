import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiMailLine, RiPhoneLine, RiMapPinLine } from "react-icons/ri";
import { SanityImage } from "@/components/ui/SanityImage";

type NavItem = {
  label: string;
  href: string;
  openInNewTab?: boolean;
};

type SocialLink = {
  platform: string;
  url: string;
};

const socialIconMap: Record<string, React.ElementType> = {
  instagram: FaInstagram,
  facebook: FaFacebook,
  twitter: FaXTwitter,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
  tiktok: FaTiktok,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
};

function resolveHref(item: NavItem): string {
  return item.href || "#";
}

export function Footer({ settings, navigation }: { settings: any; navigation: any }) {
  const footerLinks: NavItem[] = navigation?.footerLinks || [];
  const socialLinks: SocialLink[] = (settings?.socialLinks || []).filter((s: SocialLink) => s.url);
  const contact = settings?.contactInfo;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-high text-on-surface py-16">
      <div className="w-full px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* Logo & Brand */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group mb-4">
              {settings?.logo ? (() => {
                // Sanity asset'inden gerçek boyutları oku
                const assetMeta = settings.logo?.asset?.metadata?.dimensions;
                const logoW = assetMeta?.width ?? 400;
                const logoH = assetMeta?.height ?? 200;
                return (
                  <div style={{ maxHeight: 52, overflow: "visible" }}>
                    <SanityImage
                      image={settings.logo}
                      width={logoW}
                      height={logoH}
                      fit="max"
                      className="w-auto h-auto object-contain drop-shadow-[0_0_8px_rgba(0,0,0,0.25)] transition-opacity duration-300 group-hover:opacity-80"
                      priority
                      noBlur
                    />
                  </div>
                );
              })() : (
                <span className="text-2xl font-headline font-black uppercase tracking-tighter monolithic-text">
                  {settings?.siteName}
                </span>
              )}
            </Link>
            
            {/* Social Media */}
            {socialLinks.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, i) => {
                  const Icon = socialIconMap[social.platform];
                  if (!Icon) return null;
                  return (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.platform}
                      className="w-8 h-8 flex items-center justify-center bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-highest transition-all duration-300 border border-outline-variant/30"
                    >
                      <Icon size={14} />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-headline text-[10px] font-bold uppercase tracking-[0.3em] text-primary">İletişim</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contact?.address && (
                <div className="col-span-1 md:col-span-2 flex gap-3 group">
                  <RiMapPinLine size={18} className="text-primary shrink-0 mt-0.5" />
                  <p className="text-sm font-medium leading-relaxed text-on-surface-variant">{contact.address}</p>
                </div>
              )}
              
              {contact?.phone && (
                <a href={`tel:${contact.phone}`} className="flex gap-3 group items-center">
                  <RiPhoneLine size={18} className="text-primary shrink-0" />
                  <p className="text-sm font-medium text-on-surface-variant group-hover:text-primary transition-colors">{contact.phone}</p>
                </a>
              )}
              
              {contact?.email && (
                <a href={`mailto:${contact.email}`} className="flex gap-3 group items-center">
                  <RiMailLine size={18} className="text-primary shrink-0" />
                  <p className="text-sm font-medium text-on-surface-variant group-hover:text-primary transition-colors">{contact.email}</p>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.length > 0 && (
            <div className="lg:col-span-3 space-y-6">
              <h3 className="font-headline text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Hızlı Menü</h3>
              <nav className="flex flex-col gap-2">
                {footerLinks.map((item, i) => (
                  <Link
                    key={i}
                    href={resolveHref(item)}
                    target={item.openInNewTab ? "_blank" : undefined}
                    rel={item.openInNewTab ? "noopener noreferrer" : undefined}
                    className="text-sm font-medium text-on-surface-variant hover:text-primary transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[9px] font-headline uppercase tracking-widest text-on-surface-variant/60">
            © {currentYear} {settings?.siteName}. TÜM HAKLARI SAKLIDIR.
          </div>
          
          <a 
            href="https://sedminadijital.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[9px] font-headline uppercase tracking-widest text-on-surface-variant/60 hover:text-primary transition-colors"
          >
            TASARIM VE GELİŞTİRME: SEDMİNA DİJİTAL
          </a>
        </div>
      </div>
    </footer>
  );
}
