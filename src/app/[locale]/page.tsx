import About from "@/src/components/About";
import Banner from "@/src/components/Banner";
import Education from "@/src/components/Education";
import Experience from "@/src/components/Experience";
import Footer from "@/src/components/Footer";
import Projects from "@/src/components/Projects";

export default function Home() {
  return (
    <main className="h-full w-full  bg-[url('/LooperGroup2.png')] bg-no-repeat">
      <div className="flex flex-col gap-20">
        <Banner />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Footer />
      </div>
    </main>
  );
}
