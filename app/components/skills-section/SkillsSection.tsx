import Skill from "../skill";
import { Skills } from "@/types";

const getSkills = async (): Promise<Skills> => {
  const res = await fetch("http://localhost:3001/skills");

  if (!res.ok) throw new Error("Failed to fetch the skills!");

  const data = res.json();

  return data;
};

const SkillsSection = async () => {

  const skills: Awaited<Promise<Skills>> = await getSkills();

  return (
    <section className="py-10 sm:py-14 lg:py-20 flex flex-col sm:flex-row sm:flex-wrap items-center gap-y-6 sm:gap-y-14">
      {skills.map((skill) => (
        <Skill key={skill.id} {...skill} />
      ))}
    </section>
  );
};

export default SkillsSection;
