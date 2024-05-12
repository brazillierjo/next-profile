import { useTranslations } from "next-intl";

const About: React.FC<{}> = () => {
  const t = useTranslations("aboutMe");

  return (
    <section
      id="about"
      className="relative flex h-full flex-col items-center justify-center overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex max-w-[900px]  flex-col flex-wrap items-center   justify-around">
        <h1 className="mb-6 text-6xl font-semibold text-white">{t("title")}</h1>

        <div className="flex flex-col gap-6 text-center text-base text-white">
          <p className="text-1xl bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text text-xl font-bold uppercase tracking-[0.5em] text-transparent">
            {t("subTitle1")}
          </p>

          <p>{t("phrase1")}</p>
          <p>{t("phrase2")}</p>
          <p>{t("phrase3")}</p>
        </div>

        <div className="mt-8 flex flex-col gap-6 text-center text-base text-white">
          <p className="text-1xl bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text text-xl font-bold uppercase tracking-[0.5em] text-transparent">
            {t("subTitle2")}
          </p>

          <p>{t("phrase4")}</p>
          <p>{t("phrase5")}</p>
          <p>{t("phrase6")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
