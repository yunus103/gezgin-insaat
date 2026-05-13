import { FadeIn } from "@/components/ui/FadeIn";
import { SanityImage } from "@/components/ui/SanityImage";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

export function ServicesList({ services }: { services: any[] }) {
  if (!services || services.length === 0) return null;

  return (
    <section className="bg-surface">
      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        const number = (index + 1).toString().padStart(2, "0");
        const preTitle = service?.preTitle || "DİNAMİK YAPI";
        const title = service?.title || "Hizmet Alanı";
        const description = service?.shortDescription || "İnşaat sektöründeki yenilikçi adımlarımızla geleceğin güvenilir yapılarını kuruyoruz.";
        const features = service?.features || ["Lüks Villalar", "Akıllı Rezidanslar", "Tarihi Restorasyon", "Karma Konut Siteleri"];

        return (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-2 border-b border-outline-variant/20 last:border-0">
            {/* CONTENT SIDE */}
            <div className={cn(
              "px-6 py-16 md:p-16 lg:p-24 flex flex-col justify-center bg-surface-container",
              !isEven && "lg:order-2 bg-surface-container-high"
            )}>
              <FadeIn direction={isEven ? "right" : "left"}>
                <div className="text-primary font-bold text-xs lg:text-sm tracking-[0.4em] mb-6 flex items-center gap-4">
                  <span className="text-3xl lg:text-4xl opacity-20">{number}</span> {preTitle}
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-5xl font-headline font-bold tracking-tight mb-6 lg:mb-8 text-on-surface">
                  {title}
                </h2>
                <p className="text-on-surface-variant text-base lg:text-lg leading-relaxed mb-8 lg:mb-10 max-w-xl">
                  {description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10 lg:mb-12">
                  {features.map((feat: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-secondary uppercase tracking-[0.15em] text-xs font-bold italic">
                      <span className="w-2 h-2 bg-primary"></span> {feat}
                    </li>
                  ))}
                </ul>
                <div className="h-4"></div> {/* Spacer instead of link */}
              </FadeIn>
            </div>

            {/* IMAGE SIDE */}
            <div className={cn(
              "relative w-full h-[50vw] min-h-[260px] lg:h-auto lg:min-h-[520px]",
              !isEven && "lg:order-1"
            )}>
              {service?.mainImage ? (
                <SanityImage
                  image={service.mainImage}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-full object-cover transition-all duration-700" 
                />
              ) : (
                <div className="w-full h-full bg-surface-dim transition-all duration-700"></div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}
