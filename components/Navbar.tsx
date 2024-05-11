"use client";

import React from "react";
import Image from "next/image";

const Navbar: React.FC<{}> = () => {
  return (
    <div className="fixed z-50 h-[65px] w-full bg-['#111'] px-10 backdrop-blur-sm">
      <div className="m-auto flex h-full w-full flex-row items-center justify-between px-[10px]">
        <a href="/" className="flex h-auto w-auto flex-row items-center">
          <Image src="/Logo.svg" alt="logo" width={100} height={100} sizes="100vw" className="h-auto w-full" />
        </a>

        <div className="flex flex-row gap-5">
          <div
            onClick={() => window.open("mailto:ibrahimmemon930@gmail.com")}
            className=" padding-10 z-[1]  cursor-pointer rounded-xl bg-black bg-transparent px-5  py-2  text-white hover:bg-[#2E2E2E]"
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
