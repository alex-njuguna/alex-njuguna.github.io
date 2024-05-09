import { ReactTyped } from "react-typed";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img
          src="./img/about-me.jpg"
          alt="About Me"
          style={{
            height: "25rem",
            borderRadius: "10px",
            boxShadow: "5px 5px 10px",
          }}
        />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading" style={{fontSize: '2rem', fontWeight:'normal'}}>About Me</h1>
          <div className="about-me-description">
            <p
              className="hero--section-description"
              style={{ marginBottom: "2rem", color: "#373d3f", fontSize: "1.2rem" }}
            >
              <ReactTyped
                strings={[
                  "5+ years in tech. Full Stack devloper(backend heavy).", "B.Sc.(Applied Computer Science) - Kisii University, B.Sc.(Software Engineering) - ALX SE School",
                  "Contributed to diverse open source projects.", "Fitness enthusiast, book lover, and coding advocate in local schools.",
                  "Committed to innovative solutions.",
                ]}
                typeSpeed={100}
                backSpeed={20}
                cursorChar="_"
                showCursor={true}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
