import styles from "./Hero.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDownload,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiRedux } from "react-icons/si";

const techStack = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Redux", icon: SiRedux },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
];

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.container}>
        {/* PRESENTACIÓN */}
        <div className={styles.content}>
          <p className={styles.eyebrow}>Frontend Developer</p>

          <h1 className={styles.title}>
            Hola, soy
            <span>Ángel Galán.</span>
          </h1>

          <p className={styles.description}>
            Desarrollo experiencias web modernas, rápidas y cuidadas, combinando
            diseño, código y atención por los detalles.
          </p>

          <div className={styles.buttons}>
            <a href="#proyectos" className={styles.buttonPrimary}>
              Ver proyectos
            </a>

            <a href="#contacto" className={styles.buttonSecondary}>
              Contactarme
            </a>
          </div>
          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/in/%C3%A1ngel-gal%C3%A1n-gallardo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={styles.socialLink}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.42v6.32ZM5.36 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.14 20.45H3.58V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"
                />
              </svg>
            </a>

            <a
              href="https://github.com/galangallardoangel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={styles.socialLink}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.51-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.47-.28-5.06-1.24-5.06-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
                />
              </svg>
            </a>

            <a href="/CV_ANGEL_GALAN.pdf" download className={styles.cvButton}>
              <FaDownload />
              Descargar CV
            </a>
          </div>
        </div>

        {/* ELEMENTO VISUAL */}
        <div className={styles.visual}>
          {/* TARJETA DE CÓDIGO */}
          <div className={styles.codeCard}>
            <div className={styles.codeHeader}>
              <p>developer.js</p>
            </div>

            <div className={styles.codeContent}>
              <pre>
                <code>
                  <span className={styles.codeKeyword}>const</span>{" "}
                  <span className={styles.codeVariable}>developer</span> = {"{"}
                  {"\n"}
                  {"  "}nombre:{" "}
                  <span className={styles.codeString}>
                    &quot;Ángel Galán&quot;
                  </span>
                  ,{"\n"}
                  {"  "}rol:{" "}
                  <span className={styles.codeString}>
                    &quot;Frontend Developer&quot;
                  </span>
                  ,{"\n"}
                  {"  "}tecnologías: [
                  <span className={styles.codeString}>
                    &quot;HTML · CSS · JavaScript · React · Next.js&quot;
                  </span>
                  ],{"\n"}
                  {"  "}aprendiendo:{" "}
                  <span className={styles.codeBoolean}>true</span>,{"\n"}
                  {"  "}objetivo:{" "}
                  <span className={styles.codeString}>
                    &quot;Crear experiencias web&quot;
                  </span>
                  {"\n"}
                  {"};"}
                </code>
              </pre>
            </div>
          </div>
          <div className={styles.stack}>
            <div className={styles.stackTrack}>
              <div className={styles.stackGroup}>
                {techStack.map((tech) => {
                  const Icon = tech.icon;

                  return (
                    <span className={styles.stackItem} key={tech.name}>
                      <Icon />
                      {tech.name}
                    </span>
                  );
                })}
              </div>

              <div className={styles.stackGroup} aria-hidden="true">
                {techStack.map((tech) => {
                  const Icon = tech.icon;

                  return (
                    <span className={styles.stackItem} key={tech.name}>
                      <Icon />
                      {tech.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
