const ContactSection = () => {
  const contacts = [
    {
      title: "Student Council",
      description: "For general queries and support",
      icon: "📞",
      contact: "+91-3222-282020",
      email: "tsg@iitkgp.ac.in",
    },
    {
      title: "Emergency Numbers",
      description: "24/7 emergency assistance",
      icon: "🚨",
      contact: "+91-3222-255221",
      email: "security@iitkgp.ac.in",
    },
    {
      title: "Counseling Center",
      description: "Mental health and wellness support",
      icon: "💚",
      contact: "+91-3222-283636",
      email: "counseling@iitkgp.ac.in",
    },
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Information</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Need help or have questions? We're here to support you throughout your induction journey.
          </p>
        </div>

        <div className="contacts-grid">
          {contacts.map((contact, index) => (
            <div key={index} className="contact-card">
              <div className="contact-header">
                <div className="contact-icon">{contact.icon}</div>
                <h3 className="contact-title">{contact.title}</h3>
                <p className="contact-description">{contact.description}</p>
              </div>
              <div className="contact-content">
                <div className="contact-info">
                  <span className="contact-label">📞</span>
                  <span className="contact-value">{contact.contact}</span>
                </div>
                <div className="contact-info">
                  <span className="contact-label">✉️</span>
                  <span className="contact-value">{contact.email}</span>
                </div>
                <button className="btn btn-outline">Contact Now</button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="additional-info">
          <div className="info-card">
            <div className="info-header">
              <h3 className="info-title">
                <span className="info-icon">📍</span>
                Address
              </h3>
            </div>
            <div className="info-content">
              <p>
                Indian Institute of Technology Kharagpur
                <br />
                Kharagpur, West Bengal 721302
                <br />
                India
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-header">
              <h3 className="info-title">
                <span className="info-icon">🕒</span>
                Office Hours
              </h3>
            </div>
            <div className="info-content">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 1:00 PM</p>
              <p>Sunday: Closed</p>
              <p className="emergency-note">Emergency services available 24/7</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-section">
          <h3 className="social-title">Follow Us</h3>
          <div className="social-links">
            <img src="fb.svg" alt="facebook"  width="40" height="40"></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
