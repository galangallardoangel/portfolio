function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__container">
        <a href="#home" className="navbar__logo">
          Ángel Galán | React Dev.
        </a>

        <ul className="navbar__links">
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#about">Sobre mí</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>

        <button className="navbar__menu" type="button" aria-label="Abrir menú">
          ☰
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
