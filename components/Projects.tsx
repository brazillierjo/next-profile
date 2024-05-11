import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h1 className="pt-[35px] text-center text-6xl font-semibold text-white">PROJECTS</h1>
      <p className=" text-1xl bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text  pb-5 text-center font-light tracking-[0.5em]  text-transparent ">
        EXPLORE NOW
      </p>
      <div className=" 2xl container mx-auto  ">
        <div className="mt-7 flex flex-col  md:flex-row">
          <Link href="https://web.hr/" rel="noopener noreferrer" target="_blank" className="z-[1]">
            <div className="mb-5 flex flex-row">
              <Image src="/FirstProject.png" height={150} width={150} alt="WebHR Project" />
              <div className="p-3">
                <p className="text-xl font-semibold text-white">WebHR</p>
                <p className="text-[10px] text-gray-500">
                  Designed a modern UI website comprising more than 50 screens, along with the integration of a blog
                  using Next.js.
                </p>
              </div>
            </div>
          </Link>
          <Link href="https://hireside.com/" rel="noopener noreferrer" target="_blank" className="z-[1]">
            <div className="mb-5 flex flex-row">
              <Image src="/SecondProject.png" height={150} width={150} alt="HireSide" />
              <div className="p-3">
                <p className="text-xl font-semibold text-white">HireSide</p>
                <p className="text-[10px] text-gray-500">
                  Developed a web application on Next.js that allows users to apply for jobs, create job posts, and
                  manage their company profiles.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row ">
          <Link href="https://www.vergesystems.com/" rel="noopener noreferrer" target="_blank" className="z-[1]">
            <div className="mb-5 flex flex-row">
              <Image src="/ThirdProject.png" height={150} width={150} alt="VergeSystems" />
              <div className=" p-3 ">
                <p className="text-xl font-semibold text-white">Verge Systems</p>
                <p className="text-[10px] text-gray-500">Developed the Verge Systems website using React.js.</p>
              </div>
            </div>
          </Link>
          <Link href="http://44.201.47.75/" rel="noopener noreferrer" target="_blank" className="z-[1]">
            <div className="mb-5 flex flex-row">
              <Image src="/FourProject.png" height={150} width={150} alt="Payoasis" />
              <div className="p-3 ">
                <p className="text-xl font-semibold text-white">Payoasis</p>
                <p className="text-[10px] text-gray-500">
                  Designed the modern UI for a banking website utilizing Gatsby.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
