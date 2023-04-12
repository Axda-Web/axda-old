type SkillProps = {
    tech: string;
    exp: number;
}

const Skill = ({tech, exp}: SkillProps) => {
  return (
    <div className="text-center sm:text-left basis-auto sm:basis-2/4 lg:basis-1/3 sm:space-y-3.5">
        <h3 className="text-3xl sm:text-heading-l">{tech}</h3>
        <p className="text-base">{exp} Years Experience</p>
    </div>
  )
}

export default Skill