import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="overlay">
        <h2> UP GOVERNMENT,80G & 12A Registered NGO</h2>
        <h1>Be the reason someone <span style={{ color: 'rgb(225, 10, 10)' }}>smiles</span> today.</h1>

        <p>
          Your small contribution can create a big impact.
        </p>
      <Link to="/donate">
        <button>Donate Now</button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;