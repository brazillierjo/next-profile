import Image from "next/image";

import { projects } from "@/constant/projects";
import { PinCard } from "@/components/generics/PinCard";

const Projects: React.FC<{}> = () => {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="text-center">
      <h1 className="pt-[35px] text-center text-6xl font-semibold text-white">PROJECTS</h1>

      <p className="text-1xl bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text text-xl font-bold uppercase tracking-[0.5em] text-transparent">
        WHAT I HAVE BUILT
      </p>

      <div className="mx-auto mt-8 grid w-full grid-cols-1 items-center justify-center gap-y-20 pt-5 lg:w-3/4 lg:grid-cols-3">
        {projects.map((project) => {
          return (
            <PinCard key={project.title} href={project.url} title={project.url ?? "No link provided"}>
              <div className="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ">
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
