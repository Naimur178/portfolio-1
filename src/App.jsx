import './App.css'
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Projects from './components/projects/Projects'


function App () {
  

  return (
    <Router>
      <Header></Header>
      <main className="main">
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Services></Services>
        <Qualification></Qualification>
        <Projects></Projects>
        <Testimonial></Testimonial>
        <Contact></Contact>
        <Footer></Footer>

      </main>
    </Router>
  )
}

export default App
