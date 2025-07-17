import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import AnnouncementsSection from "./components/AnnouncementsSection";
import ResourcesSection from "./components/ResourcesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <HeroSection />
          <AboutSection />
          <AnnouncementsSection />
          <ResourcesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
