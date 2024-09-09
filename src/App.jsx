import "./app.scss"
import Contact from "./Components/contact/Contact";
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navbar/Navbar";
import Parallax from "./Components/parallax/Parallax";
import Project from "./Components/Projects/Project";
import Skills from "./Components/Services/Skills";
const App = () => {
  return <div id="Homepage">
  <section >
    <Navbar/> 
    <Hero/>
  </section>
  <section ><Parallax type="Skills"/></section>
  <section id="Skills"><Skills/></section>
  <section  id="portfolio"><Parallax type="portfolio"/></section>
          <Project id="project"/>
 
  <section id="Contact"><Contact/></section>
  </div>;
};

export default App;
