import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Alex</p>
          <h5 className="hero--section--title"  style={{fontSize: '3rem', fontWeight:'normal'}}>
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h5>
          <Link to="Contact">
            <button className="btn btn-primary">Get In Touch</button>
          </Link>
          <p className="hero--section-description" style={{ fontSize: "1rem" }}>
            <ReactTyped
              strings={[
                "Versatile developer crafting efficient solutions with creativity and precision.",
                "Team player.",
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
      <div className="hero--section--img">
        <img
          style={{ borderRadius: "10px", boxShadow: "5px 5px 10px" }}
          src="./img/hero-img.jpg"
          alt="Hero Section"
        />
      </div>
    </section>
  );
}
