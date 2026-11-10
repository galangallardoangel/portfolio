import styles from "./Proyectos.module.css";
import Image from "next/image";
const proyectos = [
  {
    id: 1,
    titulo: "Doify",
    descripcion:
      "Aplicación web de gestión de tareas que permite crear, editar, eliminar y organizar actividades en un tablero Kanban con diferentes estados y prioridades. Incluye almacenamiento local para conservar las tareas y una interfaz responsive.",
    imagen: "/proyectos/doify.png",
    tecnologias: ["Next.js", "React", "localStorage", "CSS"],
    demo: "https://galangallardoangel.github.io/doify",
    github: "https://github.com/galangallardoangel/doify/",
  },
];

export default function Proyectos() {
  return (
    <section id="proyectos" className={styles.proyectos}>
      <div className={styles.container}>
        <h2 className={styles.title}>Mis proyectos</h2>

        <div className={styles.grid}>
          {proyectos.map((proyecto) => (
            <article className={styles.card} key={proyecto.id}>
              <div className={styles.image}>
                <Image
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  width={600}
                  height={400}
                />
              </div>

              <div className={styles.cardContent}>
                <h3>{proyecto.titulo}</h3>

                <p>{proyecto.descripcion}</p>

                <div className={styles.tags}>
                  {proyecto.tecnologias.map((tecnologia) => (
                    <span key={tecnologia}>{tecnologia}</span>
                  ))}
                </div>

                <div className={styles.links}>
                  <a href={proyecto.demo}>Ver proyecto</a>
                  <a href={proyecto.github}>GitHub</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
