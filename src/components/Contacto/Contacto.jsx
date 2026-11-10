import styles from "./Contacto.module.css";
import { FaLinkedin, FaGithub, FaPhone, FaDownload } from "react-icons/fa";

export default function Contacto() {
  return (
    <section id="contacto" className={styles.contacto}>
      <div className={styles.container}>
        <div className={styles.presentacion}>
          <img src="/perfil.jpg" alt="Mi fotografía" className={styles.photo} />

          <div className={styles.contactInfo}>
            <p className={styles.eyebrow}>CONTACTO</p>

            <h2>¿Hablamos?</h2>

            <p className={styles.description}>
              Si tienes un proyecto en mente, quieres colaborar o simplemente
              quieres conocerme, estaré encantado de escucharte.
            </p>

            <a href="mailto:" className={styles.email}>
              galangallardoangel@gmail.com
            </a>

            <div className={styles.socialLinks}>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <FaGithub />
              </a>

              <a href="tel:+34656623550" aria-label="Teléfono" title="Teléfono">
                <FaPhone />
              </a>

              <a
                href="/cv.pdf"
                download
                aria-label="Descargar CV"
                title="Descargar CV"
              >
                <FaDownload />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
