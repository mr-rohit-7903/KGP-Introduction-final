const ResourcesSection = () => {
  const resources = [
    {
      title: "Induction Handbook",
      description: "Complete guide with all essential information for new students",
      emoji: "📕",
      action: "Download PDF",
    },
    {
      title: "Master Timetable",
      description: "Detailed schedule of all induction program activities",
      emoji: "📅",
      action: "View Schedule",
    },
    {
      title: "Bus Schedule",
      description: "Campus shuttle timings and route information",
      emoji: "🚌",
      action: "View Routes",
    },
    {
      title: "Campus Map",
      description: "Interactive map of IIT Kharagpur campus",
      emoji: "🗺️",
      action: "Explore Map",
    },
  ]

  const videos = [
    {
      title: "IIT KGP - The Avenue of Excellence",
      description: "Discover the legacy and excellence of IIT Kharagpur",
      duration: "5:30",
    },
    {
      title: "Visit IIT Kharagpur",
      description: "Virtual tour of our beautiful campus",
      duration: "8:45",
    },
  ]

  return (
    <section id="resources" className="resources-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Resources & Quick Links</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Access all the essential resources and information you need for a successful induction experience.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div key={index} className="resource-card">
              <div className="resource-header">
                <div className="resource-icon">{resource.emoji}</div>
                <h3 className="resource-title">{resource.title}</h3>
              </div>
              <div className="resource-content">
                <p className="resource-description">{resource.description}</p>
                <button className="btn btn-outline">
                  <span className="btn-icon">⬇</span>
                  {resource.action}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="videos-section">
          <h3 className="videos-title">Video Links</h3>
          <div className="videos-grid">
            {videos.map((video, index) => (
              <div key={index} className="video-card">
                <div className="video-thumbnail">
                  <div className="video-placeholder">
                    <span className="play-icon">▶</span>
                  </div>
                  <div className="video-duration">{video.duration}</div>
                </div>
                <div className="video-content">
                  <h4 className="video-title">{video.title}</h4>
                  <p className="video-description">{video.description}</p>
                  <button className="btn btn-ghost">
                    <span className="btn-icon"></span>
                    Watch on YouTube
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResourcesSection
