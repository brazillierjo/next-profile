import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="relative flex h-full flex-col items-center justify-center overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex max-w-[900px]  flex-col flex-wrap items-center   justify-around">
        <h1 className="text-6xl font-semibold text-white">ABOUT ME</h1>
        <p className=" text-1xl bg-gradient-to-r from-purple-700 to-orange-500  bg-clip-text pb-5 font-light tracking-[0.5em]  text-transparent">
          EXPLORE NOW
        </p>
        <p className="text-center text-gray-300 ">
          As a passionate software engineer, I thrive on the intricate dance between logic and creativity. Currently
          immersed in the dynamic world of WebHR, my expertise centers around React Native, where I seamlessly blend
          technology with innovation.
          <br />
          <br />
          With a fervor for crafting elegant solutions, I navigate the ever-evolving landscape of software development.
          My journey involves translating concepts into code, creating seamless user experiences, and constantly pushing
          the boundaries of what&#39;s possible
        </p>
      </div>
    </section>
  );
};

export default About;
