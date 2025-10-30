import React from "react";
import SkillBar from "../components/SkillBar.tsx";
import skillsData from "../../public/utils/Skills.json";

function Skills() {
  const { webDevelopment, machineLearning } = skillsData;

  return (
    <div data-aos="fade-up" data-aos-duration="600">
      <div className="flex flex-col xl:flex-row justify-center xl:px-25 gap-12">
        {/* Web Dev */}
        <div className="xl:w-[50%]">
          <div className="mb-10 text-left">
            <h3 className="res-bio">Techstack & Frameworks</h3>
            <h1 className="res-heading">Web Development</h1>
          </div>
          <div className="mx-[10%]">
            {webDevelopment.map((s) => (
              <SkillBar key={s.skill} skill={s.skill} level={s.level} />
            ))}
          </div>
        </div>

        {/* Machine Learning */}
        <div className="xl:w-[50%]">
          <div className="mb-10 text-left">
            <h3 className="res-bio">Techstack & Frameworks</h3>
            <h1 className="res-heading">Machine Learning</h1>
          </div>
          <div className="mx-[10%]">
            {machineLearning.map((s) => (
              <SkillBar key={s.skill} skill={s.skill} level={s.level} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
