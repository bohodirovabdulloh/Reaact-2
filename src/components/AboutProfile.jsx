import React, { useState } from 'react';


const AboutProfile = () => {

    const [skills, setSkills] = useState([
        { skillName: "English", level: "70" },
        { skillName: "Ozbek tili", level: "90" },
        { skillName: "Rassiya", level: "80" },
       
      ]);
    
      const increaseSkillLevel = () => {
        setSkills(skills.map(skill => ({
          ...skill,
          level: Math.min(100, parseInt(skill.level) + 30).toString() // Ensure the level does not exceed 100
        })));
      };
  return (
    <div>
      <div className='flex justify-between items-center w-full border-2 border-sky-400 p-10 mt-5 rounded-3xl shadow-inner shadow-sky-400 flex-col gap-5'>
        <h1 className='text-sky-400 text-4xl font-bold'>Languages</h1>
        <div className='flex gap-1 items-center flex-wrap justify-between w-full'>
          {skills.map((item, id) => (
            <div className="flex flex-col gap-5 flex-1 w-1/3" key={id}>
              <h3>{item.skillName}</h3>
              <progress className="progress progress-info w-56" value={item.level} max="100"></progress>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutProfile