const AnnouncementsSection = () => {
  const announcements = [
    {
      id: 1,
      type: "urgent",
      icon: "📢",
      title: "Welcome Ceremony - Mandatory Attendance",
      content: "Freshers must report to Netaji Auditorium by 9:00 AM on 30th July 2024 for the Welcome Ceremony.",
      date: "2024-07-25",
      badge: "Urgent",
    },
    {
      id: 2,
      type: "info",
      icon: "📅",
      title: "Induction Schedule Released",
      content:
        "The complete induction program schedule has been released. Please check your timetable for detailed activities.",
      date: "2024-07-20",
      badge: "New",
    },
    {
      id: 3,
      type: "info",
      icon: "📚",
      title: "Handbook Distribution",
      content:
        "Digital copies of the Induction Handbook are now available for download. Physical copies will be distributed during registration.",
      date: "2024-07-18",
      badge: "Info",
    },
  ]

  const quickLinks = [
    {
      title: "Induction Handbook",
      description: "Complete guide for new students",
      emoji: "📘",
    },
    {
      title: "Master Timetable",
      description: "Detailed schedule of all activities",
      emoji: "🗓️",
    },
    {
      title: "Important Notice",
      description: "Latest updates and notices",
      emoji: "⚠️",
    },
  ]

  return (
    <section id="announcements" className="announcements-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Announcements</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Stay updated with the latest news and important information about the induction program.
          </p>
        </div>

        <div className="announcements-content">
          {/* Announcements */}
          <div className="announcements-list">
            {announcements.map((announcement) => (
              <div key={announcement.id} className={`announcement-card ${announcement.type}`}>
                <div className="announcement-header">
                  <div className="announcement-info">
                    <div className="announcement-icon-wrapper">
                      <span className="announcement-icon">{announcement.icon}</span>
                    </div>
                    <div className="announcement-meta">
                      <h3 className="announcement-title">{announcement.title}</h3>
                      <p className="announcement-date">
                        {new Date(announcement.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <span className={`badge badge-${announcement.type}`}>{announcement.badge}</span>
                </div>
                <div className="announcement-content">
                  <p>{announcement.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="quick-links">
            <div className="quick-links-card">
              <div className="card-header">
                <h3 className="card-title">
                  <span className="card-icon">🔗</span>
                  Quick Links
                </h3>
              </div>
              <div className="quick-links-content">
                {quickLinks.map((link, index) => (
                  <button key={index} className="quick-link-item">
                    <span className="quick-link-emoji">{link.emoji}</span>
                    <div className="quick-link-text">
                      <div className="quick-link-title">{link.title}</div>
                      <div className="quick-link-description">{link.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnnouncementsSection
