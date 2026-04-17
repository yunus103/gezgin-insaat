import { FadeIn } from "@/components/ui/FadeIn";
import { SanityImage } from "@/components/ui/SanityImage";

interface AboutHeroProps {
  data: {
    heroTitle?: string;
    heroImage?: any;
  };
}

export function AboutHero({ data }: AboutHeroProps) {
  const title = data?.heroTitle || "Hakkımızda";

  return (
    <section className="relative h-[45vh] min-h-[350px] md:min-h-[400px] w-full flex items-center overflow-hidden bg-surface-container-highest">
      {data?.heroImage ? (
        <SanityImage
          image={data.heroImage}
          fill
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-90"
          priority
        />
      ) : (
        <img 
          alt="Dramatic architectural shot" 
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-90" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwLbRLAROWde_hBfctNnY5NLBFdzlONDrcfzE10n417mfrcIpKoSQLrORj1s52fVn7SNHhXh9Onfvbicw3mmTh5Wj1m_evuwtqtKesV6G5BF9YpOLQa74xZNt5-rtNtBODEe8AzwXJHMBrVzPfvf9FCTpWzMWE0qxxnEk-bTVXpfx9ruWlMC8cW3Ikt3pHCQlyMctCoB7MV0S2c3ZOqhDQDoS-5myxV5ne2AlGaSSNZelUIaaL8_DEtv5CjKwFdS5zhp23B_QGmDg"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
      <div className="relative z-10 w-full px-4 md:px-12 pt-16 max-w-[1920px] mx-auto">
        <div className="max-w-4xl">
          <FadeIn direction="up">
            <span className="inline-block w-12 h-1 bg-primary mb-8"></span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-headline font-extrabold tracking-tighter leading-none text-primary mb-6 whitespace-pre-line">
              {title}
            </h1>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
