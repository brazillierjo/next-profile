import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h1 className="pt-[35px] text-center text-6xl font-semibold   text-white">EXPERIENCE</h1>
      <p className=" text-1xl bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text  pb-5 text-center font-light tracking-[0.5em]  text-transparent ">
        EXPLORE NOW
      </p>
      <div className=" 2xl container mx-auto ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">WebHR /</span> Software Engineer
          </p>
          <p className="text-gray-300">MAY 2022 - PRESENT, HYDERABAD</p>
        </div>
        <p className="pt-5 text-gray-300">
          Currently, I am working on WebHR Mobile Application, WebHR is a Cloud based Social HR Software for SMEs by
          Verge Systems Inc. WebHR is currently used in over 160 countries world wide by thousands of organizations to
          manage HR, As a React.js developer with 1.5 year of experience, I have a strong foundation in creating dynamic
          and responsive mobile and web applications.
          <br />
          <br />
          My experience with React Native has allowed me to develop cross-platform mobile applications that run
          seamlessly on both iOS and Android platforms. Additionally, my proficiency in React.js has equipped me with
          the skills to create fast, scalable, and dynamic web pages with excellent user experiences. I have a deep
          understanding of component-based architecture and state management, and I am well-versed in the latest web
          development trends and technologies.
        </p>
        <div className="flex flex-col sm:flex-row ">
          <div className="mr-2  mt-5 w-max cursor-pointer  rounded-3xl  border border-[#2E2E2E] bg-transparent  px-5 py-2 text-white">
            React Native
          </div>
          <div className="mr-2  mt-5  w-max cursor-pointer  rounded-3xl  border border-[#2E2E2E] bg-transparent  px-5 py-2 text-white">
            React
          </div>
          <div className="mr-2  mt-5  w-max cursor-pointer  rounded-3xl  border border-[#2E2E2E] bg-transparent  px-5 py-2 text-white">
            JavaScript
          </div>
          <div className="mt-5  w-max cursor-pointer  rounded-3xl  border border-[#2E2E2E] bg-transparent  px-5 py-2 text-white">
            Typescript
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
