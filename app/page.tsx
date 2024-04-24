import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";

export default function Home() {
  return (
    <div className="">
      <div className="fixed">
        <NavBar />
      </div>
      <main className="flex scrollbar-hide h-screen flex-col items-center justify-between snap-y snap-mandatory overflow-y-scroll overflow-x-hidden">
        <section id="Hero" className="flex flex-1 min-h-fit snap-start scrollbar-hide">
          <Hero />
        </section>
        <section id="about" className="flex flex-1 min-h-fit snap-center scrollbar-hide">
          <About />
        </section>
        <section id="work" className="flex flex-1 min-h-fit snap-end scrollbar-hide">
          <Work />
        </section>
      </main>
    </div >
  );
}
