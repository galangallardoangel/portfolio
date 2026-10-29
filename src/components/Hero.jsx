import { FaLinkedin, FaGithub } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">Frontend Developer</p>

          <h1 className="hero__title">
            Hola, soy
            <span>Ángel Galán.</span>
          </h1>

          <p className="hero__description">
            Desarrollo experiencias web modernas, rápidas y cuidadas, combinando
            diseño, código y atención por los detalles.
          </p>

          <div className="hero__buttons">
            <a href="#projects" className="hero__button hero__button--primary">
              Ver proyectos
            </a>

            <a href="#contact" className="hero__button hero__button--secondary">
              Contactarme
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/%C3%A1ngel-gal%C3%A1n-gallardo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar mi LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar mi GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__code-card">
            <div className="hero__code-header">
              <span></span>
              <span></span>
              <span></span>
              <p>developer.js</p>
            </div>

            <pre>
              <code>
                <span className="code-purple">const</span> developer = {"{"}
                {"\n"} name: <span className="code-green">"Ángel"</span>,{"\n"}{" "}
                role: <span className="code-green">"Frontend Developer"</span>,
                {"\n"} skills: [{"\n"}{" "}
                <span className="code-green">"React"</span>,{"\n"}{" "}
                <span className="code-green">"JavaScript"</span>,{"\n"}{" "}
                <span className="code-green">"Typescript"</span>,{"\n"}{" "}
                <span className="code-green">"Next.js"</span>,{"\n"}{" "}
                <span className="code-green">"Redux"</span>,{"\n"}{" "}
                <span className="code-green">"HTML | CSS"</span>
                {"\n"} ],
                {"\n"} learning: <span className="code-orange">true</span>
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>

          <div className="hero__visual-caption">
            <span className="hero__status"></span>
            Construyendo y aprendiendo
          </div>
        </div>

        <a href="#about" className="hero__scroll">
          <span className="hero__scroll-line"></span>
          <span>Scroll para explorar</span>
        </a>
      </div>

      <div className="hero__glow hero__glow--one"></div>
      <div className="hero__glow hero__glow--two"></div>
    </section>
  );
}

export default Hero;
