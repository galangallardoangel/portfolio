import styles from "./Proyectos.module.css";
import Image from "next/image";
const proyectos = [
  {
    id: 1,
    titulo: "Doify",
    descripcion:
      "Aplicación web de gestión de tareas que permite crear, editar, eliminar y organizar actividades en un tablero Kanban según su estado y prioridad. Incluye almacenamiento local para conservar las tareas y una interfaz adaptable a diferentes dispositivos.",
    imagen: "/proyectos/doify.png",
    tecnologias: ["Next.js", "React", "localStorage", "CSS"],
    demo: "https://galangallardoangel.github.io/doify",
    github: "https://github.com/galangallardoangel/doify",
  },
  {
    id: 2,
    titulo: "React Star Rating",
    descripcion:
      "Componente reutilizable de valoración por estrellas desarrollado con React. Permite personalizar el número de estrellas, el color, el tamaño y los mensajes de valoración. Incluye interacción mediante hover y selección de puntuaciones.",
    imagen: "/proyectos/star-rating.png",
    tecnologias: ["React", "JavaScript", "CSS", "Vite"],
    demo: "https://galangallardoangel.github.io/star-rating/",
    github: "https://github.com/galangallardoangel/star-rating",
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
