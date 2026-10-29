function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <p className="contact__eyebrow">Contacto</p>

        <h2 className="contact__title">¿Hablamos?</h2>

        <p className="contact__description">
          Si tienes un proyecto en mente, quieres colaborar o simplemente
          quieres conocerme, estaré encantado de escucharte.
        </p>

        <a href="mailto:galangallardo@angel.com" className="contact__email">
          galangallardo@angel.com
        </a>

        <div className="contact__links">
          <a
            href="https://www.linkedin.com/in/%C3%A1ngel-gal%C3%A1n-gallardo-4b65182a2/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/galangallardoangel"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
