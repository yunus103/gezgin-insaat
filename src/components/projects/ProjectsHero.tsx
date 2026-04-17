import { SanityImage } from "@/components/ui/SanityImage";

export function ProjectsHero({ data }: { data: any }) {
  const title = data?.heroTitle || "Projelerimiz";

  return (
    <section className="relative h-[45vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-on-background/60 z-10" />

      {/* Background image */}
      {data?.heroImage ? (
        <SanityImage
          image={data.heroImage}
          fill
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
      ) : (
        <img
          alt="Architectural background"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxoLuq51GF4hXD0rJXTfVQ2nZ5UjSdHxPOSvxbnm3oF2k_5IL2pBI4N3kRLOr2ZlHoK9HRSwYAQzw5P-fOmxOrGq6kcoiVrS_uC5O4RyzDoTZgcirLrTlgBP9oiUKMJE1qvkbHqTNTpOvkMliSK2mE0SpSxXLnYmvpReTGac0RnKjL4S7T9rBj2I7lXEnlhQxXnzSd0VZ7elSveDVb8dBSHAyD_7J9SuVtn9IUTmFT6xjkQwrkEX2CxwclOleuY06YWJLmYvAR_P4"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold tracking-tighter uppercase mb-4 leading-none">
          {title}
        </h1>
        <div className="h-1 w-16 md:w-20 bg-primary-container mx-auto" />
      </div>
    </section>
  );
}
