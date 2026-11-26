import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ángel Galán | Frontend Developer",
  description:
    "Portfolio personal de Ángel Galán. Descubre mis proyectos y habilidades como desarrollador web.",
  openGraph: {
    title: "Ángel Galán | Frontend Developer",
    description: "Descubre mis proyectos y experiencia en desarrollo web.",
    url: "https://angelgalan-portfolio.vercel.app",
    siteName: "Ángel Galán Portfolio",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://angelgalan-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Ángel Galán",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ángel Galán | Frontend Developer",
    description: "Portfolio personal de Ángel Galán.",
    images: ["https://angelgalan-portfolio.vercel.app/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
