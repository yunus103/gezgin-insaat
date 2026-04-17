import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";

interface HomeCtaProps {
  data: {
    ctaTitle?: string;
    ctaSubtitle?: string;
    ctaButtonLabel?: string;
  };
}

export function HomeCta({ data }: HomeCtaProps) {
  const title = data?.ctaTitle || "Hayallerinizi Birlikte\nİnşa Edelim.";
  const subtitle = data?.ctaSubtitle || "Yeni projeniz için profesyonel bir çözüm ortağı mı arıyorsunuz? Teknik ekibimizle iletişime geçin ve süreci bugünden başlatalım.";
  const buttonLabel = data?.ctaButtonLabel || "Projeyi Başlat";

  return (
    <section className="py-32 bg-primary" id="contact">
      <div className="max-w-[1920px] mx-auto px-4 md:px-12 text-center text-on-primary">
        <FadeIn direction="up">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-headline uppercase mb-12 monolithic-text whitespace-pre-line">
            {title}
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-16 font-light opacity-90 leading-relaxed text-on-primary">
            {subtitle}
          </p>
          <Link href="/iletisim" className="inline-block bg-on-primary text-primary px-16 py-6 font-headline font-bold tracking-tighter uppercase text-xl hover:bg-surface-container transition-all">
            {buttonLabel}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
