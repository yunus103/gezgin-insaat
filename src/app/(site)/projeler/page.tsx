import { client } from "@/sanity/lib/client";
import { projectsPageQuery, projectListQuery } from "@/sanity/lib/queries";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { ProjectsStats } from "@/components/projects/ProjectsStats";
import { ProjectsCta } from "@/components/projects/ProjectsCta";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const data = await client.fetch(projectsPageQuery, {}, { next: { tags: ["projectsPage"] } });
  return buildMetadata(data?.seo, "Projelerimiz | Gezgin İnşaat");
}

export default async function ProjectsPage() {
  const [data, projects] = await Promise.all([
    client.fetch(projectsPageQuery, {}, { next: { tags: ["projectsPage"] } }),
    client.fetch(projectListQuery, {}, { next: { tags: ["project"] } }),
  ]);

  return (
    <>
      <ProjectsHero data={data} />
      <ProjectsGrid data={data} projects={projects} />
      <ProjectsStats data={data} />
      <ProjectsCta data={data} />
    </>
  );
}
