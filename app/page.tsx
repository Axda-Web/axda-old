import Link from "next/link";

import HeroImage from "./components/hero-image";
import Divider from "./components/divider";
import SkillsSection from "./components/skills-section";
import ContactSection from "./components/contact-section";

export default function Home() {
  return (
    <main>
      <section className="pb-20 flex flex-col items-center space-y-10 sm:flex-row-reverse">
        <HeroImage />
        <div className="flex flex-col items-center sm:items-start space-y-6 sm:justify-between text-center sm:text-left">
          <h2 className="text-4xl sm:text-7xl lg:text-heading-xl">
            Nice to meet you! I&apos;m{" "}
            <strong className="border-b-4 border-secondary">
              Alyx Darenne
            </strong>
            .
          </h2>
          <p className="text-base max-w-md">
            Based in France, I&apos;m a <strong>Front-end Developer</strong>{" "}
            passionate about building accessible web apps that users love.
          </p>
          <Link
            href="#contact"
            className="uppercase border-b-2 border-secondary pb-2.5 font-bold hover:text-secondary transition-colors duration-300"
          >
            Contact me
          </Link>
        </div>
      </section>
      <Divider />
      {/* @ts-expect-error Async Server Component */}
      <SkillsSection />
      <div className="sm:hidden">
        <Divider />
      </div>
      <ContactSection />
      <Divider />
    </main>
  );
}
