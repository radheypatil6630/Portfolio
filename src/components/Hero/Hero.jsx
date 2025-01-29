import React from 'react'
import './Hero.css'
const Hero = () => {
    const name = 'Radhey Patil'
  return (
   <section className="hero-container">
    <div className="hero-content">
        
        <p> Hi, I’m <br/><h3> {name}  </h3> <br/> a passionate and detail-oriented developer specializing in Android App Development and Backend Development. With a strong foundation in Java and Spring Boot, I build robust, scalable, and user-friendly applications that solve real-world problems. I thrive on turning ideas into functional, high-performance software and am always eager to learn and adapt to new technologies.</p>
        </div>

        <div className="hero-image">
            <div>
                <div className='tech-icon ' id='react-img'>
                    <img className='' src='./assets/images/react-icon.png' alt='react-img' />
                </div>
               
                    <img className='profile-img' src='./assets/images/radhey.jpg' alt='Profile-img' />
                </div>

            <div>
                <div className='tech-icon'>
                    <img src='./assets/images/spring_boot_icon.png' alt='spring_boot-img' />
                </div>
                <div className='tech-icon'>
                    <img src='./assets/images/java-icon.png' alt='java-img' />
                    </div>
                
                <div className='tech-icon'>
                    <img src='./assets/images/androidDev_icon.png'    alt='js-img' />
                </div>
            </div>
            </div>
    </section>
  )
}

export default Hero
