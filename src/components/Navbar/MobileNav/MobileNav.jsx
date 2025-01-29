import React from 'react'
import './MobileNav.css'
const MobileNav = ({isOpen,toggleMenu}) => {

    return (
        <>

            <div className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}>

                <div className='mobile-menu-container'>
                    <img className='logo' src='/assets/images/logo.png' alt='logo' />

                    <ul>
                        <li>
                            <a href='http://localhost:3000/' className='menu-item'>Home</a>
                        </li>
                        <li>
                            <a href='http://localhost:3000/Skills' className='menu-item'>Skills</a>
                        </li>
                        <li>
                            <a href='http://localhost:3000/Experience' className='menu-item'>Experience</a>
                        </li>
                        <li>
                            <a href='http://localhost:3000/ContactMe' className='menu-item'>Contact Me</a>
                        </li>
                        
                        <a href="/radhey-patil-resume.pdf" download="Radhey_Patil_Resume.pdf" >
                        <button className='Download-CV-btn' onClick={() => { }}>Download CV</button>
                        </a>
                    </ul>           
                     </div>
            </div>
        </>
    )
}
export default MobileNav;