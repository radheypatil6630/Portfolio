import React from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MobileNav from './MobileNav/MobileNav';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {


  const [openMenu, setOpenMenu] = React.useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  // const navigate = useNavigate();

  return (
    <>

      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className='logo' src="./assets/images/logo.png" alt="logo" />

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
            <a href="/radhey%20patil%20resume.pdf" download="Radhey_Patil_Resume.pdf" >
              <button className='Download-CV-btn' onClick={() => { }}>Download CV</button>
            </a>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            {openMenu ? (
              <CloseIcon style={{ fontSize: '1.8rem', color: '#fff' }} />
            ) : (
              <MenuIcon style={{ fontSize: '1.8rem', color: '#fff' }} />
            )}
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
