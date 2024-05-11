import { educations } from "@/constant/educations";
import { GridEffectHover } from "@/components/generics/GridEffectHover";

const Education: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h1 className="pt-[35px] text-center text-6xl font-semibold text-white">EDUCATION</h1>

      <p className="text-1xl bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text text-center text-xl font-bold uppercase tracking-[0.5em] text-transparent">
        WHERE I HAVE ENROLLED
      </p>

      <div className="mx-auto w-full items-center justify-center lg:w-3/4">
        <GridEffectHover items={educations} />
      </div>
    </section>
  );
};

export default Education;
