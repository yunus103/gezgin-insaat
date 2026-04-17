import { FadeIn } from "@/components/ui/FadeIn";

export function ServicesHero({ data }: { data: any }) {
  const title = data?.heroTitle || "Hizmetlerimiz";
  const subtitle = data?.heroSubtitle || "Mimari mükemmellik ve mühendislik disipliniyle, geleceğin silüetlerini bugünden şekillendiriyoruz.";
  const badge = data?.heroBadge || "Architectural Authority";

  return (
    <section className="relative bg-surface-container-highest py-12 md:py-16 px-4 md:px-12 min-h-[40vh] flex items-center overflow-hidden">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-end w-full">
        <div className="md:col-span-8">
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold tracking-tighter text-primary leading-none mb-6">
              {title}
            </h1>
            <p className="text-base md:text-lg text-secondary max-w-2xl font-light leading-relaxed border-l-4 border-primary pl-4 md:pl-6">
              {subtitle}
            </p>
          </FadeIn>
        </div>
        <div className="md:col-span-4 flex justify-start md:justify-end mt-4 md:mt-0">
          <FadeIn direction="up" delay={0.2}>
            <div className="text-xs md:text-sm tracking-[0.3em] uppercase font-bold text-secondary flex items-center gap-4">
              <span className="w-8 md:w-12 h-[1px] bg-primary"></span>
              {badge}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
