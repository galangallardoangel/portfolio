function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <div className="projects__header">
          <p className="projects__eyebrow">Proyectos</p>

          <h2 className="projects__title">Cosas que he construido.</h2>
        </div>

        <div className="projects__list">
          <article className="project">
            <div className="project__image">
              <span>Imagen del proyecto</span>
            </div>

            <div className="project__content">
              <p className="project__number">01</p>

              <h3 className="project__name">Mi primer proyecto</h3>

              <p className="project__description">
                Una breve descripción del proyecto, explicando qué es, qué
                problema resuelve y qué tecnologías he utilizado.
              </p>

              <div className="project__technologies">
                <span>React</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <a href="#" className="project__link">
                Ver proyecto →
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;
