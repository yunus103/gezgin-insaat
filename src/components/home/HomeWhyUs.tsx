import { FadeIn } from "@/components/ui/FadeIn";
import { SanityImage } from "@/components/ui/SanityImage";

interface HomeWhyUsProps {
  data: {
    whyUsTitle?: string;
    whyUsImage?: any;
    whyUsFeatures?: { title: string; description: string }[];
  };
}

export function HomeWhyUs({ data }: HomeWhyUsProps) {
  const title = data?.whyUsTitle || "Neden\nGezgin İnşaat?";
  
  const features = data?.whyUsFeatures?.length ? data.whyUsFeatures : [
    { title: "Zamanında Teslimat", description: "Proje takvimine sadık kalarak, tüm süreçleri optimize ediyor ve söz verdiğimiz tarihte anahtar teslim yapıyoruz." },
    { title: "Şeffaf Bütçe", description: "Sürpriz maliyetlerden uzak, detaylı bütçelendirme ve şeffaf raporlama ile yatırımınızı koruyoruz." },
    { title: "ISO 9001 Kalite", description: "Uluslararası kalite standartlarında malzeme ve işçilikle, yapılarımızın her aşamasını denetliyoruz." },
    { title: "Uzman Kadro", description: "Sektörün en yetkin mühendis ve mimarlarından oluşan ekibimizle teknik mükemmelliği hedefliyoruz." }
  ];

  return (
    <section className="py-32 bg-surface">
      <div className="w-full px-4 md:px-12 flex flex-col md:flex-row gap-16 md:gap-24">
        <div className="md:w-1/3">
          <FadeIn direction="right">
            <h2 className="text-4xl md:text-5xl font-black font-headline text-on-surface mb-12 uppercase monolithic-text whitespace-pre-line">
              {title}
            </h2>
            {data?.whyUsImage ? (
              <SanityImage
                image={data.whyUsImage}
                width={800}
                height={800}
                className="w-full aspect-square object-cover grayscale"
              />
            ) : (
              <img 
                className="w-full aspect-square object-cover grayscale" 
                alt="Why Us fallback" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-Fk3_HXsGICYZyNizViE-Mh52U6eSP1hB4ED4hCUruSJkvDo-ga7lQLiK5vogt4efIO8LeiH7iCiJoVqCx7msjdVbDac-6fFgBwh9z10ce9t3mayAXK06p8T4gsiZFqAz5P3tN8RMozAGFA0Q4sPf79sNmFuBRFSk9lFXYYQ6Hc7Lj9cHB6JXEMYzFSkYE9IeOXVklMgwuNbbAMA06fNPh99l4DZlNrbOCrER1miUxCToQa-FtXmTOHo1y-R3zOKwOD4po7ihTFY" 
              />
            )}
          </FadeIn>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
          {features.map((feature, i) => {
            const numStr = (i + 1).toString().padStart(2, '0');
            return (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="flex gap-6 md:gap-8 border-b border-outline-variant pb-8 h-full">
                  <span className="text-4xl font-black font-headline text-primary-container leading-none">
                    {numStr}
                  </span>
                  <div>
                    <h4 className="text-xl font-black font-headline uppercase mb-3 text-on-surface">
                      {feature.title}
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
