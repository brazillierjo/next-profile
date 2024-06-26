import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Social_Icons } from "@/src/constant/socialLinks";
import { useTranslations } from "next-intl";

const Footer: React.FC<{}> = () => {
  const t = useTranslations("footer");

  return (
    <div className=" 2xl container mx-auto pb-8 pt-[50px] ">
      <div className="flex justify-center pb-10 ">
        {Social_Icons.map((social) => {
          return (
            <Link href={social.link} rel="noopener noreferrer" target="_blank" key={social.alt} className="z-[1]">
              <Image src={social.image} height={30} width={30} className="mx-5" alt={social.alt} />
            </Link>
          );
        })}
      </div>

      <p className="text-center text-sm text-gray-300">{t("creation")}</p>
      <p className="text-center text-sm text-gray-300">{t("copyright")}</p>
    </div>
  );
};

export default Footer;
