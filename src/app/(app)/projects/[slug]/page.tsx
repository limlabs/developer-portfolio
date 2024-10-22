import { Metadata, ResolvingMetadata } from "next"
import { notFound } from "next/navigation"

import { ProjectDetails } from "@/components/content/projectDetails/projectDetails"
import { Media } from "@/payload-types"
import { fetchProfile, fetchProject } from "@/utilities/api"
import { parsePreviewOptions } from "@/utilities/preview"

interface ProjectPageProps {
  params: {
    slug: string
  }
  searchParams: Record<string, string>
}

export async function generateMetadata(
  { params, searchParams }: ProjectPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const [project, previousTitle] = await Promise.all([
    fetchProject(params.slug, parsePreviewOptions(searchParams)),
    (await parent)?.title?.absolute,
  ])

  const images: string[] = []
  if (project?.meta?.image) {
    images.push((project.meta.image as Media)?.url ?? "")
  } else if (project?.featuredImage) {
    images.push((project.featuredImage as Media)?.url ?? "")
  }

  const title = project?.meta?.title || project?.title || previousTitle
  const description = project?.meta?.description || "Details on a portoflio project."

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images,
      type: "article",
      modifiedTime: project.updatedAt,
    },
  }
}

export default async function ProjectPage({ params, searchParams }: ProjectPageProps) {
  const [project, profile] = await Promise.all([
    fetchProject(params.slug, parsePreviewOptions(searchParams)),
    fetchProfile(),
  ])

  if (!project) {
    notFound()
  }

  return <ProjectDetails project={project} profile={profile} />
}
