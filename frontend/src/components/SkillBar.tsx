import React from "react";

interface SkillBarProps {
  skill: string;
  level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level }) => {
  return (
    <div className="w-full mb-4">
      {/* Skill label and percentage side by side */}
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-(--color-body)">
          {skill}
        </span>
        <span className="text-sm font-medium text-(--color-primary)">
          {level}%
        </span>
      </div>

      {/* Progress bar container */}
      <div className="relative w-full h-3 rounded-full overflow-hidden bg-gradient-to-r from-(--background-color-1-5) to-(--color-tertiary)">
        {/* Filled portion */}
        <div
          className="h-full bg-(--color-primary) rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
