function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__header">
          <p className="about__eyebrow">Sobre mí</p>
          <h2 className="about__title">Desarrollo con intención.</h2>
        </div>

        <div className="about__content">
          <div className="about__text">
            <p>
              Soy Ángel Galán, desarrollador frontend apasionado por crear
              experiencias web modernas, funcionales y cuidadas hasta el último
              detalle.
            </p>

            <p>
              Me interesa especialmente combinar código, diseño y experiencia de
              usuario para construir interfaces que no solo funcionen bien, sino
              que también transmitan una buena sensación al utilizarlas.
            </p>

            <p>
              Actualmente sigo aprendiendo y desarrollando proyectos con
              JavaScript y React para mejorar mis habilidades y crear
              experiencias web cada vez mejores.
            </p>
          </div>

          <div className="about__image-wrapper">
            <img
              src="/images/pfp.jpeg"
              alt="Retrato de Ángel Galán"
              className="about__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
