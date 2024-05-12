"use client";

import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const Navbar: React.FC<{}> = () => {
  const router = useRouter();
  const path = useParams();
  const t = useTranslations("navbar");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = event.target.value;
    router.push(`/${locale}`);
  };

  return (
    <div className="fixed z-50 h-[65px] w-full bg-['#111'] backdrop-blur-sm lg:px-10">
      <div className="m-auto flex h-full w-full flex-row items-center justify-between px-[10px]">
        <a href="/" className="flex h-auto w-auto flex-row items-center gap-3">
          👨‍💻
          <h2 className="bg-gradient-to-r from-red-500 to-blue-400 bg-clip-text text-xl font-extrabold text-transparent">
            Johan.
          </h2>
        </a>

        <select
          name="language"
          id="language"
          defaultValue={path.locale}
          onChange={handleChange}
          className="bg-transparent text-white"
        >
          <option value="en">English 🇺🇸</option>
          <option value="fr">Français 🇫🇷</option>
        </select>

        <div className="flex flex-row gap-5">
          <div
            onClick={() => window.open("mailto:j.brazillier@gmail.com")}
            className="cursor-pointer rounded-xl bg-black bg-transparent px-2 text-white hover:bg-[#2E2E2E]"
          >
            {t("contact")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
