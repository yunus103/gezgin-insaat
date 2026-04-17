import { FadeIn } from "@/components/ui/FadeIn";
import { SanityImage } from "@/components/ui/SanityImage";
import Link from "next/link";
import { resolveLink } from "@/lib/utils"; // Wait I should move resolveLink to utils or keep it here. Let's keep it in utils if it's there. Actually let's just make it a local function.

interface HeroSectionProps {
  data: {
    heroImage?: any;
    heroPreTitle?: string;
    heroTitle?: string;
    heroSubtitle?: string;
  };
}

export function HeroSection({ data }: HeroSectionProps) {
  // Fallback contents
  const preTitle = data?.heroPreTitle || "Mükemmeliyetin Mimarı";
  const title = data?.heroTitle || "Geleceği\nİnşa Ediyoruz";
  const subtitle = data?.heroSubtitle || "Modern mühendislik çözümleri ve estetik tasarım anlayışımızla, nesiller boyu ayakta kalacak anıtsal yapılar tasarlıyoruz.";

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {data?.heroImage ? (
          <SanityImage
            image={data.heroImage}
            fill
            sizes="100vw"
            quality={90}
            className="object-cover grayscale-[20%] brightness-75"
            priority
          />
        ) : (
          <img 
            className="w-full h-full object-cover grayscale-[20%] brightness-75" 
            alt="Hero fallback" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfHyrRsKW0k03P3GfucBpRLpxFyYAmu8mf95ABCVtPCItvhoXTqYv-YdkbQIb_3gE8mR5aF0haApYYYjVLIA6HBeK2mYemCLFyO6fT2qmJKNIQljOw2eSb7pDu_ChBwORPLJoYHdDL_IFORMKbJ_K9FGcRpxhOliWolRfczZoSNBRzkEFQNk99ahhQuxxiJQq8moWFwEFNR5rhiNqIRCBfhFs6aVacEPae5XBcODGWtrXzf35-fGre05wnk9XU_0evzHXP6rmYNYU" 
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
      </div>
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 md:px-12">
        <div className="max-w-3xl">
          <FadeIn direction="up" duration={0.6}>
            <span className="text-primary font-headline font-bold tracking-widest uppercase text-sm mb-6 block">
              {preTitle}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-headline text-primary leading-[0.9] monolithic-text uppercase mb-8 whitespace-pre-line">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-12 font-light leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/projeler" className="gold-gradient text-on-primary px-10 py-5 font-headline font-bold tracking-tighter uppercase text-center text-lg hover:brightness-110 transition-all">
                Projelerimizi Keşfedin
              </Link>
              <Link href="/iletisim" className="border border-outline-variant/30 text-on-surface px-10 py-5 font-headline font-bold tracking-tighter uppercase text-center text-lg hover:bg-surface-container transition-all">
                Bizimle Tanışın
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
