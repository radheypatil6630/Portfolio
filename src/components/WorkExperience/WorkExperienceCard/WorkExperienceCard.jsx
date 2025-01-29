import React from 'react'
import './WorkExperienceCard.css'

const WorkExperienceCard = ({details}) => {
  return (
    <div className='project-card'>
    <h6>{details.title}</h6>
  
  <div className='project-duration'>{details.date}</div>

<ul>
    {details.responsibilities.map((item) => (<li key={item}>{item}</li>))}
</ul>

</div>
  )
}

export default WorkExperienceCard
