import { FadeIn } from "@/components/ui/FadeIn";
import { SanityImage } from "@/components/ui/SanityImage";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

interface AboutSustainabilityProps {
  data: {
    sustainabilityPreTitle?: string;
    sustainabilityTitle?: string;
    sustainabilityDescription?: string;
    sustainabilityImage?: any;
  };
}

export function AboutSustainability({ data }: AboutSustainabilityProps) {
  const preTitle = data?.sustainabilityPreTitle || "SÜRDÜRÜLEBİLİRLİK";
  const title =
    data?.sustainabilityTitle || "Doğayla Uyumlu, Geleceğe Saygılı.";
  const description =
    data?.sustainabilityDescription ||
    "Bugünün binalarını inşa ederken yarının kaynaklarını tüketmiyoruz. Gezgin İnşaat, ekolojik ayak izini minimize eden, yenilenebilir enerji entegrasyonlu ve çevre dostu malzeme odaklı projeleriyle yarınlara nefes aldırıyor.";

  return (
    <section className="relative py-24 md:py-32 min-h-[50vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-stone-900">
        {data?.sustainabilityImage ? (
          <SanityImage
            image={data.sustainabilityImage}
            fill
            sizes="100vw"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
        ) : (
          <img
            alt="Sustainable green roof building"
            className="w-full h-full object-cover opacity-30 grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8s-veSTxb4hcu39YKnR-08_o-8sm8eiczc6OCXpqPyyyxRYb2DGgHsn_GceGN1SVPYnUAb_BrPRMNyoXXLK6-i4da9eRzeCrXRue3J7UJBNb2-_AAvJX9kON8UVTjB066Oh6oanQhCDmGsJh6EbWQGIq51cQVpgQ2dAqF74ueezX57Szd1b3rOVR3SstT2v3u-HV9XaCFvLVEpfTvzhOqc4pkS45kAr_NvEdus24B8HGT4jJhGFChXhtYF4S6sXxouUERX9mIpzI"
          />
        )}
      </div>
      <div className="relative z-10 max-w-[1920px] mx-auto px-4 md:px-12">
        <div className="max-w-2xl text-white">
          <FadeIn direction="up">
            <h2 className="text-primary-container font-label uppercase tracking-[0.4em] mb-8 text-sm">
              {preTitle}
            </h2>
            <h3 className="text-4xl md:text-6xl font-headline font-black tracking-tighter mb-10 leading-none">
              {title}
            </h3>
            <p className="text-lg md:text-xl text-stone-300 font-light leading-relaxed mb-12">
              {description}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
