import aboutImg from "../assets/about.png";
import sideImg from "../assets/welcome.png";
import "./About.css";
function About() {
  return (
    <>
      <section className="page-hero">
        <h1>About NayePankh Foundation</h1>
        <p>Creating impact through compassion and service.</p>
      </section>
      <section className="about-detail">

  <div className="about-container">

    <div className="about-image">
      <img src={sideImg} alt="Our Story" />
    </div>

    <div className="about-text">

      <h2>Our Story</h2>

      <p>
        As we all know, 2020 was a year the world was striving to survive
        the global pandemic of COVID-19. During these dire times we felt
        an urge to make an impact with whatever we had, and so we tried.
      </p>

      <p>
        We tried to uplift the underprivileged and help the needy with all
        the resources and materials we could arrange. It was tough, but we
        never lost hope and continued working to bring change at the
        grassroots level.
      </p>

      <p>
        What started as a group of high school students has now grown into
        a team of passionate individuals from different parts of the city
        and state.
      </p>

      <p>
        On 28 March 2021, we officially began our journey of service,
        believing that the hope of a nation lies in the hands of its youth.
      </p>

    </div>

  </div>

</section>
<section className="about-quote">
  <h2>
    "Service to mankind is service to God."
  </h2>

  <p>
    Together, we can build a brighter future for every child.
  </p>
</section>
      
    </>
  );
}

export default About;