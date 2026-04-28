import { Metadata } from "next";
import { draftMode } from "next/headers";
import { getClient } from "@/sanity/lib/client";
import { homePageQuery } from "@/sanity/lib/queries";
import { buildMetadata } from "@/lib/seo";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeAbout } from "@/components/home/HomeAbout";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeWhyUs } from "@/components/home/HomeWhyUs";
import { HomeProjects } from "@/components/home/HomeProjects";
import { HomeCta } from "@/components/home/HomeCta";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getClient().fetch(homePageQuery, {}, { next: { tags: ["home"] } });
  return buildMetadata({
    canonicalPath: "/",
    pageSeo: data?.seo,
  });
}

export default async function HomePage() {
  const isDraft = (await draftMode()).isEnabled;
  const data = await getClient(isDraft).fetch(
    homePageQuery,
    {},
    { next: { tags: ["home"] } }
  );

  return (
    <div id="home-page">
      <HeroSection data={data} />
      <HomeAbout data={data} />
      <HomeServices data={data} />
      <HomeWhyUs data={data} />
      <HomeProjects data={data} />
      <HomeCta data={data} />
    </div>
  );
}
