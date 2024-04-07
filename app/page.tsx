import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex h-screen flex-col  items-center justify-between ">
      <NavBar />
      <Hero />
    </main>
  );
}
