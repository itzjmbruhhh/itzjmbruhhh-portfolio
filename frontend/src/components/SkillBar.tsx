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

      {/* Progress bar container */}
      <div className="relative w-full h-2 rounded-full overflow-hidden bg-linear-to-r from-(--background-color-1) to-(--color-tertiary-2) shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4),inset_-2px_-2px_4px_rgba(255,255,255,0.05)]">
        {/* Animated filled portion */}
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out bg-linear-to-r from-(--color-primary-2) via-(--color-primary) to-(--color-primary-3)"
          style={{ width: `${fill}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
