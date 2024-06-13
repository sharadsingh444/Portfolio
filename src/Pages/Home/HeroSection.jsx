import { Link } from 'react-scroll'
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--img">
        <img src="./img/about-me.png" alt="Hero Section" />
      </div>
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="section--title">Hey There, I'm Sharad !</h1>
          <h2 className="hero--section--title">
            <span className="hero--section-title--color">A Full-Stack Developer</span>{" "}
          </h2>
          <p className="hero--section-description">
            Passionate about crafting seamless and engaging digital experiences, I specialize in the MERN stack. My mission is to bring ideas to life with clean, efficient, and scalable code. Let's build something amazing together!
          </p>
        </div>
        <div className="hero--section--content--2">
          
          <Link
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            className="btn btn-primary"
          >
            Get In Touch
          </Link>
          <Link
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="MyPortfolio"
            className="btn btn-secondary"
          >
           My Portfolio
          </Link>
        </div>
      </div>

    </section>
  );
}