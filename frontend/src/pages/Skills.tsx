import React from "react";
import SkillBar from "../components/SkillBar.tsx";

function Skills() {
  const webDevSkills = [
    { skill: "React", level: 90 },
    { skill: "Tailwind CSS", level: 85 },
    { skill: "TypeScript", level: 80 },
    { skill: "Node.js", level: 75 },
  ];

  const mlSkills = [
    { skill: "Python", level: 90 },
    { skill: "TensorFlow", level: 80 },
    { skill: "Scikit-Learn", level: 85 },
    { skill: "Data Visualization", level: 75 },
  ];

  return (
    <div data-aos="fade-up" data-aos-duration="600">
      {/* Content Start */}
      <div className="flex flex-col xl:flex-row justify-center xl:px-25 gap-12">
        {/* Web Dev Start */}
        <div className="xl:w-[50%]">
          {/* Section Heading */}
          <div className="mb-10 text-left">
            <h3 className="res-bio">Techstack & Frameworks</h3>
            <h1 className="res-heading">Web Development</h1>
          </div>

          <div className="mx-[10%]">
            {/* Skill Bars */}
            {webDevSkills.map((s) => (
              <SkillBar key={s.skill} skill={s.skill} level={s.level} />
            ))}
          </div>
        </div>
        {/* Web Dev End */}

        {/* Machine Learning Start */}
        <div className="xl:w-[50%]">
          {/* Section Heading */}
          <div className="mb-10 text-left">
            <h3 className="res-bio">Techstack & Frameworks</h3>
            <h1 className="res-heading">Machine Learning</h1>
          </div>

          <div className="mx-[10%]">
            {/* Skill Bars */}
            {mlSkills.map((s) => (
              <SkillBar key={s.skill} skill={s.skill} level={s.level} />
            ))}
          </div>
        </div>
        {/* Machine Learning End */}
      </div>
      {/* Content End */}
    </div>
  );
}

export default Skills;
