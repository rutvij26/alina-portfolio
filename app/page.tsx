import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <div className="">
      <div className="fixed">
        <NavBar />
      </div>
      <main className="flex scrollbar-hide h-screen flex-col items-center justify-between snap-y snap-mandatory overflow-y-scroll overflow-x-hidden">
        <section id="Hero" className="flex flex-1 min-h-screen snap-start scrollbar-hide">
          <Hero />
        </section>
        <section id="about" className="flex flex-1 min-h-screen snap-center scrollbar-hide">
          <About />
        </section>
      </main>
    </div >
  );
}
