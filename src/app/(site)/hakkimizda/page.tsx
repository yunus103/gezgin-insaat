import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { aboutPageQuery } from "@/sanity/lib/queries";
import { buildMetadata } from "@/lib/seo";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutHistory } from "@/components/about/AboutHistory";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutQuality } from "@/components/about/AboutQuality";
import { AboutSustainability } from "@/components/about/AboutSustainability";
import { AboutCta } from "@/components/about/AboutCta";

export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch(aboutPageQuery, {}, { next: { tags: ["about"] } });
  return buildMetadata({
    title: data?.pageTitle || "Hakkımızda",
    canonicalPath: "/hakkimizda",
    pageSeo: data?.seo,
  });
}

export default async function AboutPage() {
  const data = await client.fetch(aboutPageQuery, {}, { next: { tags: ["about"] } });

  return (
    <>
      <AboutHero data={data} />
      <AboutHistory data={data} />
      <AboutValues data={data} />
      <AboutQuality data={data} />
      <AboutSustainability data={data} />
      <AboutCta data={data} />
    </>
  );
}
