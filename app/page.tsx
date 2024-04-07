import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex h-screen flex-col  items-center justify-between ">
      <NavBar />
    </main>
  );
}
