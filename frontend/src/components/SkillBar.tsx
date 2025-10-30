import React, { useState, useEffect } from "react";

interface SkillBarProps {
  skill: string;
  level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level }) => {
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFill(level);
    }, 200); // small delay for smooth start
    return () => clearTimeout(timeout);
  }, [level]);

  return (
    <div className="w-full mb-5">
      {/* Skill label */}
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-(--color-body)">{skill}</span>
        <span className="text-sm font-medium text-(--color-primary)">
          {level}%
        </span>
      </div>

      {/* Progress bar container (unfilled uses CSS variable for background) */}
      <div
        className="relative w-full h-2 rounded-full overflow-hidden shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)]"
        style={{ background: "var(--background-color-2)" }}
      >
        {/* Animated filled portion — uses CSS gradient via inline style to ensure variables resolve */}
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${fill}%`,
            background:
              "linear-gradient(90deg, var(--color-primary-2), var(--color-primary), var(--color-primary-3))",
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
