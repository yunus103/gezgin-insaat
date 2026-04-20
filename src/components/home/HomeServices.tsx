"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { AnimateGroup, fadeUpItem } from "@/components/ui/AnimateGroup";
import { motion } from "framer-motion";
import { RiBuilding3Line, RiBuilding4Line, RiToolsLine, RiCompasses2Line } from "react-icons/ri";

interface HomeServicesProps {
  data: {
    servicesTitle?: string;
    servicesSubtitle?: string;
  };
}

export function HomeServices({ data }: HomeServicesProps) {
  const title = data?.servicesTitle || "Hizmet Alanlarımız";
  const subtitle = data?.servicesSubtitle || "Endüstriyel standartların ötesinde, tam kapsamlı yapı çözümleri sunuyoruz.";

  const fallbackServices = [
    { icon: RiBuilding3Line, title: "Konut Projeleri", description: "Lüks rezidanslardan butik konutlara, modern yaşamın tüm ihtiyaçlarına cevap veren estetik ve konforlu yaşam alanları." },
    { icon: RiBuilding4Line, title: "Ticari Yapılar", description: "İş dünyasının dinamizmine uygun, prestijli ofis kompleksleri, alışveriş merkezleri ve endüstriyel tesisler." },
    { icon: RiToolsLine, title: "Altyapı & Zemin", description: "Zemin iyileştirme, derin temel sistemleri ve kapsamlı altyapı mühendisliği ile yapılarınızın güvenliğini teminat altına alıyoruz." },
    { icon: RiCompasses2Line, title: "Proje Yönetimi", description: "Planlamadan anahtar teslime, bütçe ve zaman yönetimini profesyonel kadromuzla titizlikle yürütüyoruz." }
  ];

  return (
    <section className="py-32 bg-surface-container-low" id="services">
      <div className="w-full px-4 md:px-12">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
            <h2 className="text-4xl md:text-6xl font-black font-headline text-on-surface uppercase monolithic-text">
              {title}
            </h2>
            <p className="max-w-md text-on-surface-variant font-light uppercase tracking-widest text-sm text-left md:text-right">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        <AnimateGroup 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[2px] bg-outline-variant" 
          stagger={0.1}
        >
          {fallbackServices.map((service, i) => (
            <motion.div key={i} variants={fadeUpItem} className="h-full">
              <div className="bg-surface p-8 md:p-12 hover:bg-surface-container-high transition-colors group h-full flex flex-col">
                <div className="text-primary mb-8 transition-transform group-hover:scale-110 duration-300 transform-origin-left">
                  <service.icon className="text-5xl" />
                </div>
                <h3 className="text-2xl font-black font-headline mb-4 uppercase text-on-surface">{service.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimateGroup>
      </div>
    </section>
  );
}
