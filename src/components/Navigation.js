import { useState, useEffect } from "react"
import { useTheme } from "../contexts/ThemeContext"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme, mounted } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }


  return (
    <nav className={`navigation ${isScrolled ? "navigation-scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-logo" onClick={() => scrollToSection("home")}>
            <div className="logo-icon">
              <img src="logo.svg" alt="IIT KGP Logo" className="logo-image" />
            </div>
            <span className="logo-text">KGP Induction</span>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
            <button onClick={() => scrollToSection("home")} className="nav-link">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="nav-link">
              About
            </button>
            <button onClick={() => scrollToSection("announcements")} className="nav-link">
              Announcements
            </button>
            <button onClick={() => scrollToSection("resources")} className="nav-link">
              Handbook
            </button>
            <button onClick={() => scrollToSection("contact")} className="nav-link">
              Contact
            </button>
            <a href="https://www.iitkgp.ac.in/tsg" target="_blank" rel="noopener noreferrer" className="nav-link">
              TSG
            </a>
            <a href="https://www.iitkgp.ac.in" target="_blank" rel="noopener noreferrer" className="nav-link">
              IIT Kharagpur
            </a>
            <button className="theme-toggle" onClick={toggleTheme}>
              <span className={`sun-icon ${theme === "dark" ? "hidden" : ""}`}>☀️</span>
              <span className={`moon-icon ${theme === "light" ? "hidden" : ""}`}>🌙</span>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="mobile-nav">
            <button className="theme-toggle" onClick={toggleTheme}>
              <span className={`sun-icon ${theme === "dark" ? "hidden" : ""}`}>☀️</span>
              <span className={`moon-icon ${theme === "light" ? "hidden" : ""}`}>🌙</span>
            </button>
            <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <button onClick={() => scrollToSection("home")} className="mobile-nav-link">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="mobile-nav-link">
              About Program
            </button>
            <button onClick={() => scrollToSection("announcements")} className="mobile-nav-link">
              Announcements
            </button>
            <button onClick={() => scrollToSection("resources")} className="mobile-nav-link">
              Handbook & Schedule
            </button>
            <button onClick={() => scrollToSection("contact")} className="mobile-nav-link">
              Contact
            </button>
            <a
              href="https://www.iitkgp.ac.in/tsg"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-nav-link"
            >
              TSG Website
            </a>
            <a href="https://www.iitkgp.ac.in" target="_blank" rel="noopener noreferrer" className="mobile-nav-link">
              IIT Kharagpur
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
