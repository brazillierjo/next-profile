const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="relative flex h-full flex-col items-center justify-center overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex max-w-[900px]  flex-col flex-wrap items-center   justify-around">
        <h1 className="mb-6 text-6xl font-semibold text-white">ABOUT ME</h1>

        <div className="flex flex-col gap-6 text-center text-base text-white">
          <p className="text-1xl bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text text-xl font-bold uppercase tracking-[0.5em] text-transparent">
            before coding
          </p>

          <p>
            🧘‍♂️ As a Web Developer since 2020, I thoroughly enjoy working with React & NextJs in an Agile environment,
            adhering to clean code principles, and implementing CI/CD pipelines. I take pleasure in transforming mockups
            of various styles into dynamic and interactive websites to enhance the user experience.
          </p>

          <p>
            📚 I initially stopped studying after completing a Technological Baccalaureate. From odd jobs to odd jobs, I
            quickly realized that this context would not be enough for me. So, at the age of 21, I decided to resume my
            studies and pursue a degree in e-commerce.
          </p>

          <p>
            🏋️ These studies allowed me to work as an SEO specialist for 6 years. This experience taught me about the
            functioning of the professional world, teamwork, the weight of responsibilities, as well as managing a back
            office and search engine optimization.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-6 text-center text-base text-white">
          <p className="text-1xl bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text text-xl font-bold uppercase tracking-[0.5em] text-transparent">
            As a Web Developer
          </p>

          <p>
            🍀 As an SEO specialist, working closely with developers sparked my interest in this highly technical field.
            Therefore, I enrolled in a 6-month bootcamp training program to acquire the fundamentals of web programming
            and coding. Following that, I continued my learning journey through an apprenticeship program, pursuing a
            degree in Web and Mobile Applications Integration/Development with a specialization in React and Node.js.
          </p>

          <p>
            🍾 Since then, I have worked with several companies on complete integrations, provided assistance to deliver
            projects on time, made modifications, and added new features...
          </p>

          <p>
            👷 Today, drawing strength from my journey, I master the intricacies of the Agile methodology, the
            principles of Clean Code, and CI/CD pipelines, ensuring optimal scalability and maintainability for each web
            application I develop. My diverse experience, spanning from SEO to programming, enables me to bring a unique
            perspective to every project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
