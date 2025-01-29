import React, {  useRef } from 'react'
import './Project.css'
import ProjectCard from './ProjectCard/ProjectCard'
import { PROJECTS } from '../../utils/data';
import Slider from 'react-slick';



const Project = () => {
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
        <h5>Projects</h5>
      
      <div className='experience-content'>
       
       <div className='arrow-right' onClick={slideRight}>
            <span className = "material-symbols-outlined" >chevron_right</span>
       </div>

       <div className='arrow-left' onClick={slideLeft}>
            <span className = "material-symbols-outlined" >chevron_left</span>
       </div>
       
       <Slider ref={slideRef} {...settings}>
       
       
       {PROJECTS.map((item) => (
           
        <ProjectCard key={item.title} details={item} />
        ))}
        </Slider>
        </div>


    
    </section>
  )
}


export default Project
