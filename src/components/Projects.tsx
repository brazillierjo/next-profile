"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { PinCard } from "@/src/components/generics/PinCard";
import { enProjects, frProjects, IProject } from "@/src/constant/projects";
import { useTranslations } from "next-intl";

const Projects: React.FC<{}> = () => {
  const [projects, setProjects] = useState<null | IProject[]>(null);

  const t = useTranslations("projects");
  const path = useParams();

  useEffect(() => {
    if (path.locale === "en") setProjects(enProjects);
    if (path.locale === "fr") setProjects(frProjects);
  }, [path.locale]);

  if (projects === null) return null;

  return (
    <section id="projects" className="text-center">
      <h1 className="mb-4 pt-[35px] text-center text-6xl font-semibold text-white">{t("title")}</h1>

      <p className="text-1xl bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text text-xl font-bold uppercase tracking-[0.5em] text-transparent">
        {t("subTitle")}
      </p>

      <div className="mx-auto mt-8 grid w-full grid-cols-1 items-center justify-center gap-y-16 pt-5 lg:w-3/4 lg:grid-cols-2">
        {projects.map((project) => {
          return (
            <PinCard key={project.title} href={project.url} title={project.url ?? "No link provided"}>
              <div className="flex h-[20rem] w-[22rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ">
                <h3 className="max-w-xs pb-2 text-base  font-bold text-slate-100">{project.title}</h3>

                <div className="text-xs font-normal">
                  <span className="text-slate-300 ">{project.description}</span>
                </div>

                <div className="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="h-full rounded object-cover"
                    height={300}
                    width={300}
                  />
                </div>
              </div>
            </PinCard>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
