"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  return (
    <div className="z-[20] mt-[150px] flex flex-row items-center justify-center px-20 ">
      <div className="flex flex-col  justify-center  text-center">
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

        <div className="mt-6 flex h-auto w-auto max-w-[600px] cursor-pointer flex-col gap-6 text-7xl font-semibold tracking-tighter text-white">
          RINCON BRAZILLIER Johan
        </div>

        <div className="flex justify-center">
          <p className="max-w-[600px] text-2xl font-medium  tracking-tighter text-gray-300">
            I do Code &{" "}
            <span className="bg-gradient-to-r from-purple-500  to-orange-400 bg-clip-text font-semibold text-transparent">
              Chill
            </span>
          </p>
          <Image src="/popcorn.gif" height={50} width={50} alt="chill" />
        </div>

        <p className="text-md my-5 max-w-[600px] text-gray-200">
          Passionate Software Engineer with a focus on React Native development, dedicated to crafting elegant and
          user-friendly mobile applications.
        </p>

        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open("mailto:j.brazillier@gmail.com")}
            className="padding-20 z-[1] rounded-3xl border-[0.1px] border-white px-10 py-3 font-semibold text-white hover:border-transparent hover:bg-white hover:text-black "
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
