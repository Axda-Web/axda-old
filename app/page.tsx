import Link from "next/link";

import HeroImage from "./components/hero-image";

export default function Home() {
  return (
    <main>
      <section className="pb-20 flex flex-col items-center space-y-10 sm:flex-row-reverse">
        <HeroImage />
        <div className="flex flex-col items-center sm:items-start space-y-6 sm:justify-between">
          <h2 className="text-4xl sm:text-7xl lg:text-heading-xl">
            Nice to meet you! I'm <strong className="border-b-4 border-secondary">Alyx Darenne</strong>.
          </h2>
          <p className="text-base">Based in France, I’m a <strong>Front-end Developer</strong> passionate about building accessible web apps that users love.</p>
          <Link href="#contact" className="uppercase border-b-2 border-secondary pb-2.5 font-bold">Contact me</Link>
        </div>
      </section>
    </main>
  );
}
