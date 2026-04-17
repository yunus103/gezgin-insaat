import { FadeIn } from "@/components/ui/FadeIn";

export function ProjectsStats({ data }: { data: any }) {
  const stats = data?.stats?.length
    ? data.stats
    : [
        { value: "500+", label: "Tamamlanan Proje" },
        { value: "1.2M", label: "Metrekare İnşaat" },
        { value: "25+", label: "Yıllık Deneyim" },
      ];

  return (
    <section className="bg-surface-container-highest py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
        {stats.map((stat: any, i: number) => (
          <FadeIn key={i} direction="up" delay={i * 0.1}>
            <div className="border-l-2 border-primary pl-6 md:pl-8">
              <div className="text-5xl md:text-6xl font-headline font-bold text-secondary tracking-tighter">
                {stat.value}
              </div>
              <div className="text-xs font-bold tracking-[0.2em] uppercase mt-2 text-on-surface-variant">
                {stat.label}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
