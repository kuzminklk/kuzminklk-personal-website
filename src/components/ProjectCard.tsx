

import Image, { type StaticImageData } from "next/image"
import Link from "next/link"


export type Project = {
  title: string
  description: string
  github: string
  deployment: string
  image: StaticImageData
  imageAlternative: string
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <section>
      <Link
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{project.title}</h3>
      </Link>

      <p>{project.description}</p>

      <Link
        href={project.deployment}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={project.image}
          placeholder="blur"
          alt={project.imageAlternative}
        />
      </Link>
    </section>
  )
}