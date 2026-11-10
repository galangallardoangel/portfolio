import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Proyectos from "@/components/Proyectos/Proyectos";
import Contacto from "@/components/Contacto/Contacto";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section id="inicio">
        <Hero
          titulo="Mi portfolio"
          subtitulo="Aprendiendo React y Next.js"
          textoBoton="Ver mis proyectos"
        />
      </section>

      <Proyectos />

      <Contacto />
      <Footer />
    </main>
  );
}
