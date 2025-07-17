import { useEffect, useState } from "react"

const HeroSection = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const particleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }))
    setParticles(particleArray)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="hero-section">
      {/* Background Animation */}
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="particles-container">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Welcome to IIT Kharagpur's
            <br />
            <span className="hero-highlight">Induction Program 2024</span>
          </h1>

          <p className="hero-description">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToAbout}>
              Explore Program
              <span className="btn-icon">↓</span>
            </button>
            <button className="btn btn-secondary">
              <span className="btn-icon">▶</span>
              Watch Campus Tour
            </button>
          </div>

          <div className="hero-quote">"A journey of a thousand miles begins with a single step - Welcome to KGP!"</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>↓</span>
      </div>
    </section>
  )
}

export default HeroSection
