import { client } from "@/../tina/__generated__/client";
import { Button } from "@/components/Button";
import { Metadata } from "next";
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
    },
  );

  return (
    <div className="mx-20 flex max-w-4xl flex-col gap-8 pt-36 font-vazir odd:text-left sm:mx-auto sm:w-4/5 ">
      <h2 className="mx-10 my-4 text-right text-4xl underline underline-offset-[12px]">
        :پروژه‌های من
      </h2>
      {projects?.map((project) => {
        if (!project) return;

        return (
          <div className="group flex w-full flex-col items-center justify-between gap-x-4 overflow-hidden border bg-veryLightGray transition-shadow duration-300 hover:shadow-lg sm:flex-row sm:even:flex-row-reverse">
            <div
              key={project.id}
              className="flex flex-col items-center sm:flex-row sm:gap-4 sm:group-even:flex-row-reverse"
            >
              {project.image && (
                <Image
                  width={240}
                  height={80}
                  alt={project.company}
                  src={project.image}
                />
              )}
              <div className="flex flex-col pb-4 text-center sm:py-4 sm:text-left sm:group-even:text-right">
                <h4 className="py-4 text-3xl">{project.company}</h4>
                <p className="pb-4">{project.description}</p>
              </div>
            </div>
            <div className="mb-8 w-24 text-center sm:m-0 sm:mx-10">
              <a target="_blank" href={project.link || ""}>
                <Button className="">برو</Button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
