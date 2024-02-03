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
          <h1 className="skills-section--heading">About Me</h1>
          <div className="about-me-description">
            <p
              className="hero--section-description"
              style={{ marginBottom: "3rem", color: "#373d3f" }}
            >
              <ReactTyped
                strings={[
                  "Dedicated software engineer with 5+ years in tech. Proficient in Python, JavaScript, and problem-solving. Applied Computer Science graduate, honing analytical and coding skills.",
                  "Contributed to diverse projects, optimizing databases, and designing software solutions for operational efficiency.", "Fitness enthusiast, book lover, and coding advocate in local schools.",
                  "Committed to innovative solutions, aspiring for a positive impact. Eager for challenges, dedicated to growth. Driven, passionate, and ready to learn from every experience.",
                ]}
                typeSpeed={100}
                loop
                backSpeed={20}
                cursorChar="+"
                showCursor={true}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
