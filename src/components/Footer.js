const Footer = () => {
  const quickLinks = [
    { name: "Induction Handbook", href: "#" },
    { name: "Master Timetable", href: "#" },
    { name: "Bus Schedule", href: "#" },
    { name: "Campus Map", href: "#" },
  ]

  const importantLinks = [
    { name: "TSG Website", href: "https://gymkhana.iitkgp.ac.in/" },
    { name: "IIT Kharagpur", href: "https://www.iitkgp.ac.in" },
    { name: "Academic Section", href: "https://www.iitkgp.ac.in/navpage/academics" },
    { name: "Student Portal", href: "#" },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo and Description */}
          <div className="footer-main">
            <div className="footer-logo">
              <div className="logo-icon">
                <span>IIT</span>
              </div>
              <span className="logo-text">KGP Induction Program</span>
            </div>
            <p className="footer-description">
              Welcome to IIT Kharagpur's Induction Program 2024. Your journey to excellence begins here.
            </p>
            <div className="footer-social">
              <button className="social-link">📘</button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-section-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div className="footer-section">
            <h3 className="footer-section-title">Important Links</h3>
            <ul className="footer-links">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                    className="footer-link"
                  >
                    {link.name}
                    {link.href.startsWith("http")}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Induction Program IIT Kharagpur. All rights reserved.
          </p>
          <p className="footer-quote">"A journey of a thousand miles begins with a single step – Welcome to KGP!"</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
