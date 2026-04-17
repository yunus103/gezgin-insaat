"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import * as RiIcons from "react-icons/ri";

interface AboutQualityProps {
  data: {
    qualityPreTitle?: string;
    qualityTitle?: string;
    qualityDescription?: string;
    qualityCertificates?: { icon: string; title: string; subtitle: string }[];
    qualityStats?: { value: string; label: string }[];
  };
}

export function AboutQuality({ data }: AboutQualityProps) {
  const preTitle = data?.qualityPreTitle || "BELGELİ MÜKEMMELİYET";
  const title = data?.qualityTitle || "Standartların Ötesinde, \nSertifikalı Güven.";
  const description = data?.qualityDescription || "İnşa ettiğimiz her yapıda uluslararası kalite yönetim sistemlerini uyguluyoruz. Süreçlerimizin her aşaması bağımsız kuruluşlarca denetlenmekte ve onaylanmaktadır. Bizim için kalite bir hedef değil, her sabah yeniden başladığımız bir yolculuktur.";

  const certificates = data?.qualityCertificates?.length ? data.qualityCertificates : [
    { icon: "RiShieldCheckLine", title: "ISO 9001:2015", subtitle: "Quality Management" },
    { icon: "RiLeafLine", title: "ISO 14001", subtitle: "Environmental Care" },
    { icon: "RiHeartPulseLine", title: "ISO 45001", subtitle: "Health & Safety" },
    { icon: "RiMedalLine", title: "LEED Gold", subtitle: "Sustainable Building" }
  ];

  const stats = data?.qualityStats?.length ? data.qualityStats : [
    { value: "120+", label: "Denetlenen Süreç" },
    { value: "0", label: "İş Güvenliği Kusuru" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-12 bg-surface-container-highest min-h-[calc(100vh-5rem)] flex items-center">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        <div className="order-2 lg:order-1 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert, i) => {
              // Extract icon dynamically from react-icons/ri
              // @ts-ignore
              const Icon = RiIcons[cert.icon] || RiIcons.RiShieldCheckLine;
              
              return (
                <FadeIn key={i} direction="up" delay={i * 0.1}>
                  <div className="bg-white p-8 md:p-12 aspect-square flex flex-col justify-center items-center text-center shadow-sm border border-outline-variant/20 h-full">
                    <Icon className="text-5xl text-primary mb-4" />
                    <h4 className="font-headline font-bold text-lg mb-2">{cert.title}</h4>
                    <p className="text-xs text-secondary tracking-widest uppercase">{cert.subtitle}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <FadeIn direction="left">
            <h2 className="text-sm font-label font-bold uppercase tracking-[0.3em] text-primary mb-8">{preTitle}</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter text-on-background mb-8 whitespace-pre-line">
              {title}
            </h3>
            <p className="text-lg text-secondary leading-relaxed mb-12 font-light">
              {description}
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <span className="block text-4xl font-headline font-bold text-on-background mb-2">{stat.value}</span>
                  <span className="text-xs font-label uppercase tracking-widest text-secondary">{stat.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
