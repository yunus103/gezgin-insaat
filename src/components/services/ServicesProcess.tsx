import { FadeIn } from "@/components/ui/FadeIn";

export function ServicesProcess({ data }: { data: any }) {
  const title = data?.processTitle || "İnşaat \nFelsefemiz";
  const highlightedWord = data?.processHighlightedWord || "Felsefemiz";
  const description = data?.processDescription || "Her yapının bir ruhu olduğuna inanıyoruz. Sürecimiz, bu ruhu en sağlam formda gerçeğe dönüştürmek üzerine kuruludur.";
  const processes = data?.processes?.length ? data.processes : [
    { title: "Kavramsal Tasarım", description: "Vizyonun ilk çizgilerle buluştuğu, estetik ve işlevselliğin dengelendiği aşama." },
    { title: "Teknik Analiz", description: "Mühendislik hesaplamaları ve zemin etütleri ile yapının sarsılmaz temelleri atılır." },
    { title: "Hassas Uygulama", description: "Saha yönetiminde milimetrik hassasiyetle ilerleyen, disiplinli inşa süreci." },
    { title: "Teslim & Ötesi", description: "Anahtar tesliminden sonra da süregelen kurumsal garanti ve destek." }
  ];

  return (
    <section className="py-16 md:py-24 bg-surface-container-low px-4 md:px-12 min-h-[50vh] flex items-center">
      <div className="max-w-[1920px] mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tighter text-on-surface leading-none whitespace-pre-line">
              {title}
            </h2>
          </FadeIn>
          <FadeIn direction="left" delay={0.2} className="md:w-1/2">
            <p className="text-secondary max-w-md font-medium text-base md:text-lg leading-snug">
              {description}
            </p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-outline-variant/30">
          {processes.map((proc: any, i: number) => {
            const isDarker = i % 2 !== 0;
            return (
              <FadeIn 
                key={i} 
                direction="up" 
                delay={i * 0.1}
                className={`p-8 md:p-12 border-b md:border-b-0 md:border-r border-outline-variant/30 flex flex-col justify-between min-h-[300px] ${isDarker ? 'bg-surface-container' : ''}`}
              >
                <span className="text-primary font-extrabold text-5xl">0{i + 1}</span>
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">{proc.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{proc.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
