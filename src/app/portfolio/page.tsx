import Link from "next/link";
import { Metadata } from "next";
import { client } from "@/../tina/__generated__/client";
import Image from "next/image";

export const metadata: Metadata = {
  title: "طاهره محزون",
  description: "نویسنده محتوا",
};

export default async function Portfolio() {
  const projectResponse = await client.queries.projectConnection();
  const projects = projectResponse.data.projectConnection.edges?.map(
    (project) => {
      return project?.node;
    }
  );

  return (
    <div className="flex items-center justify-center gap-8 pt-36 font-vazir">
      {projects?.map((project) => {
        if (!project) return;

        return (
          <div
            key={project.id}
            className="flex flex-col items-center justify-center "
          >
            {project.image && (
              <Image
                width={240}
                height={80}
                alt={project.company}
                src={project.image}
              />
            )}
            <h4 className="pt-4 text-3xl">{project.company}</h4>
            <p>{project.description}</p>
            <a
              className="mt-2 rounded-sm bg-blueGreen px-2 py-1 text-lightGray"
              target="_blank"
              href={project.link || ""}
            >
              برو
            </a>
          </div>
        );
      })}
    </div>
  );
}
