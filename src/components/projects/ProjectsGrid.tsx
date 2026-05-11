"use client";

import { useState } from "react";
import Link from "next/link";
import { SanityImage } from "@/components/ui/SanityImage";
import { RiMapPin2Line } from "react-icons/ri";
import { FadeIn } from "@/components/ui/FadeIn";



const STATUS_LABELS: Record<string, string> = {
  "tamamlandi": "Tamamlandı",
  "devam-ediyor": "Devam Ediyor",
};

interface ProjectsGridProps {
  data: any;
  projects: any[];
}

export function ProjectsGrid({ data, projects }: ProjectsGridProps) {
  const [activeStatus, setActiveStatus] = useState("all");

  const statusFilters = [
    { label: "Tümü", value: "all" },
    { label: "Tamamlanan Projeler", value: "tamamlandi" },
    { label: "Devam Eden Projeler", value: "devam-ediyor" },
  ];

  const filtered = projects.filter((p) =>
    activeStatus === "all" ? true : p.status === activeStatus
  );

  const archivePreTitle = data?.archivePreTitle || "Arşiv";
  const archiveTitle = data?.archiveTitle || "Mükemmeliyetin İzleri";

  return (
    <section className="bg-surface-container-low">
      {/* Filter bar */}
      <div className="py-8 md:py-10 px-4 md:px-8 border-b border-outline-variant/30">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-1">
            <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">{archivePreTitle}</span>
            <h2 className="text-2xl md:text-3xl font-headline font-bold text-on-background tracking-tighter">{archiveTitle}</h2>
          </div>
          <div className="flex flex-wrap gap-6 md:gap-10 font-label text-sm font-semibold tracking-widest uppercase">
            {statusFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveStatus(filter.value)}
                className={`pb-2 transition-colors ${
                  activeStatus === filter.value
                    ? "text-primary border-b-2 border-primary"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="py-12 md:py-20 px-4 md:px-8 bg-surface">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filtered.length > 0 ? (
            filtered.map((project, i) => {
              const statusLabel = STATUS_LABELS[project.status] || project.status || "Tamamlandı";
              return (
                <FadeIn key={project.slug?.current || i} direction="up" delay={i * 0.05}>
                  <Link
                    href={`/projeler/${project.slug?.current}`}
                    className="group block relative overflow-hidden"
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] w-full overflow-hidden bg-surface-container-highest relative">
                      {project.mainImage ? (
                        <SanityImage
                          image={project.mainImage}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-surface-dim" />
                      )}
                    </div>

                    {/* Card info */}
                    <div className="mt-5 flex justify-between items-start">
                      <div>
                        <h3 className="text-xl md:text-2xl font-headline font-extrabold tracking-tighter uppercase text-on-surface group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        {project.location && (
                          <p className="text-secondary text-sm mt-1 flex items-center gap-1.5">
                            <RiMapPin2Line size={14} className="shrink-0" />
                            {project.location}
                          </p>
                        )}
                      </div>
                      {project.status && (
                        <span className="shrink-0 ml-3 px-2.5 py-1 bg-surface-container text-primary text-[10px] font-bold tracking-widest uppercase border border-primary/20">
                          {statusLabel}
                        </span>
                      )}
                    </div>
                  </Link>
                </FadeIn>
              );
            })
          ) : (
            <div className="col-span-3 py-20 text-center text-secondary">
              Bu kategoride proje bulunamadı.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
