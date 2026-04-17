import { FadeIn } from "@/components/ui/FadeIn";
import { SanityImage } from "@/components/ui/SanityImage";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

interface HomeProjectsProps {
  data: {
    projectsTitle?: string;
    featuredProjects?: Array<{
      title: string;
      slug: { current: string };
      mainImage?: any;
    }>;
  };
}

export function HomeProjects({ data }: HomeProjectsProps) {
  const title = data?.projectsTitle || "Öne Çıkan Projeler";
  
  // If no projects from sanity, we show fallbacks, but ideally we show something from sanity.
  // For fallback UI:
  const projects = data?.featuredProjects?.length ? data.featuredProjects : [
    {
      title: "Sapphire Residence",
      slug: { current: "#" },
      fallbackImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ6sPhKbT2ZHcx8Bcd582RziBuQa-aDvWci5Ya9ELrDS3xOROGAVM3UqRJjBKMtpatPS324QFGKpQfxjB4Z6U1kl9GE6YHsQOk2XEsZugpJn7Rs7iozjiKBBCLpczpuwwa8IdNu3tcSqTddC6NLjD7Ww6yL_QRYx8doGGN4TnSxsGD0fGluLtfOi3s0kv-j3mA5Zq8LD4eFdtrQVujQGzJ0z1mAoZ9GDr9z-alqO5i5ESHbjFLAVe3R38wK5YtFeXjyPsC-sgBoP8",
      fallbackMeta: "Levent, İstanbul | Konut"
    },
    {
      title: "Metro Business Park",
      slug: { current: "#" },
      fallbackImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGw6wi0fIe2wDcNsYMovZCd9loVyS5Y3LpmW6QOqKvbEMkNrMF_ac2dFwWvEK1rD8wWsLvXEgd77XOVsIbFB_V9czV_EFM43_4yPKU_nzUIZ9O0_3Qqm6imcdPajE6axIeb90FmngddKv_0TsJXp1FPsYRk1Ie3xjeNXLqsfvfMxhVsCN9LZ6246WmEvqCCzxWGYd9wvEw5S5opgStzyUIzOWi2PCozprQpnuI23X3jngRQeeeahA7GlqkyOwodEepMpl5GUXqV7Y",
      fallbackMeta: "Maslak, İstanbul | Ofis"
    }
  ];

  return (
    <section className="py-32 bg-surface-container-highest" id="projects">
      <div className="max-w-[1920px] mx-auto px-4 md:px-12">
        <FadeIn direction="up">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-6xl font-black font-headline text-on-surface uppercase monolithic-text">
              {title}
            </h2>
            <div className="hidden md:flex gap-4">
              <Link href="/projeler" className="text-sm font-headline font-bold uppercase tracking-widest text-primary hover:text-primary-container transition-colors">
                Tümünü Gör
              </Link>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project: any, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.2}>
              <Link href={project.slug?.current === "#" ? "#" : `/projeler/${project.slug.current}`} className="group cursor-pointer block">
                <div className="relative overflow-hidden aspect-[16/9]">
                  {project.mainImage ? (
                    <SanityImage
                      image={project.mainImage}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <img 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      src={project.fallbackImg} 
                      alt={project.title} 
                    />
                  )}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="mt-8 flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black font-headline uppercase mb-2 text-on-surface">
                      {project.title}
                    </h3>
                    {project.fallbackMeta && (
                      <p className="text-on-surface-variant font-headline font-bold tracking-widest uppercase text-xs">
                        {project.fallbackMeta}
                      </p>
                    )}
                  </div>
                  <RiArrowRightLine className="text-4xl text-primary transform -rotate-45 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
