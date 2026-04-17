import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";

interface AboutCtaProps {
  data: {
    ctaTitle?: string;
    ctaSubtitle?: string;
    ctaButtonLabel1?: string;
    ctaButtonLabel2?: string;
  };
}

export function AboutCta({ data }: AboutCtaProps) {
  const title = data?.ctaTitle || "Vizyonunuzu \nİnşa Edelim";
  const subtitle = data?.ctaSubtitle || "Birlikte yeni bir silüet yaratmaya hazır mısınız? Projeniz ne kadar büyük olursa olsun, tecrübemiz her zaman daha büyüktür.";
  const button1 = data?.ctaButtonLabel1 || "PROJELERİMİZİ İNCELEYİN";
  const button2 = data?.ctaButtonLabel2 || "BİZİMLE ÇALIŞIN";

  return (
    <section className="py-24 md:py-32 bg-surface min-h-[50vh] flex items-center">
      <div className="max-w-[1920px] mx-auto px-4 md:px-12 text-center w-full">
        <div className="max-w-3xl mx-auto space-y-12">
          <FadeIn direction="up">
            <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-on-background uppercase whitespace-pre-line">
              {title}
            </h2>
            <p className="text-xl text-secondary mt-8 mb-12 leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link href="/projeler" className="bg-primary text-on-primary px-8 md:px-16 py-6 font-headline font-extrabold tracking-widest text-sm md:text-lg hover:opacity-90 transition-all text-center">
                 {button1}
              </Link>
              <Link href="/iletisim" className="border border-outline px-8 md:px-16 py-6 font-headline font-extrabold tracking-widest text-sm md:text-lg hover:bg-surface-container transition-all text-center">
                 {button2}
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
