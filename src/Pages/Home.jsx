import Hero from "../components/Hero";
import "./Home.css";
import aboutImage from "../assets/about.png";
import { Link } from "react-router-dom";
import ngo1 from "../assets/ngo1.png";
import ngo2 from "../assets/ngo2.png";
import ngo3 from "../assets/ngo3.png";
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
       <section className="gallery_section">

  <div className="gallery">

    <div className="gallery_card">
      <img src={ngo1} alt="Education Program" />
    </div>

    <div className="gallery_card">
      <img src={ngo2} alt="Healthcare Camp" />
    </div>

    <div className="gallery_card">
      <img src={ngo3} alt="Community Support" />
    </div>

  </div>

</section>
      <div className="quote">
        <h1>"If we all do <span>something</span> , then together there is no problem that we cannot solve!"</h1>
        <h2>PRASHANT SHUKLA</h2>
        <p>Founder & President, NayePankh Foundation</p>
        <div className="quote_cards">
          <div className="quote_card">
          <h3>Every Child Deserves a Chance</h3>
          <p>We work to ensure quality education reaches every child,
        regardless of their background.
      </p></div>
        <div className="quote_card">
          <h3> Make Your Donation Count</h3>
          <p> Donations to NayePankh Foundation are eligible for
        tax benefits under Section 80G.</p>
      </div>
      </div>
      </div>
      
    </>
  );
}

export default Home;