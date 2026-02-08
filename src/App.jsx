import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Interests from "./components/Interests/Interests"
import Contact from "./components/Contact/Contact"
function App(){
  return(
    <>
     <Navbar />
     <Hero />
     <section id="about">
      <About />
     </section>
     <section id="skills">
      <Skills />
     </section>
     <section id="interests">
      <Interests/>
     </section>
     <section id="contact">
      <Contact />
     </section>
    </>

  );
}
export default App;