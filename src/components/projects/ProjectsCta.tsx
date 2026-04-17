import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export function ProjectsCta({ data }: { data: any }) {
  const title = data?.ctaTitle || "Vizyonunuzu İnşa Edelim";
  const btn1 = data?.ctaButtonText1 || "Projelerimizi Keşfedin";
  const link1 = data?.ctaButtonLink1 || "/projeler";
  const btn2 = data?.ctaButtonText2 || "Bizimle Çalışın";
  const link2 = data?.ctaButtonLink2 || "/iletisim";

  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 overflow-hidden bg-on-background min-h-[40vh] flex items-center">
      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        <FadeIn direction="up">
          <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-headline font-extrabold tracking-tighter uppercase mb-10 md:mb-12 leading-none">
            {title}
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              href={link1}
              className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold px-8 md:px-12 py-4 md:py-5 tracking-widest uppercase text-xs md:text-sm hover:opacity-90 transition-all active:scale-95 text-center inline-block"
            >
              {btn1}
            </Link>
            <Link
              href={link2}
              className="bg-transparent text-white border border-outline-variant/30 font-bold px-8 md:px-12 py-4 md:py-5 tracking-widest uppercase text-xs md:text-sm hover:bg-white hover:text-on-background transition-all active:scale-95 text-center inline-block"
            >
              {btn2}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
