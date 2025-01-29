import React, { useState } from 'react'
import './Skills.css'
import { SKILLS } from '../../utils/data.js'
import SkillCard from './SkillCard/SkillCard.jsx'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard.jsx'

const Skills = () => {

  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  

  const handSelectSkill = (
    data) => {
    setSelectedSkill(data);
  };

  return (
    <section className='skills-container' >
      <h5> Technical Proficiency</h5>

      <div className='skills-content'>
        <div className='skills'>
        {SKILLS.map((item) => {
  return (
    <SkillCard 
      key={item.title}
      iconUrl={item.icon}
      title={item.title}
      isActive={selectedSkill.title === item.title}
      onClick={() => handSelectSkill(item)}
    />
  );
})}</div>   
        
        <div className='skills-info'>
          <SkillsInfoCard 
           heading={selectedSkill.title}
           skills={selectedSkill.skills}
          />
          </div>     
      </div>
      
    </section>
  )
}

export default Skills
