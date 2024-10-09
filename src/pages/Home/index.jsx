import Footer from "./components/Footer";
import HeroSection from "./components/Header";
import MainContent from "./components/Main";
import ScrollToTopButton from "./components/ScrollToTopButton"; // Importar o novo botão

export default function Home() {
  return (
    <>
      <HeroSection />
      <MainContent />
      <Footer />
      <ScrollToTopButton /> {/* Adicionar o botão de "subir" */}
    </>
  );
}
