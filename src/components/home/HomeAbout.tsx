import { FadeIn } from "@/components/ui/FadeIn";
import { SanityImage } from "@/components/ui/SanityImage";
import { RichText } from "@/components/ui/RichText";

interface HomeAboutProps {
  data: {
    aboutTitle?: string;
    aboutText?: any;
    aboutImage?: any;
    aboutExperienceYears?: string;
    aboutStats?: { value: string; label: string }[];
  };
}

export function HomeAbout({ data }: HomeAboutProps) {
  // Fallbacks
  const title = data?.aboutTitle || "Vizyonumuz,\nKalıcı Değerler\nYaratmak.";
  const experienceYears = data?.aboutExperienceYears || "25+";
  const stats = data?.aboutStats?.length ? data.aboutStats : [
    { value: "500+", label: "Teslim Edilen Konut" },
    { value: "120+", label: "Ticari Proje" }
  ];

  return (
    <section className="py-16 md:py-0 md:h-[calc(100vh-5rem)] min-h-[600px] flex items-center bg-surface" id="about">
      <div className="w-full px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        <FadeIn direction="right" duration={0.6} className="flex justify-center md:justify-start">
          <div className="relative w-full max-w-md lg:max-w-lg">
            {data?.aboutImage ? (
              <SanityImage
                image={data.aboutImage}
                width={800}
                height={1200}
                className="w-full aspect-[3.5/5] max-h-[75vh] object-cover grayscale shadow-2xl"
              />
            ) : (
              <img 
                className="w-full aspect-[3.5/5] max-h-[75vh] object-cover grayscale shadow-2xl" 
                alt="About fallback" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGwOlTIhGv3gS02yNnLWw1G6DZfO02U6HZRbKdiVqFQzdQlwAPi93E4wFqJ8JcQn7qqvxlk9sS_sLgyikRk_zdcLOYI0yyzfE4Y3VjMvRlvieKhI0ktINOW7uZDyFbNcGcJ9b28I4gE2X1tIoJqTBR-h9ncHvZzE6OJEQTmaLEyWig8aS-h9RglsmRAJpOb11DKSRjD4Zoh0YJfhRtoIUzfmQ7Rqukm62XvU0weOh9gDCKFKLnLbWSBVHM-EXnG19qxcOakB4ucdY" 
              />
            )}
            <div className="absolute -bottom-10 -right-6 md:-right-10 bg-primary p-6 md:p-10 text-on-primary shadow-2xl">
              <div className="text-4xl md:text-5xl font-black font-headline mb-2">{experienceYears}</div>
              <div className="font-headline font-bold tracking-widest uppercase text-xs">Yıllık Tecrübe</div>
            </div>
          </div>
        </FadeIn>
        
        <FadeIn direction="left" duration={0.6} delay={0.2}>
          <div>
            <h2 className="text-4xl md:text-5xl font-black font-headline text-on-surface mb-8 uppercase leading-tight monolithic-text whitespace-pre-line">
              {title}
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg font-light">
              {data?.aboutText ? (
                <RichText value={data.aboutText} />
              ) : (
                <>
                  <p>
                    Gezgin İnşaat olarak, kurulduğumuz günden bu yana sadece binalar değil, yaşam alanları ve güven inşa ediyoruz. Sektördeki çeyrek asırlık tecrübemizle, teknoloji ve sanatı aynı potada eritiyoruz.
                  </p>
                  <p>
                    Her projemizde "İnsan için Yapı" felsefesini temel alarak, çevresel sürdürülebilirliği ve mühendislik hassasiyetini en üst seviyede tutuyoruz. Bizim için her yeni temel, geleceğe atılmış sağlam bir imzadır.
                  </p>
                </>
              )}
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 pt-12 border-t border-outline-variant">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-black font-headline text-secondary mb-1">{stat.value}</div>
                  <div className="text-sm font-headline font-bold tracking-widest uppercase text-outline">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
