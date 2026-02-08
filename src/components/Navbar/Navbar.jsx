import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Naveen Kumar</div>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <nav className={`navbar ${open ? "open" : ""}`}>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#interests" onClick={() => setOpen(false)}>Interests</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;

