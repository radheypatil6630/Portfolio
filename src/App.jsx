
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Skills from './components/Skills/Skills.jsx';
import Project from './components/Projects/Project.jsx';
import ContactMe from './components/ContactMe/ContactMe.jsx';
import Footer from './components/Footer/Footer.jsx';
import WorkExperience from './components/WorkExperience/WorkExperience.jsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Skills" element={<Skills />}/>
          <Route path='Experience' element={<Experience />} />
          <Route path="ContactMe" element={<ContactMe />} />
        
        </Routes>
      </BrowserRouter>
     
    </>


  );
}
function Home() {
  return (
    <div>

      <div className="container">

        <Hero />
        <Skills />
        <Project />
        <WorkExperience />
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}

function Experience() {
  return (
    <div>
      <Project />
      <WorkExperience />
    </div>
  )
}
export default App;
