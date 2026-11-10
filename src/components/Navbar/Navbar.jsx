"use client";

import styles from "./Navbar.module.css";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <h2>Ángel Galán | React Dev.</h2>

      <button
        className={styles.menuBoton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      <div className={`${styles.menu} ${isMenuOpen ? styles.menuAbierto : ""}`}>
        <div className={styles.menuHeader}>
          <div className={styles.menuLogo}>
            <Image
              src="/icon.png"
              alt="Logo Ángel Galán"
              width={42}
              height={42}
              className={styles.logoIcon}
            />
            <h2>Portfolio</h2>
          </div>

          <button onClick={() => setIsMenuOpen(false)}>X</button>
        </div>

        <ul>
          <li>
            <a href="#inicio" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </a>
          </li>

          <li>
            <a href="#proyectos" onClick={() => setIsMenuOpen(false)}>
              Proyectos
            </a>
          </li>

          <li>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
