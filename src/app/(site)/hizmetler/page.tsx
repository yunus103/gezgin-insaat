import { client } from "@/sanity/lib/client";
import { servicesPageQuery, serviceListQuery } from "@/sanity/lib/queries";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesList } from "@/components/services/ServicesList";
import { ServicesProcess } from "@/components/services/ServicesProcess";
import { ServicesCta } from "@/components/services/ServicesCta";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const data = await client.fetch(servicesPageQuery, {}, { next: { tags: ["servicesPage"] } });
  return buildMetadata(data?.seo, `Hizmetlerimiz | Gezgin İnşaat`);
}

export default async function ServicesPage() {
  const [data, services] = await Promise.all([
    client.fetch(servicesPageQuery, {}, { next: { tags: ["servicesPage"] } }),
    client.fetch(serviceListQuery, {}, { next: { tags: ["service"] } })
  ]);

  return (
    <>
      <ServicesHero data={data} />
      <ServicesList services={services} />
      <ServicesProcess data={data} />
      <ServicesCta data={data} />
    </>
  );
}
