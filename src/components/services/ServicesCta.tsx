import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ServicesCta({ data }: { data: any }) {
  const title = data?.ctaTitle || "Geleceği Birlikte İnşa Edelim";
  const description = data?.ctaDescription || "Hayalinizdeki projeyi teknik mükemmellik ve estetik vizyonla hayata geçirmek için profesyonel ekibimizle iletişime geçin.";
  const button1 = data?.ctaButtonText1 || "Teklif Alın";
  const link1 = data?.ctaButtonLink1 || "/iletisim";
  const button2 = data?.ctaButtonText2 || "Bize Ulaşın";
  const link2 = data?.ctaButtonLink2 || "/iletisim";

  return (
    <section className="relative py-24 md:py-32 px-4 md:px-12 overflow-hidden text-center min-h-[50vh] flex items-center bg-surface">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary-container"></div>
      </div>
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <FadeIn direction="up">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-headline font-extrabold tracking-tighter text-on-surface mb-8 md:mb-12">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-secondary mb-12 md:mb-16 max-w-2xl mx-auto px-4">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              href={link1}
              className="bg-primary text-on-primary px-8 md:px-16 py-5 md:py-6 font-bold uppercase text-xs md:text-sm tracking-[0.2em] transition-all hover:bg-on-primary-container active:scale-95 text-center inline-block"
            >
              {button1}
            </Link>
            <Link
              href={link2}
              className="border-[1.5px] border-outline text-on-surface px-8 md:px-16 py-5 md:py-6 font-bold uppercase text-xs md:text-sm tracking-[0.2em] transition-all hover:bg-surface-container-high active:scale-95 text-center inline-block"
            >
              {button2}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
