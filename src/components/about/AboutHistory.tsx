import { FadeIn } from "@/components/ui/FadeIn";
import { SanityImage } from "@/components/ui/SanityImage";
import { RichText } from "@/components/ui/RichText";

interface AboutHistoryProps {
  data: {
    historyPreTitle?: string;
    historyTitle?: string;
    historyText?: any;
    historyImage1?: any;
    historyImage1Label?: string;
    historyImage1Sublabel?: string;
    historyImage2?: any;
    historyImage2Label?: string;
    historyImage2Sublabel?: string;
  };
}

export function AboutHistory({ data }: AboutHistoryProps) {
  const preTitle = data?.historyPreTitle || "MİRASIMIZ";
  const title = data?.historyTitle || "1990’dan Bugüne, \nHer Taşın Altında Bir Mükemmeliyet Hikayesi.";
  
  return (
    <section className="py-16 md:py-24 px-4 md:px-12 bg-surface max-w-[1920px] mx-auto min-h-[calc(100vh-5rem)] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <FadeIn direction="right">
            <h2 className="text-sm font-label font-bold uppercase tracking-[0.3em] text-secondary mb-12 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-secondary"></span> {preTitle}
            </h2>
            <p className="text-4xl font-headline font-bold tracking-tight text-on-surface leading-tight mb-8 whitespace-pre-line">
              {title}
            </p>
            <div className="space-y-6 text-secondary leading-relaxed text-lg font-light">
              {data?.historyText ? (
                <RichText value={data.historyText} />
              ) : (
                <>
                  <p>Gezgin İnşaat, 90'lı yılların başında mütevazı bir aile girişimi olarak temellerini attı. Kuruluşumuzdan itibaren, inşa ettiğimiz her yapının sadece bir beton yığını değil, yaşayan bir organizma olduğunun bilinciyle hareket ettik.</p>
                  <p>Otuz yılı aşkın süredir, Türkiye'nin değişen mimari siluetinde güvenilirliğin ve estetiğin simgesi haline gelerek, binlerce aileyi güvenli yuvalarına, yüzlerce markayı modern çalışma alanlarına kavuşturduk.</p>
                </>
              )}
            </div>
          </FadeIn>
        </div>
        
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FadeIn direction="up" delay={0.2} className="space-y-4 pt-0 sm:pt-12">
            {data?.historyImage1 ? (
              <SanityImage 
                image={data.historyImage1}
                width={600}
                height={600}
                className="w-full max-h-[35vh] sm:max-h-[40vh] object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
            ) : (
              <img 
                alt="Brutalist concrete architecture detail" 
                className="w-full max-h-[35vh] sm:max-h-[40vh] object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuKl70aqBJvJh8lQ1Kz-8Gp6dzpmS-6exYCuc8kZmkdYuIyjM2G5sdVyxyH5sBS7V_KWYaSuy3zZyt2vaD_6opt1C5M19uYrTIIJWfZLyrv2gkA7kcpF7WGYfDsXsK-wE8_mLwOgoqCvp0ylPPPthaSXxIzSEMLB5Uiev-r3O9fO699_21XxwiXTX5-Rkl7tGuNdmDj2asNPjciociAoJRne2zDug5ATH8Pu0AUGMR8TZ-VipH2tKlFC-Vz_H7qV0c0IHehpHBu4Q"
              />
            )}
            <div className="p-8 bg-surface-container">
              <h3 className="text-5xl font-headline font-black text-primary mb-2">
                {data?.historyImage1Label || "90s"}
              </h3>
              <p className="text-sm font-label uppercase tracking-widest text-secondary">
                {data?.historyImage1Sublabel || "Foundations & Legacy"}
              </p>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.4} className="space-y-4">
            <div className="p-8 bg-gradient-to-tr from-primary to-primary-container text-on-primary">
              <h3 className="text-5xl font-headline font-black mb-2">
                {data?.historyImage2Label || "2024"}
              </h3>
              <p className="text-sm font-label uppercase tracking-widest opacity-80">
                {data?.historyImage2Sublabel || "Global Standards"}
              </p>
            </div>
            {data?.historyImage2 ? (
              <SanityImage 
                image={data.historyImage2}
                width={600}
                height={800}
                className="w-full max-h-[40vh] sm:max-h-[50vh] object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
            ) : (
              <img 
                alt="Modern construction site" 
                className="w-full max-h-[40vh] sm:max-h-[50vh] object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbEzm6sl1q5GW8s5Z-QVyFwH6xkGcTORvAlmhg92SQt6fYACwgiKgS2zmpsQ5Fk5ZLmOwgMTHsRhNCuI9Fe8tM4N_bDXItTHqWt0jzBMJErVEQG0TFum2ZW8e0GbUgLN8RxkAZFm1Wd3Okxa7TUt60O4IxvlCvXoATnHTS_qvf2ey8I0gNhxblbcgDiSLNX3qUjYFSkpQcj5zJNg4w_TGVZFLvVgK-mr005l4hQOsDb9Y9W_FQHjcPpN6LlTN7EwsUJof-lByvPU0"
              />
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
