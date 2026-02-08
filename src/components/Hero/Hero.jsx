import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <center>
        <h1>
          I'M <br />
          <span>NAVEENKUMAR</span>
        </h1>

        <p className="hero-subtitle">
          Frontend Developer • AI & Technology Enthusiast
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn primary">Contact Me</a>
          <a href="#skills" className="btn secondary">View Skills</a>
        </div>
         </center>
      </div>
    </section>
   
  );
}

export default Hero;
