import { CardBody, CardContainer, CardItem } from "@/src/components/generics/CardEffect";
import { MovingBorderButton } from "@/src/components/generics/MovingBorder";
import { experiences } from "@/src/constant/experiences";
import { useTranslations } from "next-intl";

const Experience: React.FC<{}> = () => {
  const t = useTranslations("experiences");

  return (
    <section id="experience">
      <h1 className="pt-[35px] text-center text-6xl font-semibold text-white">{t("title")}</h1>

      <p className="text-1xl bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text text-center text-xl font-bold uppercase tracking-[0.5em] text-transparent">
        {t("subTitle")}
      </p>

      <div className="z-50 mx-auto mt-8 grid w-full grid-cols-1 items-center justify-center gap-y-10 lg:w-3/4 lg:grid-cols-2">
        {experiences.map((experience) => {
          return (
            <CardContainer>
              <CardBody className="group/card relative h-auto min-h-[200px] w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
                <div className="flex justify-between">
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                    {experience.title}
                  </CardItem>

                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                    {experience.years}
                  </CardItem>
                </div>

                <CardItem
                  as="p"
                  translateZ="60"
                  className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
                >
                  {experience.description}
                </CardItem>

                <div className="mt-6 flex flex-wrap items-center gap-y-1">
                  {experience.technologies &&
                    experience.technologies.map((tag) => {
                      return (
                        <MovingBorderButton key={tag} children={tag} className="bg-slate-800 px-4 py-1 font-bold" />
                      );
                    })}
                </div>
              </CardBody>
            </CardContainer>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
