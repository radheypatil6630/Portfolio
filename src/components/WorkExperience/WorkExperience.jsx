import React, {  useRef } from 'react'
import './WorkExperience.css'
import { WORK_EXPERIENCE } from '../../utils/data';
import Slider from 'react-slick';
import WorkExperienceCard from './WorkExperienceCard/WorkExperienceCard';


const WorkExperience = () => {

    const slideRef = useRef(null);
        const settings={
            dots:false,
            Infinity:true,
            speed:500,
            slidesToShow:2,
            slidesToScroll:1,
            arrows:false,
            responsive:[
                {
                    breakpoint:769,
                    settings:{
                        slidesToShow:1,
                        slidesToScroll:1,
                        // Infinity:true,
                        // dots:false
                    }
                },
                
            ]
        };
    
    
        const slideRight=()=>{
        slideRef.current.slickNext();
        };
        const slideLeft=()=>{
        slideRef.current.slickPrev();
        };

  return (
     <section className='experience-container'>
        <h5>Training & Experience </h5>
      
      <div className='experience-content'>
       
       <div className='arrow-right' onClick={slideRight}>
            <span className = "material-symbols-outlined" >chevron_right</span>
       </div>

       <div className='arrow-left' onClick={slideLeft}>
            <span className = "material-symbols-outlined" >chevron_left</span>
       </div>
       
       <Slider ref={slideRef} {...settings}>
       
       
       {WORK_EXPERIENCE.map((item) => (
           
        <WorkExperienceCard key={item.title} details={item} />
        ))}
        </Slider>
        </div>


    
    </section>
  )
}

export default WorkExperience
