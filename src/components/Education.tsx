"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { GridEffectHover } from "@/src/components/generics/GridEffectHover";
import { enEducations, frEducations, IEducation } from "@/src/constant/educations";
import { useTranslations } from "next-intl";

const Education: React.FC<{}> = () => {
  const [educations, setEducations] = useState<null | IEducation[]>(null);

  const t = useTranslations("education");
  const path = useParams();

  useEffect(() => {
    if (path.locale === "en") setEducations(enEducations);
    if (path.locale === "fr") setEducations(frEducations);
  }, [path.locale]);

  if (educations === null) return null;

  return (
    <section id="experience">
      <h1 className="pt-[35px] text-center text-6xl font-semibold text-white">{t("title")}</h1>

      <p className="text-1xl bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text text-center text-xl font-bold uppercase tracking-[0.5em] text-transparent">
        {t("subTitle")}
      </p>

      <div className="mx-auto w-full items-center justify-center lg:w-3/4">
        <GridEffectHover items={educations} />
      </div>
    </section>
  );
};

export default Education;
