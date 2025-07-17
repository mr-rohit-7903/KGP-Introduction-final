import { useState } from "react"

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const objectives = [
    {
      icon: "🎯",
      title: "Orientation",
      description: "Familiarize students with campus life, facilities, and academic structure",
    },
    {
      icon: "👥",
      title: "Social Integration",
      description: "Build connections with peers and create lasting friendships",
    },
    {
      icon: "📚",
      title: "Life Skills",
      description: "Develop essential skills for academic and personal success",
    },
    {
      icon: "🏆",
      title: "Excellence",
      description: "Instill the values and culture of academic excellence at IIT KGP",
    },
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Induction Program</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <div className="about-card">
            <div className="card-header">
              <h3 className="card-title">Why Induction Program?</h3>
            </div>
            <div className="card-content">
              <p className="about-text">
                Most universities and colleges around the world have Induction or Orientation programs that range from
                one day to a month. During this period, students participate in a wide range of social activities,
                sports challenges, and life skills programs.
              </p>

              <button className="expand-button" onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "↑ Show Less" : "↓ Read More"}
              </button>

              {isExpanded && (
                <div className="expanded-content">
                  <p className="about-text">
                    The Induction Program at IIT Kharagpur is designed to help new students transition smoothly into
                    campus life. It serves as a bridge between your previous academic experience and the rigorous,
                    research-oriented environment of IIT.
                  </p>
                  <p className="about-text">
                    Through various activities, workshops, and interactions, you'll gain insights into the institute's
                    culture, values, and expectations. The program also focuses on developing critical thinking,
                    problem-solving skills, and fostering innovation.
                  </p>
                  <p className="about-text">
                    Our comprehensive approach ensures that you not only adapt to the academic challenges but also
                    develop holistically as an individual, preparing you for leadership roles in your chosen field.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="objectives-section">
            <h3 className="objectives-title">Program Objectives</h3>
            <div className="objectives-grid">
              {objectives.map((objective, index) => (
                <div key={index} className="objective-card">
                  <div className="objective-content">
                    <div className="objective-icon">{objective.icon}</div>
                    <div className="objective-text">
                      <h4 className="objective-title">{objective.title}</h4>
                      <p className="objective-description">{objective.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
