import { GridEffectHover } from "@/src/components/generics/GridEffectHover";
import { educations } from "@/src/constant/educations";
import { useTranslations } from "next-intl";

const Education: React.FC<{}> = () => {
  const t = useTranslations("education");

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
