import { FadeIn } from "@/components/ui/FadeIn";

interface AboutValuesProps {
  data: {
    values?: { title: string; description: string }[];
  };
}

export function AboutValues({ data }: AboutValuesProps) {
  const values = data?.values?.length ? data.values : [
    { title: "GÜVEN", description: "Her projemiz, nesiller boyu ayakta kalacak bir sözdür. Şeffaf yönetim ve dürüstlük prensibimizle sarsılmaz bağlar kuruyoruz." },
    { title: "KALİTE", description: "Dünya standartlarında malzeme kullanımı ve kusursuz işçilik, Gezgin İnşaat imzası olan her yapının temel taşıdır." },
    { title: "ESTETİK", description: "Fonksiyonelliği sanatla harmanlıyoruz. Yaşam alanlarını sadece bir ihtiyaç değil, bir ilham kaynağı olarak tasarlıyoruz." },
  ];

  return (
    <section className="py-16 md:py-24 bg-surface-container-low border-y border-outline-variant/10 min-h-[50vh] flex items-center">
      <div className="max-w-[1920px] mx-auto px-4 md:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((v, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.1}>
              <div className="flex flex-col border-l-2 border-primary pl-8 py-4 h-full">
                <h3 className="text-4xl md:text-5xl font-headline font-black tracking-tighter text-on-background mb-4 uppercase">
                  {v.title}
                </h3>
                <p className="text-secondary font-body leading-relaxed max-w-sm">
                  {v.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
