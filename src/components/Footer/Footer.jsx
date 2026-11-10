import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} Mi portfolio. Todos los derechos
        reservados.
      </p>

      <a href="#inicio">Volver arriba ↑</a>
    </footer>
  );
}
