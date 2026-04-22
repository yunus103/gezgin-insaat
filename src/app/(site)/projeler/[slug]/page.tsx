import { Metadata } from "next";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { getClient, client } from "@/sanity/lib/client";
import { projectBySlugQuery, projectListQuery } from "@/sanity/lib/queries";
import { buildMetadata } from "@/lib/seo";
import { RichText } from "@/components/ui/RichText";
import { SanityImage } from "@/components/ui/SanityImage";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { Lightbox } from "@/components/ui/Lightbox";
import { ArrowLeft } from "lucide-react";

const CATEGORY_LABELS: Record<string, string> = {
  konut: "Konut",
  villa: "Villa",
  ticari: "Ticari",
  ofis: "Ofis",
  endustriyel: "Endüstriyel",
  restorasyon: "Restorasyon",
  karma: "Karma",
  altyapi: "Altyapı",
  otel: "Otel",
  egitim: "Eğitim",
  saglik: "Sağlık",
};

const STATUS_LABELS: Record<string, string> = {
  "tamamlandi": "Tamamlandı",
  "devam-ediyor": "Devam Ediyor",
  "satista": "Satışta",
  "planlama": "Planlama",
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const projects = await client.fetch(projectListQuery, {}, { next: { tags: ["projects"] } });
  return (projects || []).map((p: any) => ({ slug: p.slug?.current }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getClient().fetch(projectBySlugQuery, { slug }, { next: { tags: ["projects"] } });
  if (!project) return {};
  return buildMetadata({
    title: project.title,
    canonicalPath: `/projeler/${slug}`,
    pageSeo: project.seo,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const isDraft = (await draftMode()).isEnabled;
  const project = await getClient(isDraft).fetch(
    projectBySlugQuery,
    { slug },
    { next: { tags: ["projects"] } }
  );

  if (!project) notFound();

  return (
    <article className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {project.mainImage ? (
            <SanityImage
              image={project.mainImage}
              fill
              sizes="100vw"
              quality={90}
              className="object-cover grayscale-[10%] brightness-50"
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-surface-container-highest"></div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full px-4 md:px-12" style={{ boxSizing: "border-box" }}>
          <FadeIn direction="up">
            <Link href="/projeler" className="inline-flex items-center text-on-primary/70 hover:text-on-primary transition-colors mb-8 font-headline text-sm uppercase tracking-widest">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Projelere Dön
            </Link>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {project.category && (
                <span className="bg-primary text-on-primary px-4 py-1.5 rounded-none font-headline text-xs uppercase tracking-widest">
                  {CATEGORY_LABELS[project.category] || project.category}
                </span>
              )}
              {project.status && (
                <span className="bg-white/10 text-on-primary border border-white/10 px-4 py-1.5 rounded-none font-headline text-xs uppercase tracking-widest">
                  {STATUS_LABELS[project.status] || project.status}
                </span>
              )}
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-headline text-on-primary leading-[1.1] uppercase mb-6 max-w-5xl">
              {project.title}
            </h1>
            
            {project.shortDescription && (
              <p className="text-xl md:text-2xl text-on-primary/80 font-light max-w-3xl leading-relaxed">
                {project.shortDescription}
              </p>
            )}
          </FadeIn>
        </div>
      </section>

      {/* Content & Metadata Section */}
      <section className="bg-surface-container-low py-20 md:py-32">
        <div className="w-full px-4 md:px-12" style={{ boxSizing: "border-box" }}>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Sidebar (Metadata) */}
            <div className="w-full lg:w-1/3 shrink-0">
              <FadeIn delay={0.1}>
                <div className="bg-surface-container p-8 md:p-12 sticky top-32">
                  <h3 className="font-headline text-2xl text-on-surface mb-8 uppercase tracking-tight">Proje Detayları</h3>
                  
                  <div className="flex flex-col gap-8">
                    {project.location && (
                      <div className="flex flex-col pl-4 border-l-2 border-primary">
                        <span className="text-xs font-headline uppercase tracking-widest text-on-surface-variant mb-1">Konum</span>
                        <span className="text-lg text-secondary">{project.location}</span>
                      </div>
                    )}
                    
                    {project.category && (
                      <div className="flex flex-col pl-4 border-l-2 border-primary">
                        <span className="text-xs font-headline uppercase tracking-widest text-on-surface-variant mb-1">Kategori</span>
                        <span className="text-lg text-secondary capitalize">{CATEGORY_LABELS[project.category] || project.category}</span>
                      </div>
                    )}

                    {project.status && (
                      <div className="flex flex-col pl-4 border-l-2 border-primary">
                        <span className="text-xs font-headline uppercase tracking-widest text-on-surface-variant mb-1">Durum</span>
                        <span className="text-lg text-secondary capitalize">{STATUS_LABELS[project.status] || project.status}</span>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            </div>
            
            {/* Main Content */}
            <div className="w-full lg:w-2/3 prose prose-headings:font-headline prose-headings:uppercase prose-headings:tracking-tight prose-a:text-primary max-w-none text-on-surface prose-p:text-on-surface prose-strong:text-on-surface prose-li:text-on-surface">
              <FadeIn delay={0.2}>
                {project.body ? (
                  <RichText value={project.body} />
                ) : (
                  <p>Bu proje için henüz detaylı içerik eklenmemiştir.</p>
                )}
              </FadeIn>
            </div>
            
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="bg-surface py-20 md:py-32">
          <div className="w-full px-4 md:px-12" style={{ boxSizing: "border-box" }}>
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-black font-headline text-on-surface leading-[1.1] uppercase mb-16 tracking-tight">
                Galeri
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Lightbox images={project.gallery} />
            </FadeIn>
          </div>
        </section>
      )}
    </article>
  );
}
