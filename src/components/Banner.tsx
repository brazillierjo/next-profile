"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { AiOutlineDownload } from "react-icons/ai";

import { TypewriterEffectSmooth } from "./generics/TypeWriterEffect";

const Banner: React.FC<{}> = () => {
  const t = useTranslations("banner");

  const name = [
    {
      text: "RINCON",
      className: "text-white",
    },
    {
      text: "BRAZILLIER",
      className: "text-white",
    },
    {
      text: "Johan.",
      className: "text-red-400",
    },
  ];

  return (
    <div className="z-[20] mt-[150px] flex flex-row items-center justify-center px-20 ">
      <div className="flex flex-col justify-center text-center">
        <div className="flex justify-center ">
          <Image
            className="rounded-full"
            priority
            src="/avatar.png"
            height={300}
            width={300}
            alt="RINCON BRAZILLIER Johan"
          />
        </div>

        <div className="mt-6 text-3xl font-semibold lg:text-4xl">
          <TypewriterEffectSmooth words={name} />
        </div>

        <div className="flex justify-center">
          <p className="max-w-[600px] text-2xl font-medium  tracking-tighter text-gray-300">
            {t("catchPhrase")}{" "}
            <span className="bg-gradient-to-r from-red-500 to-blue-400 bg-clip-text font-semibold text-transparent">
              {"<Code />"}
            </span>
          </p>
        </div>

        <p className="text-md my-5 max-w-[600px] text-gray-200">
          {t("hello")} <br />
          {t("hello2")}
        </p>

        <a
          className="mb-8 flex items-center justify-center gap-2 text-white transition-all duration-300 hover:scale-110"
          href="./CV.pdf"
          download="CV-RINCON-BRAZILLIER-Johan.pdf"
        >
          {t("curriculumVitae")}
          <AiOutlineDownload className="h-6 w-6" />
        </a>

        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open("mailto:j.brazillier@gmail.com")}
            className="padding-20 z-[1] rounded-3xl border-[0.1px] border-white px-10 py-3 font-semibold text-white hover:border-transparent hover:bg-white hover:text-black "
          >
            {t("contactMe")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
