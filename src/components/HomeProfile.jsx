import React, { useState } from 'react';
import ThemeControler from './ThemeControler';

const HomeProfile = () => {
  const [skills, setSkills] = useState([
    { skillName: "HTML", level: "70" },
    { skillName: "CSS", level: "90" },
    { skillName: "Tailwind", level: "80" },
    { skillName: "Daisy", level: "90" },
    { skillName: "javascript", level: "60" },
    { skillName: "React", level: "60" },
  ]);

  const increaseSkillLevel = () => {
    setSkills(skills.map(skill => ({
      ...skill,
      level: Math.min(100, parseInt(skill.level) + 30).toString() // Ensure the level does not exceed 100
    })));
  };

  return (
    <div className='w-4/5'>
      <ThemeControler />

      <div className='flex w-full border-2 border-sky-400 p-10 rounded-3xl shadow-inner shadow-sky-400 justify-between'>
        <img
          className='size-64 border-sky-400 border-2 rounded-2xl shadow-lg shadow-sky-400'
          src="./Abdullokh.png"
          alt=""
        />
        <div className=''>
          <h1 className='text-sky-400 text-4xl text-right font-black tracking-wider'>Abdullokh Boxodirov</h1>
          <p className='text-warning text-2xl text-right font-bold '>Front-End Developer</p>
        </div>
      </div>

      <div className='flex justify-between items-center w-full border-2 border-sky-400 p-10 mt-5 rounded-3xl shadow-inner shadow-sky-400 flex-col gap-5'>
        <h1 className='text-sky-400 text-4xl font-bold'>Skills</h1>
        <div className='flex gap-1 items-center flex-wrap'>
          {skills.map((item, id) => (
            <div className="flex flex-col gap-5 flex-1 w-1/3" key={id}>
              <h3>{item.skillName}</h3>
              <progress className="progress progress-info w-56" value={item.level} max="100"></progress>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeProfile;
