import Hero from "../components/Hero";
import "./Home.css";
import aboutImage from "../assets/about.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Hero />

      <section className="about_section">
         <div className="about_content">
          <div className="about_text">
              <h2>About Us</h2>
              <h1>Together for a Better Tomorrow</h1>
           <p>
        "NayePankh Foundation" is a non governmental organisation with a strong desire to help the society and make it a better place for all, by doing everything in our power and to make our vision successful we would require your vital support. Service to mankind is the service to god. Let’s revolutionise the society together!.
           </p>
           <Link to="/about">
            <button className="btn">Read More</button>
           </Link>
        </div>
        <div className="about_image">
            <img
              src={aboutImage}
              alt="NGO Activities"
            />
          </div>
        </div>
      </section>
      <div className="welcome">
        <h1>Welcome to NayePankh Foundation</h1>
        <h2>UP GOVT. | 80G & 12A Registered</h2>
        <p>We are one of the Biggest Student led NGO of India with its operations extended in the city of Kanpur, Ghaziabad and various other cities.</p>
      </div>

      <section className="programs_section">
        <h2>Our Programs</h2>

        <div className="cards">

          <div className="card">
            <h3>Education</h3>
            <p>Supporting children's learning.</p>
          </div>

          <div className="card">
            <h3>Healthcare</h3>
            <p>Improving access to health services.</p>
          </div>

          <div className="card">
            <h3>Women Empowerment</h3>
            <p>Creating opportunities for growth.</p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;